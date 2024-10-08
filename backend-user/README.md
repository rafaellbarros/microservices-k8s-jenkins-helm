# Kickstart

```
$ npm init
$ npm i express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator
$ npm i -D nodemon
```

# Ordem do Desenvolvimento

- server.js
- routes/api/{posts.js, profile.js, user.js}
- models/
- models/User.js

Download [Postman](https://www.getpostman.com/), uma ferramenta fantástica construida em [Electron](https://electronjs.org/)

- routes/api/user.js
  Iniciando o desenvolvimento do metodo `/register`. Através do mongoose já podemos acessar métodos como `User.findOne` e iremos criar um método que recupere o usuário pelo `email`

`server.js`  
Necessitamos fazer o parse de nosso body, através do `body-parser`

`routes/api/user.js`  
Caso o usuário exista, retornamos um `400`, senão criamos um novo usuário.  
Com base no email iremos recuperar seu **Gravatar**, vamos iniciar instalando sua dependência:  
`$ npm -i gravatar`
Após criado usuário, devemos criptografar a senha, antes de persistir o usuário, faremos isso via `bcrypt`

- Criar POST Profile e Validator
- Postman para testar

# Front-End

`npm i -g create-react-app`
`create-react-app frontend`

# Commandos docker

### build da imagem

```sh
$ docker build -t backend-user .
```

### criando o container

```sh
$ docker run -d --name docker-backend-user -p 3020:3020 backend-user
```

### build da imagem para o registry

```sh
$ docker build -t rafaelbarros/backend-user:alpha .
```

### enviando a imagem para o registry

```sh
$ docker push rafaelbarros/backend-user:alpha
```

# Commandos podman

### build da imagem

```sh
$ podman build -t backend-user .
```

### criando o container

```sh
$ podman run -d --name podman-backend-user -p 3020:3020 backend-user
```
