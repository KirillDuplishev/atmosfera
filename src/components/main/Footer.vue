<template lang="pug">
div
  footer(:class="{'background-white' : backgroundWhite}")
    .footer-block
      img.img(src="@/assets/LogoHeader.png" width="5%" height="auto")
      .footer-menu-text(@click="showDocumentWindow('Политика конфиденциальности')")
        span.text-15-b Политика конфиденциальности
      .footer-menu-text(@click="showDocumentWindow('Лицензия МЧС')")
        span.text-15-b Лицензия МЧС
    
    .footer-block-mobile
      img.img-mobile(src="@/assets/LogoHeader.png" width="15%" height="auto")
      .footer-text-block-mobile
        .footer-menu-text-mobile(@click="showDocumentWindow('Политика конфиденциальности')")
          span.text-15-b Политика конфиденциальности
        .footer-menu-text-mobile(@click="showDocumentWindow('Лицензия МЧС')")
          span.text-15-b Лицензия МЧС
  
  div.panel-hide
    DialogWindow(:activeFlag="true" :title="title")
</template>

<script>
import {mutations} from "@/store.js"
import DialogWindow from '@/components/DialogWindow'

export default {
  name:"FooterMain",
  
  props: {
    backgroundWhite: Boolean
  },
  
  data: () => ({
    title: null
  }),

  components: {DialogWindow},

  methods:{
    showDocumentWindow(name){
      
      if(name == "Лицензия МЧС") {
        mutations.openDialogWindow()
        this.title = name
      }

      else if (name == "Политика конфиденциальности") {
        
        if(this.$route.name != "PrivacyPage") {
          this.$router.push({path: '/privacy'})
        }

        else {
          location.reload()
        }

      }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1000px)  {
  .img{
    width: 10%;
  }
  .img-mobile {
    width: 25%;
  }
}
@media screen and (max-width: 800px){
  .footer-block{
    display: none !important;
  }
  .footer-block-mobile{
    display: flex !important;
    align-items: center
  }
  .footer-text-block-mobile{
    display: flex;
    flex-direction: column;
  }
  .footer-menu-text-mobile{
    color: #452132;
    display: flex;
    text-align: left;
    width: 100% !important;
    padding: 15px 0;
  }
  .img-mobile{
    padding-right: 20px;
  }
}
.footer-block-mobile{
  display: none;
}
footer{
  background: #DCDDE0;
  min-height: 15vh;
  height: auto;
  display: flex;
  align-items: center;
}
.background-white {
  border-top: 2px solid #6D6D6D;
  background: #FBFCFF !important;
}
.footer-block{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-menu-text{
  width: 25%;
  color: #452132;
}
.img{
  margin: 0 0 0 10%;
}
.footer-menu-text span{
  position: relative;
  cursor: pointer;
}
.footer-menu-text span::after {
	position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  display: block;
  width: 100%;
  height: 2px;
  background: #452132;
}

.footer-menu-text span::after {
  width: 0;
  transition: width .5s;
}

.footer-menu-text span:hover:after {
	width: 100%;
}

.panel-hide {
  z-index: 999;
  position: absolute;
}
</style>