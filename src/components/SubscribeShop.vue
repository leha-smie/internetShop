<template>
    <section class="subscribe">
        <div class="subscribe__content container">
            <div
                class="subscribe__left"
                v-for="citate in filtredArticle"
                :key="citate.id"
            >
                <img :src="citate.url" alt="" class="subscribe__img" />
                <p class="subscribe__citate">
                    {{ citate.text }}
                </p>
                <p class="subscribe__quote">{{ citate.firstName }}</p>
                <p class="subscribe__quote subscribe__quote_black">
                    {{ citate.secondName }}
                </p>
                <div class="subscribe__pagination">
                    <div
                        :class="[
                            {
                                subscribe__paginationblock_red:
                                    article.id === citate.id,
                            },
                            paginationClass,
                        ]"
                        v-for="article in articles"
                        :key="article.id"
                        :id="article.id"
                        @click="getArticle"
                    ></div>
                </div>
            </div>
            <div class="subscribe__line"></div>
            <div class="subscribe__right">
                <h3 class="subscribe__h3">Subscribe</h3>
                <p class="subscribe__right-p">
                    FOR OUR NEWLETTER AND PROMOTION
                </p>
                <form
                    action=""
                    @submit.prevent="checkForm"
                    class="subscribe__email"
                >
                    <input
                        :class="[
                            {
                                subscribe__input_error:
                                    Error && eMail.length > 0,
                            },
                            inputClass,
                        ]"
                        placeholder="Enter Your Email"
                        type="text"
                        v-model.trim="v$.eMail.$model"
                    />
                    <button class="subscribe__button">Subscribe</button>
                </form>
                <p v-if="Error && eMail.length > 0" class="subscribe__error">
                    enter correct email
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
    setup() {
        return {
            v$: useVuelidate(),
        };
    },
    name: "subscribe-shop",
    data() {
        return {
            filtredArticle: null,
            paginationClass: "subscribe__paginationblock",
            inputClass: "subscribe__input",
            ErrorClass: "subscribe__input_error",
            Error: false,
            eMail: "",
            articles: [],
        };
    },
    mounted() {
        fetch("http://localhost:3000/articles")
            .then((res) => res.json())
            .then((data) => {
                this.articles = data;
                this.filterArticle(2);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        filterArticle(id) {
            this.filtredArticle = this.articles.filter(
                (article) => article.id === id
            );
        },
        getArticle(event) {
            const paginations = document.querySelectorAll(
                ".subscribe__paginationblock"
            );
            paginations.forEach((pagination) =>
                pagination.classList.remove("subscribe__paginationblock_red")
            );
            // event.target.classList.add("subscribe__paginationblock_red");

            this.filterArticle(+event.target.id);
        },
        checkForm() {
            this.v$.eMail.$touch();
            if (!this.v$.$error) {
                this.Error = false;
                this.eMail = "";
                console.log("Волидация прошла успешно!");
                return;
            } else {
                this.Error = true;
                console.log("not good");
            }
        },
    },
    validations: {
        eMail: {
            required,
            email,
        },
    },
};
</script>

<style lang="scss" scoped>
.subscribe {
    height: 438px;

    background-image: url(/img/background_quote_subscribe.jpg);
    background-size: 100% 100%;

    &__content {
        display: flex;
    }

    &__left {
        width: 49.5%;
    }

    &__img {
        float: left;
        margin-top: 111px;
        border-radius: 50%;
    }

    &__citate {
        width: 386px;
        margin-right: 72px;
        margin-left: 114px;
        margin-top: 123px;

        font-family: Lato;
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
        font-style: italic;
        letter-spacing: 0.025em;
        color: #222224;
    }

    &__quote {
        margin-left: 114px;
        margin-top: 19px;

        font-family: Lato;
        font-size: 16px;
        line-height: 26px;
        font-weight: 700;
        letter-spacing: 0.025em;
        color: #f16d7f;

        &_black {
            font-size: 12px;
            line-height: 14px;
            font-weight: 300;
            color: #222224;
        }
    }

    &__pagination {
        width: 150px;
        margin-left: 114px;
        margin-top: 51px;

        display: flex;
        justify-content: space-between;
    }

    &__paginationblock {
        width: 38px;
        height: 4px;

        background-color: #d6d6d6;

        &:hover {
            background-color: #797575;
        }

        &_red {
            background-color: #f16d7f;
        }
    }

    &__line {
        width: 1px;
        height: 438px;

        background-color: #ffffff;
    }

    &__right {
        width: 49.5%;
        text-align: center;
    }

    &__h3 {
        margin-top: 148px;

        font-family: Lato;
        font-size: 24px;
        line-height: 54px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        color: #222224;
    }

    &__right-p {
        font-family: Lato;
        font-weight: 400;
        letter-spacing: 0.025em;
        color: #222224;
        font-size: 14px;
        line-height: 24px;
        text-transform: none;
    }

    &__email {
        width: 386px;
        margin-top: 52px;
        margin-left: 92px;

        display: flex;
        justify-content: center;
    }

    &__input {
        width: 282px;
        height: 50px;
        padding-left: 28px;

        border: 1px solid #e1e1e1;
        background-color: #e1e1e1;
        border-radius: 23px 0 0 23px;

        opacity: 0.67;
        font-family: Lato;
        font-size: 14px;
        line-height: 47px;
        font-weight: 400;
        letter-spacing: 0.025em;
        color: #222224;
        &_error {
            background-color: #e75569;
        }
    }

    &__button {
        padding: 0px 10px 0px 10px;

        border: 1px solid #f16d7f;
        background-color: #f16d7f;
        border-radius: 0px 23px 23px 0px;

        font-family: Lato;
        font-size: 14px;
        line-height: 48px;
        font-weight: 400;
        letter-spacing: 0.025em;
        color: #ffffff;
        text-decoration: none;
    }
    &__button:hover {
        background-color: #e75569;
    }
    &__button:active {
        background-color: #f0445be8;
        box-shadow: 0px 0px 10px 1px grey;
    }
    &__error {
        color: #e75569;
    }
}
</style>