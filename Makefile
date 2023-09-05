DOCKER_DIR = ./docker
COMPOSE_FILE = docker-compose.yml
COMPOSE = docker-compose -f
SERVICE_NAME = hypnos-front
IMAGE_NAME = hypnos-front

.PHONY: up
up:
	$(COMPOSE) $(DOCKER_DIR)/$(COMPOSE_FILE) up -d

.PHONY: down
down:
	$(COMPOSE) $(DOCKER_DIR)/$(COMPOSE_FILE) down 

.PHONY: build
build:
	npm run build
	docker build -t $(IMAGE_NAME) -f ./build/Dockerfile .

.PHONY: run
run:
	docker run --env-file .env.local --name $(IMAGE_NAME) -d -p 3000:3000 $(IMAGE_NAME) 

.PHONY: show-log
show-log:
	docker logs $(SERVICE_NAME) -f
