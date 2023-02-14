<template lang="pug">
.container 
  .header
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
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
* {
  margin:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  color: #fff;
}


.box {
  display: flex;
  width: 70%;
  height: 8px;
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