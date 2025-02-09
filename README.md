# React Admin Dashboard

Ce projet est une application **React Admin** qui gère des utilisateurs et des posts. Il utilise **json-server** comme backend mock et inclut des fonctionnalités telles que la pagination, le tri, les filtres, les actions groupées, et un tableau de bord avec des graphiques.

## Table des Matières

- [Prérequis](#prerequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Démarrer le projet](#demarrer-le-projet)
- [Fonctionnalités](#fonctionnalites)
- [Structure du projet](#structure-du-projet)

## Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Node.js** (version 16 ou supérieure)
- **npm** (généralement inclus avec Node.js)
- **Un éditeur de code** (par exemple, Visual Studio Code)

## Installation

Clonez le dépôt du projet :

```bash
git clone git@github.com:Manue159/frontend-developer-test.git
```

Accédez au dossier du projet :

```bash
cd frontend-developer-test
```

Installez les dépendances :

```bash
npm install
```

## Configuration

### 1. Configuration de json-server

Le projet utilise **json-server** pour simuler une API REST. Les données mock sont stockées dans le fichier `db.json`.

- Le fichier `db.json` contient des exemples de données pour les ressources **users** et **posts**.
- Le serveur mock écoute sur `http://localhost:3001`.

### 2. Variables d'environnement

Le projet n'utilise pas de variables d'environnement pour l'instant, mais vous pouvez en ajouter si nécessaire (par exemple, pour une API externe).

## Démarrer le projet

Démarrez **json-server** pour lancer le backend mock :

```bash
node server.js
```

Le serveur sera accessible à l'adresse : [http://localhost:3001](http://localhost:3001).

Démarrez l'application **React Admin** :

```bash
npm run dev
```

L'application sera accessible à l'adresse fournie par votre machine.

## Fonctionnalités

### 1. Gestion des utilisateurs
- **Liste des utilisateurs** : Affiche tous les utilisateurs avec pagination et tri.
- **Créer un utilisateur** : Formulaire pour ajouter un nouvel utilisateur.
- **Modifier un utilisateur** : Formulaire pour modifier les informations d'un utilisateur existant.
- **Désactiver des utilisateurs** : Action groupée pour désactiver plusieurs utilisateurs à la fois.

### 2. Gestion des posts
- **Liste des posts** : Affiche tous les posts avec pagination, tri et filtres (par auteur et statut).
- **Créer un post** : Formulaire pour ajouter un nouveau post.
- **Modifier un post** : Formulaire pour modifier les informations d'un post existant.
- **Afficher un post** : Vue détaillée d'un post.

### 3. Tableau de bord
- **Statistiques** : Affiche le nombre total d'utilisateurs et de posts.
- **Graphiques** :
  - Un **graphique en barres** montre le nombre de posts par utilisateur.
  - Un **graphique en camembert** montre la répartition des posts par statut (**publié** ou **brouillon**).

### 4. Authentification
Une authentification simple est implémentée avec `authProvider`.

**Identifiants de connexion** :
- **Nom d'utilisateur** : `admin`
- **Mot de passe** : `password`

## Structure du projet

```
react-admin-dashboard/
├── public/                     # Fichiers publics (HTML, images, etc.)
├── src/
│   ├── components/             # Composants personnalisés
│   │   ├── Dashboard.tsx       # Tableau de bord
│   │   ├── UserActions.tsx     # Actions groupées pour les utilisateurs
│   │   ├── StatusFieldEdit.tsx # Champ personnalisé pour le statut des posts
│   │   ├── ThemeToggle.tsx     # Gestion du changement de thème
│   │   ├── AuthProvider.tsx    # Configuration de l'authentification
│   │   ├── Theme.tsx           # Configuration du thème (mode clair/sombre)
│   │   ├── Users.tsx           # Gestion des utilisateurs
│   │   ├── Charts.tsx          # Gestion des graphiques
│   │   └── Posts.tsx           # Gestion des posts
│   ├── App.tsx                 # Point d'entrée de l'application
│   └── index.tsx               # Point d'entrée React
├── db.json                     # Données mock pour json-server
├── server.js                   # Gestion des entêtes json-server
├── package.json                # Dépendances et scripts
├── tsconfig.json               # Configuration TypeScript
└── README.md                   # Documentation du projet
```
