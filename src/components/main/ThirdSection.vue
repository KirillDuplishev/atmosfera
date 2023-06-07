<template lang="pug">
  .containerThree
    .text-title-section-three
      span.text-40-b Что именно мы делаем
    .container-worktype-section-three
      .span-typework-section-three
        WorkType.block-type-section-three(nameBlock="Поставка и монтаж систем вентиляции" imgSrc="Logo")
        WorkType.block-type-section-three(nameBlock="Поставка и монтаж систем дымоудаления" imgSrc="Logo")
        WorkType.block-type-section-three(nameBlock="Поставка и монтаж систем кондиционирования" imgSrc="Logo")
      .span-typework-section-three
        WorkType.block-type-section-three(nameBlock="Поставка и монтаж воздушного отопления" imgSrc="Logo")
        WorkType.block-type-section-three(nameBlock="Диагностика и устранение неисправностей существующих систем вентиляций и кондиционирования." imgSrc="Logo")
        WorkType.block-type-section-three(nameBlock=" Обслуживание систем кондиционирования, кондиционеров." imgSrc="Logo")
      .span-typework-section-three
        WorkType.block-type-section-three(nameBlock="Поставка и монтаж систем автоматизации вентиляции." imgSrc="Logo")
        WorkType.block-type-section-three(nameBlock="Настройка и пусконаладочные работы систем автоматизации, вентиляции кондиционирования. " imgSrc="Logo")
        WorkType.block-type-section-three(nameBlock="Реконструкция систем вентиляции и кондиционирования, демонтажные работы." imgSrc="Logo")
</template>

<script>
import WorkType from '@/components/main/WorkType';
export default {
  components:{
    WorkType
  }
}
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  .block-type-section-three {
    width: 50% !important;
    height: auto;
  }
  .block-type-section-three:hover{
    transform: scale(1);
  }
  .span-typework-section-three {
    height: 25%;
  }
  .containerThree{
    display: none;
  }
  .containerThreeMobile{
    display: block;
  }
  .text-title-section-three span{
    font-size: 30px !important;
  }
}
.containerThree {
  background: white;
  min-height: 93vh;
  height: auto;
  width: 100%;
}
.text-title-section-three {
  width: 100%;
  height: 10%;
  color: rgb(0, 118, 169);
  padding-top: 20px;
  margin-bottom: 10px;
}
.container-worktype-section-three {
  width: 100%;
  height: 90vh;
}
.span-typework-section-three {
  width: 100%;
  height: 30%;
  display: flex;
}
.block-type-section-three {
  border: 1px solid white;
  box-shadow: 1px 2px 4px black; 
  width: 33.3%;
  height: 100%;
  cursor: pointer;
  transition: transform .5s, box-shadow .5s;
}
.block-type-section-three:hover {
  box-shadow: 0 0 15px #000;
  cursor: pointer;
  transform: scale(1.001);
  transition: transform .5s;
}
</style>