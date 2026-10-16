# API de Pessoas

API REST básica para cadastro e gerenciamento de pessoas. Desenvolvida em Node.js com Express.

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
- Arquivo do banco: `db/dev.sqlite3` (criado automaticamente, não versionado)
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

| Comando | O que faz |
| ------- | --------- |
| `npx knex migrate:status` | Mostra quais migrations já foram executadas |
| `npx knex migrate:rollback` | Desfaz o último lote de migrations |
| `npx knex migrate:make nome` | Cria uma nova migration |

Para recriar o banco do zero:

```bash
npx knex migrate:rollback --all && npx knex migrate:latest && npx knex seed:run
```

### Estrutura das tabelas

#### `pessoa`

| Coluna          | Tipo    | Restrições                      |
| --------------- | ------- | ------------------------------- |
| id              | integer | PK, autoincremento              |
| nome            | string  | obrigatório                     |
| data_nascimento | date    | obrigatório, formato YYYY-MM-DD |

**Restrição de unicidade:** a combinação `nome` + `data_nascimento` deve ser única.

## Como executar

```bash
npx knex migrate:latest   # necessário apenas para a v2 (cria as tabelas)
npm start
```

A API ficará disponível em `http://localhost:3000`.

## Endpoints

A documentação detalhada de cada endpoint está em [documentação dos endpoints](docs/endpoints.md)

### Pessoa

| Método | Rota                   | Descrição                     | Persistência |
|--------|------------------------|-------------------------------|-----------------|
| GET    | `/v1/pessoa/`          | Lista as pessoas registradas  | Memória             |
| GET    | `/v1/pessoa/:id`       | Busca uma pessoa pelo ID      | Memória             |
| POST   | `/v1/pessoa/`          | Cria uma pessoa               | Memória             |
| PUT    | `/v1/pessoa/:id`       | Atualiza uma pessoa           | Memória             |
| DELETE | `/v1/pessoa/:id`       | Remove uma pessoa             | Memória             |
| GET    | `/v2/pessoa/`          | Lista as pessoas registradas  | SQLite             |
| GET    | `/v2/pessoa/:id`       | Busca uma pessoa pelo ID      | SQLite             |
| POST   | `/v2/pessoa/`          | Cria uma pessoa               | SQLite             |
| PUT    | `/v2/pessoa/:id`       | Atualiza uma pessoa           | SQLite             |
| DELETE | `/v2/pessoa/:id`       | Remove uma pessoa             | SQLite             |

> Os dados da v1 ficam em memória e são perdidos ao reiniciar a API.

### Códigos de resposta

| Código | Significado                                                |
|--------|------------------------------------------------------------|
| 200    | Requisição bem-sucedida                                    |
| 201    | Recurso criado com sucesso                                 |
| 400    | Dados inválidos                                            |
| 404    | Recurso não encontrado                                     |
| 409    | Já existe uma pessoa com o mesmo nome e data de nascimento |
| 500    | Erro interno do servidor                                   |

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Guilherme B. Mendanha — [github.com/GuilhermeBuMe](https://github.com/GuilhermeBuMe)
