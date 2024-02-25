<template>
    <transition name="my-ui-messagebox-fade">
        <div class="ui-message-box" v-show="visible">
            <div class="ui-message-box-wrapper">
                <!-- <h1 v-show="visible">Message box</h1> -->
            </div>
        </div>
    </transition>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
import { fields } from './index';

const state = reactive({ visible: false })
const props = defineProps({
    title: {
        type: String,
        default: 'Message'
    },
    content: {
        type: String,
        default: 'Message Content'
    },
    showCancelBtn: {
        type: Boolean,
        default: false
    },
    confirmBtnText: {
        type: String,
        default: 'OK'
    },
    cancelBtnText: {
        type: String,
        default: 'Cancel'
    },
    field: {
        type: String,
        default: 'confirm',
        validator: (value) => {
            return fields.includes(value)
        }
    }
})
const { visible } = toRefs(state)
const setVisible = (isVisible) => {
    state.visible = isVisible
}
defineExpose({
    setVisible
})
</script>

<style lang="scss" scoped>
.my-ui-messagebox-fade-enter-from,
.my-ui-messagebox-fade-leave-to {
    opacity: 0;
}

.my-ui-messagebox-fade-enter-active {
    transition: opacity .2s ease-in;
}

.my-ui-messagebox-fade-leave-active {
    transition: opacity .2s ease-out;
}

.ui-message-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);

    .ui-message-box-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 420px;
        height: 200px;
        margin: -100px 0 0 -210px;
        background-color: #fff;
        border-radius: 3px;
    }
}
</style>