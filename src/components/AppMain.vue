
<script>
import AppButton from './AppButton.vue';
export default {
    name: 'AppMain',
    components: {
        AppButton,
    }

}
</script>
<template>
    <main>
        <!-- make your battle section -->
        <section class="bg-black">
            <div class="container py-5 w-100 m-0 g-0">
                <div class="row g-0">
                    <div class="col">
                        <img class="with_600" src="../assets/images/features-illus.png" alt="">
                    </div>
                    <div class="col text-white d-flex flex-column">
                        <h5>The ultimate competitive gaming platform</h5>
                        <h2>Make your mark on the battle field</h2>
                        <p class="w-75">Libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed,
                            convallis at
                            tellus. Cras ultricies liguia sed magna dictum porta.</p>
                        <div class="d-flex align-items-center">
                            <img src="../assets/images/icon/features-icon-1.png" alt="">
                            <div class="ps-3">
                                <h4 class="text-white">Live streaming</h4>
                                <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eismod tempor incididunt
                                    ut labor.</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <img src="../assets/images/icon/features-icon-2.png" alt="">
                            <div class="ps-3">
                                <h4 class="text-white">Great Tournament</h4>
                                <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eismod tempor incididunt
                                    ut labor.</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <img src="../assets/images/icon/features-icon-3.png" alt="">
                            <div class="ps-3">
                                <h4 class="text-white">Gaming News</h4>
                                <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eismod tempor incididunt
                                    ut labor.</p>
                            </div>
                        </div>
                        <div class="pt-4">
                            <AppButton :buttonText="'Play Now'" :img="'src/assets/images/svg/e-double-right-arrow.svg'">
                            </AppButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- keep eyes section -->
        <section class="bg_color_treding_battle">
            <div class="container w-50">
                <div class=" text-center">
                    <h5>Trending battle</h5>
                    <h2>Keep eyes & Manage <br> Upcoming battle</h2>
                    <p>Libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                        Cras ultricies liguia sed magna dictum porta.</p>
                </div>
            </div>
            <div class="container w-75">
                <div class="row">
                    <div class="col-6 d-flex">
                        <div class="card bg_color_card_team d-flex flex-column">
                            <div class="d-flex p-3 battle_team align-items-center justify-content-evenly">
                                <div class="col-4">
                                    <img src="../assets/images/battle-team-4.png" alt="">
                                </div>
                                <div class="col-4 text-center">
                                    <img src="../assets/images/verus-icon.png" alt="">
                                </div>
                                <div class="col-4">
                                    <img src="../assets/images/battle-team-5.png" alt="">
                                </div>
                            </div>
                            <div class="text-center py-3 bg_banner_card">
                                <h5>Call of deauty</h5>
                                <span>December 25,2022 4:00 PM</span>
                            </div>
                            <div class="d-flex justify-content-center py-3">
                                <div class="d-flex align-items-center">
                                    <img class="w-25" src="../assets/images/icon/youtube-icon.png" alt="">
                                    <div class="text-white">Youtube</div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <img class="w-25" src="../assets/images/icon/twitch-icon.png" alt="">
                                    <div class="text-white">Twitch</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>


        </section>
    </main>
</template>

<style lang="scss" scoped>
.with_600 {
    width: 600px;
}

h2 {
    font-size: 55px;
    color: white;
}

/* treding battle */
.bg_color_treding_battle {
    background-color: #30405f;
}

.bg_color_card_team {
    background-color: #28344a;
    border-radius: 10px;
}

.bg_banner_card {
    background-color: #30415f;
}

.battle_team img {
    max-width: 100%;
}
</style>