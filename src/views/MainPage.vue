<template lang="pug">
div
  .body1#body1(v-scroll="scroll")
    .preloader-scene
      .loading-block
        .progress
      .preloader-block(id="preloadBlock")
        img(src="@/assets/Logo.png" style="width:50%; height:auto")
    Header.header#header
    .container 
      .hero
        span(style="text-transform:uppercase; font-size:35px; color: white; text-shadow: 2px 2px 4px black") построим современные и безопасные 
        span(style="text-transform:uppercase; font-size:60px; font-weight:900; color: white; text-shadow: 2px 2px 4px black") вентиляционные системы
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
            span.text-15 Мы строим вентиляционные системы от проекта до сдачи
            span.text-15 в эксплуатацию без привлечения сторонних 
            span.text-15 компаний и подрядчиков
          .text-description-block-section-two
            span.text-14 Это значит что вам не придется тратить свое время
            span.text-14 и нервы на общение с 4-6 разными подрядчиками по 
            span.text-14 каждому этапу строительства вентиляционной системы
          .text-description-block-section-two
            span.text-14 Вы изначально будете знать смету по всем работам и 
            span.text-14 эта цена не изменится 
      .blockRight-section-two
        .img-right-section-two  
      .img-garant
        img(src="@/assets/quality.png" style="width:30%; height:15%")
    .containerThree
      .text-title-section-three
        span(style="font-size:40px; font-weight:900") Что именно мы делаем
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
    .containerFor
      .blockLeft-section-for
        .text-block-main-section-for
          .text-block-section-for
            span.text-25 Неизменные 
            span.text-50-b стоимость 
            span.text-50-b и сроки 
          .text-description-block-section-for
            span.text-15 Мы несем ответственность за комплексный результат,
            span.text-15 поэтому все этапы работы над вентиляционной системой идут  
            span.text-15 параллельно без задержки:
          .text-block-ellipse-section-for
            .text-ellipse-section-for
              span.text-15 Проект
            .text-ellipse-section-for
              span.text-15 Коммуникации
            .text-ellipse-section-for
              span.text-15 Строительство
      .blockRight-section-for  
        .img-right-section-for
</template>

<script>
import Header from '../components/main/Header.vue'
import WorkType from '@/components/main/WorkType.vue';

export default {
 name:"MainPage",
 components: {
  Header,
  WorkType
 },
 mounted() {
  let el = document.getElementById('preloadBlock')
  el.addEventListener('animationend', function() { 
    let sceneDiv = document.querySelector(".preloader-scene");
    sceneDiv.className = "preloader-scene-end"; 
  })

 },
 computed: {},
 methods: {
  scroll() {
    if(window.scrollY > 100){
      document.getElementById("header").classList.add('headerScrollAnim')
    }
    else{
      document.getElementById("header").style.boxShadow = "5px 5px 15px #000"
    }
  },
 }
}
</script>

<style scoped>
* {
  --a: linear-gradient(90deg, #040D2C, #462A8B,#8D05D6);
  margin:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

.body1 {
  background-color: black;
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
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  overflow: hidden;
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
  height: 100vh;
  color: #000;
  margin-top: -3vw;
}

.containerTwo {
  background: #fff;
  justify-content: space-evenly;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 93vh;
  width: 100%;
  text-transform: uppercase;
  flex-wrap: wrap;
}


.blockLeft-section-two {
  width: 50%;
  height: 100%;
}

.blockRight-section-two {
  width: 50%;
  height: 90%;
}
.img-right-section-two {
  background: url("@/assets/KILLMEPLZX2_Large_spaceventilation_air_flow_white_purpleorange__0727ac3a-0c43-4562-8842-6e8eb968b88f.png");
  background-size: cover;
  margin-right: 5%;
  border-radius: 20px;
  box-shadow: 5px 5px 20px #000;
  height: 100%;
  width: 100%;
}
.text-block-main-section-two {
  margin-right: 20px;
}
.text-block-section-two{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgb(0, 118, 169);
  margin-top: 100px;
  margin-left: 20%;
}
.text-description-block-section-two {
  text-align: left;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  margin-top:  20px;
  margin-left: 20%;
}

.outline-border {
  width: 80%;
  border-radius: 15px;
  padding: 20px;
  border: 2px solid rgb(0, 0, 0, 0.2);
}
.img-garant{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-49.5%,-38em);
}
.containerThree {
  background: white;
  height: 93vh;
  width: 100%;
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
.mg-b-10 {
  margin-bottom: 10px;
}
.block-type-section-three {
  border: 1px solid white;
  box-shadow: 1px 2px 4px black; 
  width: 33.3%;
  height: 100%;
}

.containerFor {
  background: #fff;
  justify-content: space-evenly;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 93vh;
  width: 100%;
  text-transform: uppercase;
  flex-wrap: wrap;
}


.blockLeft-section-for {
  width: 50%;
  height: 100%;
}

.blockRight-section-for {
  width: 50%;
  height: 90%;
}
.img-right-section-for {
  background: url("@/assets/KILLMEPLZX2_Factory_ventilationwhite_purple_pastel_colors_high__715fc1d0-c4f6-4996-bb17-49634b6a0580.png");
  background-size: cover;
  margin-right: 5%;
  border-radius: 20px;
  box-shadow: 5px 5px 20px #000;
  height: 100%;
  width: 100%;
}
.text-block-main-section-two {
  margin-right: 20px;
}
.text-block-section-for{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgb(0, 118, 169);
  margin-top: 100px;
  margin-left: 20%;
}
.text-description-block-section-for {
  text-align: left;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  margin-top:  20px;
  margin-left: 20%;
}
.text-block-ellipse-section-for {
  text-align: left;
  display: flex;
  margin-top:  20px;
  margin-left: 20%;
}
.text-ellipse-section-for {
  width: 100%;
  min-height: 30px;
  background: #0076a9;
  color: white;
  box-shadow: 2px 2px 4px black;
  border-radius: 10px;
  margin-right: 10px;
  padding: 10px;
  text-align: center;
}
.hero {
  background: url('@/assets/ventFirst.jpg');
  background-size: 100%;
  justify-content: center;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
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
  padding: 25px;
  border: 2px solid #fff;
  border-radius: 30px;
  bottom: -20%;
  transition: transform .5s, box-shadow .5s;
  cursor: pointer;
}
.button:hover {
  box-shadow: 0 0 15px #000;
  transform: scale(1.03);
}
</style>