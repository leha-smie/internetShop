<template>
    <section class="products container">
        <h3 id="yak1" class="products__h3">Fetured Items</h3>
        <p class="products__p">
            Shop for items based on what we featured in this week
        </p>
        <div class="products__block">
            <product-cart
                v-for="(product, index) in PRODUCTS"
                :key="index"
                :product="product"
                @addToCart="addToCart"
            >
            </product-cart>
        </div>
        <button
            v-if="isVisible"
            @click="getAllProducts()"
            class="products__buttun"
        >
            Browse All Product
            <i class="fas fa-long-arrow-alt-right fa-xs"></i>
        </button>
        <button v-else @click="getFiltredProduct()" class="products__buttun">
            Show eight products
            <i class="fas fa-long-arrow-alt-right fa-xs"></i>
        </button>
    </section>
</template>

<script>
import ProductCart from "./ProductCart.vue";
import { mapActions, mapGetters } from "vuex";
export default {
    components: { ProductCart },
    name: "box-products-home",
    data() {
        return {
            isVisible: true,
        };
    },
    computed: {
        ...mapGetters(["PRODUCTS"]),
    },
    methods: {
        ...mapActions([
            "GET_MAIN_PAGE_PRODUCTS_API",
            "GET_ALL_PRODUCTS_API",
            "GET_CART_PRODUCTS",
        ]),
        getFiltredProduct() {
            this.GET_MAIN_PAGE_PRODUCTS_API();
            this.isVisible = true;
        },

        getAllProducts() {
            this.GET_ALL_PRODUCTS_API();
            this.isVisible = false;
        },

        addToCart(product) {
            fetch("http://localhost:3000/cart", {
                method: "POST",
                body: JSON.stringify(product),
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then(() => {
                    this.GET_CART_PRODUCTS();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        // getProducts() {
        //     async function get() {
        //         const products = await this.GET_PRODUCTS_API();
        //         console.log(products);
        //         this.products = this.boxProducts();
        //     }
        //     get();
        // },
    },
    mounted() {
        this.GET_MAIN_PAGE_PRODUCTS_API();
    },
};
</script>

<style lang="scss" scoped>
.products {
    padding-top: 100px;
    padding-bottom: 100px;

    text-align: center;

    &__h3 {
        font-family: Lato;
        font-size: 30px;
        line-height: 54px;
        font-weight: 700;
        letter-spacing: 0.025em;
        color: #222222;
    }

    &__p {
        margin-bottom: 60px;

        font-family: Lato;
        font-size: 14px;
        line-height: 54px;
        font-weight: 400;
        letter-spacing: 0.025em;
        color: #9f9f9f;
    }

    &__block {
        margin-bottom: 80px;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    &__buttun {
        padding: 0px 24px;

        border: 1px solid #f16d7f;
        background-color: #f16d7f;
        text-decoration: none;
        font-family: Lato;
        font-size: 16px;
        line-height: 54px;
        font-weight: 700;
        letter-spacing: 0.025em;
        color: #ffffff;
        text-align: center;
    }
    &__buttun:hover {
        background-color: #e75569;
    }
    &__buttun:active {
        background-color: #f0445be8;
        box-shadow: 0px 0px 10px 1px grey;
    }
}
</style>