from enum import Enum


class Sex(Enum):
    MALE = "male"
    FEMALE = "female"


class ActivityLevel(Enum):
    SEDENTARY = "sedentary"
    LIGHTLY_ACTIVE = "lightly_active"
    MODERATELY_ACTIVE = "moderately_active"
    VERY_ACTIVE = "very_active"


class Goal(Enum):
    WEIGHT_LOSS = "weight_loss"
    MUSCLE_GAIN = "muscle_gain"
    MAINTAIN = "maintain"
    BODY_RECOMPOSITION = "body_recomposition"


class NutrientLevel(Enum):
    LOW = "low"
    MODERATE = "moderate"
    HIGH = "high"


class MeasurementUnit(Enum):
    GRAM = "gram"
    MILIGRAM = "mg"
    KILOGRAM = "kg"
    LITER = "l"
    MILILITER = "ml"
    CUP = "cup"
    TABLESPOON = "tbsp"
    TEASPOON = "tsp"
    PIECE = "piece"
