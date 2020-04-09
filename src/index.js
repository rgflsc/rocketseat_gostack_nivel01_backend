const express = require('express');

const app = express();

app.use(express.json());

/**
 * M�todos HTTP:
 * 
 * GET: Buscar informa��es do backend
 * POST: Criar uma informa��o no backend
 * PUT/PATCH: Alterar uma informa��o no backend
 * DELETE: Deletar uma informa��o no backend
 * 
 */

/**
 * Tipos de par�metros:
 * 
 * Quert params: Filtros e pagina��o
 * Route params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conte�do na hora de criar ou editar um recurso (JSON)
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

