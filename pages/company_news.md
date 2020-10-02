---
layout: page
title: Company News
nav_fname: nav_main

news_post:
  title: Company News

banner:
  title: <br/>Company News
  desc:
  content:
  button:
    show: False
    url: "#share_graph"
    text: Shares Information
  image_url: '../images/business/tourism/laguna/1.jpg'

lang: en
lang-ref: company_news.md
---
{% comment %}
{% include news_posts_gallery.html key='news_post'%}
{% endcomment %}

<!-- Welcome Banner -->
{% include _banner.html key='' style='style5' scheme='invert' color='' content_align='left' img_pos='left' %}

{% include news_posts.html lang = page.lang %}
