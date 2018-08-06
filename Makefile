app:
	npm run build
image:
	make app
	docker build -t madlabs.azurecr.io/madhacks-webapp .
push:
	docker push madlabs.azurecr.io/madhacks-webapp
docker-login:
	az acr credential show -n madlabs --query "join(' ',['docker login madlabs.azurecr.io','-u',username,'-p',passwords[0].value])" --output tsv | sh	
