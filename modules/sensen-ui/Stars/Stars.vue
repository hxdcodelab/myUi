<template>
    <div class="ui-class">
        <span v-for="num in 5" :key="num" :class="['iconfont icon-star', num <= starNum ? 'active' : '']"
            :style="{ fontSize: size + 'px' }" @click="setStarNum(num)">
        </span>
    </div>
</template>

<script setup>
import { useStars } from '../hooks';
import { defineEmits } from 'vue';

const props = defineProps({
    num: {
        type: Number,
        default: 0
    },
    size: {
        type: Number,
        default: 16
    }
})
const emit = defineEmits(['getStarNum'])
const [starNum, setStarNum] = useStars(props.num, () => {
    emit('getStarNum', starNum.value)
})

</script>

<style lang="scss" scoped>
@font-face {
    font-family: "iconfont";
    /* Project id 3118601 */
    src: url('//at.alicdn.com/t/c/font_3118601_empbce3osww.woff2?t=1706968664213') format('woff2'),
        url('//at.alicdn.com/t/c/font_3118601_empbce3osww.woff?t=1706968664213') format('woff'),
        url('//at.alicdn.com/t/c/font_3118601_empbce3osww.ttf?t=1706968664213') format('truetype');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #999;

    &.icon-star:before {
        content: "\e7df";
    }

    &.icon-star {
        transition: color .3s;
    }

    &.active {
        color: #FBAB06
    }
}
</style>