Hey ! Salut à toi l'ami et merci d'avance de participer au projet CoVpréhension 😀

Voilà un petit guide pour t'expliquer comment contribuer au site.

## Comment créer un nouvel article ?

<details>
<summary>Voir l'explication</summary>

1. Aller dans le sous-dossier [`_posts`](https://github.com/RoiArthurB/CoVprehension/tree/master/_i18n/fr/_posts)
2. Créer un nouveau fichier au format suivant : `AAAA-MM-JJ-qXX.md`
3. **Copier-coller** puis **Compléter** l'en-tête suivante :
```
---
layout: post
title: "Question XX : Trouver un chouette titre"
subtitle: "Et un sous-titre qui déchire sa race"

# Par défaut image du masque
#background: '/img/bg-index.jpg'

# Ne s'affichera pas si vide
author_text : Prénom N., Prénom N.
author_simulations : Prénom N.
author_illustration : Prénom N.

# Pour ne pas afficher la question dans le flux global
# Si t'as un doute, n'y touche pas :)
hidden: false

# Si    / Marque la question comme 
# true  / "traitée"
# false / "en traitement"
publish: false
---

<!-- TON TEXTE ICI -->
```
4. Remplir le contenu de l'article en écrivant un article au format [HTML](https://www.w3schools.com/html/) ou au format [MarkDown](https://www.markdownguide.org/).

### Bonus

Il y a un fichier d'exemple avec tout ce qu'il est possible de mettre dans les posts qui est disponible [ici](https://github.com/covprehension/CoVprehension/blob/master/_i18n/fr/_posts/TEMPLATE-COMMUN.md) (bouton `raw` pour voir le code en _Markdown_).

### Comment voir mon article ?

T'as écrit ton article et c'est cool, mais ce qui serait encore plus cool serait de voir ton article directement dans le site non ?

Pour ce faire, soit t'es un développeur et tu sais comment faire, soit t'es un humain normal et tu vas devoir un peu bidouiller !

**La manip**

Tous les articles dans le dossier `_posts` sont générés et accessibles sur le site, il manque juste le lien pour les articles _en traitement_.

Pour aller voir l'article sur le site, il suffit donc de prendre le nom du fichier et de le transformer comme ça :
```
                          2020-03-24-q0.md
                           \/  \/ \/ \/ \/
https://covprehension.org/2020/03/24/q0.html
```

Facile non ? 😉

</details>

## Comment mettre mes fichiers en ligne ?

Il va te falloir mettre les fichiers dans des dossiers particuliers en fonction de leur nature. Une fois qu'ils sont uploadés, tu peux les rajouter dans ton article comme montré dans le [template](https://github.com/covprehension/CoVprehension/blob/master/_i18n/fr/_posts/TEMPLATE-COMMUN.md).

### Les images

<details>
<summary>Voir l'explication</summary>

Dans le dossier racine `/img/posts` (tu peux cliquer [ici](https://github.com/covprehension/CoVprehension/tree/master/img/posts) pour aller directement dans le dossier).

</details>

### Les simulations NetLogo

<details>
<summary>Voir l'explication</summary>

#### Avant de l'uploader

1. Les simulations NetLogo doivent être exportées depuis le logiciel NetLogo en cliquant sur "File" puis "Save As NetLogo Web..."
2. Tu dois nommer ton fichier de cette manière `CoVprehension_Confinement_Q<indexNumeriqueArbitraire>.html`

#### Où l'uploader

Dans le dossier racine `/simulations/` (tu peux cliquer [ici](https://github.com/covprehension/CoVprehension/tree/master/simulations) pour aller directement dans le dossier).

#### Utiliser la simulation dans la page

Tu vas devoir mettre ce petit bout de code en changeant `<indexNumeriqueArbitraire>` par celui que t'as choisi dans le nom de ton fichier :

```
<a href="#" class="btn btn-primary" onclick="loadIframeSimulator(<indexNumeriqueArbitraire>, this); return false;">Simuler l'impact du confinement sur la courbe épidémique</a>
<div class="iframeContainer"></div>
```

</details>

### Les simulation JavaScript

<details>
<summary>Voir l'explication</summary>

#### Les ressources

La librarie utilisée est basée sur [particles.js](https://vincentgarreau.com/particles.js/) et a été retravaillée par @benoitgaudou et @RoiArthurB.

Tu la trouveras [là](https://github.com/covprehension/CoVprehension/blob/master/assets/particles.js) `/assets/particles.js`.

#### Où mettre les fichiers

Les fichiers d'appels sont appelés dynamiquement dans les posts. Ils devront se trouver dans un dossier unique `/simulations/js/<numeroQuestion>/` (avec n'importe quel nom et appelés dans l'ordre alphabetique). 

</details>

Voilà, j'espère que tu n'auras pas besoin de plus d'aide que tout ce qui est écrit ici. Mais si jamais tu as besoin d'aide, viens poser tes questions sur le Discord 😉
