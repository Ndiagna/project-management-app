import React, { useLoaderData } from '@remix-run/react';
import { LoaderFunction } from '@remix-run/node';

type Task = {
  id: string;
  name: string;
};

export const loader: LoaderFunction = async () => {
  // Remplacez par votre logique de chargement des données
  // Exemple :
  // const response = await fetch('/api/tasks');
  // const tasks = await response.json();
  // return tasks;

  return []; // Temporaire, remplacez par vos données réelles
};

const Tasks: React.FC = () => {
  const tasks = useLoaderData<Task[]>();

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
