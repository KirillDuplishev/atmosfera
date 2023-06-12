<template lang="pug">
  .containerTwo
      .blockLeft-section-two
        .text-block-main-section-two
          .text-block-section-two
            span.text-40-b Получите готовую вентиляционную систему, сэкономив свое время
          .text-description-block-section-two.outline-border
            span.text-17 Наша компания осуществляет комплексный подход к решению задач, связанных с проектированием, поставкой, монтажом, запуском и наладкой систем вентиляции и кондиционирования любой сложности.
          .text-description-block-section-two.outline-border
            span.text-17 Потенциал нашей компании позволяет осуществлять полное комплектование объектов заказчика «под ключ». Мы сопровождаем проекты любой сложности. Для нас важен каждый заказчик – будь это кондиционер в жилом доме или системы вентиляции на региональных и федеральных объектах капитального строительства, такие как школы, больницы.
          .text-description-block-section-two.outline-border
            span.text-17 В зависимости от запросов и задач заказчика наша компания также выполняет подбор и замену оборудвания уже по готовым проектам.
      .blockRight-section-two
        img.img-right-section-two(src="@/assets/SecondSectionImg.png" width="70%" height="auto")
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
  .text-block-section-two span {
    font-size: 35px !important;
  }
}
@media screen and (max-width: 1000px) {
  .containerTwo {
    position: static !important;
    display: block !important;
  }
  .blockLeft-section-two {
    background: url("@/assets/SecondSectionImg.png");
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
    text-align: center !important;
    margin: auto; 
    margin: 50px 0px !important; 
  }
  .text-description-block-section-two {
    text-align: center;
    color: white;
    margin: 10px 10px !important;
    background: rgba(217, 217, 217, 0.1);
    backdrop-filter: blur(50px);
  }
  .outline-border {
    color: #fff !important;
    width: 80%;
    margin: 10px;
  }
  .blockRight-section-two {
    display: none;
  }
}
.containerTwo {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 93vh;
  height: auto;
}

.text-block-main-section-two{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20% 10%;
}

.blockLeft-section-two {
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}



.text-block-section-two{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left ;
  color: #452132;
}


.text-description-block-section-two:nth-child(1) {
  margin-top: 10%;
}

.text-description-block-section-two {
  margin-top: 5%;
  text-align: left;
  line-height: 25px;
  color: black;
}



.outline-border {
  border-radius: 15px;
  padding: 20px;
  border: 2px solid rgb(0, 0, 0, 0.2);
}



.blockRight-section-two {
  width: 50%;
  min-height: 90%;
  height: auto;
}

.img-right-section-two {
  border-radius: 20px;
  box-shadow: 5px 5px 20px #000;
}
</style>