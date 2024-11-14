import uuid
from datetime import date

from sqlalchemy import (
    UUID,
    Column,
    Date,
    Enum,
    Float,
    ForeignKey,
    Integer,
    String,
    Table,
)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped, mapped_column, relationship

from langkah.types.enums import ActivityLevel, Goal, Sex

Base = declarative_base()

meal_food_product = Table(
    "meal_food_product",
    Base.metadata,
    Column("meal_id", ForeignKey("meals.id"), primary_key=True),
    Column("food_product_id", ForeignKey("food_products.id", primary_key=True)),
)


class User(Base):
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
    muscle_mass: Mapped[float] = mapped_column(Float, nullable=True)
    waist: Mapped[float] = mapped_column(Float, nullable=True)
    left_arm: Mapped[float] = mapped_column(Float, nullable=True)
    right_arm: Mapped[float] = mapped_column(Float, nullable=True)
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
    food_products: Mapped[list["FoodProduct"]] = relationship(
        "FoodProduct", secondary=meal_food_product, back_populates="meals"
    )


class FoodProduct(Base):
    __tablename__ = "food_products"

    id: Mapped[UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, unique=True, default=uuid.uuid4
    )
    code: Mapped[str] = mapped_column(String, nullable=False, unique=True)
    name: Mapped[str] = mapped_column(String, nullable=False)
    brand: Mapped[str] = mapped_column(String, nullable=True)
    energy_kcal: Mapped[int] = mapped_column(Integer, nullable=False)
    fat: Mapped[float] = mapped_column(Float, nullable=False)
    saturated_fat: Mapped[float] = mapped_column(Float, nullable=False)
    trans_fat: Mapped[float] = mapped_column(Float, nullable=False)
    carbohydrates: Mapped[float] = mapped_column(Float, nullable=False)
    sugars: Mapped[float] = mapped_column(Float, nullable=False)
    fiber: Mapped[float] = mapped_column(Float, nullable=True)
    proteins: Mapped[float] = mapped_column(Float, nullable=False)
    salt: Mapped[float] = mapped_column(Float, nullable=True)
    sodium: Mapped[float] = mapped_column(Float, nullable=True)
    calcium: Mapped[float] = mapped_column(Float, nullable=True)
    iron: Mapped[float] = mapped_column(Float, nullable=True)
    vitamin_a: Mapped[float] = mapped_column(Float, nullable=True)
    vitamin_c: Mapped[float] = mapped_column(Float, nullable=True)
    completeness: Mapped[float] = mapped_column(Float, nullable=True)
    nutriscore_grade: Mapped[str] = mapped_column(String, nullable=True)
    meals: Mapped[list["Meal"]] = relationship(
        "Meal", secondary=meal_food_product, back_populates="food_products"
    )
