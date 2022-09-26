.PHONY: start-app test-api test-e2e

default: start-app

start-app:
	@docker compose up --abort-on-container-exit --build start-app

test-api:
	@docker compose up --abort-on-container-exit --exit-code-from test-api --build test-api

test-e2e:
	@docker compose up --abort-on-container-exit --exit-code-from test-e2e --build test-e2e
