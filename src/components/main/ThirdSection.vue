<template lang="pug">
  .containerThree

    .text-title-section-three
      span.text-40-b(style="color:#452132") Что именно мы делаем

    .container-worktype-section-three
      .span-typework-section-three
        WorkType.block-type-section-three( id=1 nameBlock="Поставка и монтаж систем вентиляции" imgSrc="close-up-ventilation-system (2)")
        WorkType.block-type-section-three( id=2 nameBlock="Поставка и монтаж систем дымоудаления" imgSrc="3d-rendering-ventilation-system (1)")
        WorkType.block-type-section-three( id=3 nameBlock="Поставка и монтаж систем кондиционирования" imgSrc="close-up-ventilation-system (1)")
      .span-typework-section-three
        WorkType.block-type-section-three( id=4 nameBlock="Поставка и монтаж воздушного отопления" imgSrc="industrial-vent-coming-out-building")
        WorkType.block-type-section-three( id=5 nameBlock="Диагностика и устранение неисправностей существующих систем вентиляций и кондиционирования." imgSrc="close-up-ventilation-system (9)")
        WorkType.block-type-section-three( id=6 nameBlock=" Обслуживание систем кондиционирования, кондиционеров." imgSrc="close-up-ventilation-system")
      .span-typework-section-three
        WorkType.block-type-section-three( id=7 nameBlock="Поставка и монтаж систем автоматизации вентиляции." imgSrc="close-up-ventilation-system (3)")
        WorkType.block-type-section-three( id=8 nameBlock="Настройка и пусконаладочные работы систем автоматизации, вентиляции кондиционирования. " imgSrc="3d-rendering-ventilation-system")
        WorkType.block-type-section-three( id=9 nameBlock="Реконструкция систем вентиляции и кондиционирования, демонтажные работы." imgSrc="close-up-ventilation-system (7)")

    .container-worktype-section-three-mobile
        WorkType.block-type-section-three-mobile( id=1 nameBlock="Поставка и монтаж систем вентиляции" imgSrc="close-up-ventilation-system (2)")
        WorkType.block-type-section-three-mobile( id=2 nameBlock="Поставка и монтаж систем дымоудаления" imgSrc="3d-rendering-ventilation-system (1)")
        WorkType.block-type-section-three-mobile( id=3 nameBlock="Поставка и монтаж систем кондиционирования" imgSrc="close-up-ventilation-system (1)")
        WorkType.block-type-section-three-mobile( id=4 nameBlock="Поставка и монтаж воздушного отопления" imgSrc="industrial-vent-coming-out-building")
        WorkType.block-type-section-three-mobile( id=5 nameBlock="Диагностика и устранение неисправностей существующих систем вентиляций и кондиционирования." imgSrc="close-up-ventilation-system (9)")
        WorkType.block-type-section-three-mobile( id=6 nameBlock=" Обслуживание систем кондиционирования, кондиционеров." imgSrc="close-up-ventilation-system")
        WorkType.block-type-section-three-mobile( id=7 nameBlock="Поставка и монтаж систем автоматизации вентиляции." imgSrc="close-up-ventilation-system (3)")
        WorkType.block-type-section-three-mobile( id=8 nameBlock="Настройка и пусконаладочные работы систем автоматизации, вентиляции кондиционирования. " imgSrc="3d-rendering-ventilation-system")
        WorkType.block-type-section-three-mobile( id=9 nameBlock="Реконструкция систем вентиляции и кондиционирования, демонтажные работы." imgSrc="close-up-ventilation-system (7)")
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
  .block-type-section-three-mobile {
    width: 100% !important;
    height: 205px;
  }
  .span-typework-section-three {
    height: 25%;
  }
  .containerThree{
    background: #D9D9D9 !important;
    padding-top: 60px !important;
  }
  .containerThreeMobile{
    display: block;
  }
  .text-title-section-three{
    margin-bottom: 30px !important;
  }
  .text-title-section-three span{
    font-size: 30px !important;
  }
  .container-worktype-section-three-mobile {
    display: block !important;
  }
  .container-worktype-section-three {
    display: none;
  }
}
.containerThree {
  background: white;
  min-height: 93vh;
  padding-top: 50px;
  padding-bottom: 60px;
  height: auto;
  width: 100%;
}
.container-worktype-section-three-mobile {
  display: none;
  width: 100%;
  min-height: 90vh;
  height: auto;
}
.text-title-section-three {
  width: 100%;
  height: auto;
  margin-bottom: 50px;
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
</style>