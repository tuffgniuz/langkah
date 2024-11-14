from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from langkah.lib.config.settings import SUPABASE_DB_URL

DB_URL = f"{SUPABASE_DB_URL}"

engine = create_async_engine(DB_URL)
session_maker = async_sessionmaker(engine, expire_on_commit=False)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with session_maker() as session:
        yield session
