<template>
  <header id="home">

    <nav id="nav-wrap">

      <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
      <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

      <ul id="nav" class="nav">
        <li class="current"><a class="smoothscroll" href="#home">Домой</a></li>
        <li><a class="smoothscroll" href="#about">Обо мне</a></li>
        <li><a class="smoothscroll" href="#resume">Резюме</a></li>
        <li><a class="smoothscroll" href="#portfolio">Примеры</a></li>
        <li><a class="smoothscroll" href="#contact">Контакты</a></li>
      </ul> <!-- end #nav -->

    </nav> <!-- end #nav-wrap -->

    <div class="row banner">
      <div class="banner-text">
        <h1 class="responsive-headline">Я Елагин Дмитрий</h1>
        <h3> Front-end: <span>html</span>, <span>css</span>, <span>javascript</span>; Библиотеки и фреймворки: <span>jQuery</span>, <span>Angular</span>, <span>ExtJs</span>. Back-end: <span>NodeJs</span> и <span>MongoDb</span>; И прочее: <span>git</span>, <span>svn</span>, <span>nginx</span>...<br>
          Смотрите <a class="smoothscroll" href="#about">далее</a> и узнаете <a class="smoothscroll" href="#about">обо мне</a>.</h3>
        <hr />
        <ul class="social">
          <li><a href="mailto:elaginds@google.com"><i class="fa fa-envelope-o"></i></a></li>
          <li><a href="skype:elaginds?add"><i class="fa fa-skype"></i></a></li>
          <li><a href="https://github.com/midstrlk"><i class="fa fa-github"></i></a></li>
          <li><a href="http://hh.ru/resume/7fa9d5caff01e15df90039ed1f50383478386d"><i class="fa fa-header"></i></a></li>
        </ul>
      </div>
    </div>

    <p class="scrolldown">
      <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
    </p>

  </header>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>

</style>
