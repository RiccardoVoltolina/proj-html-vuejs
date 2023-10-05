
<script>
import AppButton from './AppButton.vue';
import TeamCard from './TeamCard.vue';
import GamersSayCard from './GamersSayCard.vue'
export default {
    name: 'AppMain',

    data() {
        return {
            userReviews: [
                {//card1
                    userImg: 'src/assets/images/user-image-1.png',
                    userName: 'Kim Ramos',
                    userCountry: 'Serbia',
                    userText: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eismod tempor incididunt ut labor',
                    userStar: 4,
                },
                {//card2
                    userImg: 'src/assets/images/user-image-2.png',
                    userName: 'Kim Ramos',
                    userCountry: 'Serbia',
                    userText: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eismod tempor incididunt ut labor',
                    userStar: 3,
                },
                {//card3
                    userImg: 'src/assets/images/user-image-3.png',
                    userName: 'Kim Ramos',
                    userCountry: 'Serbia',
                    userText: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eismod tempor incididunt ut labor',
                    userStar: 5,
                },

                {//card4

                    userImg: 'src/assets/images/user-image-4.png',
                    userName: 'Kim Ramos',
                    userCountry: 'Serbia',
                    userText: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eismod tempor incididunt ut labor',
                    userStar: 1,
                },
                {//card5
                    userImg: 'src/assets/images/user-image-1.png',
                    userName: 'Kim Ramos',
                    userCountry: 'Serbia',
                    userText: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eismod tempor incididunt ut labor',
                    userStar: 2,
                },
            ]
        }
    },

    components: {
        AppButton,
        TeamCard,
        GamersSayCard,
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

        <section class="bg-black py-5">
            <div class="container w-50 text-center">
                <h5>Futio feedback</h5>
                <h2>What Our gamers Say</h2>
                <p class="text-white px-5 pb-5">libero melesuada feugiat. Vivamus magna justo, lacinia eget
                    consectetur sed,
                    convallis at tellus. <br> Cras ultricies liguia sed magna dictum porta.
                </p>
            </div>
            <div class="container w-75">
                <div class="row flex-nowrap user_reviews_container">
                    <GamersSayCard v-for="userReview in userReviews" :reviewData="userReview" />
                </div>
            </div>
        </section>

        <!-- ads section -->

        <section class="py-5 bg-black">
            <div class="container m-auto ads_container">
                <div class=" w-100 position-relative ads_bg">
                    <img class="ads_image_telephone position-absolute" src="../assets/images/banner-item-obj1.png" alt="">
                    <div class="text-white position-absolute ads_text d-flex flex-column align-items-center">
                        <h5>Make Offer</h5>
                        <h2 class="pb-2">Get 70% Offer Discount</h2>
                        <button class="ads_button">Get Offers</button>
                    </div>
                    <img class="ads_image_headphones position-absolute" src="../assets/images/banner-item-obj2.png" alt="">
                </div>
            </div>
        </section>

        <!-- lates news -->

        <section class="bg-black">
            <div class="container w-50 text-center">
                <h5>Latest News</h5>
                <h2>Stay Updated With Our Latest News Articles</h2>
                <p class="text-white px-5 pb-5">libero melesuada feugiat. Vivamus magna justo, lacinia eget
                    consectetur sed,
                    convallis at tellus. <br> Cras ultricies liguia sed magna dictum porta.
                </p>
            </div>
            <div class="container w-75">
                <div class="row">

                    <div class="col-6">
                        <div class="card border-0 latest_principal_card">
                            <img src="../assets/images/blog-item-1.png" class="card-img-top" alt="...">
                            <div class="card-body pb-1">
                                <div class="d-flex align-items-center pb-1">
                                    <img src="../assets/images/icon/clock.png" alt="">
                                    <div class="ps-2 pe-3">10 min</div>
                                    <img src="../assets/images/icon/eye.png" alt="">
                                    <div class="ps-2 pe-3">240</div>
                                    <img src="../assets/images/icon/calendar.png" alt="">
                                    <div class="ps-2">Apr 11,2022</div>
                                </div>
                                <h3 class=" mb-0">Secrets To An Amazing Role</h3>
                                <h3 class="mb-0">Playng Game</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-flex flex-column">
                        <div class="d-flex latest_secondary_card pb-1">
                            <img class="h-100 border_radius_latest_img pe-3" src="../assets/images/blog-item-2.png" alt="">
                            <div class="d-flex flex-column py-3">
                                <div class="d-flex align-items-center pb-3">
                                    <img src="../assets/images/icon/clock.png" alt="">
                                    <div class="ps-2 pe-3">10 min</div>
                                    <img src="../assets/images/icon/eye.png" alt="">
                                    <div class="ps-2 pe-3">240</div>
                                    <img src="../assets/images/icon/calendar.png" alt="">
                                    <div class="ps-2">Apr 11,2022</div>
                                </div>
                                <h4 class=" mb-0">Top 5 Most Important</h4>
                                <h4 class="mb-0">Aspects Of Your Game</h4>
                            </div>

                        </div>
                        <div class="d-flex latest_secondary_card  my-4">
                            <img class="h-100 border_radius_latest_img pe-3" src="../assets/images/blog-item-3.png" alt="">
                            <div class="d-flex flex-column py-3">
                                <div class="d-flex align-items-center pb-3">
                                    <img src="../assets/images/icon/clock.png" alt="">
                                    <div class="ps-2 pe-3">10 min</div>
                                    <img src="../assets/images/icon/eye.png" alt="">
                                    <div class="ps-2 pe-3">240</div>
                                    <img src="../assets/images/icon/calendar.png" alt="">
                                    <div class="ps-2">Apr 11,2022</div>
                                </div>
                                <h4 class=" mb-0">The Rise Of Fantasy</h4>
                                <h4 class="mb-0">Sports And Online Games</h4>
                            </div>

                        </div>
                        <div class="d-flex latest_secondary_card pb-1">
                            <img class="h-100 border_radius_latest_img pe-3" src="../assets/images/blog-item-4.png" alt="">
                            <div class="d-flex flex-column py-3">
                                <div class="d-flex align-items-center pb-3">
                                    <img src="../assets/images/icon/clock.png" alt="">
                                    <div class="ps-2 pe-3">10 min</div>
                                    <img src="../assets/images/icon/eye.png" alt="">
                                    <div class="ps-2 pe-3">240</div>
                                    <img src="../assets/images/icon/calendar.png" alt="">
                                    <div class="ps-2">Apr 11,2022</div>
                                </div>
                                <h4 class=" mb-0">Benefits Of Gaming - PC</h4>
                                <h4 class="mb-0">And Video Games</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- subscribe section -->

        <section class="bg_secondary">
            <div class="container w-75 position-relative">
                <div class="subscribe_card w-75 m-auto align-items-center p-4 d-flex position-absolute">
                    <div class="w-50 d-flex flex-column">
                        <h3>Subscribe Newsletter</h3>
                        <p>Libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at telus
                        </p>
                    </div>
                    <div class="w-50 ps-3">
                        <div class="d-flex position-relative align-items-center send_email_container p-2">
                            <input class="w-100 send_email_icon" type="text" placeholder="Enter your email" name="sendEmail"
                                id="">
                            <div class="send_button d-flex justify-content-center align-items-center position-absolute">
                                <img class="p-2 send_image" src="../assets/images/icon/send-icon.png" alt="">
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

.user_reviews_container {
    overflow-x: scroll;
}

.user_reviews_container::-webkit-scrollbar {
    display: none;
}

/* ads section */

.ads_container {

    height: 450px;

    .ads_bg {
        background-image: url(../assets/images/banner-item-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        height: 400px;
        border-radius: 10px;
        overflow: hidden;

        .ads_image_telephone {
            width: 300px;
            bottom: -100px;
        }

        .ads_text {
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
        }

        .ads_button {
            background-color: #1a8f3e;
            color: white;
            border: none;
            border-radius: 30px;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-right: 30px;
            padding-left: 30px;
        }

        .ads_image_headphones {
            width: 300px;
            top: -70px;
            right: 5px;
        }
    }
}

/* latest section */

.latest_principal_card {
    background-color: #28344a;
    border-radius: 15px;
}

.latest_secondary_card {
    height: calc(100% / 3 - 4rem);
    border-radius: 15px;
    background-color: #28344a;

    .border_radius_latest_img {
        border-radius: 15px;
    }
}

/* subscribe section*/

.bg_secondary {
    background-color: #28344a;
    height: 130px;
}

.subscribe_card {
    background-color: #30415f;
    border-radius: 15px;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
}

.send_email_container {
    background-color: #435374;
    border-radius: 15px;
}

.send_email_icon {
    background-color: #435374;
    border: none;
}

.send_button {
    background-color: #92cb52;
    border-radius: 50%;
    right: 5px;

    .send_image {
        width: 35px;
    }

}

/* footer */

</style>