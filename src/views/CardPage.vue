<template>
    <div class="cart container">
        <div class="cart__top">
            <a href="http://localhost:8080" class="logo__link">
                <img class="logo__img" src="/img/logo.png" alt="logo" />
                <p class="logo__p">BRAN</p>
                <p class="logo__p logo__p_red">D</p>
            </a>
            <h2 class="cart__h2">Your products</h2>
        </div>
        <nav-shop />
        <p v-if="!CART.length" class="cart__empty">Cart don't have products</p>
        <div
            class="cart__product"
            v-for="(product, index) in CART"
            :key="index"
        >
            <img :src="product.url" alt="product" class="cart__img" />
            <p class="cart__title">{{ product.title }}</p>
            <p class="quantity">Quantity {{ product.quantity }}</p>
            <p class="cart__price">{{ product.price }} $</p>
            <button class="cart__button" @click="removeProduct(product)">
                delite
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavShop from "../components/NavShop.vue";
export default {
    components: { NavShop },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["CART"]),
    },
    methods: {
        ...mapActions(["GET_CART_PRODUCTS"]),
        removeProduct(product) {
            fetch("http://localhost:3000/product", {
                method: "DELETE",
                body: JSON.stringify(product),
                header: { "Content-Type": "application/json" },
            }).then(() => this.GET_CART_PRODUCTS());
        },
    },
    mounted() {
        this.GET_CART_PRODUCTS();
    },
};
</script>

<style lang="scss" scoped>
.cart {
    &__product {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid black;
        height: 186px;
        padding: 20px;
        margin: 20px;
    }
    &__product:hover {
        transform: scale(1.05);
        box-shadow: 0px 15px 25px -7px black;
    }
    &__img {
        width: 135px;
    }
    &__title {
        font-size: 30px;
    }
    &__price {
        font-size: 20px;
    }
    &__button {
        width: 78px;
        padding: 5px;
    }
    &__top {
        margin-top: 30px;
        height: 100px;
    }
    &__h2 {
        margin-left: 39%;
        font-size: 40px;
    }
    &__empty {
        margin-top: 70px;
        font-size: 23px;
        color: gray;
        text-align: center;
    }
}
.logo {
    &__link {
        display: flex;
        align-items: center;
        float: left;

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