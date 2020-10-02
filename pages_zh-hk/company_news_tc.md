---
layout: page
title: 公司新聞
nav_fname: nav_main

news_post:
  title: 公司新聞

banner:
  title: <br/>公司新聞
  desc:
  content:
  button:
    show: False
    url: "#share_graph"
    text: Shares Information
  image_url: '../images/business/tourism/laguna/1.jpg'

lang: tc
lang-ref: company_news.md
---
{% comment %}
{% include news_posts_gallery.html key='news_post' lang = 'tc' %}
{% endcomment %}

<!-- Welcome Banner -->
{% include _banner.html key='' style='style5' scheme='invert' color='' content_align='left' img_pos='left' %}

{% include news_posts.html lang = page.lang %}
