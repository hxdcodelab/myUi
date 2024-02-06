<template>
    <div>

    </div>
</template>

<script setup>
import types from './type';
const props = defineProps({
    type: {
        type: String,
        default: types.message,
        validator(value) {
            return Object.values(types).includes(value)
        }
    },
    message: {
        type: String,
        default: types.message,
    },
    duration: {
        type: Number,
        default: 3000
    }
})
</script>

<style lang="scss" scoped></style>