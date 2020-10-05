---
layout: layout.liquid
pageTitle: Personal guides
---

# My personal guides

These are mostly for me, but maybe you will find anything useful here.

{% for guide in collections.guides %}
<h2><a href="{{ guide.url }}">{{ guide.data.pageTitle }}</a></h2>
<hr>
<em>Last updated:{{ guide.date | date: "%Y-%m-%d" }}</em>
{% endfor %}