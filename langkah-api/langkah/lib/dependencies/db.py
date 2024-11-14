from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from langkah.lib.config.settings import (
    supabase_db_host,
    supabase_db_name,
    supabase_db_password,
    supabase_db_port,
    supabase_db_user,
)

# Construct the database URL
DB_URL = f"postgresql+psycopg2://{supabase_db_user}:{supabase_db_password}@{supabase_db_host}:{supabase_db_port}/{supabase_db_name}"

# Create a synchronous SQLAlchemy engine
engine = create_engine(DB_URL)

# Create a sessionmaker for creating new sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# Dependency to provide a new database session for each request
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
