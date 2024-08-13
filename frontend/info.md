# Commandos docker

### build da imagem

```sh
$ docker build -t frontend .
```

### criando o container

```sh
$ docker run -d --name docker-frontend -p 80:80 frontend
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
