<template lang="pug">
.container-products
  Header(:background="true")
  
  .main-block
    .title-block  
      span.text-27-b Сейчас в наличии
    .block-products
      .card-products(v-for="product in store.airСonditioners")
        .title-card-products
          .name-product
            span.text-19-b {{product.nameConddition}}
          .summ-product
            span.text-19-b {{product.summCondition}}
        .main-info-card
          .img-products-block 
            img(:src="require(`@/assets/imgProducts/${product.imgSrc}.svg`)" width="75%")
          .text-info-card
            .span-characteristic 
              .name-characteristic
                span.text-11 Номинальная производительность охлаждения
              .value-characteristic
                span.text-11 {{product.ratedCoolingCapacity}}
            .span-characteristic 
              .name-characteristic
                span.text-11 Номинальная производительность обогрева
              .value-characteristic
                span.text-11 {{product.ratedHeatingCapacity}}
            .span-characteristic 
              .name-characteristic
                span.text-11 Уровень шума внутр. блока
              .value-characteristic
                span.text-11 {{product.noiseLevelInsideBlock}}
            .span-characteristic 
              .name-characteristic
                span.text-11 Макс. уровень шума внешнего блока
              .value-characteristic
                span.text-11 {{product.maxNoiseLevel}}
            .span-characteristic 
              .name-characteristic
                span.text-11 Эффективен для помещ. площадью до
              .value-characteristic
                span.text-11 {{product.effectiveForRooms}}
            .span-characteristic 
              .name-characteristic
                span.text-11 Гарантийный срок
              .value-characteristic
                span.text-11 {{product.guaranteePeriod}}
  
  Footer
</template>

<script>
import Header from '@/components/main/Header'
import { store } from "@/store.js";
import Footer from '@/components/main/Footer';
export default {
  name: "ProductsPage",

  components: {
    Header,
    Footer,
  },

  data() {
    return {
      store
    }
  }

}
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  .block-products {
    display: flex !important;
    flex-direction: column !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
  }
  .card-products {
    min-width: 80% !important;
    max-width: 80% !important;   
  }
  .title-block {
    text-align: center !important;
    color: #452132;
    margin: 60px 0 50px 0 
  }
}
@media screen and (max-width: 500px) {
  .main-block {
    padding: 0 !important;
  }
  .card-products {
    min-width: 90% !important;
    max-width: 90% !important;   
  }
}
@media screen and (max-width: 400px) {
  .card-products {
    min-width: 95% !important;
    max-width: 95% !important;   
  }
}
.container-products {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 60px 0 0 0;
  background: linear-gradient(180deg, rgba(163, 143, 193, 0) 0%, rgba(163, 143, 193, 0.74) 56.19%);;
}
.main-block {
  padding: 0 10%;
}
.title-block {
  text-align: left;
  color: #452132;
  margin: 60px 0 50px 0 
}
.block-products {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card-products {
  min-width: 45%;
  max-width: 45%;
  padding: 3%;
  margin: 0 0 5% 0;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 20px;
}
.title-card-products {
  display: flex;
  width: 100%;
  height: auto;
}
.name-product { 
  width: 70%;
  color: #452132;
  font-weight: 600;
  text-align: left;
}
.summ-product { 
  width: 30%;
  color: #452132;
  font-weight: 700;
  text-align: right;
}
.main-info-card {
  display: flex;
}
.img-products-block {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40%;
}
.text-info-card {
  text-align: center;
  width: 60%;
}
.span-characteristic {
  display: flex;
  color: #6D6D6D;
}
.name-characteristic {
  color: #6D6D6D;
  font-weight: 600;
  text-align: left;
  width: 80%;
}
.value-characteristic {
  color: #6D6D6D;
  font-weight: 600;
  text-align: right;
  width: 20%;
}
.panel-hide {
  z-index: 999;
  position: absolute;
}
</style>