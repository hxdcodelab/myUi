<template>
    <transition name="jspp-message-fade">
        <div :class="styleClass">{{ message }}</div>
    </transition>
</template>

<script setup>
import { computed } from "vue"
import types from "./type"
const props = defineProps({
    type: {
        type: String,
        default: types.message,
        validator(value) {
            return Object.values(types).includes(value)
        },
    },
    message: {
        type: String,
        default: types.message,
    },
    duration: {
        type: Number,
        default: 3000,
    },
})
const styleClass = computed(() => ["jspp-message", props.type])
</script>

<style lang="scss" scoped>
.jspp-message {
    position: relative;
    left: 50%;
    z-index: 9999;
    width: 380px;
    height: 40px;
    margin-left: 190px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    border-radius: 5px;

    &.success {
        background-color: #f0f9eb;
        color: #529b2e;
    }

    &.warning {
        background-color: #fdf6ec;
        color: #b88230;
    }

    &.message {
        background-color: #f4f4f5;
        color: #73767a;
    }

    &.error {
        background-color: #fef0f0;
        color: #c45656;
    }
}
</style>
