<template>
    <div class="footer__block-top container">
        <div class="footer__col-top footer__col-top_big">
            <div class="footer__logo logo">
                <a href="#" class="logo__link">
                    <img class="logo__img" src="img/logo.png" alt="logo" />
                    <p class="logo__p">BRAN</p>
                    <p class="logo__p logo__p_red">D</p>
                </a>
            </div>
            <p class="footer__p">
                Objectively transition extensive data rather than cross
                functional solutions. Monotonectally syndicate multidisciplinary
                materials before go forward benefits. Intrinsicly syndicate an
                expanded array of processes and cross-unit partnerships.
            </p>
            <p class="footer__p">
                Efficiently plagiarize 24/365 action items and focused
                infomediaries. Distinctively seize superior initiatives for
                wireless technologies. Dynamically optimize.
            </p>
        </div>
        <div class="footer__col-top">
            <h3 class="footer__h3">COMPANY</h3>
            <a href="#" class="footer__link">Home </a>
            <a href="#" class="footer__link">Shop</a>
            <a href="#" class="footer__link">About</a>
            <a href="#" class="footer__link">How It Works</a>
            <a href="#" class="footer__link">Contact</a>
        </div>
        <div class="footer__col-top">
            <h3 class="footer__h3">INFORMATION</h3>
            <a href="#" class="footer__link">Tearms & Condition</a>
            <a href="#" class="footer__link">Privacy Policy</a>
            <a href="#" class="footer__link">How to Buy</a>
            <a href="#" class="footer__link">How to Sell</a>
            <a href="#" class="footer__link">Promotion</a>
        </div>
        <div class="footer__col-top">
            <h3 class="footer__h3">SHOP CATEGORY</h3>
            <a href="#" class="footer__link">Men</a>
            <a href="#" class="footer__link">Women</a>
            <a href="#" class="footer__link">Child</a>
            <a href="#" class="footer__link">Apparel</a>
            <a href="#" class="footer__link">Brows All</a>
        </div>
    </div>
    <div class="footer__block-bottom">
        <div class="footer__bottom-content container">
            <p class="footer__bottom-p">© 2017 Brand All Rights Reserved.</p>
            <div class="footer__col-bottom">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="footer__social footer__face"
                    ><i class="fab fa-facebook-f fa-xs"></i
                ></a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    class="footer__social footer__twit"
                    ><i class="fab fa-twitter fa-xs"></i
                ></a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    class="footer__social footer__linked"
                    ><i class="fab fa-linkedin-in fa-xs"></i
                ></a>
                <a
                    href="https://www.pinterest.ru"
                    target="_blank"
                    class="footer__social footer__pint"
                    ><i class="fab fa-pinterest-p fa-xs"></i
                ></a>
                <a
                    href="https://www.google.com"
                    target="_blank"
                    class="footer__social footer__google"
                    ><i class="fab fa-google-plus-g fa-xs"></i
                ></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "footer-shop",
};
</script>

<style lang="scss" scoped>
.footer {
    margin-top: 100px;

    &__block-top {
        display: flex;
        justify-content: space-between;
    }

    &__col-top {
        width: 20%;
        &_big {
            width: 30%;
        }
    }

    &__logo {
        margin-bottom: 15px;
    }

    &__p {
        margin: 15px 0;
        font-family: Lato;
        font-size: 14px;
        line-height: 24px;
        font-weight: 300;
        letter-spacing: 0.025em;
        color: #898989;
    }

    &__h3 {
        margin-top: 7px;
        margin-bottom: 29px;

        font-family: Lato;
        font-size: 18px;
        line-height: 26px;
        font-weight: 700;
        letter-spacing: 0.025em;
        color: #f16d7f;
    }

    &__link {
        margin: 20px;
        display: block;

        text-decoration: none;
        font-family: Lato;
        font-size: 16px;
        line-height: 37px;
        font-weight: 400;
        letter-spacing: 0.025em;
        color: #898989;

        &:hover {
            text-decoration: underline;
        }
    }

    &__block-bottom {
        height: 79px;

        background-color: #e6e6e6;
    }

    &__bottom-content {
        height: 79px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__bottom-p {
        font-family: Lato;
        font-size: 16px;
        line-height: 42px;
        font-weight: 400;
        letter-spacing: 0.025em;
        color: #7a7a7a;
    }

    &__social {
        width: 32px;
        height: 32px;
        margin: 4px;

        background-color: #ffffff;

        display: inline-block;

        font-size: 16px;
        line-height: 40px;
        font-weight: 400;
        letter-spacing: 0.025em;
        color: #b2b2b2;
        text-align: center;
    }

    &__twit {
        background-color: #f16d7f;

        color: #f7f7f8;
    }
}
.logo {
    &__link {
        display: flex;
        align-items: center;

        text-decoration: none;
    }

    &__img {
        margin-right: 12px;
    }

    &__p {
        padding-top: 5px;

        font-family: Lato;
        font-size: 27px;
        line-height: 32px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        color: #222222;

        &_red {
            font-size: 26.9px;

            font-weight: 900;
            color: #f16d7f;
        }
    }
}
</style>