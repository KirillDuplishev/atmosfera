<template lang="pug">
.containerReviews
  .text-main-block-section-reviews
    .header-title
      span.text-19-b Отзывы
    div
      span.text-40-b(style="color: #452132") Мы-Надежные партнеры-профессионалы
    div(style="color:#000; padding: 30px 0 0 0")
      span.text-19-b Мы придаем огромное значение прочным отношениям и убедились,что они приносят пользу нашему бизнесу. 
    div(style="color:#000;")
      span.text-19-b Отзывы клиентов жизненно важны, чтобы помочь нам сделать все правильно.
  .desktop-version
    .main-block-reviews
      .block-reviews(v-for="(el, index) in store.reviewsInfo" v-if="index < 2" :style="{ background: reviewsBackground(el), border:'2px solid rgba(0, 0, 0, 0.2)'}")
        .text-block-reviews
          span.text-19 {{el.text}}
    
    .main-block-reviews
      .block-reviews(v-for="(el, index) in store.reviewsInfo" v-if="index >= 2" :style="{ background: reviewsBackground(el), border:'2px solid rgba(0, 0, 0, 0.2)'}")
        .text-block-reviews
          span.text-19 {{el.text}}
  .mobile-version
    .main-block-reviews-mobile
      .block-reviews(v-for="(el, index) in store.reviewsInfo" :style="{ background: reviewsBackground(el), border:'2px solid rgba(0, 0, 0, 0.2)'}")
        .text-block-reviews
          span.text-19 {{el.text}}
</template>

<script>
import { store } from "@/store.js";
export default {
  data:() => ({
    store
  }),
  
  computed:{
    
  },
  methods:{
    reviewsBackground(el){
      if(el.id == 1) {
        return 'rgba(96, 135, 190, 0.75)'
      }
      else if (el.id == 2) {
        return 'rgba(163, 143, 193, 0.75)'
      }
      else if (el.id == 3) {
        return 'rgba(234, 159, 179, 0.75)'
      }
      else {
        return 'rgba(254, 173, 157, 0.75)'
      }
    }  
  }
}
</script>

<style scoped>
@media screen and (max-width: 1200px) {
  .block-reviews {
    height: 400px !important;
    margin: 10px 20px !important;
  }
}
@media screen and (max-width: 1100px) {
  .block-reviews {
    height: 450px !important;
  }
}
@media screen and (max-width: 1000px) {
  .desktop-version {
    display: none !important;
  }
  .mobile-version {
    display: block !important;
  }
  .block-reviews {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 244px !important;
    width: 80% !important;
    border-radius: 15px;
    padding: 12px 15px;
    margin: 0 0 50px 0 !important;
  }
  .text-main-block-section-reviews {
    padding-bottom: 50px !important;
  }
}
@media screen and (max-width: 520px) {
  .block-reviews {
    height: 350px !important;
  }
}
@media screen and (max-width: 380px) {
  .block-reviews {
    height: 450px !important;
  }
}
.containerReviews {
  background: #fff;
  width: 100%;
  min-height: 93vh;
  height: auto;
}
.text-main-block-section-reviews {
  width: 100%;
  padding-bottom: 80px;
  height: 25%;
  text-align: center;
}
.mobile-version {
  display: none;
}
.main-block-reviews {
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-block-reviews-mobile {
  height: 65%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.block-reviews {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 350px;
  width: 25%;
  border-radius: 15px;
  padding: 12px 15px;
  margin: 20px 40px;
}
.text-block-reviews {
  height: auto;
  width: 100%;
  text-align: center;
}
.img-quotes{
  display: flex;
  justify-content: flex-start;
  width: 100%;
  left: 0;
  top: 0;
  margin-left: -15%;
  margin-top: -8%;
}
.header-title{
  color: #000;
  padding: 25px 0;
}
</style>