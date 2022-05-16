---
layout: index
title: # should be set by _config

lang: en
lang-ref: home.md

banner:
  title: Welcome to Fullshare
  desc:
  content: |
    Fullshare Holdings Limited (HKSE: 00607.HK) is a multinational conglomerate and investment company. Founded in 2002 and listed on Hong Kong stock exchange in December 2013, Fullshare is headquartered in Nanjing, China with offices in Hong Kong, Singapore, and Australia.
  button:
    show: true
    url: "#aboutus"
    text: Continue
  image_url: 'images/background.jpg'

spotlight-about:
  title: About Us
  content: |
    <p>Fullshare Holdings Limited (“Group”; SEHK stock code: 00607.HK) has been listed on the Hong Kong Stock Exchange since the end of 2013.</p>
    <p>[expand]</p>
    <p>Fullshare Holdings Limited is a Chinese conglomerate focused on becoming a global leader in healthy living. The Group’s business can be categorized in four segments, namely, tourism, education and healthcare, property, as well as renewable energy. The group’s business and projects have expanded to Mainland China, Hong Kong, Singapore, Australia, etc.</p>    
    <p>[/expand]</p>
  button:
    show: true
    url: "pages/about"
    text: Learn More
  image_url: 'images/business/property/wonder_city/1.jpg'

spotlight-business:
  title: Our Business
  content: |
    <!--
    <ul class="alt">
    <li><a href="pages/tourism" class="button">Tourism</a></li>
    <li><a href="pages/education" class="button">Education & Healthcare</a></li>
    <li><a href="pages/renewable" class="button">Renewable Energy</a></li>
    <li><a href="pages/property" class="button">Property</a></li>
    </ul>
    -->
    <p>
    <a href="pages/tourism" class="button">Tourism</a>
    <a href="pages/education" class="button">Education & Healthcare</a>
    <a href="pages/renewable" class="button">Renewable Energy</a>
    <a href="pages/property" class="button">Property</a>
    </p>
  button:
    show: false
    url: "pages/business"
    text: Learn More
  image_url: 'images/business/property/yuhua_salon/3.jpg'

spotlight-governance:
  title: Corporate Governance
  content:
  button:
    show: true
    url: "pages/governance"
    text: Learn More
  image_url: 'images/business/tourism/sheraton/4.jpg'

spotlight-news:
  title: Company News
  content:
  button:
    show: true
    url: "pages/company_news"
    text: Learn More
  image_url: '/images/business/tourism/laguna/1.jpg'

spotlight-ir:
  title: Investor Relations
  content: |
    <!--
    <ul class="alt">
    <li><a href="pages/ir" class="button">Share Information</a></li>
    <li><a href="pages/ir_factsheet" class="button">Fact Sheet</a></li>
    <li><a href="pages/ir_interactive" class="button">Interactive Analysis</a></li>
    </ul>
    -->
    
    <a href="pages/ir#share_graph" class="button">Share Information</a>
    <a href="pages/ir#announcements" class="button">Announcements and Circulars</a>    
    <a href="pages/ir_reports" class="button">Financial Reports</a>
    <a href="pages/ir_factsheet" class="button">Fact Sheet</a>
    <a href="pages/ir_interactive" class="button">Interactive Analysis</a>
    <a href="pages/ir#Subscription" class="button">Subscription Centre</a>
   
  button:
    show: false
    url: "pages/business"
    text: Learn More
  image_url: 'images/business/property/residential/1.jpg'


items-contact:
  title: Contact Us
  content: Media & Investor Enquiries
  list:
    - title: Telephone
      content: <a href="tel:+852 3618 8462">+852 3618 8462</a>
      fa_class: fas fa-phone
    - title: Fax
      content: +852 3460 4237
      fa_class: fas fa-fax
    - title: Email
      content: <a href="mailto:fullshare@intelligentjoy.com">fullshare@intelligentjoy.com</a>
      fa_class: far fa-envelope
    - title: Address
      content: <a href="https://goo.gl/maps/kbvfw1tTZDXQmqYq5" target="_blank">Unit 2805, Level 28, Admiralty Centre Tower 1, 18 Harcourt Road, Admiralty, Hong Kong</a>
      fa_class: fas fa-map
---
<!-- Welcome Banner -->
{% include _banner.html key='' style='style5' scheme='invert' color='' size='fullscreen' content_align='left' img_pos='left' %}

<!-- About Us -->
{% include _spotlight.html key='spotlight-about' style='style1' orient='right' scheme='invert' color='' size='' content_align='left' img_pos='left' id='aboutus' %}

<!-- Our Business -->
{% comment %}
# finding font icon and formatting the item grid a bit time consumming right now
{% include _items.html key='items-businesses' style='style2' size='small' id='businesses' %}
{% endcomment %}
{% include _spotlight.html key='spotlight-business' style='style1' orient='left' scheme='' color='' size='' content_align='right' img_pos='left' id='businesses' %}


<!-- Corporate Goverance -->
{% include _spotlight.html key='spotlight-governance' style='style1' orient='right' scheme='invert' color='' size='' content_align='Center' img_pos='center' id='governance' %}

<!-- Company News -->
{% include _spotlight.html key='spotlight-news' style='style1' orient='left' scheme='' color='' size='' content_align='right' img_pos='center' id='news' %}

<!-- Investor Relations -->
{% include _spotlight.html key='spotlight-ir' style='style1' orient='right' scheme='invert' color='' size='' content_align='Center' img_pos='center' id='ir' %}

<!-- Contact Us -->
{% include _items.html key='items-contact' style='style3' size='small' id='contact' %}