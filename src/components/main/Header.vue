<template lang="pug">
div
  .header(:class="{'shadow':shadow, 'colored':background}")
    .logo
      .logo-text Атмосфера
    .box
      .box-sm(@click="generalPageRout()" :class="{'activate': checkRouterName('mainPage')}")
        span.text-18 Главная
      .box-sm(@click="galleryRout()" :class="{'activate': checkRouterName('photoGallery')}")
        span.text-18 Фотогалерея
      .box-sm(@click="contactsRoute()")
        span.text-18 Контакты
      .box-sm(@click="productRout()" :class="{'activate': checkRouterName('products')}")
        span.text-18 Товары
      .box-sm(@click="abouUsRout()" :class="{'activate': checkRouterName('aboutUs')}")
        span.text-18 О нас
    .otvet
      .flex-block-header
        span.text-15(style="margin-right: 10px") 8-912-017-44-44
        span.text-15 vent444@mail.ru
      .flex-block-header
        span.text-15 Ежедневно 
        span.text-15 с 8:30 до 17:30      
  
  .burgerIco#burgerHeaderMenu
    .animHeader#animHeader
      img.anim-header-img(src="@/assets/LogoHeader.png" width="10%" height="auto")
      .logo-text-mobile.text-50-b Атмосфера
      .burger(@click="showMenu")
        Burger
    .menuItems#menuItems
      span.text-27(@click="generalPageRout()") Главная
      span.text-27(@click="contactsRoute()") Контакты
      span.text-27(@click="productRout()") Товары
      span.text-27(@click="abouUsRout()") О нас
</template>
<script>
import Burger from '../Burger.vue'
import { mutations } from '@/store.js'

export default {
  name:"HeaderTest",
  
  mixin: [],

  props: {
    background: Boolean,
    shadow: Boolean
  },

  components: {
    Burger
  },

  data:() => ({
    show: false,
  }),

  computed: {
  },

  methods: {
    checkRouterName(name) {
      return this.$route.name == name
    },

    galleryRout() {

      if(this.$route.name == "photoGallery") {
        mutations.toggleNav()
        this.showMenu()
        location.reload()
      }

      else {
        this.$router.push({path: '/photoGallery'}).then(() => {
          location.reload()
        })
      }

    },

    contactsRoute() {
      mutations.toggleNav()
      this.showMenu()

      if(this.$route.name != "mainPage") {
        this.$router.push({path:'/'}).then(() => {
          let link = document.createElement('a');
          link.setAttribute('href', "/#screenMapSection");
          link.click();
        })
      }
      
      else {
        let link = document.createElement('a');
        link.setAttribute('href', "/#screenMapSection");
        link.click();
      }

    },

    productRout() {

      if(this.$route.name == "products") {
        mutations.toggleNav()
        this.showMenu()
        location.reload()
      }

      else {
        mutations.toggleNav()
        this.$router.push({path: '/products'})
      }
    },
    
    abouUsRout() {

      if(this.$route.name == "aboutUs") {
        mutations.toggleNav()
        this.showMenu()
        location.reload()
      }

      else {
        mutations.toggleNav()
        this.$router.push({path: '/aboutUs'})
      }

    },

    generalPageRout() {
      
      if(this.$route.name == "mainPage") {
        mutations.toggleNav()
        this.showMenu()
        location.reload()
      }

      else {
        mutations.toggleNav()
        this.$router.push({path:'/'})
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

  }
}
</script>
<style scoped>
@media screen and (max-width: 1200px)  {
  .header{
    display: none !important;
  }
  .burgerIco{
    display: flex !important;
    justify-content: center;
    flex-direction: column;
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 500; 
    width: 100vw;
    height: 60px;
    background: #1D1D1F;
    box-shadow: 5px 5px 15px #000;
    transition: all .5s, height 1s;
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
  animation: showMenu 1s linear alternate ;
}
@keyframes showMenu {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  height: 150vh !important;
  background: #000 !important;
  transition: height 1s, background 2s;
}

.burgerIco{
  display: none;
  position: absolute;
}
.logo{
  display: flex;
}
.logo-text-mobile {
  text-transform: uppercase;
  color: rgba(255,255,255,.2);
  background: url(@/assets/LogoBack.jpg) repeat-x;
  -webkit-background-clip: text;
  background-size: 40%;
  animation: clouds 13s linear infinite alternate;
}
.logo-text {
  font-family: Arial;
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  color: rgba(255,255,255,.2);
  background: url(@/assets/LogoBack.jpg) repeat-x;
  -webkit-background-clip: text;
  background-size: 40%;
  animation: clouds 13s linear infinite alternate;
}

@keyframes clouds {
  0% {
    background-position: left 300px top 0;
  }

  50% {
    background-position: left 150px top -10px;
  }

  100% {
    background-position: left 300px top 0px;
  }
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 60px;
  background: transparent;
  backdrop-filter: blur(20px);
  border-radius: 0 0 30px 30px;
  letter-spacing: -1px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  z-index: 999;
  
}
.box-sm span{
  position: relative;
  cursor: pointer;
}
.box-sm span::after {
	position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  display: block;
  width: 100%;
  height: 2px;
  background: #fff;
}

.box-sm span::after {
  width: 0;
  transition: width .5s;
}

.box-sm span:hover:after {
	width: 100%;
}

.box {
  display: flex;
}

.otvet{
  display: flex;
}
.box-sm {
  display:flex;
  justify-content:center;
  align-items:center;
  height: 50px;
  margin: 20px;
  cursor: pointer;
}
.flex-block-header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left:20px;
}
.colored {
  background: linear-gradient(90deg, #040D2C, #462A8B,#8D05D6);
}
.shadow {
  box-shadow: 5px 5px 15px #000;
}
a{
  color: #fff;
  text-decoration: none;
}

.activate { 
  position: relative;
  cursor: pointer;
}


.activate::after {
	position: absolute;
  content: '';
  left: 0;
  bottom: 15px;
  display: block;
  width: 100%;
  height: 2px;
  background: #ffffff;
}


</style>