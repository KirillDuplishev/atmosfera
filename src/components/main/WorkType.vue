<template lang="pug">
.container-work-type
  div
    img(:src="require(`@/assets/WorkExaple/${imgSrc}.jpg`)" width="100%" height="auto")
  .shadow-text
  span.text-17.text-block {{nameBlock}}
</template>

<script>

export default {
  name: "WorkType",
  props: {
    nameBlock: null,
    imgSrc: null,
  },

  data: () => ({
  })
}
</script>

<style scoped>
.container-work-type {
  max-height: 100%;
  max-width: 100%;
  /* background: url('@/assets/WorkExaple/close-up-ventilation-system (2).jpg');
  background-size: 100%; */
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
</style>