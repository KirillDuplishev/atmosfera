<template lang="pug">
div
  .body1(v-scroll="scroll")
    Header.header#header
    .preloader-scene()
      .loading-block
        .progress
      .preloader-block(id="preloadBlock")
        img(src="@/assets/Logo.png" style="width:40%; height:20%")
    .container 
      .hero
        span(style="text-transform:uppercase; font-size:35px; color: white; text-shadow: 2px 2px 4px black") построим современные и безопасные 
        span(style="text-transform:uppercase; font-size:60px; font-weight:900; color: white; text-shadow: 2px 2px 4px black") вентиляционные системы
    .containerTwo
      .blockLeft-section-two
        .text-block-main-section-two
          .text-block-section-two
            span(style="font-size:25px") Вы получите 
            span(style="font-size:50px; font-weight:900") готовую 
            span(style="font-size:50px; font-weight:900") вентиляционную 
            span(style="font-size:50px; font-weight:900") систему 
            span(style="font-size:25px") сэкономив свое время
          .text-description-block-section-two.outline-border
            span.text-15 Мы строим вентиляционные системы от проекта до сдачи
            span.text-15 в эксплуатацию без привлечения сторонних 
            span.text-15 компаний и подрядчиков
          .text-description-block-section-two
            span.text-14 Это значит что вам не придется тратить свое время
            span.text-14 и нервы на общение с 4-6 разными подрядчиками по 
            span.text-14 каждому этапу строительства вентиляционной системы
          .text-description-block-section-two
            span.text-14 Вы изначально будете знать по всем работу и 
            span.text-14 эта цена не изменится 
      .blockRight-section-two  
      .img-garant
        img(src="@/assets/quality.png" style="width:30%; height:15%")
    .containerThree
      .text-title-section-three
        span(style="font-size:40px; font-weight:900") Что именно мы делаем
      .container-worktype-section-three
        .span-typework-section-three.mg-b-10
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
        .span-typework-section-three.mg-b-10
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
        .span-typework-section-three
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
          WorkType.block-type-section-three(nameBlock="Демонтаж" imgSrc="Logo")
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
    let sceneDiv = document.querySelector("div.preloader-scene");
    sceneDiv.className = "preloader-scene-end"; 
  })

 },
 computed: {},
 methods: {
  scroll :function(){
    if(window.scrollY > 100){
      document.getElementById("header").classList.add('scrollAnim')
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
  perspective: 1000px;
  margin:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

::-webkit-scrollbar {
  width: 0;
}

.body1 {
  background-color: black;
  position: relative;
}

.header {
  width: 100%;
  position: sticky;
  top: 0px;
  font-family: 'Inter', sans-serif;
  letter-spacing: -1px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  z-index: 1000;
}

.preloader-scene {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  flex-flow: column;
  overflow: hidden;
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
  justify-items: end;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 250%);
  z-index: 1001;
  animation: loading .2s ease forwards;
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
  background-color: #163355;
  animation: progressLine .4s ease forwards;
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
  animation: opacityBlock 1s linear forwards;
  animation-delay: .5s;
}

.container {
  display: flex;
  flex-flow: column;
  height: 100vh;
  color: #000;
  margin-top: -80px;
}

.containerTwo {
  background: #fff;
  justify-content: space-evenly;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
  text-transform: uppercase;
  flex-wrap: wrap;
}


.blockLeft-section-two {
  width: 50%;
  height: 100%;
}

.blockRight-section-two {
  background: url("@/assets/KILLMEPLZX2_Air_conditioning_air_flowsoft_light_realism_utopia__7a048083-1c05-4cd5-84db-cd816e8fa967.png");
  background-size: cover;
  width: 50%;
  height: 100%;
}
.text-block-section-two{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgb(0, 118, 169);
  margin-top: 100px;
  margin-left: 20px;
}
.text-description-block-section-two {
  text-align: left;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  margin-top:  20px;
  margin-left: 20px;
}

.outline-border {
  width: 80%;
  border-radius: 15px;
  padding: 20px;
  border: 2px solid rgb(0, 0, 0, 0.2);
}
.img-garant{
  position: absolute;
  top: 18%;
  left: 54.9%;
  transform: translate(-60%,-50%);
}
.containerThree {
  background: white;
  height: 100vh;
  width: 100%;
}
.text-title-section-three {
  width: 100%;
  height: 7%;
  color: rgb(0, 118, 169);
  margin-bottom: 20px;
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
  border-radius: 20px;
  border: 2px solid white;
  box-shadow: 2px 2px 4px black; 
  width: 33%;
  height: 100%;
  margin: auto;
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
.scrollAnim{
  --a: linear-gradient(90deg, #040D2C, #462A8B,#8D05D6);
  /* background: rgba(119, 0, 255, 0.5); */
  background: var(--a);
  transition: background 7s;
}
</style>