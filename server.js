const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user && user.password === password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.create({
    data: { email, password },
  });
  res.status(201).json(user);
});

app.get('/api/projects', async (req, res) => {
  const projects = await prisma.project.findMany();
  res.status(200).json(projects);
});

app.post('/api/projects', async (req, res) => {
  const { name, userId } = req.body;
  const project = await prisma.project.create({
    data: { name, userId },
  });
  res.status(201).json(project);
});

app.get('/api/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.status(200).json(tasks);
});

app.post('/api/tasks', async (req, res) => {
  const { name, projectId, userId } = req.body;
  const task = await prisma.task.create({
    data: { name, projectId, userId },
  });
  res.status(201).json(task);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
