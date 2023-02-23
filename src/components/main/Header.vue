<template lang="pug">
.header
  .logo
    //- img.logoImage(src="@/assets/Logo.png" style="width:30%; height:30%")
    .logo-text Атмосфера
  .box
    .box-sm(@click="$router.push({path:'/'})")
      span Главная
    .box-sm(@click="galleryRout")
      span Фотогаллерея
    .box-sm
      span Контакты
  .otvet
    h3 8 800 123 45 67
    h6 Ежедневно с 10:00 до 18:00      
</template>
<script>
export default {
  name:"HeaderTest",

  methods: {
    galleryRout() {
      this.$router.push({path: '/photoGallery'}).then(() => {
        location.reload()
      })
    }
  }
}
</script>
<style scoped>
.logo-text {
  margin-left: 30px;
  font-family: Arial;
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  color: rgba(255,255,255,.2);
  background: url(https://kipmu.ru/wp-content/uploads/kobobl.jpg) repeat-x;
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
  height: 7vh;
  /* background: rgb(77, 189, 253, 0.5); */
  background: transparent;
  backdrop-filter: blur(20px);
  border-radius: 0 0 30px 30px;
}
span:hover{
  transform: scale(1.1);
  transition: transform 0.5s;
}
.box {
  display: flex;
}

.otvet{
  display: flex;
  flex-direction: column;
}
span{
  cursor: pointer;
}
.box-sm {
  display:flex;
  justify-content:center;
  align-items:center;
  height: 50px;
  margin: 20px;
  cursor: pointer;
}
</style>