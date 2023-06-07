<template lang="pug">
v-app  
  div.text-center.dialog
    v-dialog(v-model="dialog" :persistent="true" width="90%")
      v-card()
        v-card-title.title
          div.text-title
            span.text-title.h4 asasass
        v-card-text
</template>
  
<script>
  export default {
    name: "DialogWindow",
    data () {
      return {
        dialog: true
      }
    },
    props: {
      
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .title {
    background-color: #3374C8;
  }
  .text-title {
    display: block;
    width: auto;
    color: white;
    word-break: normal;
  }
  .transfer-sbp-logo{
    margin: 10px auto;
    text-align: center;
  }
  .t-a-c {
    text-align: center;
  }
</style>
  