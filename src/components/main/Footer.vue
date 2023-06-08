<template lang="pug">
div
  footer
    .footer-block
      img.img(src="@/assets/LogoHeader.png" width="5%" height="auto")
      .footer-menu-text(@click="showLicenseWindow('Политика конфиденциальности')")
        span Политика конфиденциальности
      .footer-menu-text(@click="showLicenseWindow('Соглашение на обработку персональных данных')")
        span Соглашение на обработку персональных данных
      .footer-menu-text(@click="showLicenseWindow('Лицензия')")
        span Лицензия
  
  //- DialogWindow(:activeFlag="true" :title="title")
  
</template>

<script>
import {mutations} from "@/store.js"
// import DialogWindow from '@/components/DialogWindow'

export default {
  name:"FooterMain",
  
  components:{
    // DialogWindow
  },
  
  data: () => ({
    // title:null
  }),

  methods:{
    showLicenseWindow(name){
      // this.title = name
      mutations.openDialogWindow()
      this.$emit('openDialog', name)
    }
  }
}
</script>

<style scoped>
footer{
  background: #DCDDE0;
  height: 15vh;
  display: flex;
  align-items: center;
}
.footer-block{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-menu-text{
  text-decoration: underline;
  width: 25%;
  color: #452132;
}
.img{
  margin: 0 0 0 10%;
}
</style>