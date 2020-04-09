const express = require('express');
const { uuid } = require('uuidv4');

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

const projects = [];

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return response.json(results);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found." });
  }

  const project = { id, title, owner };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found." });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('Backend started!');
});

