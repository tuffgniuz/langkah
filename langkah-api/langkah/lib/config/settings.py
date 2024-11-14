from decouple import config
from dotenv import find_dotenv, load_dotenv
from supabase import Client, create_client

dotenv_path = find_dotenv()
load_dotenv(dotenv_path)


supabase_project_url = config("SUPABASE_PROJECT_URL")
supabase_key = config("SUPABASE_KEY")

supabase_db_user = config("SUPABASE_DB_USER")
supabase_db_password = config("SUPABASE_DB_PASSWORD")
supabase_db_host = config("SUPABASE_DB_HOST")
supabase_db_port = config("SUPABASE_DB_PORT")
supabase_db_name = config("SUPABASE_DB_NAME")

supabase_client: Client = create_client(supabase_project_url, supabase_key)  # type: ignore
