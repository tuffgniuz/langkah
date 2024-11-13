from fastapi import FastAPI

from o4a.auth.users import auth_backend, users
from o4a.schemas.user_schemas import UserCreate, UserRead


def include_routers(app: FastAPI):
    app.include_router(
        users.get_register_router(UserRead, UserCreate), prefix="/auth", tags=["auth"]
    )
    app.include_router(
        users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"]
    )
