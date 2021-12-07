<template>
    <section class="baner">
        <div class="baner__content container">
            <div class="baner__text">
                <h2 class="baner__h2">THE BRAND</h2>
                <p class="baner__p">OF LUXERIOUS</p>
                <p class="baner__p baner__p_red">FASHION</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "baner-shop",
};
</script>

<style lang="scss" scoped>
.baner {
    height: 613px;

    background-color: #e8e8e8;

    &__content {
        height: 100%;
        background-image: url(/img/background_slider.jpg);
        background-position: 0 -51px;
    }

    &__text {
        margin-top: 224px;
        float: left;
        padding-left: 12px;

        border-left: 12px solid #f16d7f;
    }

    &__h2 {
        font-family: Lato;
        font-size: 60px;
        line-height: 43px;
        font-weight: 900;
        letter-spacing: 0.025em;
        color: #222222;
    }

    &__p {
        margin-right: 10px;
        margin-top: 19px;

        display: inline-block;

        font-size: 40px;
        font-family: Lato;
        line-height: 33px;
        font-weight: 900;
        letter-spacing: 0.025em;
        color: #222222;

        &_red {
            color: #f16d7f;
        }
    }
}
</style>