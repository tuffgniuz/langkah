#!/bin/bash
cd /app || exit

exec uvicorn o4a.main:app --host 0.0.0.0 --port 8000 --reload
