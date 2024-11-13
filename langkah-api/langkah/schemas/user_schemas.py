from fastapi_users.schemas import BaseUser, BaseUserCreate

from o4a.types.enums import ActivityLevel, Goal, Sex


class UserCreate(BaseUserCreate):
    name: str
    height: float
    sex: Sex
    activity_level: ActivityLevel
    goal: Goal


class UserRead(BaseUser):
    name: str
    avatar: str
    height: float
    sex: Sex
    activity_level: ActivityLevel
    goal: Goal
    daily_caloric_needs: float
