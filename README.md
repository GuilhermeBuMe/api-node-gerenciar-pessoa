# API de Pessoas

API REST básica para gerenciamento de pessoas, com cadastro de usuários. Desenvolvida em Node.js com Express.

## Tecnologias

- [Node.js](https://nodejs.org/) 18+
- [Express](https://expressjs.com/)
- [sqlite3](https://www.sqlite.org/)
- [Knex](https://knexjs.org/)

## Pré-requisitos

- Node.js 18 ou superior
- npm 9 ou superior

## Instalação

```bash
git clone https://github.com/GuilhermeBuMe/api-node-gerenciar-pessoa.git
cd api-node-gerenciar-pessoa
npm install
```

## Banco de dados

A v2 da API usa SQLite com [Knex](https://knexjs.org/) para gerenciar o schema por meio de migrations.

- Configuração: `knexfile.js`
- Arquivo do banco: `db/database.sqlite` (criado automaticamente, não versionado)
- Migrations: `db/migrations/`
- Seeds: `db/seeds/`

### Preparando o banco

Antes de usar os endpoints `/v2`, crie as tabelas:

```bash
npx knex migrate:latest
```

(Opcional) Popule com dados de exemplo:

```bash
npx knex seed:run
```

### Comandos úteis

Para recriar o banco do zero:

```bash
npx knex migrate:rollback --all && npx knex migrate:latest && npx knex seed:run
```

### Estrutura das tabelas

#### `pessoa`

| Coluna | Tipo | Restrições |
| ------ | ---- | ---------- |
| id | integer | PK, autoincremento |
| nome | string | obrigatório |
| data_nascimento | date | obrigatório |

## Como executar

```bash
npm start
```

A API ficará disponível em `http://localhost:3000`.

## Endpoints

Acesso a documentação de cada ENDPOINT disponivel em [ENDPOINTS](docs/endpoints.md)

### Pessoa

| Método | Rota                   | Descrição                     | Utiliza sqlite3 |
|--------|------------------------|-------------------------------|-----------------|
| GET    | `/v1/pessoa/`          | Lista as pessoas registras    | Não             |
| GET    | `/v1/pessoa/:id`       | Busca um pessoa pelo ID       | Não             |
| POST   | `/v1/pessoa/`          | Cria uma nova pessoa          | Não             |
| PUT    | `/v1/pessoa/:id`       | Atualiza uma pessoa           | Não             |
| DELETE | `/v1/pessoa/:id`       | Remove uma pessoa             | Não             |
| GET    | `/v2/pessoa/`          | Lista as pessoas registras    | Sim             |
| GET    | `/v2/pessoa/:id`       | Busca um pessoa pelo ID       | Sim             |
| POST   | `/v2/pessoa/`          | Cria uma nova pessoa          | Sim             |
| PUT    | `/v2/pessoa/:id`       | Atualiza uma pessoa           | Sim             |
| DELETE | `/v2/pessoa/:id`       | Remove uma pessoa             | Sim             |

### Códigos de resposta

| Código | Significado                                   |
|--------|-----------------------------------------------|
| 200    | Requisição bem-sucedida                       |
| 201    | Recurso criado com sucesso                    |
| 400    | Dados inválidos                               |
| 404    | Recurso não encontrado                        |
| 409    | Recurso repetido                              |
| 500    | Erro interno do servidor                      |

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Guilherme B. Mendanha — [github.com/GuilhermeBuMe](https://github.com/GuilhermeBuMe)
