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
    <nav class="pt-4">
      <div class="container w-75">
        <div class="row">
          <div class="col-3 d-flex align-items-center">
            <img src="./assets/images/header-images/header logo.png" alt="">
          </div>
          <div class="col-6 d-flex align-items-center justify-content-evenly">
            <div>
              <a href="">Home</a>
            </div>
            <div>
              <a href="">Games</a>
              <img class="ps-1" src="./assets/images/svg/c-down-arrow.svg" alt="">
            </div>
            <div>
              <a href="">Shop</a>
              <img class="ps-1" src="./assets/images/svg/c-down-arrow.svg" alt="">
            </div>
            <div>
              <a href="">Pages</a>
              <img class="ps-1" src="./assets/images/svg/c-down-arrow.svg" alt="">
            </div>
            <div>
              <a href="">Blog</a>
              <img class="ps-1" src="./assets/images/svg/c-down-arrow.svg" alt="">
            </div>
            <div>
              <a href="">Contact</a>
            </div>

          </div>
          <div class="col-3 d-flex align-items-center">
            <div class="d-flex align-items-center">
              <img class="pe-2" src="./assets/images/icon/cart-icon.png" alt="">
              <div class="">
                <button>LIVE STREAMING</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="image_joistick_background">
      <div class="container w-75">
        <div class="row d-flex align-content-center">
          <div class="col-5 d-flex flex-column justify-content-center">
            <h5>Gaming with live streaming</h5>
            <h2>Future Of <br> Esports</h2>
            <p class=" text-bg-danger">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            <div class="d-flex align-items-center">
              <button>Explore games <img class="bg-black" src="./assets/images/svg/e-double-right-arrow.svg" alt=""></button>
              <div class="ps-1">
                <button><img src="./assets/images/icon/play-icon.png" alt=""></button>
              </div>
            </div>
          </div>
          <div class="col-7">
            <img class="header_soldier" src="./assets/images/header-images/header-soldier-image.png" alt="">
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss">
@use './assets/app';

header {
  background-image: url(./assets/images/header-images/header-banner.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

a {
  text-decoration: none;
  color: white;
}

/* section future */
h2 {
  font-size: 55px;
  color: white;
}

.header_soldier {
  height: 700px;
}
</style>
