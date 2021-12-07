<template>
    <div class="product__box">
        <a href="#" class="product__link-img"
            ><img class="product__img" :src="product.url" alt="product"
        /></a>
        <div class="product__box-text">
            <a href="#" class="product__link-p">{{ product.title }}</a>
            <div class="product__prise">
                <p class="product__prise-p">{{ product.price }} $</p>
                <div class="product__stars">
                    <i
                        v-for="star in stars"
                        :key="star"
                        class="fas fa-star fa-xs"
                    ></i>
                </div>
            </div>
        </div>
        <div @click="addToCart" class="product__add">
            <img
                src="img/basket_add.svg"
                alt="basket"
                class="product__add-basket"
            />
            <p class="product__p-add">Add to Cart</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "product-cart",
    data() {
        return {
            stars: this.arr(this.product.stars),
        };
    },
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    methods: {
        arr(num) {
            let arr = [];
            for (let i = 0; i < num; i++) {
                arr.push(i);
            }
            return arr;
        },
        addToCart() {
            this.$emit("addToCart", this.product);
        },
    },
};
</script>
<style lang="scss" scoped>
.product {
    &__box {
        margin-bottom: 20px;

        position: relative;

        text-align: left;

        transition: transform 0.1s;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 15px 25px -7px black;
        }

        &:hover .product__add {
            display: flex;
        }

        &:hover .product__img {
            opacity: 20%;
        }
    }

    &__link-img {
        width: 261px;
        height: 280px;

        display: block;

        background-color: rgba(58, 56, 56, 0.83);
    }

    &__img {
        width: 100%;
        height: 100%;
    }

    &__box-text {
        padding: 20px 15px;
    }

    &__link-p {
        margin-bottom: 17px;

        display: block;

        text-decoration: none;
        font-family: Lato;
        font-size: 13px;
        line-height: 1.2;
        font-weight: 400;
        text-transform: uppercase;
        color: #222222;
    }

    &__prise {
        display: flex;
        justify-content: space-between;
    }

    &__prise-p {
        font-family: Lato;
        font-size: 16px;
        line-height: 1.6;
        font-weight: 700;
        text-transform: uppercase;
        color: #f16d7f;
    }

    &__stars {
        font-family: "Font Awesome";
        font-size: 15px;
        line-height: 1.2;
        font-weight: 400;
        text-transform: uppercase;
        color: #e4af48;
    }

    &__add {
        padding: 14px;

        border: 1px solid #ffffff;

        display: none;
        justify-content: center;
        position: absolute;
        top: 109px;
        left: 55px;

        text-decoration: none;

        &:hover {
            box-shadow: 0 0 15px 0 #ffffff;
        }
        &:active {
            transform: scale(1.05);
            box-shadow: 0 0 20px 0 #ffffff;
        }
    }

    &__p-add {
        margin-left: 5px;

        font-family: Lato;
        font-size: 13px;
        font-weight: 700;
        color: #ffffff;
    }
}
</style>