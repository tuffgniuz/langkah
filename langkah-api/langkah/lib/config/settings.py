from decouple import config
from dotenv import find_dotenv, load_dotenv

dotenv_path = find_dotenv()
load_dotenv(dotenv_path)


SUPABASE_PROJECT_URL = config("SUPABASE_PROJECT_URL")
SUPABASE_DB_URL = config("SUPABASE_DB_URL")
SUPABASE_KEY = config("SUPABASE_KEY")
