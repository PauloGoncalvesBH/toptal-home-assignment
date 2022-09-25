.PHONY: start-app test-api

default: start-app

start-app:
	@docker compose up --abort-on-container-exit start-app

test-api:
	@docker compose up --abort-on-container-exit --exit-code-from test-api test-api
