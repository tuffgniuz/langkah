#!/bin/bash
cd /app || exit

figlet "Checking connection to Supabase Postgres..."

# Load environment variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Assign the Supabase database variables from the environment variables
SUPABASE_USER=${SUPABASE_DB_USER}
SUPABASE_PASSWORD=${SUPABASE_DB_PASSWORD}
SUPABASE_HOST=${SUPABASE_DB_HOST}
SUPABASE_PORT=${SUPABASE_DB_PORT}
SUPABASE_DB=${SUPABASE_DB_NAME}

# Check if the database connection is established using pg_isready
until PGPASSWORD="${SUPABASE_PASSWORD}" pg_isready -h "${SUPABASE_HOST}" -p "${SUPABASE_PORT}" -U "${SUPABASE_USER}" -d "${SUPABASE_DB}"; do
  >&2 echo "Waiting for Supabase database to be ready..."
  sleep 1
done

echo -e "\e[32m****** Supabase Postgres is ready! ******\e[0m"

figlet "Backend ready"

# Run the FastAPI app
exec uvicorn langkah.main:app --host 0.0.0.0 --port 8000 --reload
