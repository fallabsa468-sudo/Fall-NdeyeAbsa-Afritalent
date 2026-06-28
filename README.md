# AfriTalent
Projet fil rouge — Plateforme de mise en relation entre freelances africains et
clients.
Auteur : Prenom NOM
Promotion : L1 Web — ISI

# 👩‍💻 Auteur
**Ndeye Absa Fall**
Étudiante en [Informatique appliquée a la gestion des entreprises] - Avril 2026


# Presentation du projet

-**AfriTalent** est une plateforme web responsive qui met en relation des entreprises et des freelances africains dans la technologie, le design, la data et le marketing.
- Projet développé en HTML5, CSS3, Bootstrap 5 et JavaScript.

# 📂 Arborescence du projet
NOM-Prenom-AfriTalent/ 
├── index.html 
├── freelances.html 
├── tarifs.html 
├── about.html 
├── contact.html 
├── css/ 
│   └── style.css 
├── js/ 
│   └── main.js 
├── images/ 
│   └── (vos images, logos, avatars) 
├── docs/ 
│   └── NOM_Prenom_Presentation.pptx 
├── README.md 
└── .gitignore

# 🛠️ Stack Technique
| **HTML5** | Structure sémantique des pages |
| **CSS3** | `css/style.css` pour le style perso |
| **Bootstrap 5.3** | Grille, Navbar, Carousel, Cards via CDN |
| **Font Awesome 6.5** | Icônes des réseaux sociaux |
| **Bootstrap Icons 1.11** | Icônes du carousel et bouton retour |
| **JavaScript Vanilla** | Animation des compteurs `js/main.js` |

 
# 🚀 Installation & Lancement
Rien à installer.
1.  Télécharge le projet
2.  Ouvre `index.html` avec Open In Default sur VS Code

# ✨ Fonctionnalités du site

AfriTalent est une plateforme complète pensée pour connecter les talents africains aux entreprises. Voici ce qu’elle propose :

- **Hero Section accrocheuse** : Une première section avec un message fort et 2 boutons d’action clairs : `Je suis Freelance` et `Je cherche un Freelance`. L’objectif est de guider l’utilisateur dès son arrivée.

- **Compteurs animés au scroll** : Pour donner confiance, 3 statistiques clés s’animent automatiquement quand on arrive sur la section : `+2500 Freelances`, `+800 Entreprises` et `+12000 Missions`. L’effet est déclenché uniquement quand l’utilisateur scroll dessus.

- **Section "Comment ça marche"** : Une grille en 4 étapes, style Bento, qui explique simplement le parcours. Que ce soit pour poster une mission ou pour être recruté, l’utilisateur comprend en 10 secondes.

- **Catégories de services** : 6 grandes familles de métiers sont mises en avant avec une carte pour chacune : Dev Web, Data & IA, UI/UX, Rédaction, DevOps, et Marketing. Chaque carte affiche le nombre de profils disponibles.

- **Témoignages clients** : Un carousel Bootstrap qui fait défiler 3 avis clients notés avec 5★. Cela apporte de la preuve sociale et rassure les nouvelles entreprises.

- **CTA et Footer complet** : Un appel à l’action final avant le footer, qui contient tous les liens utiles, les ressources, la page contact et les réseaux sociaux.

- **Dark Mode** : Un bouton `🌙` avec la classe `theme-toggle` est déjà prévu dans le header. Il est prêt à être activé avec du JavaScript et `localStorage` pour mémoriser le choix.

- **Design 100% Responsive** : Le site est développé en Mobile-First avec Bootstrap 5. Il s’adapte parfaitement sur téléphone, tablette et ordinateur.


# 4. Page Freelances avec Filtre Dynamique

La page `freelance.html` est le cœur de la plateforme. Elle permet de découvrir tous les talents disponibles.

- **Grille de Profils** : 9 cartes de freelances affichées en 3 colonnes sur PC et 1 colonne sur mobile grâce à Bootstrap `col-lg-4 col-md-6`. Chaque carte contient une photo, le nom, le métier, une description courte, le tarif horaire en FCFA et la note.

- **Système de Filtre en 1 Clic** : Une barre de 7 boutons `Toutes les catégories / Développeur / Designer / Marketing / Graphiste / Illustrateur / CEO` permet de trier instantanément les profils. Quand l’utilisateur clique sur "Designer", seul le profil de FATOU BA s’affiche. C’est fait en JavaScript pur, sans rechargement de page.

- **Liens Réseaux Sociaux** : Chaque carte a 4 icônes Font Awesome : LinkedIn, Instagram, Facebook et X/Twitter. Cela donne un côté pro et permet de vérifier le profil du freelance.

- **Design Cohérent** : La section a un fond `rgb(5, 202, 189)` pour respecter la charte AfriTalent. Les boutons filtres deviennent turquoise quand ils sont actifs pour bien montrer la sélection.

# 5. Page Tarifs & FAQ

La page `tarifs.html` a pour objectif de convertir le visiteur en utilisateur payant. Elle présente clairement les offres et enlève les doutes.

- **3 Formules d’Abonnement** : Le site propose 3 cartes comparatives en Bootstrap `col-md-4`. 
 1.  **Gratuit à 0 FCFA/mois** : Pour tester, avec 5 candidatures limitées.
 2.  **Pro à 15 000 FCFA/mois** : La formule `Populaire`. Elle est mise en avant avec un badge doré `position-absolute` et une bordure `border-warning` pour attirer l’œil.
 3.  **Entreprise à 25 000 FCFA/mois** : Pour les équipes, avec gestion multi-utilisateurs et support dédié.

- **FAQ Interactive en Accordion** : Un composant Bootstrap 5 est utilisé. L’utilisateur clique sur une question comme "Puis-je changer de plan ?" et la réponse s’affiche en dessous sans recharger la page. J’ai utilisé `data-bs-toggle="collapse"` et `data-bs-parent="#faq"` pour que une seule réponse soit ouverte à la fois.

- **Cohérence Visuelle** : Pour garder la même identité, la section tarifs a un fond turquoise `style="background: rgb(5, 202, 189);"`, comme sur la page Freelances. Les boutons `Commencer` et `Choisir` sont en `btn-outline-primary` et `btn-warning`.

- **Détails UX** : Chaque avantage est précédé d’une icône Bootstrap `bi-check text-success`. Les avantages non inclus utilisent `text-danger` pour être bien distincts visuellement.

# 6. Page A propos

La page `about.html` a pour but de renforcer la confiance et de donner une identité humaine à AfriTalent. Elle raconte qui nous sommes.

- **Section "Notre Histoire"** : Une présentation de la mission d’AfriTalent sur 2 colonnes avec Bootstrap. Le texte explique l’objectif de connecter les talents africains. L’image du logo à droite a un style unique avec `border-radius: 50% 10% 50% 10%` pour casser la forme carrée et donner un effet moderne.

- **Présentation de l'Équipe** : Une grille de 4 profils `col-md-3` pour les postes clés : CEO, CTO, Marketing et Design. Chaque `card team-card` contient une photo, le nom, le poste et 4 icônes de réseaux sociaux `Font Awesome`. Cela montre qu’il y a une vraie équipe derrière le site.

- **Nos Valeurs** : 4 blocs `value-box` alignés pour présenter les piliers de l’entreprise : Innovation 💡, Accessibilité 🤝, Communauté 🌏 et Excellence ✨. Chaque valeur est accompagnée d’une icône Bootstrap et d’une courte description pour être comprise en 3 secondes.

- **Chiffres Clés Animés** : La section finale met en avant 4 statistiques importantes dans une mise en page `Bento` : `2500+ Freelances`, `800+ Entreprises`, `12000+ Missions réalisées`, `98% Satisfaction`. L’animation de comptage se déclenche uniquement quand l’utilisateur arrive sur la section grâce à `IntersectionObserver` en JavaScript. Cela évite de lancer l’animation pour rien et donne un effet très pro.

- **Animations Générales** : La classe `fade-in` est appliquée sur toutes les sections pour une apparition en douceur au scroll.

# 7. Page Contact avec Validation

La page `contact.html` est le point de contact direct entre AfriTalent et ses utilisateurs. L’objectif est de faciliter la prise de contact et de rassurer.

- **Formulaire avec Validation JS** : Le formulaire contient 5 champs obligatoires : `Nom`, `Prénom`, `Email`, `Sujet` et `Message`. Un script JavaScript intercepte l’envoi avec `e.preventDefault()`. Il vérifie que les champs ne sont pas vides, que l’email contient un `@`, et que le message fait au moins 10 caractères. En cas d’erreur, un message rouge s’affiche sous le champ concerné. Si tout est valide, un message de succès vert s’affiche et le formulaire se réinitialise.

- **Bloc Informations Pratiques** : À côté du formulaire, une colonne affiche toutes les infos utiles : l’adresse email `contact@afritalent.com`, le numéro de téléphone `+221 78 000 00 00` et la ville `Dakar, Senegal`. Cela rend le site plus crédible et pro.

- **Carte Google Maps Intégrée** : Une `iframe` affiche directement la localisation de l’agence sur Google Maps. C’est intégré en `responsive` et avec `loading="lazy"` pour ne pas ralentir le site au chargement.

- **Design Responsive** : La mise en page utilise `CSS Grid` avec `grid-template-columns: 1fr 1fr` sur PC pour avoir Formulaire | Infos côte à côte. Sur mobile, ça passe automatiquement en 1 colonne grâce à une `@media query`. La classe `fade-in` est aussi utilisée pour une animation d’apparition au scroll.



# 8. Fichier `css/style.css`

Le fichier `style.css` est la feuille de style principale. Il gère toute l’identité visuelle, le responsive et les animations du site AfriTalent.

- **Variables CSS `:root`** : Toutes les couleurs de la charte sont centralisées. `primary`, `secondary`, `turquoise`, `dark`, `light`. Cela permet de modifier la couleur principale du site en changeant une seule ligne de code.

- **Structure des Pages** : 
 1.  **Navbar** : `position: fixed` avec `background: rgba(78, 97, 192, 0.64)`. Elle devient plus foncée avec `box-shadow` quand on scroll grâce à la classe `.scrolled` ajoutée en JS.
 2.  **Hero Section** : Plein écran `height: 100vh` avec un dégradé sombre sur l’image de fond pour que le texte blanc ressorte bien. Le titre utilise `font-weight: 700` pour être bien gras.
 3.  **Grilles Bento** : Les sections `Comment ça marche` et `Chiffres Clés` utilisent `display: grid` avec `grid-template-columns: repeat(3, 1fr)`. Les classes `.card-large` et `.card-wide` permettent de créer une mise en page asymétrique et moderne.

- **Composants Interactifs** :
 1.  **Cards** : Toutes les cartes ont un `box-shadow` léger et un `transform: translateY(-5px)` au `:hover` pour donner un effet de relief.
 2.  **Boutons** : `border-radius: 25px/30px` pour un style arrondi et moderne. Le bouton CTA a un `transform: scale(1.03)` au survol.
 3.  **Formulaire Contact** : Les `input, select, textarea` ont un effet `scale(1.02)` et `box-shadow` au `:focus` pour montrer à l’utilisateur où il est.

- **Pages Spécifiques** :
 1.  **Freelances** : Les images `.card-img-top` sont forcées à `height: 250px` et `object-fit: cover` pour que toutes les photos aient la même taille sans être déformées.
 2.  **A propos** : La section équipe `.team-card` a un `hover` avec `translateY(-10px)`. Les compteurs `.counter` sont en `font-size: 30px` et couleur `primary`.
 3.  **Tarifs** : La `.pricing-section` a un fond turquoise `rgb(5, 202, 189)` pour rester cohérent avec le reste du site.

- **Fonctionnalités Globales** :
 1.  **Dark Mode** : Le sélecteur `body.dark-mode` écrase toutes les couleurs `background` et `color` pour passer le site en thème sombre. Il cible aussi `.card`, `.accordion` et `.navbar`.
 2.  **Animations** : La classe `.fade-in` met `opacity: 0` et `transform: translateY(40px)` par défaut. Le JS ajoute `.show` pour faire apparaître les sections en douceur au scroll.
 3.  **Bouton Retour en Haut** : `#backToTop` est en `position: fixed` avec `opacity: 0`. Il passe à `opacity: 1` avec la classe `.show` quand l’utilisateur descend de 300px.

- **Responsive Design** : 2 `@media queries` sont utilisées. 
 1.  `max-width: 768px` : Passe les grilles de 3 colonnes à 1 colonne pour la tablette/mobile.
 2.  `max-width: 375px` : Réduit les tailles de police `h1, h2, p` pour les très petits écrans.


 #  9. Fichier `js/main.js`

Le fichier `main.js` contient tout le JavaScript Vanilla du site. Il est chargé sur toutes les pages et rend le site interactif sans rechargement.

- **1. Compteurs Animés au Scroll** : Pour la page `about.html`. Le script cible tous les éléments `.counter`. Un `IntersectionObserver` détecte quand le compteur devient visible à l’écran. Il lance alors une animation qui incrémente le chiffre de 0 jusqu’à la valeur `data-target` en 100 étapes. Une fois l’animation finie, `observer.unobserve()` empêche que ça se relance au re-scroll.

- **2. Navbar au Scroll** : Un `window.addEventListener('scroll')` surveille la position. Si l’utilisateur descend de plus de 80px, la classe `.scrolled` est ajoutée à la `#navbar`. En CSS, cette classe change le fond et la taille de la navbar pour donner un effet "sticky" pro.

- **3. Bouton Retour en Haut** : Le bouton `#backToTop` est caché par défaut. Il devient visible avec la classe `.show` quand `scrollY > 300px`. Au clic, `window.scrollTo({ behavior: 'smooth' })` remonte en haut avec une animation fluide.

- **4. Dark Mode Persistant** : Le bouton `#theme-toggle` active/désactive la classe `dark-mode` sur le `body`. Le choix est sauvegardé dans `localStorage` avec la clé `theme`. Au chargement de la page, le script lit le `localStorage` pour appliquer directement le bon thème et changer l’icône `🌙` en `☀️`.

- **5. Animation Fade-in** : Un deuxième `IntersectionObserver` cible tous les `.fade-in`. Dès qu’une section entre à 10% dans l’écran, la classe `.show` est ajoutée. En CSS, `.show` passe `opacity: 1` et `transform: translateY(0)` pour une apparition en douceur.

- **6. Filtre Freelances** : Sur `freelance.html`. Chaque bouton `.btn-filter` a un `data-filter`. Au clic, le script retire `active` sur tous les boutons, l’ajoute sur le bouton cliqué, puis parcourt toutes les `.freelance-card`. Il compare le `data-category` de la carte avec le filtre. Si ça correspond ou si le filtre est `all`, la carte est en `display: block`, sinon `none`.

- **7. Validation Formulaire Contact** : Le script intercepte le `submit` du `#contactForm` avec `e.preventDefault()`. Il vérifie que Nom et Prénom ne sont pas vides, que l’email respecte la regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`, que le sujet est choisi, et que le message fait 20 caractères min. Les erreurs s’affichent dans les `<small class="error-message">`. Si `isValid = true`, un message de succès s’affiche et le formulaire est vidé avec `.reset()`.

# capture d'écran

**acceuil**
![(image.png)]
![(image-1.png)]
![(image-2.png)]
![(image-3.png)]
![(image-4.png)]
![(image-5.png)]

**freelance**
![(image-6.png)]
![(image-7.png)]
![(image-8.png)]
![(image-9.png)]

**tarif**
![(image-10.png)]
![(image-11.png)]
![(image-12.png)]

**a propos**
![(image-13.png)]
![(image-14.png)]
![(image-15.png)]
![(image-16.png)]

**contact**
![(image-17.png)]
![(image-18.png)]


# lien du site 
 https://fallabsa468-sudo.github.io/Fall-NdeyeAbsa-Afritalent/
 