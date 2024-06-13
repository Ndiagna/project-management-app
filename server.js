import express from 'express';
import { PrismaClient } from '@prisma/client';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(json()); // Utilisez json() pour analyser les corps de requêtes HTTP en JSON
app.use(urlencoded({ extended: true }));

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (user && user.password === password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;

  // Vérification si l'email est déjà utilisé
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
  }

  // Vérification de la validité de l'email
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'L\'adresse email n\'est pas valide.' });
  }

  // Vérification de la longueur du mot de passe
  if (password.length < 8) {
    return res.status(400).json({ error: 'Le mot de passe doit contenir au moins 8 caractères.' });
  }

  try {
    // Création de l'utilisateur
    const user = await prisma.user.create({ data: { email, password } });
    res.status(201).json(user);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la création de l\'utilisateur :', error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la création de l\'utilisateur.' });
  }
});

function isValidEmail(email) {
  // Ajoutez ici votre logique de validation de l'email
  // Par exemple, vérifiez si l'email correspond à un certain format
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
