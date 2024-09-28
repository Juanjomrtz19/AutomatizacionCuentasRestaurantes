from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import user

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Dominios permitidos
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos HTTP (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados
)

# Routers
app.include_router(user.router)
