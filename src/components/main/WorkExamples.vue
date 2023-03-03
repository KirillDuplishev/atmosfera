<template lang="pug">
carousel-3d(:autoplay="true" :autoplayTimeout="3000" :autoplayHoverPause="true" :count="8" :display="returnCountSlide" :width="returnWidthSlide" :height="returnHeightSlide" :controlsVisible="true")
  slide(:index="0")
    img.img-slider(v-if="numberObject == 1" src="@/assets/schoolBersha/1.jpg")
    img.img-slider(v-if="numberObject == 2" src="@/assets/schoolBersha/9.jpg")
  slide(:index="1")
    img.img-slider(v-if="numberObject == 1" src="@/assets/schoolBersha/2.jpg")
    img.img-slider(v-if="numberObject == 2" src="@/assets/schoolBersha/10.jpg")
  slide(:index="2")
    img.img-slider(v-if="numberObject == 1" src="@/assets/schoolBersha/3.jpg")
    img.img-slider(v-if="numberObject == 2" src="@/assets/schoolBersha/11.jpg")
  slide(:index="3")
    img.img-slider(v-if="numberObject == 1" src="@/assets/schoolBersha/4.jpg")
    img.img-slider(v-if="numberObject == 2" src="@/assets/schoolBersha/12.jpg")
  slide(:index="4")
    img.img-slider(v-if="numberObject == 1" src="@/assets/schoolBersha/5.jpg")
    img.img-slider(v-if="numberObject == 2" src="@/assets/schoolBersha/13.jpg")
  slide(:index="5")
    img.img-slider(v-if="numberObject == 1" src="@/assets/schoolBersha/6.jpg")
    img.img-slider(v-if="numberObject == 2" src="@/assets/schoolBersha/14.jpg")
  slide(:index="6")
    img.img-slider(v-if="numberObject == 1" src="@/assets/schoolBersha/7.jpg")
    img.img-slider(v-if="numberObject == 2" src="@/assets/schoolBersha/15.jpg")
  slide(:index="7")
    img.img-slider(v-if="numberObject == 1" src="@/assets/schoolBersha/8.jpg")
    img.img-slider(v-if="numberObject == 2" src="@/assets/schoolBersha/16.jpg")
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  name: "WorkExamples",
  components: {
    Carousel3d,
    Slide
  },
  props: {
    numberObject: null
  },
  computed: {
    returnCountSlide() {
      if(window.innerWidth <= 1300) {
        return 3
      }
      return 5 
    },
    returnWidthSlide() {
      if(window.innerWidth <= 420) {
        return 200
      }
      if(window.innerWidth <= 520) {
        return 240
      }
      if(window.innerWidth <= 620) {
        return 300
      }
      return 360
    },
    returnHeightSlide() {
      if(window.innerWidth <= 420) {
        return 120
      }
      if(window.innerWidth <= 520) {
        return 150
      }
      if(window.innerWidth <= 620) {
        return 210
      }
      return 270
    }
  },
  methods: { 
  }
}
</script>

<style scoped>
.img-slider {
  background-size: cover;
}
</style>