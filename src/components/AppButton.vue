
<script>
export default {
    name: 'AppButton',
    props: {
        buttonText: String,
        img: String,
    },
    data() {
        return {

        }
    }

}
</script>
<template>
    <button>
        <div class="button_layout">
            {{ buttonText }} <img :src="img" alt="">
        </div>
    </button>
</template>

<style lang="scss" scoped>

button {
    padding: 3px;
    background-color: transparent;
    border: 1px solid #08cb7b;
    border-radius: 30px;
}
.button_layout{
    border-radius: 30px;
    padding: 9px;
    background-color: #08cb7b;
    img {
        filter: invert(100%);
        padding-left: 5px;
        padding-bottom: 5px;
    }
}

.button_layout:hover {
    background-color: #92cb52;
}

button:hover {
    border: 1px solid #92cb52;
}

</style>