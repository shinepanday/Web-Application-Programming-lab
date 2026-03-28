from fastapi import FastAPI
from controllers import router as auth_router

app = FastAPI(title="LAB6 - User Todo")
app.include_router(auth_router)