<template lang="pug">
div
  footer
    .footer-block
      img.img(src="@/assets/LogoHeader.png" width="5%" height="auto")
      .footer-menu-text
        span Политика конфиденциальности
      .footer-menu-text
        span Соглашение на обработку персональных данных
      .footer-menu-text(@click="licenseShow = true")
        span Лицензия
</template>

<script>
export default {
  name:"FooterMain",
  
  components:{
    
  },
  
  data: () => ({
    licenseShow: false
  })
}
</script>

<style>
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
  width: 25%;
  color: #452132;
}
.img{
  margin: 0 0 0 10%;
}
</style>