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
  background: url('@/assets/KILLMEPLZX2_Air_conditioning_air_flowsoft_light_realism_utopia__7a048083-1c05-4cd5-84db-cd816e8fa967.png');
  background-size: cover;
}
.text-block {
  position: absolute;
  width: 100%;
  bottom: 20%;
  text-align: center;
  color: white
}
</style>