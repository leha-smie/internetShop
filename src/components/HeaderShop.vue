<template>
    <div class="header container">
        <div class="header__logo logo">
            <router-link :to="{ name: 'Home' }" class="logo__link">
                <img class="logo__img" src="/img/logo.png" alt="logo" />
                <p class="logo__p">BRAN</p>
                <p class="logo__p logo__p_red">D</p>
            </router-link>
        </div>
        <div class="header__search-box search-box">
            <button class="search-box__button">Browse</button>
            <input
                type="text"
                class="search-box__input"
                placeholder="Search for Item..."
            />
            <a href="#" class="search-box__link-search">
                <i class="fas fa-search fa-xs"></i>
            </a>
        </div>
        <div class="header__basket">
            <router-link :to="{ name: 'cart' }">
                <img
                    class="header__img-basket"
                    src="/img/basket.svg"
                    alt="basket"
                />
                <div v-if="CART.length" class="header__count">
                    {{ COUNT }}
                </div>
            </router-link>
        </div>
        <router-link :to="{ name: 'cart' }">
            <button class="my-account">My account</button>
        </router-link>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "header-shop",
    computed: {
        ...mapGetters(["CART", "COUNT"]),
    },
};
</script>

<style lang="scss" scoped>
.header {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
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

.search-box {
    width: 404px;
    height: 39px;

    display: flex;
    align-self: end;

    position: relative;

    &__button {
        width: 100px;
        padding: 5px;
    }

    &__browse {
        width: 80px;
        padding: 9px;

        border: 1px solid #ececec;
        border-radius: 3px 0px 0px 3px;

        background-color: #f5f5f5;

        &[open] > .search-box__summary::after {
            content: "\25BC";
        }
    }

    &__summary {
        width: 80px;

        font-family: Lato;
        font-size: 14px;
        line-height: 18px;
        font-weight: 300;
        letter-spacing: 0.025em;
        color: #222222;

        //убираем стандартный маркер
        &::-webkit-details-marker {
            display: none;
        }
        // Убираем стандартный маркер Firefox
        & {
            list-style: none;
        }

        &::after {
            padding-left: 5px;

            content: "\25B6";
            color: #838383;
            font-size: 10px;
        }
    }

    &__drop {
        width: 262px;
        padding: 15px;

        background-color: #ffffff;
        border-radius: 5px;
        border: 1px solid #ececec;

        position: absolute;
        z-index: 1;
        left: -90px;
        top: 40px;

        &:before {
            width: 10px;
            height: 10px;

            position: absolute;
            top: -6px;
            left: 135px;

            background-color: white;
            border-top: 1px solid #e6e6e6;
            border-left: 1px solid #e6e6e6;

            display: block;

            content: "";
            transform: rotate(45deg);
        }
    }

    &__h3 {
        margin-bottom: 10px;

        border-bottom: 1px solid #e8e8e8;

        font-family: Lato;
        font-size: 14px;
        line-height: 32px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        color: #232323;
    }

    &__menu-list {
        margin-bottom: 10px;

        list-style: none;
    }

    &__menu-link {
        padding-left: 7px;

        font-family: Lato;
        font-size: 14px;
        line-height: 28px;
        font-weight: 400;
        letter-spacing: 0.025em;
        color: #4f4f4f;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    &__input {
        width: 300px;
        background-color: #ffffff;
        border: 1px solid #e6e6e6;
        padding-left: 16px;
    }

    &__link-search {
        width: 40px;
        padding: 0 5px;

        border: 1px solid #e6e6e6;
        border-radius: 0px 3px 3px 0px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #a4a4a4;
        font-size: 14px;
    }
}

.header__basket {
    align-self: end;
    position: relative;
}
.header__count {
    position: absolute;
    top: 1px;
    right: -40px;
    font-size: 21px;
    color: black;
    border: 1px solid #f16d7f;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    text-align: center;
    background-color: #f16d7f;
}

.my-account {
    width: 170px;
    height: 100%;
    background-color: #f16d7f;
    border: 1px solid #f16d7f;

    font-family: Lato;
    font-size: 15px;
    line-height: 10px;
    font-weight: 400;
    letter-spacing: 0.025em;
    color: #ffffff;
}
.my-account:hover {
    background-color: #e75569;
}
.my-account:active {
    background-color: #f0445be8;
    box-shadow: 0px 0px 10px 1px grey;
}
</style>
