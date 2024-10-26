import uuid
from datetime import date

from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTableUUID
from sqlalchemy import UUID, Date, Enum, Float, ForeignKey, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped, mapped_column, relationship

from o4a.types.enums import ActivityLevel, Goal, Sex

Base = declarative_base()


class User(SQLAlchemyBaseUserTableUUID, Base):
    name: Mapped[str] = mapped_column(String, nullable=False)
    avatar: Mapped[str] = mapped_column(String, nullable=True)
    height: Mapped[float] = mapped_column(Float, nullable=False)
    sex: Mapped[Sex] = mapped_column(Enum(Sex), nullable=False)
    activity_level: Mapped[ActivityLevel] = mapped_column(
        Enum(ActivityLevel), nullable=False
    )
    goal: Mapped[Goal] = mapped_column(Enum(Goal), nullable=False)
    daily_caloric_needs: Mapped[Float] = mapped_column(Float, nullable=True)
    meals: Mapped[list["Meal"]] = relationship("Meal", back_populates="user")

    body_metrics: Mapped[list["BodyMetric"]] = relationship(
        "BodyMetric", back_populates="user"
    )


class BodyMetric(Base):
    __tablename__ = "body_metrics"

    id: Mapped[UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, unique=True, default=uuid.uuid4
    )
    timestamp: Mapped[date] = mapped_column(Date, nullable=False)
    weight: Mapped[float] = mapped_column(Float, nullable=False)
    body_fat_percentage = mapped_column(Float, nullable=True)
    muscle_mass: Mapped[float] = mapped_column(Float, nullable=False)
    waist: Mapped[float] = mapped_column(Float, nullable=True)
    left_leg: Mapped[float] = mapped_column(Float, nullable=True)
    right_leg: Mapped[float] = mapped_column(Float, nullable=True)
    chest: Mapped[float] = mapped_column(Float, nullable=True)
    hips: Mapped[float] = mapped_column(Float, nullable=True)

    user_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"))


class Meal(Base):
    __tablename__ = "meals"

    id: Mapped[UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, unique=True, default=uuid.uuid4
    )
    name: Mapped[str] = mapped_column(String(222), nullable=False)
    timestamp: Mapped[date] = mapped_column(Date, nullable=False)

    user_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"))
    user: Mapped[User] = relationship("User", back_populates="meals")
