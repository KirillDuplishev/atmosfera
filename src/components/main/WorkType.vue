<template lang="pug">
.container-work-type(:class="{}")
  .shadow-text
  //- .text-block
  span.text-17.text-block {{nameBlock}}
</template>

<script>

export default {
  name: "WorkType",
  props: {
    nameBlock: null,
    imgSrc: null,
  }
}
</script>

<style scoped>
.container-work-type {
  max-height: 100%;
  max-width: 100%;
  background: url('@/assets/ventThree.jpg');
  background-size: 100%;
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
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