<template lang="pug">
div
  .body1#body1(v-scroll="scroll")
    .preloader-scene
      .loading-block
        .progress
      .preloader-block(id="preloadBlock")
        img(src="@/assets/Logo.png" style="width:50%; height:auto")
    Header.header#header
    .burgerIco#burgerHeaderMenu
      .animHeader#animHeader
        img(src="@/assets/LogoHeader.png" style="width:10%; height:auto")
        .logo-text Атмосфера
        div(@click="showMenu")
          Burger
      .menuItems#menuItems
        span.text-17-b asdadasdasdasd
        span.text-17-b asdadasdasdasd
        span.text-17-b asdadasdasdasd
        span.text-17-b asdadasdasdasd
    //- SideBarLeft.burgerMenu
      //- span.burgerHeader Меню
      //- button.text-17-b(@click="$router.push({path:'/'})") Главная
      //- button.text-17-b(@click="$router.push({path:'/'})") Контакты
    .container 
      .hero
        span(style="text-transform:uppercase; font-size:2em; color: white; text-shadow: 2px 2px 4px black") построим современные и безопасные 
        span(style="text-transform:uppercase; font-size:5vw; font-weight:900; color: white; text-shadow: 2px 2px 4px black") вентиляционные системы
        v-btn.button.text-15-b Подробнее о нас
    .containerTwo
      .blockLeft-section-two
        .text-block-main-section-two
          .text-block-section-two
            span.text-25 Вы получите 
            span.text-50-b готовую 
            span.text-50-b вентиляционную 
            span.text-50-b систему 
            span.text-25 сэкономив свое время
          .text-description-block-section-two.outline-border
            span.text-17 Компания осуществляет комплексный подход к решению задач связанных с проектированием, к решению задач связанных с проектированием, поставкой, монтажом, ремонтом и обслуживанием систем вентиляции и кондиционирования любой сложности
          .text-description-block-section-two.outline-border
            span.text-17 На сегодняшний день потенциал компании позволяет осуществлять комплексное обслуживание объектов Заказчика, начиная от разработки проекта или подбора оборудования по готовым проектам, заканчивая доставкой, установкой, наладкой предлагаемой техники, а так же гарантийное и послегарантийное обслуживание, ремонт.  
      .blockRight-section-two
        .img-block-right-section-two
          img(src="@/assets/KILLMEPLZX2_Large_spaceventilation_air_flow_white_purpleorange__0727ac3a-0c43-4562-8842-6e8eb968b88f.png").img-right-section-two  
      //- .img-garant
        img(src="@/assets/quality.png" style="width:30%; height:auto")
    .containerThree
      .text-title-section-three
        span.text-40-b Что именно мы делаем
      .container-worktype-section-three
        .span-typework-section-three
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
        .span-typework-section-three
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
        .span-typework-section-three
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
    .containerThreeMobile
      .text-title-section-three
        span.text-40-b Что именно мы делаем
      .container-worktype-section-three
        .span-typework-section-three
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
        .span-typework-section-three
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
        .span-typework-section-three
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
        .span-typework-section-three
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
        //- WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
    .containerFor
      .blockLeft-section-four
        img(src="@/assets/KILLMEPLZX2_Factory_ventilationwhite_purple_pastel_colors_high__715fc1d0-c4f6-4996-bb17-49634b6a0580.png").img-right-section-four
      .blockRight-section-four
        .text-block-main-section-four
          .text-block-section-four
            span.text-29-b ООО "АТМОСФЕРА" предлагает
            span.text-29-b лучшее европейское оборудование 
          .text-description-block-section-four
            span.text-15 Все оборудование прошло сертификацию ISO 9001,
            span.text-15 а так же Российскую сертификацию "РОСТЕСТа".  
            span.text-15 Поставляемое оборудование отличается высокой
            span.text-15 надежностью и долговечностью его эксплуатации.
            span.text-15 В настоящее время ООО "АТМОСФЕРА" является 
            span.text-15 официальным диллером таких известных
            span.text-15 производителей климатического оборудования как:
          .main-block-ellipse-section-four
            .text-block-ellipse-section-four
              .text-ellipse-section-four
                span.text-15 LESSAR
              .text-ellipse-section-four
                span.text-15 Systemair
              .text-ellipse-section-four
                span.text-15 Remak
              .text-ellipse-section-four
                span.text-15 Swegon(Gold)
              .text-ellipse-section-four
                span.text-15 SHUFT
              .text-ellipse-section-four
                span.text-15 Korf
              .text-ellipse-section-four
                span.text-15 Dospel
              .text-ellipse-section-four
                span.text-15 Vertro
              .text-ellipse-section-four
                span.text-15 General
              .text-ellipse-section-four
                span.text-15 Mitsubishi Electric
              .text-ellipse-section-four
                span.text-15 Dantex
              .text-ellipse-section-four
                span.text-15 Panasonic
              .text-ellipse-section-four
                span.text-15 DAIKIN
              .text-ellipse-section-four
                span.text-15 Ballu
              .text-ellipse-section-four
                span.text-15 Royal
    .containerWorkExamples
      .text-main-block-section-examples
        span.text-40-b(style="color: rgb(0, 118, 169)") За 12 лет работы было сделано
        br          
        span.text-35-b(style="color: rgb(0, 118, 169)") более 100 объектов
        br          
        span.text-17-b Гостиницы, промышленные производства, сети магазинов, школы и т.д 
      .block-work-examples
        .span-work-examples
          .obj-block-work-examples
            WorkExamples(:numberObject="1")
          .obj-text-block-work-examples
            .obj-text-part-work-examples
              span.text-25-b(style="color: rgb(0, 118, 169)") Школа на Берша
              br
              span.text-19-b Произвели монтаж приточно-вытяжной вентиляции согласно проекту. На первом этапе проложили все воздуховоды и протянули кабеля к щиту управления вентиляцией. На втором этапе – произвели монтаж решеток и пуско-наладку системы.   
        .span-work-examples
          .obj-text-block-work-examples
            .obj-text-part-work-examples
              span.text-25-b(style="color: rgb(0, 118, 169)") Ещё одна школа на Берша(не та же)
              br
              span.text-19-b Произвели расчет и закупку воздуховодов и сопутствующих материалов. Осуществили монтаж воздухаводов, вытяжных зонтов и произвели пуско-наладочные работы.
          .obj-block-work-examples
            WorkExamples(:numberObject="2")
    .containerReviews
      .text-main-block-section-reviews
        span.text-17 Отзывы
        br
        span.text-40-b(style="color: rgb(0, 118, 169)") Мы-Надежные партнеры-профессионалы
        br
        span.text-25-b Мы придаем огромное значение прочным отношениям и убедились,
        br
        span.text-25-b что они приносят пользу нашему бизнесу. Отзывы клиентов жизненно 
        br
        span.text-25-b важны, чтобы помочь нам сделать все правильно.
      .main-block-reviews
        .block-reviews.mg-l-6(style="background: #c944b5")
          .text-block-reviews
            span.text-15 ООО «Радонеж» выражает благодарность компании ООО «Атмосерера» в лице — директора Дуплищева Ю.В. за добросовестную работу по монтажу, автоматизации и пуско-наладке вентиляционных систем. За время совместной деятельности ООО «Атмосферс» зарекомендовало себя как надежный партнер, способный качественно решать поставленные задачи. Также отмечаем большой опыт и высокую организацию при проведении работ. Мы довольны результатами Вашей работы и надеемся на дальнейшее сотрудничество!
          .text-description-block-reviews
            span.text-15 Директор ООО «Радонеж
        .block-reviews.mg-l-6.mg-r-6(style="background: #d35024")
          .text-block-reviews
            span.text-15 ЗАО «Техкрим» выражает благодарность компании ООО «Атмосфера» за плодотворное и взаимовыгодное сотрудничество по поставке и монтажу вентиляционного оборудования и оборудования для кондиционирования. Благодарим всех сотрудников компании за высокий профессионализм, ответственное отношение к своему делу и умение находить верные решения в сложных ситуациях! Надеемся на дальнейшее благотворное сотрудничество с вами!
          .text-description-block-reviews
            span.text-15 Директор ЗАО «Техкрим» 
        .block-reviews.mg-r-6(style="background: #4a9ec2")
          .text-block-reviews
            span.text-15 ООО НПЦ «Пружина» выражает благодарность вентиляционной компании «Атмосфера» за профессионализм, высокое качество исполнения работ с учетом пожеланий заказчика. Следует также отметить высокий уровень организации проведения работ и гибкость, проявляемую при принятии решений, требующих быстроты и оперативности. Выполненные для нас работы компанией «Атмосфера», позволяют характеризовать её как надежного делового партнера. Основываясь на опыте совместной работы надеемся на длительное сотрудничество!
          .text-description-block-reviews
            span.text-15 Генеральный директор ООО НПЦ «Пружина»
    //- CircleElement
    .containerScreenMap
      //- img(src="@/assets/screenMapMobile.png").img-map
      .info-block-section-map
        .text-main-block-section-map
          .text-block-section-map.mg-b-20
            span.text-35-b(style="color: rgb(0, 118, 169);text-transform: uppercase") Контакты
          .text-block-section-map.mg-b-20
            span.text-19-b 8-912-017-44-44
            br
            span.text-15 Ежедневно с 10:00 до 18:00 
          .text-block-section-map
            span.text-19-b Ижевск
            br
            span.text-15 ул. Максима Горького, 59а
        v-btn.button-section-map.text-15-b Заказать звонок
</template>

<script>
import Header from '../components/main/Header.vue'
import Burger from '../components/Burger.vue'
import SideBarLeft from '../components/SideBarLeft.vue'
import WorkType from '@/components/main/WorkType.vue'
import CircleElement from '@/components/main/CircleElement.vue'
import WorkExamples from '@/components/main/WorkExamples.vue';
import CarouselMain from '@/components/main/CarouselMain.vue';
import { store } from "@/store.js";

export default {
 name:"MainPage",
 components: {
  Header,
  WorkType,
  CircleElement,
  WorkExamples,
  CarouselMain,
  Burger,
  SideBarLeft
 },
 data(){
  return {
    show:false
  }
 },
 mounted() {
  let el = document.getElementById('preloadBlock')
  el.addEventListener('animationend', function() { 
    let sceneDiv = document.querySelector(".preloader-scene");
    sceneDiv.className = "preloader-scene-end"; 
  })

 },
 computed: {
  isPanelOpen() {
    return store.isNavOpen;
  },
 },
 methods: {
  scroll() {
    if(window.scrollY > 100){
      document.getElementById("header").classList.add('headerScrollAnim')
    }
    else{
      document.getElementById("header").style.boxShadow = "5px 5px 15px #000"
    }
  },
  showMenu(){
    this.show = !this.show
    if(this.show){
      document.getElementById("animHeader").style.background = "#000"
      document.getElementById("burgerHeaderMenu").classList.add("maxHeightMenu")
      document.getElementById("burgerHeaderMenu").style.justifyContent = "normal"
      document.getElementById("menuItems").classList.add("menuItemsNew")
    }
    else{
      document.getElementById("animHeader").style.background = "transparent"
      document.getElementById("burgerHeaderMenu").classList.remove("maxHeightMenu")
      document.getElementById("burgerHeaderMenu").style.justifyContent = "center"
      document.getElementById("menuItems").classList.remove("menuItemsNew")
    }
  }
 }
}
</script>

<style scoped>
.container-carousel {
  width: 100%;
  height: 100vh;
}
.body-carousel
{ 
	background-image: white;
	background-repeat: no-repeat;
	background-position: top center;
	width:100%;
	background-size:cover;
	height:100%;
	min-height:1000px;
	overflow:hidden;
	font-family: 'quicksandlight', Helvetica, Arial;
	color:#FFFFFF;
	text-shadow: -1px -1px 4px rgba(0, 0, 0, .35);
  filter: dropshadow(color=#000000, offx=1, offy=1);
}
* {
  --a: linear-gradient(90deg, #040D2C, #462A8B,#8D05D6);
  margin:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

.body1 {
  /* background-color: black; */
  position: relative;
}

.header {
  width: 100%;
  position: sticky;
  top: 0;
  font-family: 'Inter', sans-serif;
  letter-spacing: -1px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  z-index: 1000;
}

.menuItems{
  display: none;
}

.menuItemsNew{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.animHeader{
  width:100%;
  height:10%; 
  display: flex; 
  flex-direction: row; 
  justify-content: space-evenly; 
  align-items: center; 
  background:transparent
}
.maxHeightMenu{
  height: 100vh !important;
  background: #000 !important;
  transition: height .5s, background 0s;
}

.burgerIco{
  display: none;
  position: absolute;
}

@media screen and (max-width: 1000px)  {
  .header{
    display: none !important;
  }
  .burgerIco{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-direction: column;
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 60px;
    background: #2C0133;
    box-shadow: 5px 5px 15px #000;
    transition: all .5s;
  }
  .container{
    margin-top: 0 !important;
  }
  
}

.preloader-scene {
  position: fixed;
  display: block;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  z-index: 999999999999;
}

.preloader-scene-end {
  display: none;
}
.loading-block {
  position: absolute;
  display: flex;
  justify-content: center;
  justify-items: center;
  margin-top: 60vh;
  z-index: 1001;
  animation: loading 2s ease forwards;
  animation-delay: .5s;
}

@keyframes loading {
  from {
    opacity: 1;
  }

  to  {
    opacity: 0;
  }
}

.progress {
  width: 200px;
  height: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
}

.progress:before {
  content: '';
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  background-color: #fff;
  animation: progressLine 1.3s ease forwards;
  border-radius: 4px;
}

@keyframes progressLine  {
  from  {
    width: 0px;
  }

  to {
    width: calc(100% - 4px);
  }
}

@keyframes opacityBlock {
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}

.preloader-block {
  width: 100vw;
  height: 100vh;
  background: #000;
  background-position: bottom;
  animation: opacityBlock 1.5s linear forwards;
  animation-delay: .5s;
}

.container {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  height: auto;
  width: 100%;
  color: #000;
  margin-top: -3vw;
}

.containerTwo {
  position: relative;
  background: #fff;
  display: flex;
  min-height: 93vh;
  height: auto;
  width: 100%;
  text-transform: uppercase;
}
@media screen and (max-width: 1300px) {
  .containerTwo {
    min-height: 93vh;
    height: auto;  
  }
}
@media screen and (max-width: 1000px) {
  .containerTwo {
    display: block;
  }
}

.blockLeft-section-two {
  width: 50%;
  height: 100%;
}
@media screen and (max-width: 1000px) {
  .blockLeft-section-two {
    background: url("@/assets/KILLMEPLZX2_Large_spaceventilation_air_flow_white_purpleorange__0727ac3a-0c43-4562-8842-6e8eb968b88f.png");
    background-size: cover;
    width: 100%;
    min-height: 93vh;
    height: auto;
    text-align: center;
  }
}

.blockRight-section-two {
  width: 50%;
  min-height: 90%;
  padding: 20px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
@media screen and (max-width: 1000px) {
  .blockRight-section-two {
    display: none;
  }
}
.img-block-right-section-two {
  width: auto;
}
.img-right-section-two {
  background-size: cover;
  border-radius: 20px;
  box-shadow: 5px 5px 20px #000;
  height: 100%;
  width: 100%;
}
@media screen and (max-width: 1000px) {

}
.text-block-main-section-two {
  margin-right: 20px;
}
@media screen and (max-width: 1000px) {
  .text-block-main-section-two {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.text-block-section-two{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgb(0, 146, 209);
  margin-top: 100px;
  margin-left: 10%;
}
@media screen and (max-width: 1000px) {
  .text-block-section-two {
    margin-top: 0px;
    padding-top: 20px;
    align-items:center;
    margin: auto; 
    text-shadow: 2px 2px 4px black 
    /* text-shadow: 5px 5px 10px #000; */
  }
}
.text-description-block-section-two {
  text-align: left;
  line-height: 25px;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  color: black;
  margin-top:  20px;
  margin-left: 10%;
}
@media screen and (max-width: 1000px) {
  .text-description-block-section-two {
    text-align: center;
    color: white;
    margin: auto;
    background: rgb(0, 0, 0, 0.4);
  }
}
.outline-border {
  width: auto;
  height: auto;
  border-radius: 15px;
  padding: 20px;
  border: 2px solid rgb(0, 0, 0, 0.2);
}
@media screen and (max-width: 1000px) {
  .outline-border {
    width: 80%;
    margin: 10px;
  }
}
.img-garant{
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%,-100%);
}
.containerThree {
  background: white;
  min-height: 93vh;
  height: auto;
  width: 100%;
}
.containerThreeMobile {
  display: none;
  background: white;
  min-height: 100vh;
  height: auto;
  width: 100%;
  border-top:2px solid rgba(0, 0, 0, .9) ;
  /* border-bottom:20px solid rgba(0, 0, 0, .9); */
}

@media screen and (max-width: 1000px) {
  .containerThree{
    display: none;
  }
  .containerThreeMobile{
    display: block;
  }
  .block-type-section-three{
    width: 50% !important;
  }
  .text-title-section-three span{
    font-size: 30px !important;
  }

}
.text-title-section-three {
  width: 100%;
  height: 10%;
  color: rgb(0, 118, 169);
  padding-top: 20px;
  margin-bottom: 10px;
}
.container-worktype-section-three {
  width: 100%;
  height: 90%;
}

.span-typework-section-three {
  width: 100%;
  height: 30%;
  display: flex;
}
@media screen and (max-width: 1000px) {
  .span-typework-section-three {
    height: 25%;
  }
}
.mg-b-10 {
  margin-bottom: 10px;
}
.block-type-section-three {
  border: 1px solid white;
  box-shadow: 1px 2px 4px black; 
  width: 33.3%;
  height: 100%;
  cursor: pointer;
  transition: transform .5s, box-shadow .5s;
}
@media screen and (max-width: 1000px) {
  .block-type-section-three {
    width: auto;
    height: auto;
  }
  .block-type-section-three:hover{
    transform: scale(1);
  }
}
.block-type-section-three:hover {
  box-shadow: 0 0 15px #000;
  cursor: pointer;
}
.containerFor {
  position: relative;
  background: #fff;
  display: flex;
  min-height: 93vh;
  height: auto;
  width: 100%;
  text-transform: uppercase;
}

.blockLeft-section-four {
  width: 40%;
  min-height: 90%;
  padding: 20px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
@media screen and (max-width: 1000px) {
  .blockLeft-section-four {
    display: none;
  }
}

.blockRight-section-four {
  width: 60%;
  height: 100%;
}
@media screen and (max-width: 1000px) {
  .blockRight-section-four {
    background: url("@/assets/KILLMEPLZX2_Factory_ventilationwhite_purple_pastel_colors_high__715fc1d0-c4f6-4996-bb17-49634b6a0580.png");
    background-size: cover;
    width: 100%;
    min-height: 93vh;
    height: auto;
    text-align: center;
  }
}
.img-right-section-four {
  background-size: cover;
  border-radius: 20px;
  box-shadow: 5px 5px 20px #000;
  height: 100%;
  width: 100%;
}
.text-block-main-section-two {
  margin-right: 20px;
}
@media screen and (max-width: 1000px) {
  .text-block-main-section-two {
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
.text-block-section-four{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgb(0, 118, 169);
  margin-top: 100px;
  margin-left: 20%;
}
@media screen and (max-width: 1300px) {
  .text-block-section-four {
    margin-top: 0px;
    padding-top: 20px;
    align-items:center;
    margin: auto;
  }
}

@media screen and (max-width: 1000px) {
  .text-block-section-four {
    /* margin-top: 0px; */
    padding: 20px;
    align-items:center;
    margin: 15px;
    border-radius: 10px;
    background: rgb(0, 0, 0, 0.6);
  }
}
.text-description-block-section-four {
  text-align: left;
  line-height: 25px;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  color: black;
  margin-top:  20px;
  margin-left: 20%;
}
@media screen and (max-width: 1300px) {
  .text-description-block-section-four {
    text-align: center;
    color: black;
    margin: auto;
  }
}
@media screen and (max-width: 1000px) {
  .text-description-block-section-four {
    text-align: center;
    color: white;
    margin: 15px;
    border-radius: 10px;
    background: rgb(0, 0, 0, 0.6);
  }
}
.text-block-ellipse-section-four {
  width: auto;
  flex-wrap: wrap;
  gap: 10px;
  text-align: left;
  display: flex;
  margin-top:  20px;
  margin-left: 20%;
}
@media screen and (max-width: 1000px) {
  .main-block-ellipse-section-four {
    margin: 0 auto 15px auto;
    width: 80%;
    text-align: center;
  }
  .text-block-ellipse-section-four {
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: auto;
  }
}
.text-ellipse-section-four {
  width: 180px;
  height: min-content;
  background: #0076a9;
  color: white;
  box-shadow: 2px 2px 4px black;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}
@media screen and (max-width: 463px) {
  .text-ellipse-section-four {
    width: 150px;   
  }
}
@media screen and (max-width: 388px) {
  .text-ellipse-section-four {
    width: 135px;   
  }
}
.hero {
  background: url('@/assets/ventFirst.jpg');
  background-size: cover;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  min-height: 100vh;
  height: auto;
  width: 100%;
}
@media screen and (max-width: 1000px) {
  .hero {
    background-position-x: 50%;
  }
  .hero span:first-child{
    color: red;
    font-size: 4.5vw !important;
  }
  .hero span:nth-child(2n){
    font-size: 8vw !important;
  }
}
.heroBlur{
  background: transparent;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hide{
  background: #000;
}
.headerScrollAnim{
  background: var(--a);
  transition: background 7s;
}
.button{
  position: relative;
  width: auto;
  color: #fff;
  background: linear-gradient(37deg, rgba(127,6,255,1) 40%, rgba(12,12,255,1) 100%, rgba(0,212,255,1) 100%);
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 30px;
  bottom: -20%;
  transition: transform .5s, box-shadow .5s;
  cursor: pointer;
  text-decoration: none;
}
.button:hover {
  box-shadow: 0 0 15px #000;
  transform: scale(1.03);
}
.containerWorkExamples {
  position: relative;
  background: #fff;
  width: 100%;
  min-height: 93vh;
  height: auto;
}
.text-main-block-section-examples {
  height: 15%;
  text-align: center;
}
.block-work-examples {
  min-height: 85%;
  height: auto;
  width: 100%;
}
.span-work-examples {
  min-height: 50%;
  height: auto;
  width: 100%;
  display: flex;
  border: 1px solid black;
}

@media screen and (max-width: 900px) {
  .span-work-examples {
    display: block;
  }
}
.obj-block-work-examples {
  width: 70%;
  min-height: 90%;
  height: auto;
}
@media screen and (max-width: 900px) {
  .obj-block-work-examples {
    width: 100%;
    min-height: 50%;
  }
}
.obj-text-block-work-examples {
  width: 30%;
  height: 100%;
  text-align: center;
}
@media screen and (max-width: 900px) {
  .obj-text-block-work-examples {
    width: 100%;
    min-height: 50%;
    height: auto;
  }
}
.obj-text-part-work-examples {
  width: 100%;
  height: min-content;
  padding: 20px 10px;
}
.containerReviews {
  background: #fff;
  width: 100%;
  min-height: 93vh;
  height: auto;
}
@media screen and (max-width: 1200px) {
  .containerReviews {
    min-height: 77vh;
    height: auto;
  }
}
.text-main-block-section-reviews {
  width: 100%;
  height: 25%;
  text-align: center;
}
.main-block-reviews {
  height: 65%;
  width: 100%;
  /* display: flex; */
}
.block-reviews {
  color: white;
  height: auto;
  width: 80%;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 2px 2px 4px black;
  margin: 20px auto 20px auto;
}
/* .mg-l-6 {
  margin-left: 6.25%;
}
.mg-r-6 {
  margin-right: 6.25%;
} */
.text-block-reviews {
  display: flex;
  align-items: center;
  height: auto;
  width: 100%;
  text-align: center;
}
.text-description-block-reviews {
  padding-top: 20px;
  height: 20%;
  width: 100%;
  text-align: center;
}

.containerScreenMap {
  background: url('@/assets/screen-map.png');
  background-size: cover;
  min-height: 93vh;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
@media screen and (max-width: 1300px) {
  .containerScreenMap {
    background-size: cover;
    min-height: 93vh;
    height: auto;
    width: 100%;
  }
}
@media screen and (max-width: 950px) {
  .containerScreenMap {
    background: url('@/assets/screenMapMobileTwo.png');
  }
}
@media screen and (max-width: 590px) {
  .containerScreenMap {
    background: url('@/assets/screenMapMobile.png');
  }
}
.info-block-section-map {
  position: relative;
  background: white;
  border-radius: 5%;
  box-shadow: 3px 3px 20px black;
  width: 400px;
  height: 300px;
}
@media screen and (max-width: 1300px) {
  .info-block-section-map {
    top: 20px;
    left: 20px;
    width: 30%;
    min-height: 50%;
    height: 300px;
  }
}
@media screen and (max-width: 590px) {
  .info-block-section-map {
    top: auto;
    left: auto;
    width: 60%;
    min-height: 50%;
    height: auto;
  }
}
.text-main-block-section-map {
  padding-top: 20px;
  margin: auto;
  min-height: 70%;
  height: auto;
  min-width: 60%;
  max-width: 80%;
  background: white;
}
.text-block-section-map {
  min-height: 20%;
  height: auto;
  width: 100%;
  text-align: center;
}
.mg-b-20 {
  margin-bottom: 10%;
}
.button-section-map{
  position: relative;
  width: auto;
  color: #fff;
  background: linear-gradient(37deg, rgba(127,6,255,1) 40%, rgba(12,12,255,1) 100%, rgba(0,212,255,1) 100%);
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 30px;
  /* bottom: 15%; */
  transition: transform .5s, box-shadow .5s;
  margin: 10px auto 10px auto;
}
.button-section-map:hover {
  box-shadow: 0 0 15px #000;
  transform: scale(1.03);
}
.burgerHeader{
  font-size: 25px;
  font-family: monospace;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: center;
}
/* .burgerMenu{
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  gap: 10px;
} */
.burgerMenu button {
  border-radius: 20px;
  padding: 10px;
  background: linear-gradient(37deg, rgba(127,6,255,1) 21%, rgba(0,212,255,1) 52%, rgba(0,0,255,1) 100%);
}
.logo-text {
  margin-left: 5vw;
  font-family: Arial;
  font-size: 25px;
  font-weight: 900;
  text-transform: uppercase;
  color: rgba(255,255,255,.2);
  /* background: url(https://kipmu.ru/wp-content/uploads/kobobl.jpg) repeat-x; */
  background: url(@/assets/LogoBack.jpg) repeat-x;
  -webkit-background-clip: text;
  background-size: 40%;
  animation: clouds 13s linear infinite alternate;
}
</style>