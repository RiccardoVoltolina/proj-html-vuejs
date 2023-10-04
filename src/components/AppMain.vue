
<script>
import AppButton from './AppButton.vue';
import TeamCard from './TeamCard.vue';
export default {
    name: 'AppMain',
    components: {
        AppButton,
        TeamCard,
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
                <div class=" text-center py-5">
                    <h5>Trending battle</h5>
                    <h2>Keep eyes & Manage <br> Upcoming battle</h2>
                    <p>Libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                        Cras ultricies liguia sed magna dictum porta.</p>
                </div>
            </div>
            <div class="container w-75">
                <div class="row justify-content-center">
                    <div class="col-6 d-flex py-4">
                        <TeamCard :textTitle="'Call Of Duty'" :dayMatch="'December 25,2022 4:00 PM'"
                            :imgTeam1="'src/assets/images/battle-team-1.png'"
                            :imgTeam2="'src/assets/images/battle-team-2.png'" />
                    </div>
                    <div class="col-6 d-flex py-4">
                        <TeamCard :textTitle="'Legendary Battles'" :dayMatch="'December 25,2022 4:00 PM'"
                            :imgTeam1="'src/assets/images/battle-team-3.png'"
                            :imgTeam2="'src/assets/images/battle-team-4.png'" />
                    </div>
                    <div class="col-6 d-flex py-4">
                        <TeamCard :textTitle="'Nay Corral Gundown'" :dayMatch="'December 25,2022 4:00 PM'"
                            :imgTeam1="'src/assets/images/battle-team-5.png'"
                            :imgTeam2="'src/assets/images/battle-team-6.png'" />
                    </div>
                    <div class="col-6 d-flex py-4">
                        <TeamCard :textTitle="'League Of Legends'" :dayMatch="'December 25,2022 4:00 PM'"
                            :imgTeam1="'src/assets/images/battle-team-7.png'"
                            :imgTeam2="'src/assets/images/battle-team-8.png'" />
                    </div>
                    <div class="text-center pe-4 py-5">
                        <AppButton :buttonText="'View All Match'" :img="'src/assets/images/svg/e-double-right-arrow.svg'">
                        </AppButton>
                    </div>

                </div>
            </div>
        </section>

        <!-- quick facts section -->

        <section class="bg-black facts">
            <div class="container w-75 m-auto">
                <h2 class="text-center pb-5">Futio quick facts</h2>
                <div class="row">
                    <div class="col-3">
                        <div class="card bg-black text-center">
                            <h2>1135</h2>
                            <div>Twitch streams</div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card bg-black text-center">
                            <h2>44</h2>
                            <div>Total Games</div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card bg-black text-center">
                            <h2>982</h2>
                            <div>Youtube streams</div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card bg-black text-center">
                            <h2>40</h2>
                            <div>Pro Team</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <!-- watch streams -->

        <section>
            <div class="bg-black">

                <div class="watch_streams">
    
                    <div class="container w-50 text-center">
                        <h5 class="text-white pt-5">Live Streaming</h5>
                        <h2>Watch the streams</h2>
                        <p class="text-white px-5 pb-5">libero melesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed,
                            convallis at tellus. <br> Cras ultricies liguia sed magna dictum porta.</p>
                        <div class="position-relative">
                            <img class="w-100" src="../assets/images/stream-bg-3.png" alt="">
                            <div class="live_button_container position-absolute">
                                <button class="d-flex align-items-center live_button"><img class="pe-2" src="../assets/images/icon/live-icon.png" alt="">Live</button>
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

/* facts section */

.facts {
    .container {
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

    .card {
        border: 1px solid gray;
        border-radius: 30px;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
}

/* watch streams */

.watch_streams {
/*     background-color: #212733;
 */    background-image: url(../assets/images/live-streaming-bg.png);
    background-repeat: no-repeat;
    background-size: contain;

    .live_button_container {

        top: 30px;
        right: 30px;

        .live_button {
            border-radius: 30px;
            background-color: #ff9a33;
            border: none;
            padding-top: 3px;
            padding-right: 20px;
            padding-left: 20px;
        }
    }

   
}
</style>