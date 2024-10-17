from collections.abc import AsyncGenerator

# from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

DB_URL = f""

engine = create_async_engine(DB_URL)
session_maker = async_sessionmaker(engine, expire_on_commit=False)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with session_maker() as session:
        yield session
