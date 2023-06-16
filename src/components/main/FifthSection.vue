<template lang='pug'>
.containerWorkExamples
  .text-main-block-section-examples
    div
      span.text-40-b(style="color: #452132;") За 12 лет работы было сделано
    div  
      span.text-35-b(style="color: #452132;") более 100 объектов   
    div(style="margin: 15px 0 60px 0")
      span.text-17(style="color: #FFFFFF;") Гостиницы, промышленные производства, сети магазинов, школы и т.д 
  .block-work-examples

    .span-work-examples
      .obj-block-work-examples
        WorkExamples(:numberObject="1")
    .obj-text-block-work-examples
      .obj-text-part-work-examples(style="color: #FFFFFF;")
        div(style="padding-bottom:20px")
          span.text-25-b(style="color: #452132;") Общеобразовательная школа по ул. Архитектора П.П. Берша в Устиновском районе г. Ижевска
        div  
          span.text-19 На данном объекте была установлена вентиляция, кондиционирование, произведена автоматизация и теплоснабжение приточных установок.
    
    .span-work-examples
      .obj-block-work-examples
        WorkExamples(:numberObject="2")
    .obj-text-block-work-examples
      .obj-text-part-work-examples(style="color: #FFFFFF;")
        div(style="padding-bottom:20px")
          span.text-25-b(style="color: #452132;") «Поликлиника БУЗ УР "Воткинская районная больница МЗ УР" в г. Воткинске Удмуртской Республики
        div  
          span.text-19 Монтаж вентиляционного оборудования, проточно-вытяжных установок. Монтаж систем кондиционирования, ККБ 
    
    .span-work-examples
      .obj-block-work-examples
        WorkExamples(:numberObject="3")
    .obj-text-block-work-examples
      .obj-text-part-work-examples(style="color: #FFFFFF;")
        div(style="padding-bottom:20px")
          span.text-25-b(style="color: #452132;") Мебельсон 
        div  
          span.text-19 Монтаж воздушного отопления
  
</template>

<script>
import WorkExamples from '@/components/main/WorkExamples';

export default {
components:{
  WorkExamples
}
}
</script>

<style scoped>
.containerWorkExamples {
  position: relative;
  background: linear-gradient(90deg, rgba(33, 95, 168, 0.75) 0%, rgba(207, 112, 177, 0.735) 51.87%, rgba(255, 147, 123, 0.75) 99.8%);
  width: 100%;
  min-height: 93vh;
  height: auto;
  padding-top: 7%;
}
.text-main-block-section-examples {
  height: 15%;
  text-align: center;
}
.block-work-examples {
  min-height: 85%;
  height: auto;
  width: 100%;
}
.span-work-examples {
  min-height: 50%;
  height: auto;
  width: 80%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 20px auto;
  padding: 20px 0;
  box-shadow: 0 0 0 transparent;
  transition: box-shadow .5s ;
}

.span-work-examples:hover{
  box-shadow: 0 0 20px rgba(0, 0, 0, .5);
  transition: box-shadow .5s ;
}

@media screen and (max-width: 900px) {
  .span-work-examples {
    display: block;
  }
}
.obj-block-work-examples {
  min-height: 90%;
  height: auto;
}
@media screen and (max-width: 900px) {
  .obj-block-work-examples {
    width: 100%;
    min-height: 50%;
  }
}
.obj-text-block-work-examples {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px ;
}
@media screen and (max-width: 1000px) {
  .obj-text-block-work-examples {
    width: 100%;
    min-height: 50%;
    height: auto;
    padding-bottom: 50px !important;
  }
}
.obj-text-part-work-examples {
  width: 70%;
  height: min-content;
  padding: 0px 10px;
}
</style>