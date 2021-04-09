---
layout: layout.njk
title: Come and read a blog or two!
---

# My personal blogs


{% for blog in collections.blogs %}
<h2><a href="{{ blog.url }}">{{ blog.data.title }}</a></h2>
<em>Last updated:{{ blog.date | date: "%Y-%m-%d" }}</em>
<hr>
{% endfor %}