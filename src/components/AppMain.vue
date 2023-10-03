
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
                <div class=" text-center">
                    <h5>Trending battle</h5>
                    <h2>Keep eyes & Manage <br> Upcoming battle</h2>
                    <p>Libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                        Cras ultricies liguia sed magna dictum porta.</p>
                </div>
            </div>
            <div class="container w-75">
                <div class="row g-0 justify-content-center">
                    <div class="col-6 d-flex py-3">
                        <TeamCard :textTitle="'Call Of Duty'" :dayMatch="'December 25,2022 4:00 PM'"
                            :imgTeam1="'src/assets/images/battle-team-1.png'"
                            :imgTeam2="'src/assets/images/battle-team-2.png'" />
                    </div>
                    <div class="col-6 d-flex py-3">
                        <TeamCard :textTitle="'Legendary Battles'" :dayMatch="'December 25,2022 4:00 PM'"
                            :imgTeam1="'src/assets/images/battle-team-3.png'"
                            :imgTeam2="'src/assets/images/battle-team-4.png'" />
                    </div>
                    <div class="col-6 d-flex py-3">
                        <TeamCard :textTitle="'Nay Corral Gundown'" :dayMatch="'December 25,2022 4:00 PM'"
                            :imgTeam1="'src/assets/images/battle-team-5.png'"
                            :imgTeam2="'src/assets/images/battle-team-6.png'" />
                    </div>
                    <div class="col-6 d-flex py-3">
                        <TeamCard :textTitle="'League Of Legends'" :dayMatch="'December 25,2022 4:00 PM'"
                            :imgTeam1="'src/assets/images/battle-team-7.png'"
                            :imgTeam2="'src/assets/images/battle-team-8.png'" />
                    </div>
                    <div class="text-center">
                        <AppButton :buttonText="'Play Now'" :img="'src/assets/images/svg/e-double-right-arrow.svg'">
                        </AppButton>
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
</style>