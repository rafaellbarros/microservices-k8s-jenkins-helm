# Backend-scm

# Commandos docker

### build da imagem

```sh
$ docker build -t backend-scm .
```

### criando o container

```sh
$ docker run -d --name docker-backend-scm -p 3030:3030 backend-scm
```

### build da imagem para o registry

```sh
$ docker build -t rafaelbarros/backend-scm:alpha .
```

### enviando a imagem para o registry

```sh
$ docker push rafaelbarros/backend-scm:alpha
```

# Commandos podman

### build da imagem

```sh
$ podman build -t backend-scm .
```

### criando o container

```sh
$ podman run -d --name podman-backend-scm -p 3030:3020 backend-scm
```
