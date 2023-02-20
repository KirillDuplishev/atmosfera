<template lang="pug">
div
  .body1(v-scroll="scroll")
    Header.header#header
    .preloader-scene()
      .loading-block
        .progress
      .preloader-block(id="preloadBlock")
        img(src="@/assets/Logo.png" style="width:40%; height:20%")

      //-   span.span1 Атмо
      //- .preloader-block
      //-   span.span2 сфера
    .container 
      .hero
        span(style="text-transform:uppercase; font-size:25px") построим современные и безопасные 
        span(style="text-transform:uppercase; font-size:60px; font-weight:900") вентиляционные системы
      //- .heroBlur
    .containerTwo
      .blockLeft-section-two
        .text-block-section-two
          span(style="font-size:25px") Вы получите 
          span(style="font-size:50px; font-weight:900") готовую 
          span(style="font-size:50px; font-weight:900") вентиляционную 
          span(style="font-size:50px; font-weight:900") систему 
          span(style="font-size:25px") сэкономив свое время
      .blockRight-section-two
        //- .img-section-two  
        //-   img(src="@/assets/ventThree.jpg")
        .shtamp
          img(src="@/assets/quality.png" style="width:20%; height:10%")  
    .containerThree
      span   
</template>

<script>
import Header from '../components/main/Header.vue'

export default {
 name:"MainPage",
 components: {
  Header
 },
 mounted() {
  console.log(window.scrollY);
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
  height: auto;
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

/* .span1 {
  position: absolute;
  font-size: 40px;
  color: #fff;
  font-weight: 900;
  left: 50%;
  top: 50%;
  transform: translate(270%, -50%);
}
.span2 {
  position: absolute;
  font-size: 40px;
  color: #fff;
  font-weight: 900;
  left: 50%;
  top: 50%;
  transform: translate(-315%, -50%);
} */
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

@keyframes leftBlock {
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
  /* 0% {
    transform: translateX(0) scale(1) rotateY(0);
  }
  
  50% {
    transform: translateX(0) scale(.9) rotateY(10deg);
  }

  100% {
    transform: translateX(-110%) scale(.9) rotateY(10deg);
  } */
}

/* @keyframes rightBlock {
  0% {
    transform: translateX(0) scale(1) rotateY(0);
  }

  50% {
    transform: translateX(0) scale(.9) rotateY(-10deg);
  }

  100% {
    transform: translateX(110%) scale(.9) rotateY(-10deg);
  }
} */

.preloader-block {
  width: 100vw;
  height: 100vh;
  background: #000;
  background-position: bottom;
  animation: leftBlock 1s linear forwards;
  animation-delay: .5s;
}

/* .preloader-block:last-child {
  animation: rightBlock 1s linear forwards;
  animation-delay: .5s;
} */

/* @keyframes pageAnimate {
  from {
    transform: scale(.7) rotateY(-25deg)
  }
  to {
    transform: scale(1) rotateY(0deg)
  }
} */

/* @import url('https://rsms.me/inter/inter.css'); */

.container {
  display: flex;
  flex-flow: column;
  height: 100vh;
  color: #fff;
  margin-top: -80px;
  /* transform: scale(.7) rotateY(-25deg);
  animation: pageAnimate 1s linear forwards;
  animation-delay: .5s; */
}

.containerTwo {
  /* background: url('@/assets/ventSecond.jpg') repeat; */
  background: #fff;
  /* background-size: 100%; */
  justify-content: space-evenly;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  /* position: fixed; */
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
  background: url("@/assets/ventThree.jpg");
  background-size: cover;
  width: 50%;
  height: 100%;
}

.containerThree {
  background: url('@/assets/ventSecond.jpg') repeat;
  background-size: 100%;
  justify-content: center;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  /* position: fixed; */
  display: flex;
  height: 100vh;
  width: 100%;
}
.hero {
  background: url('@/assets/ventFirst.jpg') repeat;
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
.text-block-section-two{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgb(0, 118, 169);
  margin-top: auto;
  margin-bottom: auto;
}
.shtamp{
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-60%,-50%);
}
.hide{
  background: #000;
}
.scrollAnim{
  background: rgba(119, 0, 255, 0.5);
  transition: background 5s;
}
</style>