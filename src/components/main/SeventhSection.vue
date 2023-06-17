<template lang="pug">
  .containerScreenMap(id="screenMapSection")
    .info-block-section-map(v-show="showContacts")
      .text-main-block-section-map
        .text-block-section-map
          span.text-35-b(style="color: #452132") КОНТАКТЫ
        .text-block-section-map
          span.text-19-b 8-912-017-44-44
          br
          span.text-19-b Ежедневно с 8:30 до 17:30 
        .text-block-section-map
          span.text-19-b Ижевск
          br
          span.text-19-b ул. Максима Горького, 59а
      
      v-btn.button-section-map.text-15-b( @click="openCalBackForm" ) Заказать звонок

    .info-block-section-map-call-back(v-show="showFormCallBack") 
      .text-main-block-section-map-call-back
        CastomInput.input(v-model="clientName" placeholder="Имя" :name="true")
        CastomInput.input(v-model="clientPhoneNumber" placeholder="Номер телефона" mask="+0 (000)-000-00-00" type="num")
    
      v-btn.button-section-map-call-back.text-15-b.mg-b-20( @click="callBack()" :disabled="!checkDataInput") Оставить заявку
      v-btn.button-section-map-call-back.text-15-b( @click="callBack('return')") Назад
      
      .call-back-text
        .privacy-checkbox
          input(v-model="privacyConfirm" type="checkbox" @click="privacyConfirm = !privacyConfirm")
          div(style="text-align: left; padding-left: 5px")
            span.text-15-b Нажимая на кнопку, Вы соглашаетесь на 
            span.text-15-b( @click="privacyRout" style="color:#7F06FF; cursor: pointer") обработку персональных данных
    
    .info-block-section-map(v-show="callBackResponse") 
      .text-main-block-section-map-call-back
        .call-back-response-text
          span.text-25-b Спасибо за вашу заявку, 
          div
            span.text-20-b наш менеджер свяжется с вами по указанному номеру телефона в самое ближайшее время

        v-btn.button-section-map-call-back.text-15-b( @click="closeCallBackResponse") Закрыть
      
</template>

<script>
import CastomInput from '../CastomInput';

export default {
  
  components: {
    CastomInput
  },

  data: () => ({
    showContacts: true,
    callBackResponse: false,
    showFormCallBack: false,
    clientName: "",
    clientPhoneNumber: "",
    privacyConfirm: false
  }),

  computed: {

    checkDataInput() {
      return (this.clientName.length >= 2) && (this.clientPhoneNumber.length == 11) && this.privacyConfirm
    }

  },

  methods: {

    privacyRout() {
      this.$router.push({path: '/privacy'})
    },

    openCalBackForm() {
      this.showContacts = false
      this.showFormCallBack = true
    },
    
    callBack(string) {

      if(string) {
        this.showFormCallBack = false
        this.showContacts = true  
      }
      
      else {
        this.showContacts = false
        this.showFormCallBack = false
        this.callBackResponse = true
        this.clientName = ''
        this.clientPhoneNumber = ''
        //- Запрос
      }

    },

    closeCallBackResponse() {
      this.callBackResponse = false
      this.showContacts = true
    }
  
  }

}
</script>

<style scoped>

@media screen and (max-width: 1300px) {
  .containerScreenMap {
    background-size: cover;
    min-height: 93vh;
    height: auto;
    width: 100%;
  }
}

@media screen and (max-width: 950px) {
  .containerScreenMap {
    background: url('@/assets/screenMapMobileTwo.png');
  }
}

@media screen and (max-width: 590px) {
  .containerScreenMap {
    background: url('@/assets/screenMapMobile.png');
  }
}

@media screen and (max-width: 650px) { 
  .info-block-section-map-call-back {
    width: 400px !important;
  }
  .input:nth-child(1) {
    margin-top: 100px !important;
  }
}

@media screen and (max-width: 450px) {
  .info-block-section-map {
    width: 300px !important;
  }

  .info-block-section-map-call-back {
    width: 300px !important;
    height: 500px !important;
  }

  .button-section-map-call-back {
    width: 70% !important;
  }
}
input {
  padding: 29px  14px;
  border-radius: 30px;
  border: 1px solid grey;
}
.containerScreenMap {
  background: url('@/assets/screen-map.png');
  background-size: cover;
  min-height: 93vh;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
.info-block-section-map {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 17.5px;
  box-shadow: 3px 3px 20px black;
  width: 400px;
  height: 300px;
}
.info-block-section-map-call-back {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 17.5px;
  box-shadow: 3px 3px 20px black;
  width: 500px;
  height: 450px;
}
.text-block-section-map {
  min-height: 20%;
  height: auto;
  width: 100%;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
  padding-bottom:20px ;
}
.button-section-map{
  position: relative;
  text-transform: none;
  width: auto;
  color: #fff !important;
  background: linear-gradient(37deg, rgba(127,6,255,1) 40%, rgba(12,12,255,1) 100%, rgba(0,212,255,1) 100%);
  padding: 29px  14px !important;
  border: 2px solid #fff;
  border-radius: 30px;
  transition: transform .5s, box-shadow .5s;
  cursor: pointer;
  text-decoration: none;
}
.button-section-map-call-back {
  position: relative;
  text-transform: none;
  width: 55%;
  height: 50px !important;
  color: #fff !important;
  background: linear-gradient(37deg, rgba(127,6,255,1) 40%, rgba(12,12,255,1) 100%, rgba(0,212,255,1) 100%);
  padding: 30px 20px !important;
  border: 2px solid #fff;
  border-radius: 30px;
  transition: transform .5s, box-shadow .5s;
  cursor: pointer;
  text-decoration: none;
}
.button-section-map:hover {
  box-shadow: 0 0 15px #000;
  transform: scale(1.03);
}
.input:nth-child(1) {
  margin-top: 50px;
}
.input{
  width: 55%;
}
.text-main-block-section-map-call-back {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.call-back-text {
  display: flex;
  color: rgba(0, 0, 0, 0.75);
  margin: 20px 0 50px 0;
  width: 80%;
}
.call-back-text span {
  width: 100%;
}
.call-back-response-text {
  width: 70%;
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 30px;
}
.mg-b-20 {
  margin-bottom: 20px;
}
.privacy-checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>