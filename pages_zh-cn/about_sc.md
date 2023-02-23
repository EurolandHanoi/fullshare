---
layout: page
title: 关于我们
nav_fname: nav_main
banner:
  title: 公司战略
  desc:
  content: |
    <ul>
      <li>以健康产业为战略发展方向</li>
      <li>同时打造核心运营平台及服务内容品牌</li>
      <li>并购优质品牌，联接中国与海外市场，并同时进行产业链整合</li>
      <li>重资产专案与轻资产业务并进</li>
    </ul>
  button:
    show: true
    url: "#team"
    text: 了解更多
  image_url: "../images/background.jpg"

banner-office:
  title: 全球办公室
  desc:
  content: |
    <ul>
      <li>香港</li>
      <li>新加坡</li>
      <li>南京</li>
      <li>重庆</li>
      <li>广州</li>
      <li>深圳</li>
      <li>布里斯班</li>
      <li>墨尔本</li>
    </ul>
  button:
    show: true
    url: "#"
    text:
    custom_class: icon style2 fas fa-chevron-up
  image_url: "../images/office_map.png"

lang: sc
lang-ref: about.md
---

<!-- Welcome Banner -->

{% include _banner.html key='' style='style5' scheme='invert' color='' size='fullscreen' content_align='left' img_pos='left' id='about'%}

<!-- Management Team -->
<!-- Wrapper -->
<section class="wrapper style2 align-center" >
    <div class="inner medium">
      <h2 >管理团队</h2>

      <section class="align-left" id = "team" >
        <h3 class="align-center">执行董事</h3>
        {% include expandable_ppl.html fname='team_exec_dir_sc' %}
      </section>

      <section class="align-left">
        <h3 class="align-center">独立非执行董事</h3>
        {% include expandable_ppl.html fname='team_indy_dir_sc' %}
      </section>

      <section class="align-left">
        <h3 class="align-center">高级管理层</h3>
        {% include expandable_ppl.html fname='team_senior_mgt_sc' %}
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
