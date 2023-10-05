<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }, 
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter/>
</template>

<style lang="scss">
@use './assets/app';
.font_size_15 {
  font-size: 15px;
}

.font_size_12 {
  font-size: 12px;
}

.color_gray_fluo {
    color: #92cb52;
}

.w_70px {
  width: 70px;
}
</style>
