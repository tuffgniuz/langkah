import uuid

from sqlalchemy import TIMESTAMP, UUID, Float, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped, mapped_column, relationship

Base = declarative_base()


class FoodItem(Base):
    __tablename__ = "food_items"

    id: Mapped[UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, unique=True, default=uuid.uuid4
    )
    barcode: Mapped[str] = mapped_column(String, unique=True, nullable=False)
    name: Mapped[str] = mapped_column(String, nullable=False)
    brand: Mapped[str] = mapped_column(String, nullable=True)
    # nutriments
    kcal_100g: Mapped[float] = mapped_column(Float, nullable=False)
    protein_100g: Mapped[float] = mapped_column(Float, nullable=False)
    carbs_100g: Mapped[float] = mapped_column(Float, nullable=False)
    sugars_100g: Mapped[float] = mapped_column(Float, nullable=True)
    fiber_100g: Mapped[float] = mapped_column(Float, nullable=True)
    fat_100g: Mapped[float] = mapped_column(Float, nullable=False)
    saturated_fats_100g: Mapped[float] = mapped_column(Float, nullable=True)
    trans_fats_100g: Mapped[float] = mapped_column(Float, nullable=True)
    sodium_100g: Mapped[float] = mapped_column(Float, nullable=True)
    # serving_size = Mapped[]
    # unit: Mapped[]


# class MealItem(Base):
#     __tablename__ = "meal_items"
#
#     id: Mapped[UUID] = mapped_column(
#         UUID(as_uuid=True), primary_key=True, unique=True, default=uuid.uuid4
#     )
#     food_item_id: Mapped["FoodItem"] = mapped_column(
#         ForeignKey("food_items.id"), nullable=False
#     )
#     meal_id: Mapped[UUID] = mapped_column(
#         UUID(as_uuid=True), primary_key=True, unique=True, default=uuid.uuid4
#     )
#     meal: Mapped["Meal"] = relationship("Meal", back_populates="items")
#
#
# class Meal(Base):
#     __tablename__ = "meals"
#
#     id: Mapped[UUID] = mapped_column(
#         UUID(as_uuid=True), primary_key=True, unique=True, default=uuid.uuid4
#     )
#     meal_time: Mapped[TIMESTAMP] = mapped_column(TIMESTAMP, n)
#     items: Mapped[list["MealItem"]] = relationship("MealItem", back_populates="meal")
