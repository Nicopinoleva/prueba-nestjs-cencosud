
build:
	docker-compose --file docker-compose.yml nest
build_nest:
	docker-compose --file docker-compose.yml build nest

up:
	docker-compose --file docker-compose.yml up
up_nest:
	docker-compose --file docker-compose.yml up nest

up_postgresql:
	docker-compose --file docker-compose.yml up -d postgresql

restart:
	docker-compose --file docker-compose.yml restart $(target)

stop:
	docker-compose --file docker-compose.yml stop
stop_nest:
	docker-compose --file docker-compose.yml stop nest

clean:
	docker system prune --volumes -f

