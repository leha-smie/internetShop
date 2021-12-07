<template>
    <section class="offers container">
        <div class="offers__content-left">
            <div class="offers__box-big">
                <div class="offers__box-content">
                    <img
                        class="offers__img"
                        src="/img/offer1.png"
                        alt="offer"
                    />
                    <div class="offers__text">
                        <p class="offers__p">hOT dEAL</p>
                        <p class="offers__p offers__p_red">FOR MEN</p>
                    </div>
                </div>
            </div>
            <div class="offers__box-small">
                <div class="offers__box-content">
                    <img
                        class="offers__img"
                        src="/img/offer2.png"
                        alt="offer"
                    />
                    <div class="offers__text">
                        <p class="offers__p">LUXIROUS & trendy</p>
                        <p class="offers__p offers__p_red">ACCESORIES</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="offers__content">
            <div class="offers__box-small">
                <div class="offers__box-content">
                    <img
                        class="offers__img"
                        src="/img/offer3.png"
                        alt="offer"
                    />
                    <div class="offers__text">
                        <p class="offers__p">30% offer</p>
                        <p class="offers__p offers__p_red">women</p>
                    </div>
                </div>
            </div>
            <div class="offers__box-big">
                <div class="offers__box-content">
                    <img
                        class="offers__img"
                        src="/img/offer4.png"
                        alt="offer"
                    />
                    <div class="offers__text">
                        <p class="offers__p">new arrivals</p>
                        <p class="offers__p offers__p_red">FOR kids</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "offers-shop",
};
</script>

<style lang="scss" scoped>
.offers {
    height: 823px;
    margin-top: 98px;

    display: flex;
    justify-content: space-between;

    &__content-left {
        margin-right: 20px;
    }

    &__box-big {
        width: 560px;
        height: 542px;
        margin-bottom: 20px;

        background-color: blanchedalmond;

        &_block {
            display: block;
        }
    }

    &__box-content {
        position: relative;
    }

    &__text {
        padding: 20px 16px;

        background-color: #ffffff;

        position: absolute;
        top: 26px;
        z-index: 1;
    }

    &__p {
        font-family: Lato;
        font-size: 18px;
        line-height: 1.2;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        color: #222222;

        &_red {
            font-size: 30px;
            color: #f16d7f;
        }
    }

    &__box-small {
        width: 560px;
        height: 261px;
        margin-bottom: 20px;

        background-color: blanchedalmond;
    }
}
</style>