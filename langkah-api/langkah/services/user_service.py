import json
import re

from fastapi import Depends
from sqlalchemy.orm import Session

from langkah.lib.config.settings import supabase_client
from langkah.lib.dependencies.db import get_db
from langkah.repositories.user_repository import UserRepository
from langkah.schemas.user_schemas import UserCredentials, UserSignUp
from langkah.types.models import User


class UserService:
    def __init__(self, session: Session = Depends(get_db)):
        self.session = session
        self.supabase = supabase_client
        self.user_repo = UserRepository(self.session)

    def register_user(self, schema: UserSignUp) -> User:
        validated_password = self.validate_password(schema.password)

        response = self.supabase.auth.sign_up(
            {"email": schema.email, "password": validated_password}
        )

        user_data = json.loads(response.model_dump_json())
        supabase_user_id = user_data["user"]["id"]
        new_user = User(id=supabase_user_id, name=schema.name)

        return self.user_repo.create_user(new_user)

    def login_user_with_password(self, credentials: UserCredentials):
        return self.supabase.auth.sign_in_with_password(
            {"email": credentials.email, "password": credentials.password}
        )

    def sign_out(self):
        return self.supabase.auth.sign_out()

    def reset_password(self):
        pass

    def validate_password(self, password: str) -> str:
        if len(password) < 12:
            raise ValueError("Password must be at least 12 character long.")
        if len(password) > 128:
            raise ValueError("Password must not exceed 128 characters.")

        cleaned_password = re.sub(r"\s+", " ", password).strip()

        if not all(c.isprintable() for c in cleaned_password):
            raise ValueError("Password contains non-printable characters.")

        return cleaned_password


def get_user_service(session: Session = Depends(get_db)):
    return UserService(session)
