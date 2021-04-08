---
layout: layout.njk
title: Come and read a blog or two!
---

# My personal blogs

{% set maxblogs = collections.blogs.length | min(3) %}
<h1>Latest {% if maxblogs == 1 %}blog{% else %}{{ maxblogs }} blogs{% endif %}</h1>

{% set bloglist = collections.blogs | head(-3) %}
{% set bloglistCounter = collections.blogs | length %}
{% include "bloglist.njk" %}