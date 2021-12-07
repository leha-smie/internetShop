<template>
    <div class="home">
        <div class="top">
            <header-shop class="header-shop" />
            <nav class="nav">
                <nav-shop />
            </nav>
        </div>
        <main>
            <baner-shop />
            <offers-shop />
            <box-products-home />
            <flayer-shop />
            <subscribe-shop />
        </main>
        <footer class="footer">
            <footer-shop />
        </footer>
    </div>
</template>

<script>
import BanerShop from "../components/BanerShop.vue";
import BoxProductsHome from "../components/box-products-home.vue";
import FlayerShop from "../components/FlayerShop.vue";
import FooterShop from "../components/FooterShop.vue";
import HeaderShop from "../components/HeaderShop.vue";
import NavShop from "../components/NavShop.vue";
import OffersShop from "../components/OffersShop.vue";
import SubscribeShop from "../components/SubscribeShop.vue";
import { mapActions } from "vuex";

export default {
    components: {
        HeaderShop,
        BanerShop,
        NavShop,
        OffersShop,
        FlayerShop,
        SubscribeShop,
        FooterShop,
        BoxProductsHome,
    },
    name: "Home",
    data() {
        return {};
    },
    methods: {
        ...mapActions(["GET_CART_PRODUCTS"]),
    },
    mounted() {
        this.GET_CART_PRODUCTS();
    },
};
</script>

<style lang="scss">
.top {
    padding-top: 20px;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: white;
}
.footer {
    margin-top: 100px;
}
</style>


