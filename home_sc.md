---
layout: index
title: # should be set by _config

lang: sc
lang-ref: home.md

banner:
  title: 丰盛 Fullshare
  desc:
  content: |
    丰盛控股有限公司（丰盛）（股份代号：607.HK）为一家跨国性综合型企业和投资公司。集团创立于2002年，在中国南京设立总部，更先后在香港、新加坡及澳洲设立办公室。 2013年12月，成功于香港联合交易所上市。
  button:
    show: true
    url: "#aboutus"
    text: 了解更多
  image_url: "images/background.jpg"

spotlight-about:
  title: 关于我们
  content: |
    <p>丰盛控股有限公司（股份代号：607.HK）于2013年底于香港交易所上市。</p>
    <p>[expand]</p>
    <p>作为一家中国的综合性企业，丰盛控股有限公司致力成为全球领先的大健康生活服务商。本集团业务聚焦于旅游度假、教育医疗、健康地产、再生能源四大产业板块，业务及项目遍及中国大陆、香港、新加坡、澳洲等国家和地区。</p>    
    <p>[/expand]</p>
  button:
    show: true
    url: "pages_zh-cn/about_sc"
    text: 了解更多
  image_url: "images/business/property/wonder_city/1.jpg"

spotlight-business:
  title: 我们的业务
  has_carousel: true
  content: |
    <!--
    <ul class="alt">
    <li><a href="pages_zh-cn/tourism_sc" class="button">旅游度假</a></li>
    <li><a href="pages_zh-cn/education_sc" class="button">教育医疗</a></li>
    <li><a href="pages_zh-cn/renewable_sc" class="button">再生能源</a></li>
    <li><a href="pages_zh-cn/property_sc" class="button">健康地产</a></li>
    </ul>
    -->
    <p>
    <a href="pages_zh-cn/tourism_sc" class="button">旅游度假</a>
    <a href="pages_zh-cn/education_sc" class="button">教育医疗</a>
    <a href="pages_zh-cn/renewable_sc" class="button">再生能源</a>
    <a href="pages_zh-cn/property_sc" class="button">健康地产</a>
    </p>
  button:
    show: false
    url: "pages_zh-cn/business_sc"
    text: 了解更多
  image_url: "images/business/property/yuhua_salon/1.jpg"
  image_url_slide_1: "images/business/property/yuhua_salon/1-slide.jpg"
  image_url_slide_2: "images/business/property/yuhua_salon/2-slide.png"
  image_url_slide_3: "images/business/property/yuhua_salon/3-slide.jpg"
  image_url_slide_4: "images/business/property/yuhua_salon/4-slide.jpg"

spotlight-governance:
  title: 企业管治
  content:
  button:
    show: true
    url: "pages_zh-cn/governance_sc"
    text: 了解更多
  image_url: "images/business/tourism/sheraton/4.jpg"

spotlight-news:
  title: 公司新闻
  content:
  button:
    show: true
    url: "pages_zh-cn/company_news_sc"
    text: 了解更多
  image_url: "../images/business/tourism/laguna/3.jpg"

spotlight-ir:
  title: 投资者关系
  content: |
    <!--
    <ul class="alt">
    <li><a href="pages/ir" class="button">Share Information</a></li>
    <li><a href="pages/ir_factsheet" class="button">Fact Sheet</a></li>
    <li><a href="pages/ir_interactive" class="button">Interactive Analysis</a></li>
    </ul>
    -->
    <p>
    <a href="pages_zh-cn/ir_sc#share_graph" class="button">股价资讯</a>	
    <a href="pages_zh-cn/ir_sc#announcements" class="button">公告与通函</a>	    
    <a href="pages_zh-cn/ir_reports_sc" class="button">财务及ESG报告</a>
    <a href="pages_zh-cn/ir_factsheet_sc" class="button">公司一览表</a>
    <a href="pages_zh-cn/ir_interactive_sc" class="button">互动分析</a>
    <a href="pages_zh-cn/ir_sc#Subscription" class="button">电邮订阅中心</a>	
    </p>
  button:
    show: false
    url: "pages/business"
    text: Learn More
  image_url: "images/business/property/residential/1.jpg"

items-contact:
  title: 联系我们
  content: 媒体及投资者查询
  list:
    - title: 电话
      content: <a href="tel:+852 3618 8462">+852 3618 8462</a>
      fa_class: fas fa-phone
    - title: 传真
      content: +852 3460 4237
      fa_class: fas fa-fax
    - title: 电邮
      content: <a href="mailto:fullshare@intelligentjoy.com">fullshare@intelligentjoy.com</a>
      fa_class: far fa-envelope
    - title: 公司地址
      content: <a href="https://goo.gl/maps/kbvfw1tTZDXQmqYq5" target="_blank">香港金钟夏悫道18号海富中心1座28楼2805室</a>
      fa_class: fas fa-map
---

<!-- Welcome Banner -->

{% include _banner.html key='' style='style5' scheme='invert' color='' size='fullscreen' content_align='left' img_pos='left' %}

<!-- About Us -->

{% include _spotlight.html key='spotlight-about' style='style1' orient='right' scheme='invert' color='' size='' content_align='left' img_pos='center' id='aboutus' %}

<!-- Our Business -->

{% comment %}

# finding font icon and formatting the item grid a bit time consumming right now

{% include _items.html key='items-businesses' style='style2' size='small' id='businesses' %}
{% endcomment %}
{% include _spotlight.html key='spotlight-business' style='style1' orient='left' scheme='' color='' size='' content_align='right' img_pos='center' has_carousel='true' id='businesses' %}

<!-- Corporate Goverance -->

{% include _spotlight.html key='spotlight-governance' style='style1' orient='right' scheme='invert' color='' size='' content_align='Center' img_pos='center' id='governance' %}

<!-- Company News -->

{% include _spotlight.html key='spotlight-news' style='style1' orient='left' scheme='' color='' size='' content_align='right' img_pos='center' id='news' %}

<!-- Investor Relations -->

{% include _spotlight.html key='spotlight-ir' style='style1' orient='right' scheme='invert' color='' size='' content_align='Center' img_pos='center' id='ir' %}

<!-- Contact Us -->

{% include _items.html key='items-contact' style='style3' size='small' id='contact' %}
