import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'

var app0 = new Vue({
  el: '#app',
  // render: h => h(App),
  components: {
    'my-app': App
  },
  
  template: `<my-app :msg='instance_msg'></my-app>`,
  // https://github.com/vuejs/vueify/issues/113#issuecomment-237474586

  data: {
    instance_msg: 'Hello Vue2!'
  }
})

$(document).ready(function () {
  app0.instance_msg = 'Hello Vue2, from code~'
})
