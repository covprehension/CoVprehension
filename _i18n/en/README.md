Hey! Welcome to you friend and thank you in advance for participating in the CoVprehension project 😀

Here's a short guide to explain how you can contribute to the website.

## How do I create a new item?

<details>
<summary>See the explanation</summary>

1. Go to subfolder [`_posts`](https://github.com/RoiArthurB/CoVprehension/tree/master/_i18n/fr/_posts)
2. Create a new file with the following format: `YYYYY-MM-DD-qXX.md`
3. **Copy and paste** then **Complete** the following header:
```
---
layout: post
title: "Question XX: Find a good title"
subtitle: "And a subtitle that tears his race apart"...

# Default mask image
#background: '/img/bg-index.jpg'

# Won't show up if empty
author_text: First name N., First name N.
author_simulations : First name N.
author_illustration: First name N., First name N.

# To not display the question in the global feed
# If you're in doubt, don't touch it :)
hidden: false

# If / Marks the question as 
# true / "processed"
# false / "in process"
publish: false
---

<!-- YOUR TEXT HERE -->
```
4. Fill in the content of the article in [HTML](https://www.w3schools.com/html/) or [MarkDown](https://www.markdownguide.org/) format

### Bonus

There's a template file with everything you can put in the posts available [here](https://github.com/covprehension/CoVprehension/blob/master/_i18n/fr/_posts/TEMPLATE-COMMUN.md) (button `raw` to see the code in _Markdown_).

### How can I see my article?

You've written your article and it's cool, but it would be even cooler to see your article directly on the website, right?

Either you're a developer and you know how to do it, or you're a normal human being and you're going to have to tinker a little bit!

**How to**

All the articles in the `_posts` folder are generated and accessible on the website, only the links for the articles _in process_ are missing.

To go and see the article on the website, you just have to take the name of the file and transform it like this :
```
                             2020-03-24-q0.md
                          \/  \/  \/ \/ \/ \/
https://covprehension.org/en/2020/03/24/q0.html
```

Easy, isn't it? 😉

</details>

## How do I get my files online?

You will need to put the files in particular folders according to their nature. Once they are uploaded you can add them in your article as shown in the [template](https://github.com/covprehension/CoVprehension/blob/master/_i18n/fr/_posts/TEMPLATE-COMMUN.md).

### Images

<details>
<summary>See the explanation</summary>

In the root directory `/img/posts` (you can click [here](https://github.com/covprehension/CoVprehension/tree/master/img/posts) to go directly into the directory).

</details>

### NetLogo simulations

<details>
<summary>See the explanation</summary>

#### Before uploading

1. NetLogo simulations must be exported via the NetLogo software by clicking "File" then "Save As NetLogo Web..."
2. You should name your file like this `CoVprehension_Confinement_Q<indexNumericArbitrary>.html`.

#### Where to upload

In the root directory `/simulations/` (you can click [here](https://github.com/covprehension/CoVprehension/tree/master/simulations) to go directly to the directory).

#### Use simulation in the page

You'll have to put this little piece of code by changing `<ArbitraryNumericIndex>` by the one you chose in the name of your file:

```
<a href="#" class="btn btn-primary" onclick="loadIframeSimulator(<indexNumericArbitrary>, this); return false;">Simulate the impact of containment on the epidemic curve</a>
<div class="iframeContainer"></div>
```

</details>

### JavaScript simulation

<details>
<summary>See the explanation</summary>

#### Resources

The library used is based on [particles.js](https://vincentgarreau.com/particles.js/) and has been reworked by @benoitgaudou and @RoiArthurB.

You'll find it [there](https://github.com/covprehension/CoVprehension/blob/master/assets/particles.js) `/assets/particles.js`.

#### Where to put the files

Call files are called dynamically in posts. They should be located in a single directory `/simulations/js/<numberQuestion>/` (with any name and called in alphabetical order). 

</details>

There, I hope you won't need any more help than what's written here. But if you ever do, come and ask your questions on Discord 😉
