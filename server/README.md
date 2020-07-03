<p align="center">
  BuscaMed's backend is an RESTful API written in TypeScript, using SQL databases! :open_file_folder:
</p>

## Index
- [Getting Started][100]

[100]: #getting-started

## Getting Started
Ensure that you followed the getting started section on the root of BuscaMed project.

*Please, stick to only one package manager to run all commands on the application.*

### Configuration
This project uses a docker image as database. Configuring it is crucial to run BuscaMed project.

#### Database
1. install [Docker][200]
   1. If you are on windows, don't forget that the newst version of Docker uses Hyper-V and some Android Emulators still uses Virtual Box what will cause a problem because both can't run at the same time. In this scenario you can use this [docker version][201] that uses Virtual Box.
2. Install [PostgreSQL image][202]
   1. run `docker run --name pg-buscaMed -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
   2. run the following command against your database to add uuid generation `create extension if not exists "uuid-ossp";`
   3. create Farma database.

[200]: https://www.docker.com/
[201]: https://docs.docker.com/toolbox/toolbox_install_windows/
[202]: https://hub.docker.com/_/postgres

#### Node environmental variables
1. Copy the `.env.example` file on the root of this folder with the name `.env`
2. Full fill all variable lines with your respective configuration.
   1. Don't forget, those values change based on how you configured you docker images and mailing.

*Exemple of `.env` full filled*
```
APP_URL=http://localhost:3333
NODE_ENV=development

# Auth

AUTH_SECRET=123

# Database

DB_HOST=localhost
DB_USER=postgres
DB_PASS=docker
DB_NAME=farma
```

### Initializing project
To start BuscaMed's backend you will need first to install all dependencies, then you can run it's core project.

*Do not forget to start the database everytime that you want to run BuscaMed. To do it run: `docker start pg-buscaMed`*

#### NPM
1. run `npm install`
2. run `npm run typeorm migration:run`
3. run `npm run dev:server`

#### Yarn
1. run `yarn`
2. run `yarn typeorm migration:run`
3. run `yarn dev:server`

Now, you can start using the application! If you want to get some initial data to interact with you can follow the steps on the next section.

### Interact with the API (optional)
To interact with the API without you can use an API request builder, and some GUI databases clients. Here some options:

- [Postbird][206]
- [DBeaver][207]
- [Insomnia][208]

[206]: https://www.electronjs.org/apps/postbird
[207]: https://dbeaver.io/
[208]: https://insomnia.rest/
