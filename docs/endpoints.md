# Endpoints

Documentação detalhada de todas as rotas da API. Para uma visão geral, veja o [README](../README.md).

**URL base:** `http://localhost:3000`

Todas as requisições e respostas usam JSON (`Content-Type: application/json`).

---

## Pessoa

### GET `/v1/pessoa`

Lista as pessoas cadastradas

**Resposta `200 OK`**

```json
{
  "total": 2,
  "dados": [
    {
      "id": 1,
      "nome": "Ana Beatriz Souza",
      "data_nascimento": "1990-03-15"
    },
    {
      "id": 2,
      "nome": "Carlos Eduardo Lima",
      "data_nascimento": "1985-07-22"
    }
  ]
}
```

---

### GET `/v1/pessoa/:id`

Busca uma pessoa pelo id.

**Resposta `200 OK`**

```json
{
  "id": 1,
  "nome": "Ana Beatriz Souza",
  "data_nascimento": "1990-03-15"
}
```

**Erros**

Quando ocorre um erro, a API retorna o status HTTP correspondente e um JSON com o atributo `message` explicando o ocorrido

| Código | Motivo                                               |
|--------|------------------------------------------------------|
| 400    | Requisição inválida (dados ausentes ou incorretos)   |
| 404    | Pessoa não encontrada                                |

---

### POST `/v1/pessoa`

Cria uma nova pessoa.

**Corpo da requisição**

| Campo             | Tipo   | Obrigatório | Descrição                      |
|-------------------|--------|:-----------:|--------------------------------|
| `nome`            | string | Sim         | Nome da pessoa                 |
| `data_nascimento` | string | Não         | Data de nascimento da pessoa   |

**Resposta `201 Created`**

```json
{
  "message": "Pessoa registrada com sucesso",
  "data": {
    "pessoa": {
      "id": 11,
      "nome": "Maria Cecilia da Silva",
      "data_nascimento": "2020-10-05"
    }
  }
}
```

**Erros**

Quando ocorre um erro, a API retorna o status HTTP correspondente e um JSON com o atributo `message` explicando o ocorrido

| Código | Motivo                                              |
|--------|-----------------------------------------------------|
| 400    | Requisição inválida (dados ausentes ou incorretos)  |
| 409    | Registro repetido                                   |

---

### PUT `/v1/pessoa/:id`

Atualiza uma pessoa existente.

**Resposta `200 OK`**: 

**Corpo da requisição**

```json
{ 
  "message": "Pessoa editada com sucesso", 
  "data": {
    "pessoa": {
      "id": 1,
      "nome": "Maria Cecilia da Silva",
      "data_nascimento": "2020-10-05"
    }
  } 
}
```

**Erros**

Quando ocorre um erro, a API retorna o status HTTP correspondente e um JSON com o atributo `message` explicando o ocorrido

| Código | Motivo                                              |
|--------|-----------------------------------------------------|
| 400    | Requisição inválida (dados ausentes ou incorretos)  |
| 404    | Pessoa não encontrada                               |
| 409    | Registro repetido                                   |

---

### DELETE `/v1/pessoa/:id`

Remove uma pessoa.

**Resposta `200 OK`**:

**Corpo da requisição**

```json
{ 
  "message": "Pessoa excluida com sucesso"
}
```

**Erros**

Quando ocorre um erro, a API retorna o status HTTP correspondente e um JSON com o atributo `message` explicando o ocorrido

| Código | Motivo                                              |
|--------|-----------------------------------------------------|
| 400    | Requisição inválida (dados ausentes ou incorretos)  |
| 404    | Pessoa não encontrada                               |

---

### GET `/v2/pessoa`

Lista as pessoas cadastradas

**Resposta `200 OK`**

```json
{
  "total": 2,
  "dados": [
    {
      "id": 1,
      "nome": "Ana Beatriz Souza",
      "data_nascimento": "1990-03-15"
    },
    {
      "id": 2,
      "nome": "Carlos Eduardo Lima",
      "data_nascimento": "1985-07-22"
    }
  ]
}
```


**Erros**

Quando ocorre um erro, a API retorna o status HTTP correspondente e um JSON com o atributo `message` explicando o ocorrido

| Código | Motivo                                               |
|--------|------------------------------------------------------|
| 500    | Erro interno do servidor                             |

---

### GET `/v2/pessoa/:id`

Busca uma pessoa pelo id.

**Resposta `200 OK`**

```json
{
  "id": 1,
  "nome": "Ana Beatriz Souza",
  "data_nascimento": "1990-03-15"
}
```

**Erros**

Quando ocorre um erro, a API retorna o status HTTP correspondente e um JSON com o atributo `message` explicando o ocorrido

| Código | Motivo                                               |
|--------|------------------------------------------------------|
| 400    | Requisição inválida (dados ausentes ou incorretos)   |
| 404    | Pessoa não encontrada                                |
| 500    | Erro interno do servidor                             |

---

### POST `/v2/pessoa`

Cria uma nova pessoa.

**Corpo da requisição**

| Campo             | Tipo   | Obrigatório | Descrição                      |
|-------------------|--------|:-----------:|--------------------------------|
| `nome`            | string | Sim         | Nome da pessoa                 |
| `data_nascimento` | string | Não         | Data de nascimento da pessoa   |

**Resposta `201 Created`**

```json
{
  "message": "Pessoa registrada com sucesso",
  "data": {
    "pessoa": {
      "id": 11,
      "nome": "Maria Cecilia da Silva",
      "data_nascimento": "2020-10-05"
    }
  }
}
```

**Erros**

Quando ocorre um erro, a API retorna o status HTTP correspondente e um JSON com o atributo `message` explicando o ocorrido

| Código | Motivo                                              |
|--------|-----------------------------------------------------|
| 400    | Requisição inválida (dados ausentes ou incorretos)  |
| 409    | Registro repetido                                   |
| 500    | Erro interno do servidor                            |

---

### PUT `/v2/pessoa/:id`

Atualiza uma pessoa existente.

**Resposta `200 OK`**: 

**Corpo da requisição**

```json
{ 
  "message": "Pessoa editada com sucesso", 
  "data": {
    "pessoa": {
      "id": 1,
      "nome": "Maria Cecilia da Silva",
      "data_nascimento": "2020-10-05"
    }
  } 
}
```

**Erros**

Quando ocorre um erro, a API retorna o status HTTP correspondente e um JSON com o atributo `message` explicando o ocorrido

| Código | Motivo                                              |
|--------|-----------------------------------------------------|
| 400    | Requisição inválida (dados ausentes ou incorretos)  |
| 404    | Pessoa não encontrada                               |
| 409    | Registro repetido                                   |
| 500    | Erro interno do servidor                            |

---

### DELETE `/v2/pessoa/:id`

Remove uma pessoa.

**Resposta `200 OK`**:

**Corpo da requisição**

```json
{ 
  "message": "Pessoa excluida com sucesso"
}
```

**Erros**

Quando ocorre um erro, a API retorna o status HTTP correspondente e um JSON com o atributo `message` explicando o ocorrido

| Código | Motivo                                              |
|--------|-----------------------------------------------------|
| 400    | Requisição inválida (dados ausentes ou incorretos)  |
| 404    | Pessoa não encontrada                               |
| 500    | Erro interno do servidor                            |

---