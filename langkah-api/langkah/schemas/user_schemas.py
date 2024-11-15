from pydantic import BaseModel, EmailStr

from langkah.types.enums import ActivityLevel, Goal, Sex


class UserRead(BaseModel):
    id: str
    name: str
    email: EmailStr


class UserSignUp(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserCredentials(BaseModel):
    email: EmailStr
    password: str


class UserOnboarding(BaseModel):
    height: float
    sex: Sex
    activity_level: ActivityLevel
    goal: Goal


class UserUpdate(BaseModel):
    avatar: str | None
    height: float | None
    sex: Sex | None
    activity_level: ActivityLevel | None
    goal: Goal | None
