from pydantic import BaseModel, EmailStr

from langkah.types.enums import ActivityLevel, Goal, Sex


class UserReadSchema(BaseModel):
    id: str
    name: str
    email: EmailStr


class UserCreateSchema(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserUpdateSchema(BaseModel):
    name: str | None
    height: float | None
    sex: Sex | None
    activity_level: ActivityLevel | None
    goal: Goal | None
