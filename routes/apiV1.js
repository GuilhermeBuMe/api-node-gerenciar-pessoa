var express = require('express');
var router = express.Router();

let listaPessoa = [
  {
    "id": 1,
    "nome": "Ana Beatriz Souza",
    "data_nascimento": "1990-03-15"
  },
  {
    "id": 2,
    "nome": "Carlos Eduardo Lima",
    "data_nascimento": "1985-07-22"
  },
  {
    "id": 3,
    "nome": "Mariana Ferreira",
    "data_nascimento": "1998-11-05"
  },
  {
    "id": 4,
    "nome": "João Pedro Alves",
    "data_nascimento": "1979-01-30"
  },
  {
    "id": 5,
    "nome": "Fernanda Oliveira",
    "data_nascimento": "2001-09-12"
  },
  {
    "id": 6,
    "nome": "Rafael Santos Costa",
    "data_nascimento": "1993-05-27"
  },
  {
    "id": 7,
    "nome": "Juliana Martins",
    "data_nascimento": "1988-12-03"
  },
  {
    "id": 8,
    "nome": "Lucas Gabriel Rocha",
    "data_nascimento": "1995-08-19"
  },
  {
    "id": 9,
    "nome": "Camila Ribeiro",
    "data_nascimento": "1982-04-08"
  },
  {
    "id": 10,
    "nome": "Pedro Henrique Barbosa",
    "data_nascimento": "2003-06-25"
  }
]

router.get('/pessoa', function (req, res, next) {
  return res.status(200).json({
    total: listaPessoa.length,
    data: listaPessoa
  });
});

router.get('/pessoa/:id', function (req, res, next) {
  let idPessoaEnviado = req.params.id ?? '';

  if (idPessoaEnviado == '') {
    return res.status(400).json({ 'message': 'id não passado' });
  }

  idPessoaEnviado = Number.parseInt(idPessoaEnviado);
  if (!Number.isInteger(idPessoaEnviado)) {
    return res.status(400).json({ 'message': 'id inválido' });
  }

  let indexEncontrado = listaPessoa.findIndex((pessoa => pessoa.id == idPessoaEnviado));
  if (indexEncontrado == -1) {
    return res.status(404).json({ 'message': 'Pessoa não encontrada' });
  }

  return res.status(200).json(listaPessoa[indexEncontrado]);
});

router.post('/pessoa', function (req, res, next) {
  let nome = req.body.nome ?? null;
  if (nome == null || nome == '') {
    return res.status(400).json({ 'message': 'Nome vazio' });
  }

  let data_nascimento = req.body.data_nascimento ?? null;
  if (data_nascimento == null || data_nascimento == '') {
    return res.status(400).json({ 'message': 'Nascimento vazio' });
  } else if (isNaN(new Date(data_nascimento))) {
    return res.status(400).json({ 'message': 'Nascimento inválido' });
  } else if (new Date(data_nascimento).getTime() > new Date().getTime()) {
    return res.status(400).json({ 'message': 'Nascimento inválido' });
  }

  let existeRegistro = listaPessoa.some((pessoa) => {
    if (pessoa.nome == nome && pessoa.data_nascimento == data_nascimento) {
      return true
    }
  })

  if (existeRegistro) {
    return res.status(409).json({ message: 'Registro repetido' })
  }

  let novoId = Math.max(...listaPessoa.map(pessoa => pessoa.id)) + 1;

  let novaPessoa = {
    "id": novoId,
    "nome": nome,
    "data_nascimento": data_nascimento
  }

  listaPessoa.push(novaPessoa)

  return res.status(201).json({
    "message": "Pessoa registrada com sucesso",
    "data": {
      "pessoa": {
        "id": novoId,
        "nome": nome,
        "data_nascimento": data_nascimento
      }
    }
  });
});

router.put('/pessoa/:id', function (req, res, next) {
  let idPessoa = req.params.id ?? '';

  if (idPessoa == '' || idPessoa == null) {
    return res.status(400).json({ 'message': 'Id não passado' });
  }

  idPessoa = Number.parseInt(idPessoa);
  if (!Number.isInteger(idPessoa)) {
    return res.status(400).json({ 'message': 'Id inválido' });
  }

  let nome = req.body.nome ?? null;
  if (nome == null || nome == '') {
    return res.status(400).json({ 'message': 'Nome vazio' });
  }

  let data_nascimento = req.body.data_nascimento ?? null;
  if (data_nascimento == null || data_nascimento == '') {
    return res.status(400).json({ 'message': 'Nascimento vazio' });
  } else if (isNaN(new Date(data_nascimento))) {
    return res.status(400).json({ 'message': 'Nascimento inválido' });
  } else if (new Date(data_nascimento).getTime() > new Date().getTime()) {
    return res.status(400).json({ 'message': 'Nascimento inválido' });
  }

  let indexEncontrado = listaPessoa.findIndex((pessoa => pessoa.id == idPessoa));
  if (indexEncontrado == -1) {
    return res.status(404).json({ 'message': 'Pessoa não encontrada' });
  }

  let existeRegistro = listaPessoa.some((pessoa) => {
    if (pessoa.nome == nome && pessoa.data_nascimento == data_nascimento && pessoa.id != idPessoa) {
      return true
    }
  })

  if (existeRegistro) {
    return res.status(409).json({ message: 'Registro repetido' })
  }

  listaPessoa[indexEncontrado].nome = nome;
  listaPessoa[indexEncontrado].data_nascimento = data_nascimento;

  return res.status(200).json({ 'message': 'Pessoa editada com sucesso', 'data': { "pessoa": listaPessoa[indexEncontrado] } });
});

router.delete('/pessoa/:id', function (req, res, next) {
  let idPessoaEnviado = req.params.id ?? '';

  if (idPessoaEnviado == '') {
    return res.status(400).json({ 'message': 'Id não passado' });
  }

  idPessoaEnviado = Number.parseInt(idPessoaEnviado);
  if (!Number.isInteger(idPessoaEnviado)) {
    return res.status(400).json({ 'message': 'Id inválido' });
  }

  let indexEncontrado = listaPessoa.findIndex((pessoa => pessoa.id == idPessoaEnviado));
  if (indexEncontrado == -1) {
    return res.status(404).json({ 'message': 'Pessoa não encontrada' });
  }

  listaPessoa.splice(indexEncontrado, 1)

  return res.status(200).json({ 'message': 'Pessoa excluida com sucesso' });
})

module.exports = router;
