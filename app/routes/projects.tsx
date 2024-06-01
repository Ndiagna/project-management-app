import React, { useLoaderData } from '@remix-run/react';
import { LoaderFunction } from '@remix-run/node';

type Project = {
  id: string;
  name: string;
};

export const loader: LoaderFunction = async () => {
  // Remplacez par votre logique de chargement des données
  // Exemple :
  // const response = await fetch('/api/projects');
  // const projects = await response.json();
  // return projects;

  return []; // Temporaire, remplacez par vos données réelles
};

const Projects: React.FC = () => {
  const projects = useLoaderData<Project[]>();

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
