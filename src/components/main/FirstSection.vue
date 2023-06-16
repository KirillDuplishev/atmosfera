<template lang="pug">
.containerFirst
  .hero
    span.text-32(style="text-transform:uppercase; color: white; text-shadow: 2px 2px 4px black") построим современные и безопасные 
    span.text-95(style="text-transform:uppercase; font-weight:800; color: white; text-shadow: 2px 2px 4px black") вентиляционные системы
    v-btn.button-about-us.text-15-b(@click="$router.push({path:'/aboutUs'})") Подробнее о нас
</template>

<script>
export default {
  name: "FirstSection"
}
</script>

<style scoped>
@media screen and (max-width: 1200px) {
  .containerFirst {
    margin-top: 0 !important;
  }
}
.containerFirst {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  height: auto;
  width: 100%;
  color: #000;
  margin-top: -60px;
}
.hero {
  background: url('@/assets/FirstSection.jpg');
  background-size: cover;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  min-height: calc(100vh + 60px);
  height: auto;
  width: 100%;
}
.button-about-us {
  position: relative;
  text-transform: none;
  width: auto;
  color: #fff !important;
  background: linear-gradient(37deg, rgba(127,6,255,1) 40%, rgba(12,12,255,1) 100%, rgba(0,212,255,1) 100%);
  padding: 29px  14px !important;
  border: 2px solid #fff;
  margin-top: 80px;
  border-radius: 30px;
  transition: transform .5s, box-shadow .5s;
  cursor: pointer;
  text-decoration: none;
}
.button-about-us:hover {
  box-shadow: 0 0 15px #000;
  transform: scale(1.03);
}
</style>