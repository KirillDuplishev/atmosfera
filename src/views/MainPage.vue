<template lang="pug">
.body1
  .preloader-scene(v-if="qwe")
    .loading-block
      //- .title
      .progress
    .preloader-block(id="asd")
      span.span1 Атмо
    .preloader-block
      span.span2 сфера
  .container 
    Header.header
    .hero
      .down
      //- .content 💙
</template>

<script>
import Header from '../components/main/Header.vue'

export default {
 name:"MainPage",
 components: {
  Header
 },
 mounted() {
  //  setTimeout(() => {
  //   let a = document.getElementById('asd')
  //   let style1 = window.getComputedStyle(a, null)
  //   let b = style1.getPropertyValue('transform')
  //   console.log(b);
  // }, 1000);
 },
 computed: {
  qwe(){
    // let style = document.getElementById('asd')
    // let style1 = window.getComputedStyle(style, null).getPropertyValue('transform')
    // console.log(style1);
    // if(style1.getPropertyValue("transform") != 'none'){
      // document.getElementsByClassName('preloader-block').style.background = "red"
      // console.log("asdaffsbfsfjhksjanfsjhkjdjsdhbn");
      // return false
    // }
    // else{
      return true
    // }
  }
 }   
}
</script>

<style scoped>
* {
  perspective: 1000px;
  margin:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
  /* color: black; */
}

.body1 {
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

.span1 {
  position: absolute;
  font-size: 40px;
  color: #fff;
  font-weight: 900;
  /* margin: auto; */
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
}
.loading-block {
  position: absolute;
  /* display: flex;
  justify-content: center;
  justify-items: end; */
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
  /* background: url(https://images.wallpaperscraft.ru/image/single/nebo_oblaka_svet_84366_2560x1600.jpg); */
  background: #f5c8c8;
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
  background: url('@/assets/ventFirst.jpg') repeat;
  background-size: 100%;
  justify-content: center;
  background-size: cover;
  flex-direction: column;
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

/* .content {
  box-shadow: 0 0 100px rgba(0,0,0,0.4);
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 40px;
  position: relative;
  background: #000;
  height: 2000px;
  display: flex;
  top: 100vh;
} */

</style>