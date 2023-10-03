<script>
export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>

<template>
  <header>
    <nav>
      <div class="container w-75">
        <div class="row">
          <div class="col-3 bg-black d-flex align-items-center">
            <img src="./assets/images/header-images/header logo.png" alt="">
          </div>
          <div class="col-6 d-flex align-items-center justify-content-evenly">
            <div>
              <a href="">Home</a>
            </div>
            <div>
              <a href="">Games</a>
              <img class="bg-black ps-1" src="./assets/images/svg/c-down-arrow.svg" alt="">
            </div>
            <div>
              <a href="">Shop</a>
              <img class="bg-black ps-1" src="./assets/images/svg/c-down-arrow.svg" alt="">
            </div>
            <div>
              <a href="">Pages</a>
              <img class="bg-black ps-1" src="./assets/images/svg/c-down-arrow.svg" alt="">
            </div>
            <div>
              <a href="">Blog</a>
              <img class="bg-black ps-1" src="./assets/images/svg/c-down-arrow.svg" alt="">
            </div>
            <div>
              <a href="">Contact</a>
              <img class="bg-black ps-1" src="./assets/images/svg/c-down-arrow.svg" alt="">
            </div>

          </div>
          <div class="col-3 d-flex align-items-center">
            <div class="d-flex align-items-center">
              <img class="bg-black pe-2" src="./assets/images/icon/cart-icon.png" alt="">
              <div class="">
                <button>LIVE STREAMING</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
@use './assets/app';
</style>
