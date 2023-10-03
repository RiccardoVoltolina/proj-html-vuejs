
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
}
</style>