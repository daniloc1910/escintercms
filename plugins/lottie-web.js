import Vue from 'vue'
import LottieAnimation from 'lottie-web' // import lottie-vuejs

Vue.use(LottieAnimation); // add lottie-animation to your global scope

new Vue({
  render: h => h(App)
}).$mount('#app')
