<template lang="pug">
.header
  .logo
    .logo-text Атмосфера
  .box
    .box-sm(@click="$router.push({path:'/'})")
      span Главная
    .box-sm(@click="galleryRout")
      span Фотогалерея
    .box-sm
      span Контакты
    .box-sm(@click="productRout()")
      span Товары
    .box-sm(@click="$router.push({path:'/aboutUs'})")
      span О нас
  .otvet
    .flex-block-header
      span.text-15(style="margin-right: 10px") 8-912-017-44-44
      span.text-15 vent444@mail.ru
    .flex-block-header
      span.text-15 Ежедневно 
      span.text-15 с 10:00 до 18:00      
</template>
<script>
export default {
  name:"HeaderTest",

  methods: {

    galleryRout() {
      this.$router.push({path: '/photoGallery'}).then(() => {
        location.reload()
      })
    },

    productRout() {
      this.$router.push({path: '/products'})
    }

  }
}
</script>
<style scoped>
.logo{
  display: flex;
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
  z-index: 1001;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 60px;
  background: transparent;
  backdrop-filter: blur(20px);
  border-radius: 0 0 30px 30px;
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
  transition: width 0.35s;
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
</style>