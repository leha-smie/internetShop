<template>
    <div class="nav">
        <ul class="nav__menu">
            <li class="nav__list">
                <a href="http://localhost:8080" class="nav__link">Home</a>
            </li>
            <li class="nav__list">
                <a href="http://localhost:8080/products" class="nav__link"
                    >Man</a
                >
            </li>
            <li class="nav__list">
                <a href="#" class="nav__link">Women</a>
            </li>
            <li class="nav__list">
                <a href="#" class="nav__link">Kids</a>
            </li>
            <li class="nav__list">
                <a href="#" class="nav__link">Accoseriese</a>
            </li>
            <li class="nav__list">
                <a href="#" class="nav__link">Featured</a>
            </li>
            <li class="nav__list">
                <a href="#" class="nav__link">Hot deals</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "nav-shop",
};
</script>

<style lang="scss" scoped>
.nav {
    &__menu {
        width: 800px;
        margin: 0 auto;
        padding: 20px;

        display: flex;
        justify-content: space-between;

        position: relative;
    }

    &__list {
        list-style: none;

        &:hover .nav__drop {
            display: flex;
        }
    }

    &__link {
        padding: 21px 18px;

        text-decoration: none;
        font-family: Lato;
        font-size: 14px;
        line-height: 26px;
        font-weight: 700;
        text-transform: uppercase;
        color: #222222;

        &:hover {
            text-decoration: underline;
        }
    }

    &__drop {
        padding: 25px;

        border-radius: 5px;
        border: 1px solid #e6e6e6;
        background-color: #ffffff;

        display: none;

        position: absolute;
        top: 64px;

        &_left {
            left: -148px;
        }

        &_center {
            left: 0;
        }

        &_right {
            left: 127px;
        }
    }

    &__drop-h3 {
        width: 235px;
        margin: 15px 35px 8px 0;

        border-bottom: 1px solid #e8e8e8;

        font-family: Lato;
        font-size: 14px;
        line-height: 32px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        color: #232323;
    }

    &__drop-list {
        list-style: none;
    }

    &__drop-link {
        text-decoration: none;
        font-family: Lato;
        font-size: 14px;
        line-height: 28px;
        font-weight: 400;
        letter-spacing: 0.025em;
        color: #646464;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>