<template lang="pug">
div
  Header.header
  v-row.containerTwo
    v-col.column-width(md="5")
      .blockLeft-section-two
        .text-block-main-section-two
          .text-block-section-two
            span.text-75-b О нас
          .text-description-block-section-two.outline-border
            span.text-17 Наша компания начала свое развитие в 2010-х годах. Начиналось все с простой идеи, которая обрела со временем более чёткие представления и формы.
          .text-description-block-section-two.outline-border
            span.text-17 Для нас очень важен каждый наш клиент, будь это крупные заводы, больницы, школы, либо муниципальные и федеральные заказчики, или обычные физические лица – ко всем нашим клиентам абсолютно одинаковый подход.
          .text-description-block-section-two.outline-border
            span.text-17 Для нас важны и качество выполняемых нами работ и наша репутация.
    v-col.column-width(md="5")
      .blockRight-section-two
        img.img-right-section-two(src="@/assets/ManAboutUs.svg")
  
  .our-advantages-block
    .title-advantages
      span.text-40-b Наши приемущества
    .advantages
      .elemnt
        img(src="@/assets/aboutUs/icon_1 .svg")
        span Профессиональные знания и опыт
      .elemnt
        img(src="@/assets/aboutUs/icon_2.svg")
        span Мы всегда работаем для клиента
      .elemnt
        img(src="@/assets/aboutUs/icon_3.svg")
        span Оптимальное соотношение цены и качества
      .elemnt
        img(src="@/assets/aboutUs/icon_4.svg")
        span Динамичность и гибкость
  
  v-row.container-left
    v-col.blockLeft-section(md="5")
      img.right-section-img(src="@/assets/manWorking.svg")
    v-col.blockRight-section(md="5")
      .text-block-main
        .text-description-block-section.outline-border
          span.text-17 Выполнение всех «договорных» обязательств, а порой и устных договорённостей является одним из важнейших приоритетов нашей компании. Многое в компании зависит от того, кто находится в управлении, и все сотрудники стараются также транслировать и выполнять данную политику, которая задаётся руководителем.
        .text-description-block-section.outline-border
          span.text-17 За годы сотрудничества с различными заказчиками, кроме основной цели всех предпринимателей, были неоднократно достигнуты и нематериальные цели, по завершении объектов в виде благодарностей от заказчиков, с некоторыми у нас сложилось многолетнее продолжительное взаимовыгодное сотрудничество, в котором все участники могут друг на друга положится.
        .text-description-block-section.outline-border
          span.text-17 Если вы разделяете наши ценности и приоритеты, мы с радостью готовы предположить вам сотрудничать с нашей компанией.

  Footer
  
  div.panel-hide
    DialogWindow(:activeFlag="true" title="Лицензия")
</template>

<script>
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
import DialogWindow from '@/components/DialogWindow'
export default {
  name:"AboutUs",

  components: {
    Header,
    Footer,
    DialogWindow,
  }
}
</script>

<style scoped>
@media screen and (max-width: 1300px) {
  .containerTwo {
    min-height: 93vh;
    height: auto;  
  }
}
@media screen and (max-width: 1000px) {
  .containerTwo {
    display: block;
  }
  .blockLeft-section-two {
    position: relative !important;
    background: url("@/assets/ManAboutUs.svg");
    background-size: cover;
    width: 100% !important;
    min-height: 93vh;
    height: auto;
    text-align: center;
    padding-top: 0px !important;
    left: 0% !important;
    top: 0% !important;
    transform: translate(0%, 0%) !important;
  }
  .text-block-main-section-two {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text-block-section-two {
    align-items:center;
    margin: auto; 
    text-shadow: 2px 2px 4px black;
    margin: 50px 0px !important; 
    color: #fff !important;
  }
  .text-description-block-section-two {
    text-align: center;
    color: white;
    margin: 10px 10px !important;
    background: rgb(0, 0, 0, 0.4);
  }
  .outline-border {
    color: #fff !important;
    width: 80%;
    margin: 10px;
  }
  .blockRight-section-two {
    display: none;
  }
  .column-width{
    width: initial !important;;
  }
}
.column-width{
  width: 50%;
}
.containerTwo {
  background: #fff;
  display: flex;
  min-height: 93vh;
  height: auto;
  width: 100%;
}


.blockLeft-section-two {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-95%, -45%);
  height: 100%;
}


.text-block-main-section-two {
  margin-right: 20px;
}


.text-block-section-two{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #452132;
  margin-top: 100px;
  margin-left: 10%;
}


.text-description-block-section-two {
  text-align: left;
  line-height: 25px;
  color: black;
  margin-top:  20px;
  margin-left: 10%;
}


.outline-border {
  width: auto;
  height: auto;
  border-radius: 15px;
  padding: 20px;
  border: 2px solid rgb(0, 0, 0, 0.2);
}


.blockRight-section-two {
  min-height: 90%;
  padding-top: 20%;
  height: auto;
}

.img-right-section-two {
  position: absolute;
  /* border-radius: 20px; */
  /* box-shadow: 5px 5px 20px #000; */
  left: 50%;
  top: 50%;
  transform: translate(15%, -50%);
  width: 40%;
  height: auto;
}
.img-left-section-two{
  position: absolute;
  /* border-radius: 20px; */
  /* box-shadow: 5px 5px 20px #000; */
  left: 50%;
  top: 50%;
  transform: translate(-65%, -50%);
}
.header {
  width: 100%;
  position: sticky;
  top: 0;
  font-family: 'Inter', sans-serif;
  letter-spacing: -1px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background: linear-gradient(90deg, #040D2C, #462A8B,#8D05D6);
  z-index: 998;
}
.our-advantages-block{
  height: 45vh;
  /* padding: 0 ; */
  background: linear-gradient(90deg, rgba(33, 95, 168, 0.75) 0%, rgba(207, 112, 177, 0.735) 51.87%, rgba(255, 147, 123, 0.75) 99.8%);
}
.title-advantages{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #452132;
  padding: 50px 0;
}
.advantages{
  padding-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.elemnt{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #fff;
}
.elemnt img {
  padding-bottom: 20px;
}
.panel-hide {
  z-index: 999;
  position: absolute;
}
.container-left {
  background: #fff;
  display: flex;
  min-height: 93vh;
  height: auto;
}
.blockLeft-section {
  width: 40%;
  min-height: 90%;
  padding: 20px;
  height: auto;
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
}
.blockRight-section {
  width: 60%;
  height: 100%;
}
.right-section-img {
  position: absolute;
  /* border-radius: 20px;
  box-shadow: 5px 5px 20px #000; */
  left: 50%;
  top: 50%;
  transform: translate(-105%, 120%);
  width: 45%;
  height: auto;
}
.text-block-section{
  text-align:left;
  color: #452132;
  margin-top: 100px;
  margin-left: 20%;
}
.text-description-block-section {
  text-align: left;
  line-height: 25px;
  color: black;
  margin-top:  20px;
  margin-left: 20%;
}
.text-block-main{
  margin-top: 100px;
}
</style>