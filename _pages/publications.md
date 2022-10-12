---
layout: page
permalink: /publications/
title: publications and presentations
description: Peer-reviewed journal articles and conference presentations
years: [2022, 2021, 2020, 2019]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
