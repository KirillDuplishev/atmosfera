<template lang="pug">
div
  .body1#body1(v-scroll="scroll")
    
    .preloader-scene
      .preloader-block(id="preloadBlock")
        img(src="@/assets/logo.png" width="50%" height="auto")
      .loading-block
        .progress
    
    Header(:background="headerColored" :shadow="headerShadow")
    
    FirstSection

    SecondSection

    ThirdSection
    
    FourthSection
    
    FifthSection 
    
    SixthSection

    SeventhSection

    Footer

</template>

<script>
import Header from '../components/main/Header'
import WorkType from '@/components/main/WorkType'
import WorkExamples from '@/components/main/WorkExamples';
import { store } from "@/store.js";
import FirstSection from '@/components/main/FirstSection';
import SecondSection from '@/components/main/SecondSection'
import ThirdSection from '@/components/main/ThirdSection'
import FourthSection from '@/components/main/FourthSection'
import FifthSection from '@/components/main/FifthSection'
import SixthSection from '@/components/main/SixthSection'
import SeventhSection from '@/components/main/SeventhSection'
import Footer from '@/components/main/Footer'

export default {
 name:"MainPage",

 components: {
  Header,
  Footer,
  WorkType,
  WorkExamples,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  SeventhSection,
 },

 data(){
  return {
    title: null,
    headerColored: false,
    headerShadow: false
  }
 },

 computed: {

  isPanelOpen() {
    return store.isNavOpen;
  },

 },

 methods: {

  scroll() {
    if(window.scrollY > 20) {
      this.headerShadow = true
    }

    if(window.scrollY > 100){
      this.headerColored = true
    }
  },

 },

 mounted() {
  this.headerShadow = false
  this.headerColored = false
  let el = document.getElementById('preloadBlock')

  el.addEventListener('animationend', function() { 
    let sceneDiv = document.querySelector(".preloader-scene");
    sceneDiv.className = "preloader-scene-end"; 
  })

 },

}
</script>

<style scoped>
.container-carousel {
  width: 100%;
  height: 100vh;
}
.body-carousel { 
	background-image: white;
	background-repeat: no-repeat;
	background-position: top center;
	width:100%;
	background-size:cover;
	height:100%;
	min-height:1000px;
	overflow:hidden;
	font-family: 'quicksandlight', Helvetica, Arial;
	color:#FFFFFF;
	text-shadow: -1px -1px 4px rgba(0, 0, 0, .35);
  filter: dropshadow(color=#000000, offx=1, offy=1);
}
* {
  margin:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

.body1 {
  position: relative;
}

.menuItems{
  display: none;
}

.menuItemsNew{
  padding-top: 100px;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 80%;
  margin: 0 10%;
}
.menuItemsNew span{
  text-align: left;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid rgba(65, 65, 65, 0.5);
}
.animHeader{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width:100%;
  height:60px; 
  display: flex; 
  justify-content: space-around; 
  align-items: center; 
}
.maxHeightMenu{
  height: 100vh !important;
  background: #000 !important;
  transition: height 1s, background 2s;
}

.burgerIco{
  display: none;
  position: absolute;
}

.preloader-scene {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: #000;
}

.preloader-scene-end {
  display: none;
}
.loading-block {
  animation: loading 2s ease forwards;
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
  background-color: #fff;
  animation: progressLine 1.3s ease forwards;
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

@keyframes opacityBlock {
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}

.preloader-block {
  animation: opacityBlock 1.5s linear forwards;
  animation-delay: .5s;
}

.mg-b-10 {
  margin-bottom: 10px;
}

.hide{
  background: #000;
}
.obj-block-work-examples {
  width: 70%;
  min-height: 90%;
  height: auto;
}
.mg-b-20 {
  margin-bottom: 10%;
}
.burgerHeader{
  font-size: 25px;
  font-family: monospace;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: center;
}

.burgerMenu button {
  border-radius: 20px;
  padding: 10px;
  background: linear-gradient(37deg, rgba(127,6,255,1) 21%, rgba(0,212,255,1) 52%, rgba(0,0,255,1) 100%);
}
.logo-text {
  margin-left: 5vw;
  font-family: Arial;
  font-size: 25px;
  font-weight: 900;
  text-transform: uppercase;
  color: rgba(255,255,255,.2);
  background: url(@/assets/LogoBack.jpg) repeat-x;
  -webkit-background-clip: text;
  background-size: 40%;
  animation: clouds 13s linear infinite alternate;
}
</style>