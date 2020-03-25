# [CoVprehension](https://covprehension.org)

French informative website about the corona virus.

This repository holds the Jekyll sources of the CoVprehension website!

> The following section will be in french, sorry 🤷

## Comment utiliser ce site ?

### Structure du repository

<details>
<summary>View contents</summary>

```
$ tree
.
├── assets
│   ├── <custom JS/CSS files>
│   │
│   └── vendor <default resources>
│       ├── bootstrap
│       ├── fontawesome-free
│       ├── jquery
│       └── template
│
├── img
│   └── <website images>
│
├── _includes
│   └── <Global part of website : Header/Footer/etc>
│
├── _layouts
│   └── <HTML pages template>
│
├── _posts
│   ├── ...
│   └── <All your questions>
│
├── posts
│   └── <IGNORE ME, I'm a trap 🙊>
│
├── _sass
│   └── styles.scss
│
├── simulations
│   └── <Web NetLogo export simulations>
│
├── _config.yml
│
├── about.html
├── contact.html
├── index.html
│
└── <others...>

<plenty> directories, <too many> files
```

</details>

### Créer un nouvel article

1. Aller dans le sous-dossier [`_posts`](https://github.com/RoiArthurB/CoVprehension/tree/master/_posts)
2. Créer un nouveau fichier au format suivant : `AAAA-MM-JJ-mots-clefs.md`
3. **Copier-coller** puis **Compléter** l'en-tête suivante :
```
---
layout: post

# Toutes les lignes commençant par un "#" sont ignorées, ce sont des commentaires pour les humains !

# Cette partie est réutilisé pour l'apperçu du post dans les pages principales
title: "Le titre de l'article. eg/ Question 1: Pourquoi je tousse ?"
subtitle: "Le sous-titre de l'article. eg/ blablabla. Démonstration !"

# Choisir une image d'illustration qui doit être un chemin relatif vers le dossier img/
# (si cette phrase n'a pas été comprise, demandez de l'aide :) ) 
# Par défaut image du masque 
#background: '/img/bg-index.jpg'

# Choisir un auteur
# Par défaut "Des scientifiques"
#author: "Jean Jean"
---
```
4. Remplir le contenu de l'article en écrivant un article au format [HTML](https://www.w3schools.com/html/) ou au format [MarkDown](https://www.markdownguide.org/).

### Configuration globale du site

Toute la configuration globale du site se trouve dans le fichier [`_config.yml`](https://github.com/RoiArthurB/CoVprehension/blob/master/_config.yml) qui a la structure suivante :
 - `baseurl` ⚠️ ne pas changer ⚠️
 - `url` ⚠️ ne pas changer ⚠️
 - `title` 
 - `email` (mail global utilisé un peu partout: contact, liens, etc)
 - `description` (page d'accueil)
 - `author` (valeur par défaut)
 - `twitter_username` (Optionel - Enlève l'icone en pied de page si vide)
 - `facebook_username` (Optionel - Enlève l'icone en pied de page si vide)
 - `github_username` (Optionel - Enlève l'icone en pied de page si vide)
 - `linkedin_username` (Optionel - Enlève l'icone en pied de page si vide)

## Technical part

> I'm switching back in english, hi again friends ! :D

### Local installation & Setup

1. Clone the repo `git clone git@github.com:RoiArthurB/CoVprehension.git`
2. Move in the folder `cd CoVprehension`
3. Install plugins: `bundle install`
4. Build your site: `bundle exec jekyll serve`
5. Connect to your running instance [http://127.0.0.1:4000/CoVprehension/](http://127.0.0.1:4000/CoVprehension/)

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/RoiArthurB/CoVprehension/issues/new) here on GitHub!

## Made with

* Pipeline
  * Jenkyll
  * Github Pages

* Front-end
  * Bootstrap / jQuery
    * Theme from [Start Bootstrap](https://startbootstrap.com/)
  * [Particle.js](https://vincentgarreau.com/particles.js/)
  * [Charts.js](https://www.chartjs.org/)

* Simulations
  * NetLogo

## Copyright and License

This website is released under the [MIT](https://github.com/RoiArthurB/CoVprehension/blob/gh-pages/LICENSE) license.
