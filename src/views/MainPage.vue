<template lang="pug">
.container 
  Header
  .hero
    h1 Get scrollin
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
  margin:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  color: #fff;
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