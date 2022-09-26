.PHONY: start-app test-api test-e2e test-visual

default: start-app

start-app:
	@docker compose up --abort-on-container-exit --build start-app

test-api:
	@docker compose up --abort-on-container-exit --exit-code-from test-api test-api

test-e2e:
	@docker compose up --abort-on-container-exit --exit-code-from test-e2e test-e2e

test-visual:
	@docker compose up --abort-on-container-exit --exit-code-from test-visual test-visual
