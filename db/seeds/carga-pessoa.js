/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('pessoa').del()
  await knex('pessoa').insert([
    { "id": 1, "nome": "Ana Beatriz Souza", "data_nascimento": "1990-03-15" },
    { "id": 2, "nome": "Carlos Eduardo Lima", "data_nascimento": "1985-07-22" },
    { "id": 3, "nome": "Mariana Ferreira", "data_nascimento": "1998-11-05" },
    { "id": 4, "nome": "João Pedro Alves", "data_nascimento": "1979-01-30" },
    { "id": 5, "nome": "Fernanda Oliveira", "data_nascimento": "2001-09-12" },
    { "id": 6, "nome": "Rafael Santos Costa", "data_nascimento": "1993-05-27" },
    { "id": 7, "nome": "Juliana Martins", "data_nascimento": "1988-12-03" },
    { "id": 8, "nome": "Lucas Gabriel Rocha", "data_nascimento": "1995-08-19" },
    { "id": 9, "nome": "Camila Ribeiro", "data_nascimento": "1982-04-08" },
    { "id": 10, "nome": "Pedro Henrique Barbosa", "data_nascimento": "2003-06-25" }
  ]);
};
