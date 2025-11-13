.PHONY: build run stop clean logs restart

build:
	docker-compose build

run:
	docker-compose up -d

stop:
	docker-compose down

clean:
	docker-compose down -v --rmi all

logs:
	docker-compose logs -f

restart:
	docker-compose restart
