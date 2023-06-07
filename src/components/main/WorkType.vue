<template lang="pug">
//- .container-work-type(:style="'background-color:' + imgSrc")
.container-work-type(:class="{'background1': id==1, 'background2': id==2, 'background3': id==3, 'background4': id==4, 'background5': id==5, 'background6': id==6, 'background7': id==7, 'background8': id==8,'background9': id==9}")
  //- img.background(:src="require(`@/assets/WorkExaple/${imgSrc}.jpg`)")
  .shadow-text
  span.text-17.text-block {{nameBlock}}
</template>

<script>

export default {
  name: "WorkType",
  props: {
    nameBlock: null,
    imgSrc: null,
    id: null,
  },

  data: () => ({
  }),

  computed:{
    returnClass(){
      if(this.id==1){
        return 'background1'
      }
      if(this.id==2){
        return 'background2'
      }
      if(this.id==3){
        return 'background3'
      }
      if(this.id==4){
        return 'background4'
      }
      if(this.id==5){
        return 'background5'
      }
      if(this.id==6){
        return 'background6'
      }
      if(this.id==7){
        return 'background7'
      }
      if(this.id==8){
        return 'background8'
      }
      return 'background9'
    }
  },
}
</script>

<style scoped>
.background{
  width: 100%;
  height: auto;
  position: relative;
  top: 0;
  left: 0;
}
.container-work-type {
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  padding-bottom: -200px;
}
.text-block {
  position: relative;
  width: 100%;
  bottom: 20%;
  text-align: center;
  color: white;
}
.shadow-text{
  position: relative;
  background: linear-gradient(180deg, transparent 30%, rgba(0,0,0, .8) );
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.background1{
  background: url('@/assets/WorkExaple/close-up-ventilation-system (2).jpg');
  background-size: 100%;
  background-position: center;
}
.background2{
  background: url('@/assets/WorkExaple/3d-rendering-ventilation-system (1).jpg');
  background-size: 100%;
  background-position: center;
}
.background3{
  background: url('@/assets/WorkExaple/close-up-ventilation-system (1).jpg');
  background-size: 100%;
  background-position: center;
}
.background4{
  background: url('@/assets/WorkExaple/industrial-vent-coming-out-building.jpg');
  background-size: 100%;
  background-position: center;
}
.background5{
  background: url('@/assets/WorkExaple/close-up-ventilation-system (9).jpg');
  background-size: 100%;
  background-position: center;
}
.background6{
  background: url('@/assets/WorkExaple/close-up-ventilation-system.jpg');
  background-size: 100%;
  background-position: center;
}
.background7{
  background: url('@/assets/WorkExaple/close-up-ventilation-system (3).jpg');
  background-size: 100%;
  background-position: center;
}
.background8{
  background: url('@/assets/WorkExaple/3d-rendering-ventilation-system.jpg');
  background-size: 100%;
  background-position: center;
}
.background9{
  background: url('@/assets/WorkExaple/close-up-ventilation-system (7).jpg');
  background-size: 100%;
  background-position: center;
}
</style>