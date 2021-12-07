<template>
    <div class="home">
        <header class="header container">
            <header-shop />
        </header>
        <nav-shop class="container" />
        <main class="main container">
            <div class="categories">categories</div>
            <div class="products__box">
                <div class="filtres">
                    <filter-price />
                </div>
                <div class="products">
                    <product-cart
                        v-for="(product, index) in products"
                        :key="index"
                        :product="product"
                    />
                </div>
                <div class="pages">pages</div>
            </div>
        </main>
        <subscribe-shop />
        <footer class="footer">
            <footer-shop />
        </footer>
    </div>
</template>

<script>
import FilterPrice from "../components/filter-price.vue";
import FooterShop from "../components/FooterShop.vue";
import HeaderShop from "../components/HeaderShop.vue";
import NavShop from "../components/NavShop.vue";
import ProductCart from "../components/ProductCart.vue";
import SubscribeShop from "../components/SubscribeShop.vue";
export default {
    components: {
        FooterShop,
        HeaderShop,
        NavShop,
        SubscribeShop,
        ProductCart,
        FilterPrice,
    },
    data() {
        return {
            products: [],
        };
    },

    mounted() {
        fetch("http://localhost:3000/productsMan", { mode: "cors" })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.products = data;
            })
            .catch((err) => console.log(err));
    },
};
</script>

<style lang="scss" scoped>
.header {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.main {
    display: flex;
    justify-content: space-between;
}
.filtres {
    display: flex;
    justify-content: center;
}
.footer {
    margin-top: 100px;
}
.products {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 835px; /* высота нашего блока */
    border: 1px solid #c1c1c1; /* размер и цвет границы блока */
    overflow-y: scroll; /* прокрутка по вертикали */
}
.categories {
    width: 50%;
    border: 1px solid black;
    margin-right: 30px;
}
.filtres {
    height: 100px;
    border: 1px solid black;
    margin-bottom: 30px;
}
.pages {
    height: 100px;
    border: 1px solid black;
    margin-top: 30px;
}
</style>