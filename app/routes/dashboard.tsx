
import React, { useLoaderData } from '@remix-run/react';
import { LoaderFunction } from '@remix-run/node';

type Project = {
  id: string;
  name: string;
};

type Task = {
  id: string;
  name: string;
};

type LoaderData = {
  projects: Project[];
  tasks: Task[];
};

export const loader: LoaderFunction = async () => {
  // Remplacez par votre logique de chargement des données
  // Exemple :
  // const response = await fetch('/api/dashboard');
  // const data = await response.json();
  // return data;

  return { projects: [], tasks: [] }; // Temporaire, remplacez par vos données réelles
};

const Dashboard: React.FC = () => {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Projects</h3>
        <ul>
          {data.projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Tasks</h3>
        <ul>
          {data.tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
