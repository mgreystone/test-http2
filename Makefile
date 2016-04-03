include env_make
NS = mgreystone
REPO = test-http2
NAME = test-http2
VERSION = 0.0.2

.PHONY: build start stop rm shell

build:
	npm install
	npm run build
	docker build -t $(NS)/$(NAME):$(VERSION) .

start: 
	docker run -d --name $(NAME) $(PORTS) $(VOLUMES) $(NS)/$(NAME):$(VERSION)

stop:
	docker stop $(NAME)

rm:
	docker rm $(NAME)

run:
	docker run --rm --name $(NAME) $(PORTS) $(VOLUMES) $(NS)/$(NAME):$(VERSION)

shell:
	docker run --rm --name $(NAME) -i -t $(PORTS) $(VOLUMES) $(NS)/$(NAME):$(VERSION) /bin/bash

default: build
