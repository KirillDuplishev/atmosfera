<template lang="pug">
.container-work-type
  v-img.background(:src="require(`@/assets/WorkExaple/jpg/${imgSrc}.jpg`)")
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
  },
}
</script>

<style scoped>
.background{
  transform: translate(0, -25%);
  /* width: 100%;
  height: auto;
  position: relative;
  top: 0;
  left: 0; */
}
.container-work-type {
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  padding-bottom: -200px;
  box-shadow: 0 0 0 transparent;
  cursor: pointer;
  transform: scale(1);
  transition: transform .5s;
}
.container-work-type:hover {
  box-shadow: 0 0 15px #000;
  cursor: pointer;
  transform: scale(1.005);
  transition: transform .5s;
}
.text-block {
  position: absolute;
  width: 100%;
  bottom: 10%;
  color: white !important;
}
.shadow-text{
  position: absolute;
  background: linear-gradient(180deg, transparent 30%, rgba(0,0,0, .8) );
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>