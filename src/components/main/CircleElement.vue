<template lang="pug">
.circleSection
  .container
    .img
      img(src="@/assets/Logo.png" style="width:40%; height:auto")
    .circleRow
      .circleColumn 
      .circleColumn 
        .icon  
          ion-icon( name="airplane" size="large")
        .textBlock
          h3 Гарантия 5 лет.
          h3 Европейское оборудование
          hr
          h5 Устонавливаем оборудование европейских брендов, которое увеличивает срок эксплуатации вентиляционной системы.

      .circleColumn 
    .circleRow
      .circleColumn
        .icon  
          ion-icon( name="accessibility" size="large")        
        .textBlock
          h3 Налаженные процессы без задержки сроков
          hr
          h5 Мы единственная организация в городе, которая выполняет в одном лице все работы связанные с вентиляционными системами.
      .circleColumn 
      .circleColumn
        .icon  
          ion-icon( name="document-text" size="large")
        .textBlock
          h3 Мы одна из немногих компаний у которой есть лицензия МЧС
          hr 
          h5 Учитывем особенности помещения и территории, а так же соблюдаем все нормы, что бы система прослужила масимально долгий срок.
    .circleRow
      .circleColumn
        .icon(style="padding-top:120px")  
          ion-icon( name="phone-portrait" size="large")
        .textBlock
          h3 Бесплатный выезд на объект в течении 24 часов 
          hr
          h5 Вы получите консультацию специалиста, палн и визуализацию будщего проекта.
      .circleColumn 
      .circleColumn
        .icon(style="padding-top:120px")    
          ion-icon( name="build" size="large")    
        .textBlock
          h3 Точная смета и сроки, которые остаются неизменны
          hr
          h5 В начале работы заключаем договор с четко прописанными условиями.
    .circleRow
      .circleColumn 
      .circleColumn
        .icon  
          ion-icon( name="server" size="large")      
        .textBlock
          h3 Сервисное обслуживание и чиста 
          hr
          h5 Очистку внешних и внутренних блоков вентиляции, очистка и/или замена фильтров, чистка теплообменника.
      .circleColumn 
</template>

<script>
export default {
  name:"CircleElement"
}
</script>

<style scoped>
.circleSection{
  overflow: hidden;
  border-top: 1px solid;
  background: white;
  height: 97vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("@/assets/cirlckleBackground.jpg") no-repeat;
  background-size: cover;
  background-position-y: -55vh;
}
.container{
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.circleRow{
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  z-index: 0;
}
.circleColumn{
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top:20px ;
}
ion-icon {
  color: rgb(92, 0, 179);
  transform: scale(3);
}
.img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  /* width: 50%;
  margin: 0 auto;
  z-index: 100; */
}
.textBlock{
  padding-top: 5vh;
}
</style>