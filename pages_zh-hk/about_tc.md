---
layout: page
title: 關於我們
nav_fname: nav_main
banner:
  title: 公司戰略
  desc:
  content: |
    <ul>
      <li>以健康產業為戰略發展方向</li>
      <li>同時打造核心運營平臺及服務內容品牌</li>
      <li>並購優質品牌，聯接中國與海外市場，並同時進行產業鏈整合</li>
      <li>重資產專案與輕資產業務並進</li>
    </ul>
  button:
    show: true
    url: "#team"
    text: 了解更多
  image_url: "../images/background.jpg"

banner-office:
  title: 全球辦公室
  desc:
  content: |
    <ul>
      <li>香港</li>
      <li>新加坡</li>
      <li>南京</li>
      <li>重慶</li>
      <li>廣州</li>
      <li>深圳</li>
      <li>布里斯班</li>
      <li>墨爾本</li>
    </ul>
  button:
    show: true
    url: "#"
    text:
    custom_class: icon style2 fas fa-chevron-up
  image_url: "../images/office_map.png"

lang: tc
lang-ref: about.md
---

<!-- Welcome Banner -->

{% include _banner.html key='' style='style5' scheme='invert' color='' size='fullscreen' content_align='left' img_pos='left' id='about'%}

<!-- Management Team -->
<!-- Wrapper -->
<section class="wrapper style2 align-center" >
    <div class="inner medium">
      <h2 >管理團隊</h2>

      <section class="align-left" id = "team" >
        <h3 class="align-center">執行董事</h3>
        {% include expandable_ppl.html fname='team_exec_dir_tc' %}
      </section>

      <section class="align-left">
        <h3 class="align-center">獨立非執行董事</h3>
        {% include expandable_ppl.html fname='team_indy_dir_tc' %}
      </section>

      <section class="align-left">
        <h3 class="align-center">高級管理層</h3>
        {% include expandable_ppl.html fname='team_senior_mgt_tc' %}
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
