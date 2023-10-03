<script>
import AppButton from './AppButton.vue';
export default {
    name: 'AppHeader',
    components: {
        AppButton,
    }

}
</script>
<template>
    <header>
        <nav class="pt-4">
            <div class="container w-75">
                <div class="row">
                    <div class="col-3 d-flex align-items-center">
                        <img src="../assets/images/header-images/header logo.png" alt="">
                    </div>
                    <div class="col-6 d-flex align-items-center justify-content-evenly">
                        <div>
                            <a href="">Home</a>
                        </div>
                        <div>
                            <a href="">Games</a>
                            <img class="ps-1" src="../assets/images/svg/c-down-arrow.svg" alt="">
                        </div>
                        <div>
                            <a href="">Shop</a>
                            <img class="ps-1" src="../assets/images/svg/c-down-arrow.svg" alt="">
                        </div>
                        <div>
                            <a href="">Pages</a>
                            <img class="ps-1" src="../assets/images/svg/c-down-arrow.svg" alt="">
                        </div>
                        <div>
                            <a href="">Blog</a>
                            <img class="ps-1" src="../assets/images/svg/c-down-arrow.svg" alt="">
                        </div>
                        <div>
                            <a href="">Contact</a>
                        </div>

                    </div>
                    <div class="col-3 d-flex align-items-center">
                        <div class="d-flex align-items-center">
                            <img class="pe-2" src="../assets/images/icon/cart-icon.png" alt="">
                            <AppButton :buttonText="'Live streaming'" />
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
                        <p class="text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium</p>
                        <div class="d-flex align-items-center">
                            <AppButton :buttonText="'Explore games'" :img="'src/assets/images/svg/e-double-right-arrow.svg'"></AppButton>

                            <div class="ps-1">
                                <div class="border_play_button">
                                    <button class="play_button"><img src="../assets/images/icon/play-icon.png" alt=""></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7">
                        <img class="height_750" src="../assets/images/header-images/header-soldier-image.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-image: url(../assets/images/header-images/header-banner.png);
    background-repeat: no-repeat;
    background-size: cover;
}

a {
    text-decoration: none;
    color: white;
}

/* section future */

.image_joistick_background {
    background-image: url(../assets/images/header-images/header-controller.png);
    background-repeat: no-repeat;
    background-position: bottom 160px left 10px;
    background-size: 300px;
}
h2 {
    font-size: 55px;
    color: white;
}

.play_button {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: none;
}
.border_play_button {
    border: 1px solid #08cb7b;
    border-radius: 50%;
    padding: 5px;
}
.height_750 {
    height: 750px;
}
</style>