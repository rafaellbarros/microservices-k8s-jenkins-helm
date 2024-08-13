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

# Commandos podman

### build da imagem

```sh
$ podman build -t backend-scm .
```

### criando o container

```sh
$ podman run -d --name podman-backend-scm -p 3030:3020 backend-scm
```
