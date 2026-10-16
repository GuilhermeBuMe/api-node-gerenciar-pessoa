var express = require('express');
var router = express.Router();

const knex = require('knex')(require('../knexfile').development)

router.get('/pessoa', function (req, res, next) {
  knex
    .table('pessoa')
    .then(listaPessoa => {
      return res.status(200).json({
        total: listaPessoa.length,
        data: listaPessoa
      });
    })
    .catch(err => res.status(500).json({ message: 'Erro ao obter lista de pessoas: ' + err.message }))
});

router.get('/pessoa/:id', function (req, res, next) {
  let idPessoa = req.params.id ?? '';

  if (idPessoa == '') {
    return res.status(400).json({ 'message': 'Id não passado' });
  }

  idPessoa = Number.parseInt(idPessoa);
  if (!Number.isInteger(idPessoa)) {
    return res.status(400).json({ 'message': 'Id inválido' });
  }

  knex
    .table('pessoa')
    .where({ id: idPessoa })
    .then((listaPessoa) => {
      if (listaPessoa.length == 0) {
        return res.status(404).json({ message: 'Pessoa não encontrada' });
      }

      return res.status(200).json(listaPessoa);
    })
    .catch(err => res.status(500).json({ message: 'Erro ao obter pessoa:' + err.message }))
});

router.post('/pessoa', async function (req, res, next) {
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

  const pessoaEncontrada = await knex
    .select('id')
    .from('pessoa')
    .where({ nome: nome, data_nascimento: data_nascimento })
    .catch(err => res.status(500).json({ message: 'Erro ao verificar dados: ' + err.message }))

  if (pessoaEncontrada.length > 0) {
    return res.status(409).json({ message: 'Registro repetido' })
  }

  knex
    .table('pessoa')
    .insert({
      "nome": nome,
      "data_nascimento": data_nascimento
    }, 'id')
    .then((pessoa) => {
      return res.status(201).json({
        "message": "Pessoa registrada com sucesso",
        "data": {
          "pessoa": {
            "id": pessoa[0].id,
            "nome": nome,
            "data_nascimento": data_nascimento
          }
        }
      });
    })
    .catch(err => res.status(500).json({ message: 'Erro ao inserir pessoa: ' + err.message }))
});

router.put('/pessoa/:id', async function (req, res, next) {
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

  const pessoaEncontrada = await knex
    .select('id')
    .from('pessoa')
    .where({ 'nome': nome, 'data_nascimento': data_nascimento })
    .whereNot('id', idPessoa)
    .catch(err => res.status(500).json({ message: 'Erro ao verificar dados:' + err.message }))

  if (pessoaEncontrada.length > 0) {
    return res.status(409).json({ message: 'Registro repetido' })
  }

  knex
    .table('pessoa')
    .update({
      "nome": nome,
      "data_nascimento": data_nascimento
    }, '*')
    .where('id', idPessoa)
    .then((pessoa) => {
      return res.status(200).json({
        "message": "Pessoa editada com sucesso",
        "data": {
          "pessoa": pessoa
        }
      });
    })
    .catch(err => res.status(500).json({ message: 'Erro ao inserir pessoa: ' + err.message }))
});

router.delete('/pessoa/:id', async function (req, res, next) {
  let idPessoa = req.params.id ?? '';

  if (idPessoa == '') {
    return res.status(400).json({ 'message': 'Id não passado' });
  }

  idPessoa = Number.parseInt(idPessoa);
  if (!Number.isInteger(idPessoa)) {
    return res.status(400).json({ 'message': 'Id inválido' });
  }

  const pessoaEncontrada = await knex
    .select('id')
    .from('pessoa')
    .where({ 'id': idPessoa })
    .catch(err => res.status(500).json({ message: 'Erro ao verificar dados: ' + err.message }))

  if (pessoaEncontrada.length == 0) {
    return res.status(404).json({ message: 'Pessoa não encontrada' })
  }

  knex
    .table('pessoa')
    .where({ 'id': idPessoa })
    .del()
    .then(() => {
      return res.status(201).json({
        "message": "Pessoa excluida com sucesso",
      });
    })
    .catch(err => res.status(500).json({ message: 'Erro ao excluir pessoa: ' + err.message }))
})

module.exports = router;
