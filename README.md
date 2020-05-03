<p align="center">
  <a href="https://covprehension.org">
    <img src="img/logo/logo-long.png" alt="Logo CoVprehension">
  </a>

  <p align="center">
    Informative website about the corona virus.
    <br />
    <br />
    <img src="https://img.shields.io/github/license/covprehension/covprehension" alt="License" />
    ·
    <img src="https://img.shields.io/github/issues/covprehension/CoVprehension" alt="GitHub issues" />
    ·
    <img src="https://img.shields.io/github/contributors/covprehension/covprehension" alt="GitHub contributors" />
    <br />
    <img src="https://github.com/covprehension/CoVprehension/workflows/Jekyll%20site%20CI/badge.svg?branch=master" alt="Jekyll site CI" />
    ·
    <img src="https://img.shields.io/discord/690125443952672780?label=Discord" alt="Discord" />
  </p>
</p>

This repository holds the Jekyll sources of the CoVprehension website!

CoVprehension is a collective of researchers trying to explain the current epidemic of COVID-19 simply yet with scientific tools.

## How to contribute to the project

### I'm a writer / translator

Please go to the `_i18n/` sub-folder where everything's is explained ;)

[> Click me <](https://github.com/covprehension/CoVprehension/tree/master/_i18n)

### I'm a dev

#### I want to work on this website

Read the [contributing guidelines](https://github.com/covprehension/CoVprehension/blob/master/CONTRIBUTING.md) 👩‍💻

#### I want to work on a NetLogo simulation

Go on this other repository [covprehension/proto](https://github.com/covprehension/proto)

## Technical part

### Structure of the repository

<details>
<summary>View contents</summary>

```
$ tree
.
├── assets/
│   ├── lang/
│   |   ├── <translation files for JS simulations>
│   │   └── simu-XX.js -> ../../_i18n/fr/simu-XX.js
│   ├── vendor/ <default resources>
│   └── <custom JS/CSS files>
|
├── _i18n/ <== Folder where website is translated
│   ├── <anyLanguageCode>/
│   │   ├── pages/
│   │   │   ├── about.html
│   │   │   ├── resources.md
│   │   │   └── simulator.md
│   │   ├── _posts/
│   │   │   ├── YYYY-MM-DD-qXX.md
│   │   │   └── <All your questions>
│   │   └── simu-<anyLanguageCode>.js
│   └── <anyLanguageCode>.yml
|
├── img/
│   ├── about/
│   ├── post/
│   └── <website images>
│
├── _includes/
│   └── <Global part of website : Header/Footer/etc>
│
├── _layouts/
│   └── <HTML pages template>
│
├── posts/
│   └── <IGNORE ME, I'm a trap 🙊>
│
├── _pages/
│   └── <Defined layout for translated pages>
│
├── simulations/
│   ├── js/
│   │   └── <JS simulation in sub-dir>
│   └── <Web NetLogo export simulations>
│
├── _config.yml
│
└── <others uninteresting stuff...>

<plenty> directories, <too many> files
```

</details>

### Local installation & Setup

First of all, make sure ruby is intalled on your computer.

1. Clone the repo `git clone https://github.com/covprehension/CoVprehension.git`
2. Move in the folder `cd CoVprehension`
3. Install plugins: `bundle install`
4. Replace the symlink JS translation files by the real ones `rm -f assets/lang/*.js && cp _i18n/*/simu-*.js assets/lang/`
5. Build your site: `bundle exec jekyll serve`
6. Connect to your running instance [http://127.0.0.1:4000/CoVprehension/](http://127.0.0.1:4000/CoVprehension/)


### Global configuration of the website

All the global configuration of the site can be found in the file [`_config.yml`](https://github.com/RoiArthurB/CoVprehension/blob/master/_config.yml) which is structured as follow :

<details>
<summary>View contents</summary>
  
- General settings
  - `title` Global title
  - `email` Global mail 
  - `description`
  - `url`
  - `baseurl` root position of the website in the url variable 
    - Don't change me
  - `include` Jekyll collection list
- Social Profiles (all optionals)
  - `twitter_username`
  - `github_username`
  - `facebook_username`
  - `linkedin_username`
  - `rss_link`
  - `google_analytics`
- Build settings
  - `markdown` MarkDown compiler
  - `paginate`
  - `paginate_path` how to generate pagination url
  - `plugins` list of ruby plugins used in the website
- Multi language website => See https://github.com/kurtsson/jekyll-multiple-languages-plugin/#4-configuration
  - `languages` list of enabled languages
  - `exclude_from_localizations`
  
</details>

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/covprehension/CoVprehension/issues/new) here on GitHub!

## Made with

* Pipeline
  * Jekyll
  * GitHub Actions
  * GitHub Pages

* Front-end
  * Bootstrap / jQuery
    * Theme from [Start Bootstrap](https://startbootstrap.com/)

* Simulations
  * JS
    * [Particle.js](https://vincentgarreau.com/particles.js/)
    * [Charts.js](https://www.chartjs.org/)
  * NetLogo

## Copyright and License


The **code** of this project is licensed under the [***LGPL-3.0 License***](https://github.com/covprehension/CoVprehension/blob/master/LICENSE).

The **text content** in posts is licensed under the [![***CC BY-SA 4.0***](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/).

These **illustrations** in posts are licensed under [![***CC BY-NC-ND 4.0***](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/). 
