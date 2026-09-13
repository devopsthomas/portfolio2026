# Terminal Portfolio - Tuxplorer 🐧

Un portfolio interactif en style terminal Linux, développé avec HTML, CSS et JavaScript vanilla.

## 🌐 Accès

- **GitHub Pages** : https://github.com/devopsthomas
- **Domaine personnalisé** : https://thomas-letard.me (optionnel)

## 🎯 Fonctionnalités

- ✅ Interface terminal authentique et interactive
- ✅ Historique des commandes avec numérotation
- ✅ Navigation dans l'historique (↑/↓)
- ✅ Système d'aide (`--help` / `-h`)
- ✅ Horloge en temps réel avec date et heure
- ✅ Design sombre professionnel et minimaliste
- ✅ Responsive sur tous les appareils (mobile, tablet, desktop)
- ✅ Scrollbar customisée
- ✅ Code modulaire et facile à personnaliser

## 📋 Commandes disponibles

| Commande | Description |
|----------|-------------|
| `help` ou `?` | Affiche la liste des commandes |
| `ls` | Liste les commandes disponibles |
| `whoami` | Affiche les informations personnelles |
| `hostname` | Affiche le nom d'hôte du portfolio |
| `date` | Affiche la date et l'heure |
| `skills` | Affiche les compétences techniques |
| `about` | À propos de Thomas Letard |
| `projects` | Liste des projets en cours |
| `contact` | Informations de contact |
| `history` | Historique des commandes |
| `clear` | Efface le terminal et l'historique |

### Aide sur une commande

```bash
user@portfolio:~$ whoami --help
Display current user information

user@portfolio:~$ skills -h
Display technical skills and competencies
```

## 🗂️ Structure du projet

```
tuxplorer.github.io/
├── index.html           # Page principale
├── index.css            # Styles CSS
├── terminal.js          # Logique du terminal
├── time.js              # Horloge en temps réel
├── README.md            # Ce fichier
├── .gitignore           # Fichiers à ignorer par Git
├── CNAME                # Configuration du domaine (optionnel)
└── package.json         # Configuration npm (optionnel)
```

## 🚀 Installation

### 1️⃣ Cloner le repository

```bash
git clone https://github.com/Tuxplorer/tuxplorer.github.io.git
cd tuxplorer.github.io
```

### 2️⃣ Ouvrir localement

Ouvre simplement `index.html` dans ton navigateur.

### 3️⃣ Personnaliser

Édite les fichiers suivants pour ajouter tes infos :

**`terminal.js`** - Modifie les commandes et les réponses :
```javascript
whoami: {
    description: 'Display current user information',
    execute: () => 'Ton Nom (Ton Pseudo)\nTa Description'
},
```

## 📤 Déployer sur GitHub Pages

### Étape 1 : Créer un repository GitHub

1. Crée un repository nommé `{username}.github.io` sur GitHub
2. Remplace `{username}` par ton username GitHub (ex: `tuxplorer.github.io`)

### Étape 2 : Initialiser Git localement

```bash
git init
git add .
git commit -m "Initial commit: Terminal Portfolio"
git remote add origin https://github.com/{username}/{username}.github.io.git
git branch -M main
git push -u origin main
```

### Étape 3 : Accéder à ton portfolio

- **Après ~1-2 minutes**, accède à : `https://{username}.github.io`
- L'URL de GitHub Pages s'affichera aussi dans les paramètres du repository

### (Optionnel) Configurer un domaine personnalisé

1. **Achète un domaine** : Namecheap, OVH, etc.
2. **Ajoute un fichier `CNAME`** à la racine avec ton domaine :
```
thomas-letard.me
```
3. **Configure les DNS** vers GitHub Pages (voir la doc GitHub)
4. **Push** :
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

## 💻 Stack technique

- **HTML5** - Structure sémantique
- **CSS3** - Design responsive avec `clamp()` et media queries
- **JavaScript (Vanilla)** - Aucune dépendance externe
- **Google Fonts** - Polices monospace (Lilex, JetBrains Mono)

## 🎨 Personnalisation

### Changer les informations

Édite `terminal.js` et mets à jour les objets `commands` :

```javascript
contact: {
    description: 'Display contact information',
    execute: () => `📧 Email: tonemail@example.com
📱 Phone: +1 (555) 123-4567
🌐 GitHub: https://github.com/tonusername
🌐 Website: https://tonsite.com`
}
```

### Changer les couleurs

Édite les variables CSS dans `index.css` :

```css
:root {
    --bg-black: #0a0a0a;        /* Fond */
    --text-gray: #e0e0e0;       /* Texte */
    --text-gray-medium: #a0a0a0; /* Texte secondaire */
    --accent-white: #ffffff;    /* Accent */
}
```

### Ajouter une nouvelle commande

Ajoute dans `terminal.js` :

```javascript
mycommand: {
    description: 'Ma description',
    execute: () => 'Résultat de ma commande'
}
```

## 📱 Responsive

Fonctionne parfaitement sur :
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (480px - 768px)
- ✅ Petit mobile (360px - 480px)
- ✅ Landscape (orientation paysage)
- ✅ Tous les navigateurs modernes

## 🌟 Améliorations futures

- [ ] Animations au démarrage
- [ ] Thème clair/sombre
- [ ] API externe pour les projets
- [ ] Intégration GitHub API
- [ ] PWA (Progressive Web App)
- [ ] Blog intégré
- [ ] Mode offline

## 📞 Contact

- **Email** : thomasletard3@gmail.com
- **Phone** : +687 76.84.68
- **GitHub** : https://github.com/Tuxplorer
- **Portfolio** : https://thomas-letard.me

## 📝 Licence

MIT - Libre d'utilisation et de modification

---

**Créé par Thomas Letard (Tuxplorer)** 🐧
Apprenti TSSR | Koumac, Nouvelle-Calédonie
