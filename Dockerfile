# Étape 1 : Build de l'application avec Node.js
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Compiler l'application (génère les fichiers statiques dans le dossier dist/)
RUN npm run build

# Étape 2 : Serveur web léger avec Nginx
FROM nginx:alpine

# Copier les fichiers compilés depuis l'étape précédente vers le dossier par défaut de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier notre propre configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 3000
EXPOSE 3000

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
