# Commandos docker

### build da imagem

```sh
$ docker build -t frontend .
```

### criando o container

```sh
$ docker run -d --name docker-frontend -p 80:80 frontend
```

### build da imagem para o registry

```sh
$ docker build -t rafaelbarros/frontend:alpha .
```

### enviando a imagem para o registry

```sh
$ docker push rafaelbarros/frontend:alpha
```

# Commandos podman

### build da imagem

```sh
$ podman build -t frontend .
```

### criando o container

```sh
$ docker run -d --name podman-frontend -p 80:80 frontend
```
