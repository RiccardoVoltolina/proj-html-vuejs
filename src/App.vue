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
</style>
