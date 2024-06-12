# Utiliser une image Node.js officielle comme image de base
FROM node:22.2.0-alpine

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /usr/src/app 

# Copier les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers de l'application dans le conteneur
COPY . .

# Construire l'application Remix
RUN npm run build

# Exposer le port sur lequel l'application écoute
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "run", "dev"]
