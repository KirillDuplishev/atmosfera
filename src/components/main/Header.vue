<template lang="pug">
.header
  .logo
    span.a А
    span тмосфера
  .box
    .box-sm.red
      span Главная
    .box-sm.orange
      span Магазин
    .box-sm.yellow
      span Контакты 
    //- .box-sm.green 
    //- .box-sm.blue 
    //- .box-sm.purple    
</template>
<script>
export default {
    name:"HeaderTest"

}
</script>
<style scoped>
.a{
  position: absolute;
  border-radius: 100px;
  border: 2px solid;
  animation: spin 1.4s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.header{
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background: rgb(0, 0, 0, 0.7);
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
  margin: 0;
  flex-grow: 1;
  transition: all .8s ease-in-out;
  cursor: pointer;
  border:1px solid #000;
}
.box-sm:hover {
  flex-grow: 2;
}

.red {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
  border-radius:10px 0 0 10px
}

.orange {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
}

.yellow {
  background: linear-gradient(212deg, rgba(43,43,156,1) 35%, rgba(26,198,233,1) 100%);
  border-radius:0 10px 10px 0
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