<template lang="pug">
  v-row.containerTwo
    v-col.column-width(md="5")
      .blockLeft-section-two
        .text-block-main-section-two
          .text-block-section-two
            span.text-27-b Вы получите готовую вентиляционную систему сэкономив свое время
          .text-description-block-section-two.outline-border
            span.text-17 Наша компания осуществляет комплексный подход к решению задач, связанных с проектированием, поставкой, монтажом, запуском и наладкой систем вентиляции и кондиционирования любой сложности.
          .text-description-block-section-two.outline-border
            span.text-17 Потенциал нашей компании позволяет осуществлять полное комплектование объектов заказчика «под ключ». Мы сопровождаем проекты любой сложности. Для нас важен каждый заказчик – будь это кондиционер в жилом доме или системы вентиляции на региональных и федеральных объектах капитального строительства, такие как школы, больницы.
          .text-description-block-section-two.outline-border
            span.text-17 В зависимости от запросов и задач заказчика наша компания также выполняет подбор и замену оборудвания уже по готовым проектам.
    v-col.column-width(md="5")
      .blockRight-section-two
        img.img-right-section-two(src="@/assets/KILLMEPLZX2_Large_spaceventilation_air_flow_white_purpleorange__0727ac3a-0c43-4562-8842-6e8eb968b88f.png")
</template>

<script>
export default {

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
    background: url("@/assets/KILLMEPLZX2_Large_spaceventilation_air_flow_white_purpleorange__0727ac3a-0c43-4562-8842-6e8eb968b88f.png");
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
  /* .img-right-section-two {
    position: static;
    left: 0%;
    top: 0%;
    transform: translate(0%, 0%);
    width: 80%;
    height: auto;
  } */
}
.column-width{
  width: 50%;
}
.containerTwo {
  position: relative;
  background: #fff;
  display: flex;
  min-height: 93vh;
  height: auto;
  width: 100%;
}

/*  */

.blockLeft-section-two {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-95%, -45%);
  /* padding-top: 20%; */
  height: 100%;
}

/*  */

.text-block-main-section-two {
  margin-right: 20px;
}

/*  */

.text-block-section-two{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #452132;
  margin-top: 100px;
  margin-left: 10%;
}

/*  */

.text-description-block-section-two {
  text-align: left;
  line-height: 25px;
  color: black;
  margin-top:  20px;
  margin-left: 10%;
}

/*  */

.outline-border {
  width: auto;
  height: auto;
  border-radius: 15px;
  padding: 20px;
  border: 2px solid rgb(0, 0, 0, 0.2);
}

/*  */

.blockRight-section-two {
  min-height: 90%;
  padding-top: 20%;
  height: auto;
}

.img-right-section-two {
  position: absolute;
  border-radius: 20px;
  box-shadow: 5px 5px 20px #000;
  left: 50%;
  top: 50%;
  transform: translate(15%, -50%);
  width: 40%;
  height: auto;
}
</style>