const express = require('express');

const app = express();

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

