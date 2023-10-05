
<script>
export default {
    name: 'TeamCard',
    props: {
        textTitle: String,
        imgTeam1: String,
        imgTeam2: String,

        dayMatch: String,
    },

}
</script>
<template>
    <div class="card bg_color_card_team d-flex flex-column">
        <div class="d-flex p-3 battle_team align-items-center justify-content-evenly">
            <div class="col-4">
                <img class="teamImage" :src="imgTeam1" alt="">
            </div>
            <div class="col-4 text-center">
                <img src="../assets/images/verus-icon.png" alt="">
            </div>
            <div class="col-4">
                <img class="teamImage" :src="imgTeam2" alt="">
            </div>
        </div>
        <div class="text-center py-5 bg_banner_card">
            <h5 class="text-white">{{ textTitle }}</h5>
            <span class="color_gray_fluo">{{ dayMatch }}</span>
        </div>
        <div class="d-flex justify-content-center py-4">
            <div class="d-flex align-items-center">
                <img class="w-25" src="../assets/images/icon/youtube-icon.png" alt="">
                <div class="text-white ps-1">Youtube</div>
            </div>
            <div class="d-flex align-items-center">
                <img class="w-25" src="../assets/images/icon/twitch-icon.png" alt="">
                <div class="text-white ps-1">Twitch</div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
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