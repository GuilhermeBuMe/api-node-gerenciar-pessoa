# API de Pessoas

API REST básica para gerenciamento de pessoas, com cadastro de usuários. Desenvolvida em Node.js com Express.

## Tecnologias

- [Node.js](https://nodejs.org/) 18+
- [Express](https://expressjs.com/)
- [sqlite3](https://www.sqlite.org/)

## Pré-requisitos

- Node.js 18 ou superior
- npm 9 ou superior

## Instalação

```bash
git clone https://github.com/GuilhermeBuMe/CRUD_PESSOA.git
cd CRUD_PESSOA
npm install
```

## Como executar

```bash
npm start
```

A API ficará disponível em `http://localhost:3000`.

## Endpoints

### Tarefas

| Método | Rota                   | Descrição                     | Utiliza sqlite3 |
|--------|------------------------|-------------------------------|-----------------|
| GET    | `/v1/pessoa/`          | Lista as pessoas registras    | Não             |
| GET    | `/v1/pessoa/:indice`   | Busca um pessoa pelo indice   | Não             |
| POST   | `/v1/pessoa/`          | Cria uma nova pessoa          | Não             |
| PUT    | `/v1/pessoa/:indice`   | Atualiza uma pessoa           | Não             |
| DELETE | `/v1/pessoa/:indice`   | Remove uma pessoa             | Não             |
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

Guilherme Bueno Mendanha — [github.com/GuilhermeBuMe](https://github.com/GuilhermeBuMe)
