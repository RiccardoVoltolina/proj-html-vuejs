<script>
import AppButton from './AppButton.vue';
export default {
    name: 'AppHeader',
    data() {
        return {
            HeaderInfos: [
                {//card2
                    a: ['Games'],
                    img: 'src/assets/images/svg/c-down-arrow.svg'
                },
                {//card3
                    a: ['Shop'],
                    img: 'src/assets/images/svg/c-down-arrow.svg'
                },
                {//card4
                    a: ['Pages'],
                    img: 'src/assets/images/svg/c-down-arrow.svg'
                },
                {//card5
                    a: ['Blog'],
                    img: 'src/assets/images/svg/c-down-arrow.svg'
                },
            ],
        }
    },

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
                    <div class="col-6 d-flex align-items-center">
                        <div class="d-flex align-items-center justify-content-evenly w-100">
                            <a class="color_gray_fluo" href="">Home</a>
                        </div>
                        <div v-for="HeaderInfo in HeaderInfos"
                            class="d-flex align-items-center justify-content-evenly w-100">
                            <a v-for="a in HeaderInfo.a" href="">{{ a }}</a>
                            <img :src="HeaderInfo.img" alt="">
                        </div>
                        <div class="d-flex align-items-center justify-content-evenly w-100">
                            <a href="">Contact</a>
                        </div>

                    </div>
                    <div class="col-3 d-flex align-items-center">
                        <div class="d-flex align-items-center">
                            <div class="position-relative">
                                <div class=" position-absolute purchased_items d-flex align-items-center justify-content-center"><div class="font_size_10">03</div></div>
                                <img class="me-3" src="../assets/images/icon/cart-icon.png" alt="">
                            </div>
                            <AppButton :buttonText="'LIVE STREAMING'" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <section class="image_joistick_background">
            <div class="container w-75">
                <div class="row d-flex align-content-center">
                    <div class="col-5 d-flex flex-column justify-content-center">
                        <h5 class="pb-2 color_gray_fluo">Game With Live Streaming</h5>
                        <h2>Future Of <br> Esports</h2>
                        <p class="text-white font_size_15">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium</p>
                        <div class="d-flex align-items-center">
                            <AppButton :buttonText="'EXPLORE GAMES'"
                                :img="'src/assets/images/svg/e-double-right-arrow.svg'"></AppButton>

                            <div class="ps-1">
                                <div class="border_play_button">
                                    <button class="play_button"><img src="../assets/images/icon/play-icon.png"
                                            alt=""></button>
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

.color_gray_fluo {
    color: #92cb52;
}

a {
    text-decoration: none;
    color: white;
}

.purchased_items {
    background-color: #08cb7b;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    right: 13px;
    top: -10px;
}

.font_size_10 {
    font-size: 15px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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