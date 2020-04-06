---
layout: page
permalink: /about/
title: "{% t about.title %}"
description: "{% t about.subtitle %}"
background: '/img/bg-about.jpg'
---

<style>
	li img { 
		width: 10em; 
		border-radius: 25px;
	}
	.mt-0 {
		margin-top: 0.5em !important;
		margin-bottom: 0 !important;
	}
	header.masthead .page-heading, header.masthead .post-heading, header.masthead .site-heading {
    	padding: 100px 0;
	}
</style>

{% translate_file pages/about.html %}