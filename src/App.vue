<template lang="pug">
div
  div(id="app" data-app)
    router-view
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  cursor:url('@/assets/curs/cursor1.cur'),pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: #f9f9fd;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: linear-gradient(180deg, #00c6fb, #005bea)
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: #f9f9fd;
}
</style>
