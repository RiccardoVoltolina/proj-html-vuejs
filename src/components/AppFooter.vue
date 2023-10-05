<script>
export default {
    name: 'AppFooter',
    props: {
        footerElements: Object,
    }

}
</script>

<template>
    <footer class="bg_secondary">
            <div class="container w-75">
                <div class="row">
                    <div class="col-4 d-flex flex-column">
                        <div>
                            <img src="../assets/images/header-images/header logo.png" alt="">
                        </div>
                        <p class="py-3">Lorem ipsum dolor sit amet,elit,varius enim in eros elementum Duis mi quis viverra ornare</p>
                        <div class="d-flex">
                            <div class="d-flex footer_icon">
                                <img src="../assets/images/icon/youtube.png" alt="">
                            </div>
                            <div class="d-flex footer_icon">
                                <img src="../assets/images/icon/twitch.png" alt="">
                            </div>
                            <div class="d-flex footer_icon">
                                <img src="../assets/images/icon/youtube.png" alt="">
                            </div>
                            <div class="d-flex footer_icon">
                                <img src="../assets/images/icon/twitch.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        
                    </div>
                </div>

            </div>
        </footer>
</template>

<style lang="scss" scoped>

.bg_secondary {
    background-color: #28344a;

}

p {
    color: white;
}
.footer_icon {
    border: 1px solid white;
    border-radius: 50%;
    position: relative;
    width: 40px;
    height: 40px;
    margin-right: 8px;

    img {
        padding: 6px;
        width: 35px;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        color: white;

    }
}

</style>
  