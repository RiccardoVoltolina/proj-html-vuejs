<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            footerInfos: [
                {//card1
                    h3: 'Quick Links',
                    a: ['Games', 'Latest Tournament', 'Shop', 'Blog', 'Contact'],

                },
                {//card2
                    h3: 'Help',
                    a: ['Faqs', 'Teams & Conditions', 'Privacy',]
                },
                {//card3
                    h3: 'Follow Us',
                    a: ['Feedback', 'Twitter', 'Instagram', 'Youtube', 'Github']
                },
            ],
            FooterInfoContacts: [
                {//card4
                    h3: 'Contect',
                    aLocation: ['4nMayfield, Buckden, PE19 5SZ'],
                    aPhone: ['(302)5550107']
                },
            ],
        }
    },
}
</script>

<template>
    <footer class="">
        <div class="container w-75">
            <div class="row pb_5rem">
                <div class="col-4 d-flex flex-column">
                    <div>
                        <img src="../assets/images/header-images/header logo.png" alt="">
                    </div>
                    <p class="py-3">Lorem ipsum dolor sit amet,elit,varius enim in eros elementum Duis mi quis viverra
                        ornare</p>
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
                <div class="col-2" v-for="footerInfo in footerInfos">
                    <div class="d-flex">
                        <div class="d-flex flex-column">
                            <h3>{{ footerInfo.h3 }}</h3>
                            <a v-for="a in footerInfo.a" href="">{{ a }}</a>
                        </div>
                    </div>
                </div>
                <div class="col-2" v-for="FooterInfoContact in FooterInfoContacts">
                    <div class="d-flex">
                        <div class="d-flex flex-column">
                            <h3>{{ FooterInfoContact.h3 }}</h3>
                            <div class="color_gray_fluo">Location:</div>
                            <a v-for="a in FooterInfoContact.aLocation" href="">{{ a }}</a>
                            <div class="color_gray_fluo">Phone:</div>
                            <a v-for="aPhone in FooterInfoContact.aPhone" href="">{{ aPhone }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright_footer d-flex justify-content-center align-items-center">
            <div class="">Copyright @ 2022 <span class="color_gray_fluo">Futio</span>.All rights Reserve</div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #28344a;
}

h3 {
    color: white;
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

a {
    text-decoration: none;
    color: white;
    width: fit-content;
    margin-top: 5px;
    margin-bottom: 5px;
}

.color_gray_fluo {
    color: #92cb52;
}

.pb_5rem {
    padding-bottom: 5rem;
}

.copyright_footer {
    background-color: #1b212d;
    color: white;
    height: 80px;
}
</style>
  