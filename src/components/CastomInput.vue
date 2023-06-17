<template lang="pug">
div
  div.container-castom
    mask-input.castom.text-18(ref='mask' :value='valueData' :placeholder="placeholder" :inputmode='inputMode' :readonly='readOnly' :id="id")
</template>

<script>
import { IMaskComponent } from 'vue-imask'
import IMask from 'imask'

export default {
  name: "CastomInput",

  components:{
    'mask-input': IMaskComponent
  },

  data(){
    return{
      dataMask: null,
      maskIsObject: false,
      valueData: this.value
    }
  },

  props: {
    placeholder: String,
    type: String,
    inputMode: String,
    mask: [String, Object],
    readOnly: Boolean,
    value: null,
    upperCase: Boolean,
    name: Boolean,
    id: null,
  },

  watch: {

    value: function(){
      this.dataMask.value = this.value + ""
      this.valueData = this.dataMask.value
    }

  },

  methods: {

    input() {
      
      if(this.name && this.dataMask.value) {
        var name = this.dataMask.value.split(" ")

        for (let i = 0; i < name.length; i++) {

          if(name[i][0]){
            name[i] = name[i][0].toUpperCase() + name[i].slice(1)
          }

        }

        this.dataMask.value = name.join(' ')
      }

      if(this.upperCase && this.dataMask.value){
        this.dataMask.value = this.dataMask.value[0].toUpperCase() + this.dataMask.value.slice(1)
      }

      if(this.type == 'num'){
        this.dataMask.value = this.dataMask.value.replace(/[^0-9]/g, '')
      }

      this.valueData = this.dataMask.value

      this.$emit('input', this.dataMask.unmaskedValue)
    }

  },

  mounted(){
    this.dataMask = IMask(this.$refs.mask.$el, {mask: this.mask? this.mask: /[@:0-9A-Za-zа-яА-ЯёЁ]/gi})
    this.dataMask.on('accept', this.input)
  }

}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 450px) { 
  .input {
    width: 70% !important;
  }
}
.container-castom{
  display: flex;
  flex-direction: column;
  position: relative;
}
.castom{
  border: 2px solid #A9B0B5;
  border-radius: 100px;
  z-index: 200;
  height: 50px;
  padding: 30px 20px;
  outline: none;
  margin: 0px 0px 20px 0px;
}
.form-label{ 
  z-index: 199;
  position: relative;
  color: #727272;
}
</style>