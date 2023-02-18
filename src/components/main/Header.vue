<template lang="pug">
.header
  .logo
    //- span.a А
    span.logo-text Атмосфера
  .box
    .box-sm.red
      span Главная
    .box-sm.orange(@click="galleryRout")
      span Фотогаллерея
    .box-sm.yellow
      span Контакты 
    //- .box-sm.green 
    //- .box-sm.blue 
    //- .box-sm.purple    
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
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.logo-text {
  margin-left: 30px;
  font-family: Arial;
  font-size: 50px;
  font-weight: 900;
  text-transform: uppercase;
  color: rgba(255,255,255,.2);
  background: url(https://kipmu.ru/wp-content/uploads/kobobl.jpg) repeat-x;
  -webkit-background-clip: text;
  background-size: contain;
  animation: clouds 13s linear infinite;
}

@keyframes clouds {
  0% {
    background-position: left 0 top 0;
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
  align-items: center;
  width: 100%;
  height: 80px;
  /* background: rgb(0, 0, 0, 0.7); */
}
span:hover{
  transform: scale(1.1);
}
.box {
  padding: 0 15px 0 0;
  display: flex;;
  width: 70%;
  margin-left:auto;
}

.box-sm {
  display:flex;
  justify-content:center;
  align-items:center;
  height: 50px;
  margin: 20px;
  flex-grow: 1;
  transition: all .8s ease-in-out;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #000;
  /* border:1px solid #000; */
}
.box-sm:hover {
  flex-grow: 2;
}

.red {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
  /* border-radius:10px 0 0 10px */
}

.orange {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
}

.yellow {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
  /* border-radius:0 10px 10px 0 */
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