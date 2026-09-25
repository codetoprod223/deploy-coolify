# 🚀 Deploy Coolify — Démo de déploiement

Une simple landing page construite avec **React + TypeScript + Vite**, utilisée comme support pour démontrer comment déployer une application sur [Coolify](https://coolify.io).

> Ce projet n'est pas une vraie application — c'est une interface de démonstration créée spécifiquement pour illustrer le processus de déploiement sur Coolify.

## 📸 Aperçu

Landing page portfolio d'un designer web fictif, avec :

- Hero section avec galerie photo
- Section "À propos" avec statistiques
- Grille de projets
- Design responsive et animations au scroll

## 🛠 Stack technique

| Technologie | Version |
|---|---|
| React | 19.x |
| TypeScript | 5.x |
| Vite | 8.x |

## ⚡ Lancer en local

```bash
# Cloner le repo
git clone https://github.com/<ton-username>/deploy-coolify.git
cd deploy-coolify

# Installer les dépendances
npm install

# Lancer le serveur de dev (port 3000)
npm run dev
```

L'app sera accessible sur **http://localhost:3000**

## 🐳 Déployer sur Coolify

### Prérequis

- Un serveur avec [Coolify](https://coolify.io) installé
- Un repo Git (GitHub, GitLab, etc.)

### Étapes

1. **Pusher le code** sur ton repo Git
2. **Se connecter** à ton dashboard Coolify
3. **Ajouter une nouvelle ressource** → choisir "Application"
4. **Connecter le repo Git** contenant ce projet
5. **Configurer le build** :
   - Build Command : `npm run build`
   - Output Directory : `dist`
   - Install Command : `npm install`
6. **Définir le port** : `3000` (ou laisser Coolify gérer avec le build statique)
7. **Déployer** 🎉

### Alternative : Build statique (Nixpacks)

Coolify détecte automatiquement les projets Vite via Nixpacks. Il suffit de pusher le code et Coolify s'occupe du reste.

## 📁 Structure du projet

```
deploy-coolify/
├── public/
│   └── images/          # Images de la landing page
├── src/
│   ├── App.tsx          # Composant principal
│   ├── App.css          # Styles des composants
│   ├── index.css        # Styles globaux + variables
│   └── main.tsx         # Point d'entrée
├── index.html
├── vite.config.ts       # Config Vite (port 3000)
└── package.json
```

## 📝 Licence

Ce projet est un support de démonstration. Libre d'utilisation.
