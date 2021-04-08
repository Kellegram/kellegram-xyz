---
layout: layout.njk
title: Personal guides
---

# My personal guides

These are mostly for me, but maybe you will find anything useful here.

{% for guide in collections.guides %}
<h2><a href="{{ guide.url }}">{{ guide.data.title }}</a></h2>
<em>Last updated:{{ guide.date | date: "%Y-%m-%d" }}</em>
<hr>
{% endfor %}