<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // msg: 'Hello Vue!'
    }
  },
  props: [
    'msg'
  ] // expose a prop instead of data
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
