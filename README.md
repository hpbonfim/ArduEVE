
<h1 align="center">ArduEVE</h1>
<p align="center">
  <a href="https://github.com/hpbonfim/ardueve#readme">
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000"/>
  </a>

  <a href="https://github.com/hpbonfim/ardueve#readme">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/hpbonfim/ardueve"/>
  </a>

  <a href="https://github.com/hpbonfim/ardueve#readme">
    <img alt="size" src="https://img.shields.io/github/repo-size/hpbonfim/ardueve"/>
  </a>

  <a href="https://github.com/hpbonfim/ardueve/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hpbonfim/ardueve">
  </a>

  <a href="https://github.com/hpbonfim/ardueve#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="https://github.com/hpbonfim/ardueve#readme" />
  </a>

  <a href="https://github.com/hpbonfim/ardueve/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="https://github.com/hpbonfim/ardueve#readme" />
  </a>
</p>

[ArduEVE](https://github.com/hpbonfim/ardueve#readme) significa a união de (**Ardu**ino) +  "**E**xtraterrestrial **V**egetation Evaluator" 

Sistema com arquitetura em microserviços responsável por **controlar sensores e relays** de um ambiente devidamente adaptado.


# Ferramentas Utilizadas

### FRONT-END:
* **[VueJS](https://vuejs.org/)** - Javascrypt Framework + PWA *(Progressive Web App)*.
*  **[Vuetify](https://vuetifyjs.com/en/getting-started/quick-start/)** - Vue.js Framework.
* **[Font Awesome](https://fontawesome.com/)** - Banco de Ícones Pagos/Gratuitos.


### BACK-END:
* **[Nginx](https://nginx.com)** - Load balance para expor o frontend.
* **[JonhyFive](http://johnny-five.io/)** - Framework para Arduino.
* **[NodeJS](https://nodejs.org/en/)** - JavaScript Runtime I/O assíncrono orientado a eventos.
* **[Docker](https://www.docker.com/)** - Plataforma de código aberto para criação de ambientes isolados via container.
* **[Express](https://expressjs.com/)** - Framework utilizado para criar APIs REST.
* **[MongooseJS](https://mongoosejs.com/)** - Criar conexões com [MongoDB](https://www.mongodb.com/) .
* **[MongoDB](https://www.mongodb.com/)** - Software de banco de dados orientado a documentos, de código aberto e multiplataforma.

### HARDWARE E INFRASTRUCTURE:

* **[Arduino](https://www.arduino.cc/)** - Hardware responsável por controlar os sensores.
* **[AWS](https://www.aws.amazon.com/)** - Servidor AWS EC2.


# Instalação e/ou testes unitários

#### 1º MICROSERVICE: ms-backend requer [Node.js](https://nodejs.org/) v12+ para ser executado.

Instale as dependências and devDependencies antes de iniciar.

```sh
$ cd ms-backend
$ npm install
$ node start
```

#### 2º MICROSERVICE: ms-arduino requer [Node.js](https://nodejs.org/) v12+ para ser executado.

Instale as dependências and devDependencies antes de iniciar.

```sh
$ cd ms-arduino
$ npm install
$ node start
```

#### 3º MICROSERVICE: ms-frontend requer [Node.js](https://nodejs.org/) v12+ para ser executado.

Instale as dependências and devDependencies antes de iniciar.

```sh
$ cd ms-frontend
$ npm ou yarn install
$ npm install @vue/cli
$ npm run serve
```

##### Navegue pelo aplicativo:
    Endereço: http://localhost:8080/


# Produção


#### MS-ARDUINO, MS-BACKEND e MS-FRONTEND requer **[Docker](https://www.docker.com/)** e uma conta no [Docker Hub](https://hub.docker.com/) para colocar em produção.


> **[Repositório MS-ARDUINO no DockerHub](https://hub.docker.com/r/hpbonfim/ms-arduino)**

> **[Repositório MS-BACKEND no DockerHub](https://hub.docker.com/r/hpbonfim/ms-backend)**

> **[Repositório MS-FRONTEND no DockerHub](https://hub.docker.com/r/hpbonfim/ms-frontend)**



```sh
$ cd ArduEVE
$ docker stack deploy
```


License
----

**Open Source, be my guest!!** 


