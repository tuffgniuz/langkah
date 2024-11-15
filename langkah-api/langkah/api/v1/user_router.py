from fastapi import APIRouter, Depends

from langkah.schemas.user_schemas import UserCredentials, UserSignUp
from langkah.services.user_service import UserService, get_user_service

router = APIRouter()


@router.post("/auth/register")
def register_user(
    schema: UserSignUp, user_service: UserService = Depends(get_user_service)
):
    return user_service.register_user(schema)


@router.post("/auth/login")
def login_user(
    credentials: UserCredentials,
    user_service: UserService = Depends(get_user_service),
):
    return user_service.login_user_with_password(credentials)


@router.post("/auth/logout")
def logout_user(user_service: UserService = Depends(get_user_service)):
    return user_service.sign_out()
