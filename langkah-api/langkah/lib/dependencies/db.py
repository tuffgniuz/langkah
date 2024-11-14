from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from langkah.lib.config.settings import (
    supabase_db_host,
    supabase_db_name,
    supabase_db_password,
    supabase_db_port,
    supabase_db_user,
)

DB_URL = f"postgresql://{supabase_db_user}:{supabase_db_password}@{supabase_db_host}:{supabase_db_port}/{supabase_db_name}"

engine = create_async_engine(DB_URL)
session_maker = async_sessionmaker(engine, expire_on_commit=False)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with session_maker() as session:
        yield session
