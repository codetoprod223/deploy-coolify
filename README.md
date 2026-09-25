# Deploy Coolify

Une simple landing page pour démontrer comment déployer une application sur [Coolify](https://coolify.io).

## Stack

- React + TypeScript
- Vite
- Docker (Nginx)

## Déploiement sur Coolify (via Dockerfile)

Le projet est configuré avec un `Dockerfile` multi-stage optimisé pour la production. L'application est buildée avec Node, puis les fichiers statiques sont servis très rapidement via Nginx.

### Étapes dans Coolify :

1. Connectez votre dépôt Git.
2. Choisissez le **Build Pack : Dockerfile** (Coolify devrait le détecter automatiquement).
3. Dans la configuration du port (Ports / Expose), assurez-vous de mapper le port **80** (le port exposé par Nginx dans le conteneur).
4. Cliquez sur **Deploy**.

## Lancer en local (Sans Docker)

```bash
npm install
npm run dev
```
→ L'app sera disponible sur http://localhost:3000

## Lancer en local (Avec Docker)

Si vous souhaitez tester l'image Docker sur votre machine avant de déployer :

```bash
# Construire l'image Docker
docker build -t deploy-coolify .

# Lancer le conteneur sur le port 8080
docker run -p 8080:80 deploy-coolify
```
→ L'app sera disponible sur http://localhost:8080
