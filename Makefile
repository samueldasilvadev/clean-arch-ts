db:
	docker run --name archdb \
	-e MYSQL_ROOT_PASSWORD=root \
	-p 3306:3306 \
	-d mysql:8.0.28
