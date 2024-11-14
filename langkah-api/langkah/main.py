from fastapi import FastAPI

from langkah.api.routes import include_routers

app = FastAPI()

include_routers(app)
