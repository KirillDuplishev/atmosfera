<template lang="pug">
.container-work-type
  .text-block  
    span.text-17 {{nameBlock}}
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
}
.text-block {
  position: absolute;
  width: 100%;
  bottom: 20%;
  text-align: center;
  color: white
}
</style>