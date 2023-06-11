<template lang="pug">
v-app  
  div.text-center.dialog
    v-dialog(v-model="store.openDialog" modal :persistent="true" transition="dialog-bottom-transition" width="50%")
      v-card
        v-card-title.title
          div.text-title
            span.h4 {{title}}
            span.h4(@click="closeDialog") Закрыть
        v-card-text.card
          div(v-if="title == 'Лицензия'")
            img(src="@/assets/license/licenseFirstPage.jpg" width="100%")
            hr
            img(src="@/assets/license/licenseSecondPage.jpg" width="100%")

</template>
  
<script>
import {store, mutations} from "@/store.js"
export default {
  name: "DialogWindow",
  data () {
    return {
      dialog: false,
      store
    }
  },

  props: {
    title: null
  },

  methods: {
    closeDialog() {
      mutations.openDialogWindow()
    }
  }
}
</script>

<style scoped>
  .title {
    background-color: #1d1d1F;
  }
  .text-title {
    display: flex;
    justify-content: space-between;
    width: 100%;
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
  .card{
    background: #fff;
  }
  v-card{
    z-index: 999;
  }
</style>
  