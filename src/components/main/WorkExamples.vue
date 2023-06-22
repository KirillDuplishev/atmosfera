<template lang="pug">
div
  div(v-if="numberObject == 1" v-resize='onResize')

    carousel-3d(:autoplay="true" :autoplayTimeout="3000" :autoplayHoverPause="true" :count="12" :display="returnCountSlide" :width="returnWidthSlide" :height="returnHeightSlide" :controlsVisible="true")
 
      slide(:index="0")
        img.img-slider(src="@/assets/schoolBersha/1.jpg")
      slide(:index="1")
        img.img-slider(src="@/assets/schoolBersha/31.jpg")
      slide(:index="2")
        img.img-slider(src="@/assets/schoolBersha/3.jpg")
      slide(:index="3")
        img.img-slider(src="@/assets/schoolBersha/4.jpg")
      slide(:index="4")
        img.img-slider(src="@/assets/schoolBersha/5.jpg")
      slide(:index="5")
        img.img-slider(src="@/assets/schoolBersha/6.jpg")
      slide(:index="6")
        img.img-slider(src="@/assets/schoolBersha/7.jpg")
      slide(:index="7")
        img.img-slider(src="@/assets/schoolBersha/8.jpg")
      slide(:index="8")
        img.img-slider(src="@/assets/schoolBersha/f53.jpg" width="auto" height="100%")
      slide(:index="9")
        img.img-slider(src="@/assets/schoolBersha/f22.jpg")
      //- slide(:index="10")
        img.img-slider(src="@/assets/schoolBersha/f23.jpg")
      slide(:index="10")
        img.img-slider(src="@/assets/schoolBersha/f24.jpg")
      slide(:index="11")
        img.img-slider(src="@/assets/schoolBersha/f26.jpg")

  div(v-if="numberObject == 2" v-resize='onResize')

    carousel-3d(:autoplay="true" :autoplayTimeout="3000" :autoplayHoverPause="true" :count="7" :display="returnCountSlide" :width="returnWidthSlide" :height="returnHeightSlide" :controlsVisible="true")
    
      slide(:index="0")
        img.img-slider(src="@/assets/poliklinikaVotkinsk/1.jpeg")
      slide(:index="1")
        img.img-slider(src="@/assets/poliklinikaVotkinsk/2.jpeg")
      slide(:index="2")
        img.img-slider(src="@/assets/poliklinikaVotkinsk/3.jpeg")
      slide(:index="3")
        img.img-slider(src="@/assets/poliklinikaVotkinsk/4.jpeg")
      slide(:index="4")
        img.img-slider(src="@/assets/poliklinikaVotkinsk/5.jpeg")
      slide(:index="5")
        img.img-slider(src="@/assets/poliklinikaVotkinsk/6.jpeg")
      slide(:index="6")
        img.img-slider(src="@/assets/poliklinikaVotkinsk/7.jpeg")
  
  div(v-if="numberObject == 3" v-resize='onResize')

    carousel-3d(:autoplay="true" :autoplayTimeout="3000" :autoplayHoverPause="true" :count="5" :display="returnCountSlide" :width="returnWidthSlide" :height="returnHeightSlide" :controlsVisible="true")
  
      slide(:index="0")
        img.img-slider(src="@/assets/techCream/1.jpeg")
      slide(:index="1")
        img.img-slider(src="@/assets/techCream/2.jpeg")
      slide(:index="2")
        img.img-slider(src="@/assets/techCream/3.jpeg")
      slide(:index="3")
        img.img-slider(src="@/assets/techCream/4.jpeg")
      slide(:index="4")
        img.img-slider(src="@/assets/techCream/5.jpeg")

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
  data: () => ({
    deviceWidth: window.innerWidth
  }),
  
  computed: {
    returnCountSlide() {
      if(this.deviceWidth <= 1300) {
        return 3
      }
      return 5 
    },
    returnWidthSlide() {
      if(this.deviceWidth <= 400) {
        return 120
      }
      if(this.deviceWidth <= 490) {
        return 160
      }
      if(this.deviceWidth <= 580) {
        return 200
      }
      if(this.deviceWidth <= 700) {
        return 240
      }
      if(this.deviceWidth <= 850) {
        return 300
      }
      return 360
    },
    returnHeightSlide() {
      if(this.deviceWidth <= 400) {
        return 60
      }
      if(this.deviceWidth <= 490) {
        return 90
      }
      if(this.deviceWidth <= 580) {
        return 120
      }
      if(this.deviceWidth <= 700) {
        return 150
      }
      if(this.deviceWidth <= 850) {
        return 210
      }
      return 270
    }
  },

  methods: {
    onResize() {
      this.deviceWidth = window.innerWidth
    }
  }

}
</script>

<style scoped>
.img-slider {
  background-size: cover;
}
</style>