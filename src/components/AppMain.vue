
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

                    <div class="container w-50 text-center pb-5">
                        <h5 class="text-white pt-5">Live Streaming</h5>
                        <h2>Watch the streams</h2>
                        <p class="text-white px-5 pb-5">libero melesuada feugiat. Vivamus magna justo, lacinia eget
                            consectetur sed,
                            convallis at tellus. <br> Cras ultricies liguia sed magna dictum porta.</p>
                        <div class="position-relative image_elements">
                            <img class="w-100" src="../assets/images/video-bg.png" alt="">
                            <div class="live_button_container position-absolute">
                                <button class="d-flex align-items-center live_button"><img class="pe-2"
                                        src="../assets/images/icon/live-icon.png" alt="">Live</button>
                            </div>
                            <div class="position-absolute border_play_button_container">

                                <div class="border_play_button">
                                    <button class="play_button"><img src="../assets/images/icon/play-icon.png" alt="">
                                    </button>
                                </div>
                            </div>
                            <h4 class="position-absolute">League of legends</h4>
                            <div class="social_statics position-absolute">
                                <div class="d-flex">
                                    <div class="pe-1">356,599</div>
                                    <div class="pe-3">Viewers</div>
                                    <div class="pe-1">23,599</div>
                                    <div>Likes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <!-- gamers say section -->
        <section class="bg-black pt-5">
            <div class="container w-50 text-center">
                <h5>Futio feedback</h5>
                <h2>What Our gamers Say</h2>
                <p class="text-white px-5 pb-5">libero melesuada feugiat. Vivamus magna justo, lacinia eget
                    consectetur sed,
                    convallis at tellus. <br> Cras ultricies liguia sed magna dictum porta.
                </p>
            </div>
            <div class="container w-75">
                <div class="row">
                    <div class="col-4">
                        <div class="card p-4 opinion_card">
                            <div class="d-flex g-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </div>
                            <p class="py-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor."</p>
                            <div class="d-flex">
                                <img class=" object-fit-contain" src="../assets/images/user-image-1.png" alt="">
                                <div class="d-flex flex-column ps-2">
                                    <div>Kim Ramos</div>
                                    <div>Serbia</div>
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
 */
    background-image: url(../assets/images/live-streaming-bg.png);
    background-repeat: no-repeat;
    background-size: contain;

    .live_button_container {

        top: 20px;
        right: 20px;

        .live_button {
            border-radius: 30px;
            background-color: #ff9a33;
            border: none;
            padding-top: 3px;
            padding-right: 20px;
            padding-left: 20px;
        }
    }

    .border_play_button_container {

        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);

        .border_play_button {
            border: 1px solid #08cb7b;
            border-radius: 50%;
            padding: 5px;
            width: fit-content;

            .play_button {
                border-radius: 50%;
                width: 50px;
                height: 50px;
                border: none;

            }
        }

    }

    .image_elements {

        h4 {
            top: 65%;
            right: 50%;
            transform: translate(50%, -50%);
            color: white;
        }

        .social_statics {
            bottom: 20px;
            left: 20px;
        }
    }
}


/* gamers say section */

path {
    color: #f8bb04;
}
.opinion_card {
    border-radius: 20px;
    background-color: #28344a;
}

</style>