const express = require('express');
const { uuid, isUuid } = require('uuidv4');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

function validateRepositoryId(request, response, next) {
  if (!isUuid(request.params.id)) {
    return response.status(400).json({ error: 'Invalid repository ID' });
  }

  next();
}

app.use('/repositories/:id', validateRepositoryId);
app.use('/repositories/:id/like', validateRepositoryId);

const repositories = [];

app.get('/repositories', (request, response) => {
  return response.json(repositories);
});

app.post('/repositories', (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };
  repositories.push(repository);

  return response.status(201).json(repository);
});

app.put('/repositories/:id', (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositoryIndex = repositories.findIndex((repo) => repo.id === id);

  const likes = repositories[repositoryIndex].likes;
  const repository = { id, title, url, techs, likes };
  repositories[repositoryIndex] = repository;

  return response.json(repository);
});

app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex((repo) => repo.id === id);
  repositories.splice(repositoryIndex, 1);

  response.status(204).end();
});

app.post('/repositories/:id/like', (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex((repo) => repo.id === id);
  const repository = repositories[repositoryIndex];
  repositories[repositoryIndex] = { ...repository, likes: ++repository.likes };

  return response.json(repository);
});

module.exports = app;
