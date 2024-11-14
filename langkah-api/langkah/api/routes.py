from fastapi import FastAPI

from langkah.api.v1.user_router import router as user_router


def include_routers(app: FastAPI):
    app.include_router(user_router, prefix="/api/v1", tags=["users"])
