<template lang="pug">
div
  Header(:background="true")
  .desktop-version
    .containerTwo
      .blockLeft-section-two
        .text-block-main-section-two
          .text-block-section-two
            span.text-75-b О нас
          .text-description-block-section-two.outline-border
            span.text-17 Наша компания начала свое развитие в 2010-х годах. Начиналось все с простой идеи, которая обрела со временем более чёткие представления и формы.
          .text-description-block-section-two.outline-border
            span.text-17 Для нас очень важен каждый наш клиент, будь это крупные заводы, больницы, школы, либо муниципальные и федеральные заказчики, или обычные физические лица – ко всем нашим клиентам абсолютно одинаковый подход.
          .text-description-block-section-two.outline-border
            span.text-17 Для нас важны и качество выполняемых нами работ и наша репутация.
      .blockRight-section-two
        img.img-right-section-two(src="@/assets/aboutUs/ManAboutUs-edit.jpg" width="70%" height="auto")
    
    .our-advantages-block
      .title-advantages
        span.text-40-b Наши приемущества
      .advantages
        .elemnt
          img(src="@/assets/aboutUs/icon_1 .svg")
          span Профессиональные знания и опыт
        .elemnt
          img(src="@/assets/aboutUs/icon_2.svg")
          span Мы всегда работаем для клиента
        .elemnt
          img(src="@/assets/aboutUs/icon_3.svg")
          span Оптимальное соотношение цены и качества
        .elemnt
          img(src="@/assets/aboutUs/icon_4.svg")
          span Динамичность и гибкость
    
    .container-left
      .blockLeft-section
        img.right-section-img(src="@/assets/aboutUs/MenWorkingAboutUs.jpg"  width="70%" height="auto")
      .blockRight-section
        .text-block-main
          .text-description-block-section.outline-border
            span.text-17 Выполнение всех «договорных» обязательств, а порой и устных договорённостей является одним из важнейших приоритетов нашей компании. Многое в компании зависит от того, кто находится в управлении, и все сотрудники стараются также транслировать и выполнять данную политику, которая задаётся руководителем.
          .text-description-block-section.outline-border
            span.text-17 За годы сотрудничества с различными заказчиками, кроме основной цели всех предпринимателей, были неоднократно достигнуты и нематериальные цели, по завершении объектов в виде благодарностей от заказчиков, с некоторыми у нас сложилось многолетнее продолжительное взаимовыгодное сотрудничество, в котором все участники могут друг на друга положится.
          .text-description-block-section.outline-border
            span.text-17 Если вы разделяете наши ценности и приоритеты, мы с радостью готовы предположить вам сотрудничать с нашей компанией.
  

  .mobile-version
    .container-two-mobile

      .text-block-main-section-two-mobile
        .text-block-section-two-mobile
          span.text-50-b О нас
        .text-description-block-section-two-mobile.outline-border-mobile
            span.text-17 Наша компания начала свое развитие в 2010-х годах. Начиналось все с простой идеи, которая обрела со временем более чёткие представления и формы.
        .text-description-block-section-two-mobile.outline-border-mobile
          span.text-17 Для нас очень важен каждый наш клиент, будь это крупные заводы, больницы, школы, либо муниципальные и федеральные заказчики, или обычные физические лица – ко всем нашим клиентам абсолютно одинаковый подход.
        .text-description-block-section-two-mobile.outline-border-mobile
          span.text-17 Для нас важны и качество выполняемых нами работ и наша репутация.

      .advantages-block
        .title-advantages-block 
          span.text-50-b Наши преимущества
        .advantages-card
          .advantages-img-block 
            img(src="@/assets/aboutUs/icon_1 .svg")
          .advantages-title 
            span.text-30 Профессиональные знания и опыт
        .advantages-card
          .advantages-img-block 
            img(src="@/assets/aboutUs/icon_2.svg")
          .advantages-title 
            span.text-30 Мы всегда работаем для клиента
        .advantages-card
          .advantages-img-block 
            img(src="@/assets/aboutUs/icon_3.svg")
          .advantages-title 
            span.text-30 Оптимальное соотношение цены и качества
        .advantages-card
          .advantages-img-block 
            img(src="@/assets/aboutUs/icon_4.svg")
          .advantages-title 
            span.text-30 Динамичность и гибкость
      .text-block-main-section-two-mobile.background-linear.pd-t-60
        .text-description-block-section-two-mobile.outline-border-mobile
          span.text-17 Выполнение всех «договорных» обязательств, а порой и устных договорённостей является одним из важнейших приоритетов нашей компании. Многое в компании зависит от того, кто находится в управлении, и все сотрудники стараются также транслировать и выполнять данную политику, которая задаётся руководителем.
        .text-description-block-section-two-mobile.outline-border-mobile
          span.text-17 За годы сотрудничества с различными заказчиками, кроме основной цели всех предпринимателей, были неоднократно достигнуты и нематериальные цели, по завершении объектов в виде благодарностей от заказчиков, с некоторыми у нас сложилось многолетнее продолжительное взаимовыгодное сотрудничество, в котором все участники могут друг на друга положится.
        .text-description-block-section-two-mobile.outline-border-mobile
          span.text-17 Если вы разделяете наши ценности и приоритеты, мы с радостью готовы предположить вам сотрудничать с нашей компанией.
  Footer(:backgroundWhite="true")
</template>

<script>
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
export default {
  name:"AboutUs",

  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  .desktop-version {
    display: none;
  }
  .mobile-version {
    display: block !important;
  }
}
.column-width{
  width: 50%;
}
.containerTwo {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh + 60px);
  height: auto;
}
.container-two-mobile {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  margin-top:60px ;
  width: 100%;
}
.mobile-version {
  display: none;
}
.blockLeft-section-two {
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.text-block-main-section-two{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20% 10%;
}
.text-block-main-section-two-mobile {
  display: flex;
  background: linear-gradient(180deg, rgba(163, 143, 193, 0) 0%, rgba(163, 143, 193, 0.74) 56.19%);
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
}
.text-block-section-two{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left ;
  color: #452132;
}

.text-block-section-two-mobile {
  text-align: center;
  margin: 50px 0 27px 0;
  width: auto;
  height: auto;
  color: #452132;
}
.text-description-block-section-two {
  width: 575px;
  margin-top: 5%;
  text-align: left;
  line-height: 25px;
  color: black;
}
.text-description-block-section-two-mobile {
  width: 80%;
  display: flex;
  justify-content: center;
  height: auto;
  text-align: center;
  color: #333333;
  margin: 0 auto 30px auto;
  padding: 15px;
}


.outline-border {
  border-radius: 15px;
  padding: 20px;
  border: 2px solid rgb(0, 0, 0, 0.2);
}
.outline-border-mobile {
  height: auto;
  border-radius: 15px;
  border: 1px solid #474747;
  backdrop-filter: blur(50px);
}


.blockRight-section-two {
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img-right-section-two {
  border-radius: 20px;
  box-shadow: 5px 5px 20px #000;
}
.img-left-section-two{
  position: absolute;
  /* border-radius: 20px; */
  /* box-shadow: 5px 5px 20px #000; */
  left: 50%;
  top: 50%;
  transform: translate(-65%, -50%);
}
.our-advantages-block{
  height: 45vh;
  /* padding: 0 ; */
  background: linear-gradient(90deg, rgba(33, 95, 168, 0.75) 0%, rgba(207, 112, 177, 0.735) 51.87%, rgba(255, 147, 123, 0.75) 99.8%);
}
.title-advantages{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #452132;
  padding: 50px 0;
}
.advantages{
  padding-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.elemnt{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #fff;
}
.elemnt img {
  padding-bottom: 20px;
}
.panel-hide {
  z-index: 999;
  position: absolute;
}
.container-left {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 93vh;
  height: auto;
}
.blockLeft-section {
  width: 50%;
  min-height: 90%;
  height: auto;
}

.blockRight-section {
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.right-section-img {
  border-radius: 20px;
  box-shadow: 5px 5px 20px #000;
}
.text-block-section{
  text-align:left;
  color: #452132;
  margin-top: 100px;
  margin-left: 20%;
}
.text-description-block-section {
  width: 575px;
  margin-top: 5%;
  text-align: left;
  line-height: 25px;
  color: black;
}
.text-block-main{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20% 10%;
}
.advantages-block {
  background: #BBACD1;
  width: 100%;
  border-top: 1px solid #6D6D6D;
  border-bottom: 1px solid #6D6D6D;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title-advantages-block {
  width: auto;
  text-align: center;
  height: auto;
  color:#452132;
  margin: 25px auto 13px auto;
}
.advantages-card {
  width: 70%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 30px auto;
}
.advantages-img-block {
  width: 100%;
  text-align: center;
  height: 120px;
  width: 120px;
  margin: 0 auto;
}
.advantages-title {
  width: 100%;
  text-align: center;
  color: white;
  margin: 20px auto 0 auto;
}
.pd-t-60 {
  padding-top: 60px;
}
.background-linear {
  background: linear-gradient(180deg, #BBACD1 47.47%, rgba(187, 172, 209, 0) 100%) !important;
}
</style>