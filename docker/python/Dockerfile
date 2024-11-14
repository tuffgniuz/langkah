FROM python:3.11.4-alpine

ARG ENVIRONMENT

ENV PYTHONDONTWRITEBYTCODE=1 \
  PYTHONBUFFERED=1 \
  PYTHONPATH=/app \
  PIPENV_VENV_IN_PROJECT=1

WORKDIR /app

RUN apk update && \
  apk upgrade && \
  apk add --no-cache bash netcat-openbsd figlet postgresql-client && \
  rm -rf /var/cache/apk/* && \
  addgroup -g 1000 dev && adduser -D -u 1000 -G dev dev

COPY --chown=dev:dev langkah-api/Pipfile /app/
COPY --chown=dev:dev langkah-api/Pipfile.lock /app/

RUN pip install --upgrade pip
RUN pip install pipenv

RUN pipenv install --system --deploy && \
  rm -rf ~/.cache/pip

COPY --chown=dev:dev langkah-api/scripts/startup.sh /app/scripts
COPY --chown=dev:dev langkah-api/migrations /app/migrations
COPY --chown=dev:dev langkah-api/alembic.ini /app
COPY --chown=dev:dev langkah-api/langkah /app/langkah

USER dev

CMD ["./scripts/startup.sh"]
