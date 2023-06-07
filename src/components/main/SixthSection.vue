<template lang="pug">
  .containerReviews
    .text-main-block-section-reviews
      span.text-17 Отзывы
      br
      span.text-40-b(style="color: rgb(0, 118, 169)") Мы-Надежные партнеры-профессионалы
      br
      span.text-25-b Мы придаем огромное значение прочным отношениям и убедились,
      br
      span.text-25-b что они приносят пользу нашему бизнесу. Отзывы клиентов жизненно 
      br
      span.text-25-b важны, чтобы помочь нам сделать все правильно.
    .main-block-reviews
      //- img(src="@/assets/reviewsQuotes.svg" style="width: 5%; position: fixed; height: auto; top: 50%; left: 50%;нtransform: translate(-19em, -20em);")
      //- img(src="@/assets/reviewsQuotes.svg" style="width:15%; height:auto")
      .block-reviews(v-for="(el, index) in store.reviewsInfo" v-if="index < 2" :style="{ background: reviewsBackground(el), border:'2px solid rgba(0, 0, 0, 0.2)'}")
        .text-block-reviews
          span.text-15 {{el.text}}
    .main-block-reviews
      //- img(src="@/assets/reviewsQuotes.svg" style="width:15%; height:auto")
      //- img(src="@/assets/reviewsQuotes.svg" style="width:15%; height:auto")
      .block-reviews(v-for="(el, index) in store.reviewsInfo" v-if="index >= 2" :style="{ background: reviewsBackground(el), border:'2px solid rgba(0, 0, 0, 0.2)'}")
        .text-block-reviews
          span.text-15 {{el.text}} 
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
.containerReviews {
  background: #fff;
  width: 100%;
  min-height: 93vh;
  height: auto;
}
@media screen and (max-width: 1200px) {
  .containerReviews {
    min-height: 77vh;
    height: auto;
  }
}
.text-main-block-section-reviews {
  width: 100%;
  height: 25%;
  text-align: center;
}
.main-block-reviews {
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.block-reviews {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 300px;
  width: 25%;
  border-radius: 15px;
  padding: 20px;
  margin: 20px 40px;
}
.text-block-reviews {
  height: auto;
  width: 100%;
  text-align: center;
}
</style>