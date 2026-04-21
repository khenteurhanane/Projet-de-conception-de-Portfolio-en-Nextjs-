# Portfolio Professionnel Next.js

Ce projet est un portfolio moderne et performant conçu avec **Next.js 15**, **Redux Toolkit**, et **lowdb** (Base de données JSON). Il est hébergé sur : [GitHub Repository](https://github.com/khenteurhanane/Projet-de-conception-de-Portfolio-en-Nextjs-)

## Fonctionnalités Clés

- **Authentification complète** : Système d'inscription et de connexion sécurisé.
- **Protection des routes** : Conformément aux consignes, **toutes les pages sont protégées** (Home, Projects, Testimonials) et nécessitent une connexion, à l'exception des pages `/login` et `/register`.
- **Gestion dynamique des Projets** : Les données des projets proviennent d'une API Next.js.
- **Système de Témoignages** : Interface CRUD complète (Lecture, Création, Modification) via l'API.
- **Design Premium & Responsive** : Interface optimisée pour mobile, tablette et ordinateur avec Tailwind CSS et Framer Motion.
- **Validation Strict** : Tous les formulaires incluent des messages d'erreur en rouge pour guider l'utilisateur.

## Stack Technique

- **Frontend** : Next.js 15 (App Router), Tailwind CSS, Framer Motion, Lucide Icons.
- **State Management** : Redux Toolkit (Store global pour l'auth et les données).
- **Backend** : Next.js API Routes (Route Handler).
- **Communication** : Axios pour toutes les requêtes Frontend/Backend.
- **Persistance** : lowdb (Base de données locale JSON `db.json`).

## Installation & Lancement

1. **Cloner le dépôt**
2. **Installer les dépendances** :
   ```bash
   npm install
   ```
3. **Lancer le projet** :
   ```bash
   npm run dev
   ```
4. **Accès** : `http://localhost:3000`

## Respect des Consignes (Checklist)

- [x] **Page d'accueil** : Présentation, photo et compétences.
- [x] **Header/Footer** : Navigation fluide et liens sociaux (GitHub, LinkedIn).
- [x] **Projets** : API dédiée, minimum 2 projets (3 inclus), description et technos.
- [x] **Auth** : Pages Login/Register fonctionnelles liées au Backend.
- [x] **Témoignages** : Liste, création et modification via API.
- [x] **Protection** : Seules les pages Login/Register sont publiques.
- [x] **Redux & Axios** : Utilisés systématiquement pour la gestion d'état et l'API.
- [x] **Validations** : Messages d'erreur rouges présents sur tous les formulaires.
