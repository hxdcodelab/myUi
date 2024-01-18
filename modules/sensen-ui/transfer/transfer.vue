<template>
    <div>
        <select @change="setTargetIndex($event.target.value)">
            <option v-for="(title, index) in options" :key="index" :value="index">{{ title }}</option>
        </select>
    </div>
    <div class="transfer">
        <div class="box left-list">
            <h1 class="list-title">{{ leftTitle }}</h1>
            <div>
                <div v-for="item of leftListData" :key="item.id" :class="['list-item', item.disabled ? 'disabled' : '']">
                    <!-- '__checkbox__' +item.id必须放在"" -->
                    <input type="checkbox" :disabled="item.disabled" :id="'__checkbox__' + item.id">
                    <label :id="'__checkbox__' + item.id">{{ item.phone_name }}</label>
                </div>
            </div>
        </div>
        <div class="box button-group">
            <button>&lt;</button>
            <button>&gt;</button>
        </div>
        <div class="box right-list">
            <h1 class="list-title">{{ rightTitle }}</h1>
            <div></div>
        </div>
    </div>
</template>

<script setup>
import propsDefination from './extends/prop'
import { useTargetIndex, useComputedDate, useRightListData } from './extends/hook'
// 理解到propsDefination本质就是一个对象
const props = defineProps(propsDefination)
const options = props.data.map(({ title }) => title)
const [targetIndex, setTargetIndex] = useTargetIndex(0)
const [rightListData, addRightListData, removeRightListData] = useRightListData([])
const { leftTitle, leftListData } = useComputedDate(props.data, targetIndex, rightListData)

</script>

<style lang="scss" scoped>
.transfer {
    display: flex;
    flex-direction: row;
    width: 360px;
    height: 300px;
    border: 1px solid #ddd;

    .box {
        width: 120px;
        height: 100%;

        .list-title {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 38px;
            font-weight: normal;
            margin: 0;
            color: #666;
            border-bottom: 1px solid #ddd;
            background-color: #efefef;
            font-size: 14px;
        }

        &.button-group {
            display: flex;
            justify-content: center;
            align-items: center;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;

            // 实现><按钮效果
            button {
                border: none;
                outline: none;
                width: 38px;
                height: 38px;
                background-color: orange;
                color: #fff;
                border-radius: 5px;

                &:disabled {
                    opacity: .6;
                }

                &:nth-child(2) {
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>