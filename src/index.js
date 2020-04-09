const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do backend
 * POST: Criar uma informação no backend
 * PUT/PATCH: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * 
 */

/**
 * Tipos de parâmetros:
 * 
 * Quert params: Filtros e paginação
 * Route params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
 * 
 */

app.get('/projects', (request, response) => {
  return response.send(['Projeto 01', 'Projeto 02']);
});

app.post('/projects', (request, response) => {
  return response.send(['Projeto 01', 'Projeto 02', 'Projeto 03']);
});

app.put('/projects/:id', (request, response) => {
  return response.send(['Projeto 04', 'Projeto 02', 'Projeto 03']);
});

app.delete('/projects/:id', (request, response) => {
  return response.send(['Projeto 02', 'Projeto 03']);
});

app.listen(3333, () => {
  console.log('Backend started!');
});

