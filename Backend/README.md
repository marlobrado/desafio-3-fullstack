# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

A URL base da aplicação:
http://localhost:3050

---

## 2. Diagrama ER
[ Voltar para o topo ](#tabela-de-conteúdos)


Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](DERMANAGECONTACTS.png)

---

## 3. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---
## 4. Autenticação
[ Voltar para o topo ](#tabela-de-conteúdos)


Por enquanto, não foi implementada autenticação.

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
    - [POST - /users](#11-criação-de-usuário)
    - [POST - /login](#12-login-de-usuário)
    - [GET - /users](#13-listando-usuários)
	- [GET - /users/user](#14-mostrar-dados-do-usuário-logado)
    - [PATCH - /users/:id](#15-atualização-de-usuários)
    - [DELETE - /users/:id](#16-deleção-de-usuários)
- [Contacts](#2-contacts)
    - [POST - /contacts](#21-criação-de-um-contato)
    - [GET - /contacts](#22-listar-contatos-do-usuário)
    - [PATCH - /contacts](#23-atualizar-um-contato)
    - [DELETE - /contacts](#24-deletar-um-contato)


---

## 1. **Users**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo      | Tipo   | Descrição                                     |
| -----------|--------|-------------------------------------------------|
| UUID         | string | Identificador único do usuário                  |
| fullName       | string | O nome do usuário.                              |
| email      | string | O e-mail do usuário.                            |
| password   | string | A senha de acesso do usuário                    |
| createdAt      | Date | Data da criação do usuário   |
| updatedAt      | Date | Data de atualização do usuário   |

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /users     | Criação de um usuário.
| POST     | /login     | Rota para login de usuário.
| GET      | /users     | Lista todos os usuários.                |
| GET      | /users/user    | Lista o usuario logado, usando o token como parâmetro.
| PATCH      | /users/:id     | Atualiza usuário, usando o UUID como parametro.
| DELETE      | /users/:id     | Deleta um usuário usando o UUID como parametro.

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
POST /users
Host: http://localhost:3050
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"fullName": "Fernando Henrique",
	"email": "fernando@kenzie.com",
	"telephone": "62984562147",
	"password": "123456"
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
	"fullName": "Fernando Henrique",
	"email": "fernando@kenzie.com",
	"telephone": "62984562147",
	"id": "48912294-dfd8-40b5-a1c7-670344e127f7",
	"createdAt": "2023-02-02T22:24:45.163Z",
	"updatedAt": "2023-02-02T22:24:45.163Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 409 Conflict   | Email already exists |

---
### 1.2. **Login de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/login`

### Exemplo de Request:
```
POST /users
Host: http://localhost:3050
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"email": "fernando@kenzie.com",
	"password": "123456"
}
```

### Exemplo de Response:
```
200 Created
```

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlcm5hbmRvQGtlbnppZS5jb20iLCJpYXQiOjE2NzUzNzc1NTIsImV4cCI6MTY3NTYzNjc1Miwic3ViIjoiNDg5MTIyOTQtZGZkOC00MGI1LWExYzctNjcwMzQ0ZTEyN2Y3In0.YXuGOGoMATHeB6xi_OMwNOOO4tVYFWi_H6BjZRt-KdY"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 403 Forbidden   | Invalid user or password |

---

### 1.3. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
GET /users
Host: http://localhost:3050
Authorization: Barear token
Content-type: application/json
```
Usuário deve estar logado e passar o token no no Header.
### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "48912294-dfd8-40b5-a1c7-670344e127f",
	"fullName": "Fernando Henrique",
	"email": "fernando@kenzie.com",
	"telephone": "62984562147",
	"createdAt": "2023-02-02T22:24:45163Z",
	"updatedAt": "2023-02-02T22:24:45163Z",
	"contacts": []
}
```

### Possíveis Erros:
Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---
### 1.4. **Mostrar dados do Usuário Logado**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/user`

### Exemplo de Request:
```
GET /users/user
Host: http://localhost:3050
Authorization: Barear token
Content-type: application/json
```

Usuário deve estar logado e passar o token no no Header.

<!-- ### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| user_id     | string      | Identificador único do usuário (User) | -->

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "48912294-dfd8-40b5-a1c7-670344e127f7",
	"fullName": "Fernando Henrique",
	"email": "fernando@kenzie.com",
	"telephone": "62984562147",
	"createdAt": "2023-02-02T22:24:45.163Z",
	"updatedAt": "2023-02-02T22:24:45.163Z",
	"contacts": []
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized  | Missing authorization token. |

---

### 1.5. **Atualização de Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:id`

### Exemplo de Request:
```
GET /users/48912294-dfd8-40b5-a1c7-670344e127f7
Host: http://localhost:3050
Authorization: Barear token
Content-type: application/json
```

Usuário deve estar logado e passar o token no no Header, só é possivel atualizar o próprio usuário.

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
{
	"fullName": "Joao Vitor",
	"telephone": "629815404335",
	"email": "joao@kenzie.com"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "48912294-dfd8-40b5-a1c7-670344e127f7",
	"fullName": "Joao Vitor",
	"email": "joao@kenzie.com",
	"telephone": "629815404335",
	"createdAt": "2023-02-02T22:24:45.163Z",
	"updatedAt": "2023-02-02T23:00:33.583Z",
	"contacts": []
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized  | Missing authorization token. |
| 401 Unauthorized  | Unauthorized |
| 400 Bad Request  | Invalid key, can only update name, telephone, email, password. |

---

### 1.6. **Deleção de Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:id`

### Exemplo de Request:
```
GET /users/48912294-dfd8-40b5-a1c7-670344e127f7
Host: http://localhost:3050
Authorization: Barear token
Content-type: application/json
```

Usuário deve estar logado e passar o token no no Header, só é possível deletar o próprio usuário.

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 No Content
```
```json
Vazio
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized  | Missing authorization token. |
| 401 Unauthorized  | Unauthorized |

---

## 2. **Contacts**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Contact é definido como:

| Campo      | Tipo   | Descrição                                     |
| -----------|--------|-------------------------------------------------|
| UUID         | string | Identificador único do contato                  |
| name       | string | O nome do contato.                              |
| email      | string | O e-mail do contato.                            |
| createdAt      | Date | Data da criação do contato   |
| updatedAt      | Date | Data de atualização do contato   |
user_id | string | FK

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /contacts     | Criação de um contato.
| GET      | /contacts    | Lista os contatos pertencentes ao usuario logado
| PATCH      | /contacts/:id     | Atualiza contato, usando o UUID como parametro.
| DELETE      | /contacts/:id     | Deleta um contato usando o UUID como parametro.

---

### 2.1. **Criação de um Contato**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
POST /contacts
Host: http://localhost:3050
Authorization: Barear token
Content-type: application/json
```

O usuário deve estar logado para criar um contato

### Corpo da Requisição:
```json
{
	"name": "Contato de Teste",
	"email": "email@teste.com",
	"telephone": "29389320"
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
	"id": "8ba4059c-c9b7-4a51-b9ed-a46c5aa3152b",
	"name": "Contato de Teste",
	"email": "email@teste.com",
	"telephone": "29389320",
	"createdAt": "2023-02-02T23:27:27.652Z",
	"updatedAt": "2023-02-02T23:27:27.652Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized  | Missing authorization token. |
| 401 Unauthorized  | Unauthorized |

---

### 2.2. **Listar Contatos do Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
POST /contacts
Host: http://localhost:3050
Authorization: Barear token
Content-type: application/json
```

O usuário deve estar logado para listar os seus contatos criados, e só pode listas os seus próprios contatos

### Corpo da Requisição:
```json
vazio
```

### Exemplo de Response:
```
200 Ok
```

```json
{
	"id": "8ba4059c-c9b7-4a51-b9ed-a46c5aa3152b",
	"name": "Contato de Teste",
	"email": "email@teste.com",
	"telephone": "29389320",
	"createdAt": "2023-02-02T23:27:27.652Z",
	"updatedAt": "2023-02-02T23:27:27.652Z"
},
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized  | Missing authorization token. |

---

### 2.3. **Atualizar um Contato**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users/:id`

### Exemplo de Request:
```
POST /contacts/8ba4059c-c9b7-4a51-b9ed-a46c5aa3152b
Host: http://localhost:3050
Authorization: Barear token
Content-type: application/json
```

O usuário deve estar logado para atualizar os seus contatos criados, e só pode atualizar os seus próprios contatos

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
{
	"name": "Pedro Henrique",
	"telephone": "62981547895",
	"email": "pedrohenrique@flamengo.com"
}
```

### Exemplo de Response:
```
200 Ok
```

```json
{
	"id": "8ba4059c-c9b7-4a51-b9ed-a46c5aa3152b",
	"name": "Pedro Henrique",
	"email": "pedrohenrique@flamengo.com",
	"telephone": "62981547895",
	"createdAt": "2023-02-02T23:27:27.652Z",
	"updatedAt": "2023-02-02T23:39:22.875Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized  | Missing authorization token. |
| 400 Bad Request | Invalid UUID, must be 36 characters|
| 400 Bad Request | Invalid key, can only update name, telephone, email|
| 404 Not Found | Contact not found |

---

### 2.4. **Deletar um Contato**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users/:id`

### Exemplo de Request:
```
POST /contacts/8ba4059c-c9b7-4a51-b9ed-a46c5aa3152b
Host: http://localhost:3050
Authorization: Barear token
Content-type: application/json
```

O usuário deve estar logado para deletar os seus contatos criados, e só pode deletar os seus próprios contatos

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
vazio
```

### Exemplo de Response:
```
204 No Content
```

```json
vazio
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized  | Missing authorization token. |
| 400 Bad Request | Invalid UUID, must be 36 characters|
| 404 Not Found | Contact not found |

---