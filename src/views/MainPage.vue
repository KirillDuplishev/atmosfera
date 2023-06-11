<template lang="pug">
div
  .body1#body1(v-scroll="scroll")
    
    .preloader-scene
      .loading-block
        .progress
      .preloader-block(id="preloadBlock")
        img(src="@/assets/Logo.png" width="50%" height="auto")
    
    Header.header#header
    
    .burgerIco#burgerHeaderMenu
      .animHeader#animHeader
        img.anim-header-img(src="@/assets/LogoHeader.png" width="10%" height="auto")
        .logo-text Атмосфера
        .burger(@click="showMenu")
          Burger
      .menuItems#menuItems
        span.text-35-b(@click="generalPageRout()") Главная
        span.text-35-b Контакты
        span.text-35-b(@click="productRout()") Товары
        span.text-35-b(@click="abouUsRout()") О нас

    FirstSection

    SecondSection

    ThirdSection
    
    FourthSection
    
    FifthSection 
    
    SixthSection

    SeventhSection

    Footer(@openDialog="openDialog")
    
  div.panel-hide
    DialogWindow(:activeFlag="true" :title="title")

</template>

<script>
import Header from '../components/main/Header'
import Burger from '../components/Burger'
import SideBarLeft from '../components/SideBarLeft'
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
import DialogWindow from '@/components/DialogWindow'

export default {
 name:"MainPage",

 components: {
  Header,
  Footer,
  WorkType,
  WorkExamples,
  Burger,
  SideBarLeft,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  SeventhSection,
  DialogWindow
 },

 data(){
  return {
    show: false,
    title: null
  }
 },

 computed: {

  isPanelOpen() {
    return store.isNavOpen;
  },

  isDialogOpen() {
    return store.openDialog;
  }

 },

 methods: {

  scroll() {

    if(window.scrollY > 100){
      document.getElementById("header").classList.add('headerScrollAnim')
    }

    else{
      document.getElementById("header").style.boxShadow = "5px 5px 15px #000"
    }

  },
  
  showMenu(){
    this.show = !this.show
    document.getElementById("burgerHeaderMenu").style.justifyContent = "center"

    if(this.show) {
      document.getElementById("burgerHeaderMenu").style.background = "#000"
      document.getElementById("animHeader").style.borderBottom = "1px solid rgba(65, 65, 65, 0.5)"
      document.getElementById("burgerHeaderMenu").classList.add("maxHeightMenu")
      document.getElementById("burgerHeaderMenu").style.justifyContent = "flex-start"
      document.getElementById("menuItems").classList.add("menuItemsNew")
    }

    else {
      document.getElementById("burgerHeaderMenu").style.background = "#1D1D1F"
      document.getElementById("animHeader").style.borderBottom = "none"
      document.getElementById("burgerHeaderMenu").classList.remove("maxHeightMenu")
      document.getElementById("menuItems").classList.remove("menuItemsNew")
    }

  },

  openDialog(title) {
    this.title = title
  },

  productRout(){
    this.show = false
    this.$router.push({path: '/products'})
  },

  abouUsRout(){
    this.show = false
    this.$router.push({path: '/aboutUs'})
  },

  generalPageRout() {
    this.show = false
    this.$router.push({path:'/'})
  }

 },

 mounted() {
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
.body-carousel
{ 
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
  --a: linear-gradient(90deg, #040D2C, #462A8B,#8D05D6);
  margin:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

.body1 {
  position: relative;
}

.header {
  width: 100%;
  position: sticky;
  top: 0;
  font-family: 'Inter', sans-serif;
  letter-spacing: -1px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  z-index: 998;
}

.menuItems{
  display: none;
}
.menuItems span {
  
}

.menuItemsNew{
  padding-top: 60px;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 80%;
  margin: 0 10%;
}
.menuItemsNew span{
  text-align: right;
  width: 100%;
  padding-right: 20px;
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

@media screen and (max-width: 1200px)  {
  .header{
    display: none !important;
  }
  .burgerIco{
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    z-index: 100; 
    width: 100vw;
    height: 60px;
    background: #1D1D1F;
    box-shadow: 5px 5px 15px #000;
    transition: all .5s;
  }
  .anim-header-img{
    width: 5% !important;
  }
}
@media screen and (max-width: 800px)  {
  .anim-header-img {
    width: 8% !important;
  }
}

.preloader-scene {
  position: fixed;
  display: block;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  z-index: 999999999999;
}

.preloader-scene-end {
  display: none;
}
.loading-block {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60vh;
  z-index: 1001;
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
  width: 100vw;
  height: 100vh;
  background: #000;
  background-position: bottom;
  animation: opacityBlock 1.5s linear forwards;
  animation-delay: .5s;
}

.mg-b-10 {
  margin-bottom: 10px;
}

.hide{
  background: #000;
}
.headerScrollAnim{
  background: var(--a);
  transition: background 7s !important;
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
.panel-hide {
  z-index: 999;
  position: absolute;
}
</style>