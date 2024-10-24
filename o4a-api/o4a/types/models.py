import uuid

from sqlalchemy import TIMESTAMP, UUID, Enum, Float, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped, mapped_column, relationship

from o4a.types.enums import ActivityLevel, Goal, Sex

Base = declarative_base()


class User(Base):
    name: Mapped[str] = mapped_column(String, nullable=False)
    height: Mapped[float] = mapped_column(Float, nullable=False)
    weight: Mapped[float] = mapped_column(Float, nullable=False)
    body_fat_percentage = mapped_column(Float, nullable=True)
    sex: Mapped[Sex] = mapped_column(Enum(Sex), nullable=False)
    activity_level: Mapped[ActivityLevel] = mapped_column(
        Enum(ActivityLevel), nullable=False
    )
    goal: Mapped[Goal] = mapped_column(Enum(Goal), nullable=False)
    daily_caloric_needs: Mapped[Float] = mapped_column(Float, nullable=True)


class Meal(Base):
    __tablename__ = "meals"

    id: Mapped[UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, unique=True, default=uuid.uuid4
    )
    name: Mapped[str] = mapped_column(String(222), nullable=False)
