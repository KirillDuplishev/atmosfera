<template lang="pug">
.containerFirst
  .hero
    span(style="text-transform:uppercase; font-size:2em; color: white; text-shadow: 2px 2px 4px black") построим современные и безопасные 
    span(style="text-transform:uppercase; font-size:5vw; font-weight:900; color: white; text-shadow: 2px 2px 4px black") вентиляционные системы
    v-btn.button-about-us.text-15-b(@click="$router.push({path:'/aboutUs'})") Подробнее о нас    
</template>

<script>
export default {
  name: "FirstSection"
}
</script>

<style scoped>
.containerFirst {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  height: auto;
  width: 100%;
  color: #000;
  margin-top: -3vw;
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
.button-about-us{
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
.button-about-us:hover {
  box-shadow: 0 0 15px #000;
  transform: scale(1.03);
}
@media screen and (max-width: 1000px) {
  .containerFirst{
    margin-top: 0 !important;
  }
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
</style>