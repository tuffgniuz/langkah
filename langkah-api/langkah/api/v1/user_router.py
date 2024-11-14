from fastapi import APIRouter, Depends

from langkah.schemas.user_schemas import UserCreateSchema, UserReadSchema
from langkah.services.user_service import UserService, get_user_service

router = APIRouter()


@router.post("/auth/register")
def register_user(
    schema: UserCreateSchema, user_service: UserService = Depends(get_user_service)
):
    return user_service.register_user(schema)
