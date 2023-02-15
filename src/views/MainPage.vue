<template lang="pug">
.body
  .preloader-scene
    .loading-block
      .title
      .progress
    .preloader-block
    .preloader-block
  .container 
    Header.header
    .hero
      //- h1 Get scrollin
      .down
        svg( viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round")
        polyline( points="7 13 12 18 17 13")
        polyline( points="7 6 12 11 17 6")
      .content 💙
</template>

<script>

$(window).scroll(function() {
    console.log("Adasd");
  var scroll = $(window).scrollTop();
  $(".hero").css({
    transform: 'translate3d(0, +'+(scroll/100)+'%, 0) scale('+(100 - scroll/100)/100+')'
  });
});

import $ from 'jquery'
import Header from '../components/main/Header.vue'

export default {
 name:"MainPage",
 components: {
  Header
 },
 mounted() {
  
 }   
}
</script>

<style scoped>
* {
  perspective: 1000px;
  margin:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  /* color: black; */
}

.body {
  background-color: black;
}

.header {
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
  overflow: hidden;
}

.loading-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

.title {
  font-size: 18px;
  margin-bottom: 10px;
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
  0% {
    transform: translateX(0) scale(1) rotateY(0);
  }
  
  50% {
    transform: translateX(0) scale(.9) rotateY(10deg);
  }

  100% {
    transform: translateX(-110%) scale(.9) rotateY(10deg);
  }
}

@keyframes rightBlock {
  0% {
    transform: translateX(0) scale(1) rotateY(0);
  }

  50% {
    transform: translateX(0) scale(.9) rotateY(-10deg);
  }

  100% {
    transform: translateX(110%) scale(.9) rotateY(-10deg);
  }
}

.preloader-block {
  width: 50%;
  /* background: linear-gradient(212deg, rgb(67, 67, 67) 35%, rgb(37, 40, 41) 100%); */
  background: url(https://images.wallpaperscraft.ru/image/single/nebo_oblaka_svet_84366_2560x1600.jpg);
  background-position: bottom;
  animation: leftBlock 1s linear forwards;
  animation-delay: .5s;
}

.preloader-block:last-child {
  animation: rightBlock 1s linear forwards;
  animation-delay: .5s;
}

@keyframes pageAnimate {
  from {
    transform: scale(.7) rotateY(-25deg)
  }
  to {
    transform: scale(1) rotateY(0deg)
  }
}

@import url('https://rsms.me/inter/inter.css');

.container {
  overflow-y: auto;
  font-family: 'Inter', sans-serif;
  letter-spacing: -1px;
  text-align: center;
  font-size: 20px;
  height: 100vh;
  color: #fff;
  margin: 0;
  transform: scale(.7) rotateY(-25deg);
  animation: pageAnimate 1s linear forwards;
  animation-delay: .5s;
}

.hero {
  background: url('https://images.unsplash.com/photo-1550353127-b0da3aeaa0ca') no-repeat center center;
  justify-content: center;
  background-size: cover;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100%;
}

.down {
  text-align: center;
  position: absolute;
  opacity: 0.6;
  height: 40px;
  width: 100%;
  bottom: 0;
}

.content {
  box-shadow: 0 0 100px rgba(0,0,0,0.4);
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 40px;
  position: relative;
  background: #000;
  height: 2000px;
  display: flex;
  top: 100vh;
}

</style>