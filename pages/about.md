---
layout: page
title: About Us
nav_fname: nav_main
banner:
  title: Company Strategy
  desc:
  content: |
    <ul>
      <li>strategically develop in healthcare and renewable energy industries</li>
      <li>build up both core operation platform and service provider brands</li>
      <li>acquire high quality brands, link China market with overseas, build up the whole industry link</li>
      <li>develop both heavy-asset projects and light-asset business</li>
    </ul>
  button:
    show: true
    url: "#team"
    text: Continue
  image_url: "../images/background.jpg"

banner-office:
  title: Global Office
  desc:
  content: |
    <ul>
      <li>Hong Kong</li>
      <li>Singapore</li>
      <li>Nanjing</li>
      <li>Chongqing</li>
      <li>Guangzhou</li>
      <li>Shenzhen</li>
      <li>Brisbane</li>
      <li>Melbourne</li>
    </ul>
  button:
    show: true
    url: "#"
    text:
    custom_class: icon style2 fas fa-chevron-up
  image_url: "../images/office_map.png"

lang: en
lang-ref: about.md
---

<!-- Welcome Banner -->

{% include _banner.html key='' style='style5' scheme='invert' color='' size='fullscreen' content_align='left' img_pos='left' id='about'%}

<!-- Management Team -->
<!-- Wrapper -->
<section class="wrapper style2 align-center" >
    <div class="inner medium">
      <h2 >Management Team</h2>

      <section class="align-left" id = "team" >
        <h3 class="align-center">Executive Directors</h3>
        {% include expandable_ppl.html fname='team_exec_dir' %}
      </section>

      <section class="align-left">
        <h3 class="align-center">Independent Non-executive Directors</h3>
        {% include expandable_ppl.html fname='team_indy_dir' %}
      </section>

      <section class="align-left">
        <h3 class="align-center">Senior Management</h3>
        {% include expandable_ppl.html fname='team_senior_mgt' %}
      </section>

    <ul class="actions vertical">
      <li><a href="#" class="icon style2 fas fa-chevron-up"></a></li>
    </ul>
    </div>
    <!--
    <div class="image">
      <img src="../images/spotlight01.jpg" alt="" />
    </div>
    -->

</section>

<!-- Global Office -->

{% include _banner.html key='banner-office' style='style2' scheme='invert' color='orient-left' size='fullscreen' content_align='left' img_pos='left' id='office' %}
