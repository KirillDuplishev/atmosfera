<template lang="pug">
.containerFor
  .blockLeft-section-four
    img.img-right-section-four(src="@/assets/FourthSectionImg.png" width="70%" height="auto")
  .blockRight-section-four
    .text-block-main-section-four
      .text-block-section-four
        span.text-29-b ООО "АТМОСФЕРА" предлагает лучшее европейское оборудование
      .text-description-block-section-four.outline-border
        span.text-17 Все оборудование прошло сертификацию ISO 9001,
        span.text-17 а так же Российскую сертификацию "РОСТЕСТа".  
        span.text-17 Поставляемое оборудование отличается высокой
        span.text-17 надежностью и долговечностью его эксплуатации.
        span.text-17 В настоящее время ООО "АТМОСФЕРА" является 
        span.text-17 официальным диллером таких известных
        span.text-17 производителей климатического оборудования как:
      .main-block-ellipse-section-four
        .text-block-ellipse-section-four
          .text-ellipse-section-four
            span.text-15 LESSAR
          .text-ellipse-section-four
            span.text-15 SHUFT
          .text-ellipse-section-four
            span.text-15 Korf
          .text-ellipse-section-four
            span.text-15 Dospel
          .text-ellipse-section-four
            span.text-15 Vertro
          .text-ellipse-section-four
            span.text-15 Panasonic
          .text-ellipse-section-four
            span.text-15 Ballu
          .text-ellipse-section-four
            span.text-15 Royal
          .text-ellipse-section-four
            span.text-15 VKT 
          .text-ellipse-section-four
            span.text-15 Breez
          .text-ellipse-section-four
            span.text-15 Тепломаш
          .text-ellipse-section-four
            span.text-15 Завод Вентилятор
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (max-width: 463px) {
  }
@media screen and (max-width: 388px) {
  .text-ellipse-section-four {
    width: 135px;   
  }
}
@media screen and (max-width: 1000px) {
  .text-ellipse-section-four {
    width: 135px;   
  }
  .blockLeft-section-four {
    display: none !important;
  }
  .blockRight-section-four {
    background: url("@/assets/FourthSectionImg.png");
    background-size: cover;
    width: 100% !important;
    min-height: 93vh;
    height: auto;
    text-align: center;
  }
  .text-block-section-four {
    text-align:center !important;
    margin-left: 0 !important;
  }
  .text-description-block-section-four {
    text-align: center !important;
    color: white !important;
    margin: 15px !important;
    background: rgba(217, 217, 217, 0.1);
    backdrop-filter: blur(50px);
  }
  .text-block-main-section-four{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .main-block-ellipse-section-four {
    width: 100%;
    text-align: center;
  }
  .text-block-ellipse-section-four {
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-left: 0% !important;
    padding: 0 10px 50px 10px;
  }
}
@media screen and (max-width: 1300px) {
  .text-block-section-four {
    margin-top: 0px;
    padding-top: 20px;
    align-items:center;
    margin: auto;
  }
  .text-description-block-section-four {
    text-align: center;
    color: black;
    margin: auto;
  }
}
.containerFor {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 93vh;
  height: auto;
}
.blockLeft-section-four {
  width: 50%;
  min-height: 90%;
  height: auto;
}
.text-block-main-section-four {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20% 10%;
}
.blockRight-section-four {
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-block-section-four{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left ;
  color: #452132;
}

.text-description-block-section-four {
  margin-top: 5%;
  text-align: left;
  line-height: 25px;
  color: black;
}
.text-block-ellipse-section-four {
  flex-wrap: wrap;
  gap: 10px;
  display: flex;
  margin-top:  20px;
  justify-content: center;
}
.text-ellipse-section-four {
  width: 180px;
  height: min-content;
  background: #0076a9;
  color: white;
  box-shadow: 2px 2px 4px black;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}
.img-right-section-four {
  border-radius: 20px;
  box-shadow: 5px 5px 20px #000;
}
.outline-border {
  border-radius: 15px;
  padding: 20px;
  border: 2px solid rgb(0, 0, 0, 0.2);
}
</style>