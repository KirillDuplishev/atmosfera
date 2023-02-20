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
    //- .box-sm.green 
    //- .box-sm.blue 
    //- .box-sm.purple
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
  height: 80px;
  background: transparent;
  backdrop-filter: blur(20px);
}
span:hover{
  transform: scale(1.1);
  transition: transform 0.5s;
}
.box {
  /* padding: 0 15px 0 0; */
  display: flex;;
  /* width: 70%; */
  /* margin-left:auto; */
}

.otvet{
  display: flex;
  flex-direction: column;
}

.box-sm {
  display:flex;
  justify-content:center;
  align-items:center;
  height: 50px;
  margin: 20px;
  /* flex-grow: 1; */
  /* transition: all .8s ease-in-out; */
  cursor: pointer;
  /* border-radius: 10px; */
  /* box-shadow: 5px 5px 10px #000; */
}
/* .box-sm:hover {
  flex-grow: 2;
} */

.red {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
}

.orange {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
}

.yellow {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
}

.green {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
}

.blue {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
}

.purple {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
}
</style>