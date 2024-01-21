<template>
    <div>
        <div v-for="item of data" :key="item.id" :class="['list-item', item.disabled ? 'disabled' : '']">
            <!-- '__checkbox__' +item.id必须放在"" -->
            <!-- $.target.checked属性,当元素中有checked属性时，其值无论是什么，都是被选中状态，那怎么才能让其不被选中呢，就是用jquery或js代码实现 -->
            <input type="checkbox" :disabled="item.disabled" :id="'__checkbox__' + item.id"
                @click="checkboxClick($event.target.checked, leftOrRight, item)" :dragablee="!item.disabled"
                @dragstart="dragItem(item)">
            <label :id="'__checkbox__' + item.id">{{ item.phone_name }}</label>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    leftOrRight: {
        type: String,
        validator(value) {
            return ['left', 'right'].includes(value)
        }
    }
})

const emit = defineEmits(['checkboxClick', 'dragItem'])
const checkboxClick = (checked, leftOrRight, item) => {
    emit('checkboxClick', checked, leftOrRight, item)
}
const dragItem = (item) => {
    console.log(item);
    emit('dragItem', item)
}
</script>

<style lang="scss" scoped>
.list-title {
    display: flex;
    align-items: center;
    height: 30px;
    color: #666;
    font-size: 12px;

    &.disabled {
        opacity: .6;
    }
}
</style>