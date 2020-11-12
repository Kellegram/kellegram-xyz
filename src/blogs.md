---
layout: layout.njk
pageTitle: Come and read a blog or two!
---

# My personal blogs


{% for blog in collections.blogs %}
<h2><a href="{{ blog.url }}">{{ blog.data.pageTitle }}</a></h2>
<em>Blog uploaded:{{ blog.date | date: "%Y-%m-%d" }}</em>
<hr>
{% endfor %}