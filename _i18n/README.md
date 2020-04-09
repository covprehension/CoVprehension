# How to contributes

Hello fellow, you want to contribute to the CoVprehension project ? 

Here's 3 way to do so :

## Translate the website in a new language

<details>
<summary>See the explanation.</summary><br/>

Amazing ! It will help to website to grow even more !

Ok so you'll have some stuff to prepare before starting to translate !

### Your `codeLang`

First, you'll have to get your language code mark. Sounds complicated but it's just 2 letters to identify it (you can find them on [this website](http://www.lingoes.net/en/translator/langcode.htm)). I'll call this 2 letters `codeLang` now !

### Activate your language on the website

Ok now it's the most sensitive moment, you'll have to add that code in the configuration file of the whole website named `_config.yml` ([there](https://github.com/covprehension/CoVprehension/blob/master/_config.yml)). 

Don't worry it's simple, all you'll simply have to do is adding your `codeLang` in the array [line 30](https://github.com/covprehension/CoVprehension/blob/master/_config.yml#L30) like so :
```
old:
languages: ["fr", "en"]

new:
languages: ["fr", "en", "sv"]
                      ^^^^^^
```
Not that complicated 😉

### Prepare files

Now all you have to do is to duplicate files from another language in this folder `/_i18n/`.

So you'll have to duplicate the general translation file (like `/_i18n/fr.yml` into `/_i18n/<codeLang>.yml`) and the full translated content folder (like `/_i18n/fr/` into `/_i18n/<codeLang>/`).

### Start translate

You did it all, now you're ready to go and a full website is just waiting for your translation 😉

</details>

## Add a post in an existing language

<details>
<summary>See the explanation.</summary><br/>

Go in your language sub-directory and you should have everything explained overthere 😗

</details>

## Translate a post in an existing language

<details>
<summary>See the explanation.</summary><br/>

You just have to copy the post you want to translate from the original language folder to the language you want to translate it to. Example :
```
Original file in french :
CoVprehension/_i18n/fr/_posts/2020-03-24-q2.md
                    ^^

Translated file in english :
CoVprehension/_i18n/en/_posts/2020-03-24-q2.md
                    ^^
```

> ⚠️ Do not change the file name otherwise the website won't understand it ! ⚠️

Now translate it in your language and see that translation appeard on the website 🤗

</details>

## Report an issue on the website

<details>
<summary>See the explanation.</summary><br/>

The easiest way is to [open an issue on this repository](https://github.com/covprehension/CoVprehension/issues/new/choose) !

Otherwise you can also try to fix it and open a _Pull Request_ or send us a mail. 

</details>
