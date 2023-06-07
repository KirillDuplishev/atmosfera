<template lang="pug">
v-row.containerFor
  v-col.blockLeft-section-four(md="5")
    img.img-right-section-four(src="@/assets/KILLMEPLZX2_Factory_ventilationwhite_purple_pastel_colors_high__715fc1d0-c4f6-4996-bb17-49634b6a0580.png")
  v-col.blockRight-section-four(md="5")
    .text-block-main-section-four
      .text-block-section-four
        span.text-29-b ООО "АТМОСФЕРА" предлагает лучшее европейское оборудование
        //- span.text-29-b лучшее европейское оборудование 
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

<style>
@media screen and (max-width: 463px) {
  .text-ellipse-section-four {
    width: 150px;   
  }
}
@media screen and (max-width: 388px) {
  .text-ellipse-section-four {
    width: 135px;   
  }
}
@media screen and (max-width: 1000px) {
  .blockLeft-section-four {
    display: none !important;
  }
  .blockRight-section-four {
    background: url("@/assets/KILLMEPLZX2_Factory_ventilationwhite_purple_pastel_colors_high__715fc1d0-c4f6-4996-bb17-49634b6a0580.png");
    background-size: cover;
    width: 100% !important;
    min-height: 93vh;
    height: auto;
    text-align: center;
  }
  .text-block-section-four {
    padding: 20px;
    align-items:center;
    margin: 15px;
    border-radius: 10px;
    color: #fff !important;
  }
  .text-description-block-section-four {
    text-align: center;
    color: white !important;
    margin: 15px !important;
    border-radius: 10px;
    background: rgb(0, 0, 0, 0.6);
  }
  .main-block-ellipse-section-four {
    width: 100%;
    text-align: center;
  }
  .text-block-ellipse-section-four {
    align-items: center;
    text-align: center;
    justify-content: center;
    /* margin: auto; */
    margin-left: 0% !important;
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
  min-height: 93vh;
  height: auto;
  width: 100%;
}
.blockLeft-section-four {
  width: 40%;
  min-height: 90%;
  padding: 20px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.blockRight-section-four {
  width: 60%;
  height: 100%;
}

.text-block-section-four{
  text-align:left;
  color: #452132;
  margin-top: 100px;
  margin-left: 20%;
}

.text-description-block-section-four {
  text-align: left;
  line-height: 25px;
  color: black;
  margin-top:  20px;
  margin-left: 20%;
}
.text-block-ellipse-section-four {
  width: auto;
  flex-wrap: wrap;
  gap: 10px;
  text-align: left;
  display: flex;
  margin-top:  20px;
  margin-left: 20%;
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
  position: absolute;
  border-radius: 20px;
  box-shadow: 5px 5px 20px #000;
  left: 50%;
  top: 50%;
  transform: translate(-110%, -50%);
  width: 40%;
  height: auto;
}
.outline-border {
  width: auto;
  height: auto;
  border-radius: 15px;
  padding: 20px;
  border: 2px solid rgb(0, 0, 0, 0.2);
  margin-right: 20px;
}
</style>