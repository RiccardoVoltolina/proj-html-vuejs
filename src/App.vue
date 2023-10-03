<script>
import AppHeader from './components/AppHeader.vue'
import AppButton from './components/AppButton.vue'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppButton,
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <section class="bg-black">
      <div class="container py-5 w-100 m-0 g-0">
        <div class="row g-0">
          <div class="col">
            <img class="with_600" src="./assets/images/features-illus.png" alt="">
          </div>
          <div class="col text-white d-flex flex-column">
            <h5>The ultimate competitive gaming platform</h5>
            <h2>Make your mark on the battle field</h2>
            <p class="w-75">Libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies liguia sed magna dictum porta.</p>
            <div class="d-flex align-items-center">
              <img src="./assets/images/icon/features-icon-1.png" alt="">
              <div class="ps-3">
                <h4 class="text-white">Live streaming</h4>
                <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eismod tempor incididunt ut labor.</p>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <img src="./assets/images/icon/features-icon-2.png" alt="">
              <div class="ps-3">
                <h4 class="text-white">Great Tournament</h4>
                <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eismod tempor incididunt ut labor.</p>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <img src="./assets/images/icon/features-icon-3.png" alt="">
              <div class="ps-3">
                <h4 class="text-white">Gaming News</h4>
                <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eismod tempor incididunt ut labor.</p>
              </div>
            </div>
            <div class="pt-4">
              <AppButton :buttonText="'Play Now'" :img="'src/assets/images/svg/e-double-right-arrow.svg'"></AppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@use './assets/app';



.with_600 {
  width: 600px;
}

h2 {
  font-size: 55px;
  color: white;
}
</style>
