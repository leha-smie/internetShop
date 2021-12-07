<template>
    <section class="flyer container">
        <div class="flyer__row-left">
            <div class="flyer__text">
                <p class="flyer__text">30%</p>
                <p class="flyer__text flyer__text_red">OFFER</p>
                <p class="flyer__text flyer__text_size">FOR WOMEN</p>
            </div>
        </div>
        <div class="flyer__row-right">
            <div class="flyer__block">
                <img
                    src="/img/foto_delivery.svg"
                    alt=""
                    class="flyer__block-img"
                />
                <h3 class="flyer__block-h3">Free Delivery</h3>
                <p class="flyer__block-p">
                    Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.
                </p>
            </div>
            <div class="flyer__block">
                <img
                    src="/img/foto_sales.svg"
                    alt=""
                    class="flyer__block-img"
                />
                <h3 class="flyer__block-h3">Sales & discounts</h3>
                <p class="flyer__block-p">
                    Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.
                </p>
            </div>
            <div class="flyer__block">
                <img
                    src="/img/foto_assurance.svg"
                    alt=""
                    class="flyer__block-img"
                />
                <h3 class="flyer__block-h3">Quality assurance</h3>
                <p class="flyer__block-p">
                    Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "flayer-shop",
};
</script>

<style lang="scss" scoped>
.flyer {
    height: 529px;

    margin-bottom: 100px;

    display: flex;

    &__row-left {
        width: 60%;
        padding-left: 40px;
        padding-top: 150px;

        background-image: url(/img/background_baner.jpg);
        background-size: 100% 100%;
    }

    &__text {
        display: inline-block;

        font-family: Lato;
        font-size: 53.7px;
        line-height: 1.2;
        font-weight: 700;
        letter-spacing: 0.025em;
        color: #ffffff;

        &_red {
            color: #f16d7f;
        }

        &_size {
            font-size: 32.2px;
            display: block;
        }
    }

    &__row-right {
        width: 40%;

        background-color: #222224;
    }

    &__block {
        padding: 30px;
    }

    &__block-img {
        float: left;
    }

    &__block-h3 {
        padding-left: 71px;
        padding-bottom: 17px;

        font-family: Lato;
        font-size: 20px;
        line-height: 1.2;
        font-weight: 700;
        letter-spacing: 0.025em;
        color: #fbfbfb;
    }

    &__block-p {
        padding-left: 71px;

        font-family: Lato;
        font-size: 14px;
        line-height: 24px;
        font-weight: 300;
        letter-spacing: 0.025em;
        color: #fbfbfb;
    }
}
</style>