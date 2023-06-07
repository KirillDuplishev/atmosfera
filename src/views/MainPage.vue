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
        span.text-35-b Главная
        span.text-35-b Фотогалерея
        span.text-35-b Контакты
        span.text-35-b О нас
    
    .container 
      .hero
        span(style="text-transform:uppercase; font-size:2em; color: white; text-shadow: 2px 2px 4px black") построим современные и безопасные 
        span(style="text-transform:uppercase; font-size:5vw; font-weight:900; color: white; text-shadow: 2px 2px 4px black") вентиляционные системы
        v-btn.button.text-15-b Подробнее о нас

    SecondSection

    ThirdSection
    
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
    
    FourthSection
    
    FifthSection 
    
    SixthSection
    
    .containerScreenMap
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
import Header from '../components/main/Header'
import Burger from '../components/Burger'
import SideBarLeft from '../components/SideBarLeft'
import WorkType from '@/components/main/WorkType'
import WorkExamples from '@/components/main/WorkExamples';
import { store } from "@/store.js";
import SecondSection from '@/components/main/SecondSection'
import ThirdSection from '@/components/main/ThirdSection'
import FourthSection from '@/components/main/FourthSection'
import FifthSection from '@/components/main/FifthSection'
import SixthSection from '@/components/main/SixthSection'

export default {
 name:"MainPage",

 components: {
  Header,
  WorkType,
  WorkExamples,
  Burger,
  SideBarLeft,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection
 },

 data(){
  return {
    show:false
  }
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

    if(this.show) {
      document.getElementById("animHeader").style.background = "#000"
      document.getElementById("burgerHeaderMenu").classList.add("maxHeightMenu")
      document.getElementById("burgerHeaderMenu").style.justifyContent = "normal"
      document.getElementById("menuItems").classList.add("menuItemsNew")
    }

    else {
      document.getElementById("animHeader").style.background = "transparent"
      document.getElementById("burgerHeaderMenu").classList.remove("maxHeightMenu")
      // document.getElementById("burgerHeaderMenu").style.alignContent = "flex-start"
      document.getElementById("menuItems").classList.remove("menuItemsNew")
    }

  }

 },

 mounted() {
  let el = document.getElementById('preloadBlock')

  el.addEventListener('animationend', function() { 
    let sceneDiv = document.querySelector(".preloader-scene");
    sceneDiv.className = "preloader-scene-end"; 
  })

 },

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
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

}

.animHeader{
  width:100%;
  height:10%; 
  display: flex; 
  flex-direction: row; 
  justify-content: space-evenly; 
  align-items: center; 
  background:transparent;
  margin-top: 5%;
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
    background: #1D1D1F;
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
    padding: 20px;
    align-items:center;
    margin: 15px;
    border-radius: 10px;
    background: rgb(0, 0, 0, 0.6);
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
  background: url(@/assets/LogoBack.jpg) repeat-x;
  -webkit-background-clip: text;
  background-size: 40%;
  animation: clouds 13s linear infinite alternate;
}
</style>