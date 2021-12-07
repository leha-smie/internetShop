<template>
    <div class="filter-price">
        <h3 class="h3__price">PRICE</h3>
        <div class="middle">
            <div class="multi-range-slider">
                <input
                    type="range"
                    id="input-left"
                    :min="leftMin"
                    :max="leftMax"
                    :value="inputLeftValue"
                    @input="leftValue($event.target.value)"
                />
                <input
                    type="range"
                    id="input-right"
                    :min="rightMin"
                    :max="rightMax"
                    :value="inputRightValue"
                    @input="rightValue($event.target.value)"
                />
                <div class="slider">
                    <div class="track"></div>
                    <div class="range" :style="rangeStyle"></div>
                    <div class="thumb left" :style="thumbLeftStyle"></div>
                    <div class="thumb right" :style="thumbRightStyle"></div>
                </div>
            </div>
        </div>
        <div class="box__price">
            <p class="p__price">{{ inputLeftValue }} $</p>
            <p class="p__price">{{ inputRightValue }} $</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "filter-price",
    data() {
        return {
            inputLeftValue: 0,
            inputRightValue: 1000,
            leftMin: 0,
            leftMax: 1000,
            rightMin: 0,
            rightMax: 1000,
            leftPercent: 0,
            rightPercent: 100,
        };
    },
    methods: {
        leftValue(value) {
            this.inputLeftValue = Math.min(
                parseInt(value),
                parseInt(this.inputRightValue)
            );

            this.leftPercent =
                ((this.inputLeftValue - this.leftMin) /
                    (this.leftMax - this.leftMin)) *
                100;
        },
        rightValue(value) {
            this.inputRightValue = Math.max(
                parseInt(value),
                parseInt(this.inputLeftValue)
            );

            this.rightPercent =
                ((this.inputRightValue - this.rightMin) /
                    (this.rightMax - this.rightMin)) *
                100;
        },
    },
    computed: {
        thumbRightStyle() {
            return {
                right: `${100 - this.rightPercent}%`,
            };
        },
        thumbLeftStyle() {
            return {
                left: `${this.leftPercent}%`,
            };
        },
        rangeStyle() {
            return {
                left: `${this.leftPercent}%`,
                right: `${100 - this.rightPercent}%`,
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.filter-price {
    width: 230px;
}
.h3__price {
    margin-bottom: 30px;
}
.box__price {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
}
// двойной ползунок
.middle {
    position: relative;
    width: 222px;
    max-width: 500px;
    background-color: rgba(0, 0, 0, 0.1);
}
.slider {
    position: relative;
    z-index: 1;
    height: 10px;
    margin: 0 15px;
}
.slider > .track {
    width: 222px;
    position: absolute;
    z-index: 1;
    left: -15px;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: rgba(128, 128, 128, 0.171);
}
.slider > .range {
    position: absolute;
    z-index: 2;
    left: -15px;
    right: 25%;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: #f16d7f;
}
.slider > .thumb {
    position: absolute;
    z-index: 3;
    width: 19px;
    height: 19px;
    background-color: #f16d7f;
    border-radius: 50%;
    opacity: 3;
}
.slider > .thumb.left {
    left: 25%;
    transform: translate(-15px, -5px);
}
.slider > .thumb.left:active {
    box-shadow: 0 0 8px 4px rgba(255, 0, 0, 0.678);
}
.slider > .thumb.right {
    right: 25%;
    transform: translate(15px, -5px);
}
.slider > .thumb.right:active {
    box-shadow: 0 0 8px 4px rgba(255, 0, 0, 0.678);
}
input[type="range"] {
    opacity: 0;
    position: absolute;
    pointer-events: none;
    appearance: none;
    z-index: 2;
    height: 10px;
    width: 100%;
}
input[type="range"]::-webkit-slider-thumb {
    pointer-events: all;
    width: 30px;
    height: 30px;
    border-radius: 0;
    border: 0 none;
    appearance: none;
    background-color: black;
}
</style>
