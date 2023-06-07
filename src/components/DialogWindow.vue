<template lang="pug">
v-app
  v-dialog(v-model="activeFlag" )
    template(v-slot:activator="{ on }")
      //- slot(v-if="$slots.activator" name="activator" v-on="on")
    span asdasdasd  
</template>

<script>
export default {
  name:"DialogWindow",
  props:{
    activeFlag: null
  }
}
</script>

<style>

</style>