---
layout: layout.liquid
pageTitle: Come and read a blog or two!
---

A blog list will appear here soon v


{% for blog in collections.blogs %}
<h2><a href="{{ blog.url }}">{{ blog.data.pageTitle }}</a></h2>
<em>Last updated:{{ blog.date | date: "%Y-%m-%d" }}</em>
{% endfor %}