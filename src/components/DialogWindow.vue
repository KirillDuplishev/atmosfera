<template lang="pug">
v-app  
  div.text-center.dialog
    v-dialog(v-model="store.openDialog" modal :scrollable="true" :persistent="true" :fullscreen="fullscreen" transition="dialog-bottom-transition" :width="dialogWidth")
      v-card
        v-card-title.title
          div.text-title
            span.h4 {{title}}
            i.material-icons(@click="closeDialog") close
        v-card-text.card
          div(v-if="title == 'Лицензия МЧС'")
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
      store,
    }
  },

  props: {
    title: null
  },

  computed: {
    fullscreen() {
      return this.title == 'Лицензия МЧС' ? false : true 
    },

    dialogWidth() {
      return window.innerWidth <= 800 ? '90%' : '70%'
    }
  },

  methods: {
    closeDialog() {
      mutations.openDialogWindow()
    }
  }
}
</script>

<style scoped>
  @media screen and (max-width: 1200px) {
    v-dialog v-dialog--active v-dialog--persistent {
      width: 80% !important;
    }
  }
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
  ::-webkit-scrollbar {
    width: 0px;
  }
</style>
  