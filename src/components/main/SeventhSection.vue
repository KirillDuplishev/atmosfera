<template lang="pug">
  .containerScreenMap
    .info-block-section-map
      .text-main-block-section-map
        .text-block-section-map.mg-b-20
          span.text-35-b(style="color: #452132") КОНТАКТЫ
        .text-block-section-map.mg-b-20
          span.text-19-b 8-912-017-44-44
          br
          span.text-19-b Ежедневно с 10:00 до 18:00 
        .text-block-section-map
          span.text-19-b Ижевск
          br
          span.text-19-b ул. Максима Горького, 59а
      v-btn.button-section-map.text-15-b Заказать звонок
</template>

<script>
export default {

}
</script>

<style scoped>

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
@media screen and (max-width: 450px) {
  .info-block-section-map {
    width: 300px !important;
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
.info-block-section-map {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 17.5px;
  box-shadow: 3px 3px 20px black;
  width: 400px;
  height: 300px;
}
.text-block-section-map {
  min-height: 20%;
  height: auto;
  width: 100%;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
  padding-bottom:20px ;
}
.button-section-map{
  position: relative;
  text-transform: none;
  width: auto;
  color: #fff !important;
  background: linear-gradient(37deg, rgba(127,6,255,1) 40%, rgba(12,12,255,1) 100%, rgba(0,212,255,1) 100%);
  padding: 29px  14px !important;
  border: 2px solid #fff;
  margin: 10px 0 10px 0;
  border-radius: 30px;
  transition: transform .5s, box-shadow .5s;
  cursor: pointer;
  text-decoration: none;
}
.button-section-map:hover {
  box-shadow: 0 0 15px #000;
  transform: scale(1.03);
}
</style>