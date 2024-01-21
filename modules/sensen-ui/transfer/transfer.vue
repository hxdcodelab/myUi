<template>
    <div>
        <div>
            <Selector :data="options" @selectChange="setTargetIndex"></Selector>
        </div>
        <div class="transfer">
            <!-- 阻止dragOver的默认事件后才可以拖动 -->
            <div class="box left-list" @dragover.prevent @drop="removeRightListData([dragedItem])">
                <ListTitle :title="leftTitle"></ListTitle>
                <div>
                    <ListItem :data="leftListData" left-or-right="left" @checkboxClick="setCheckedData"
                        @dragItem="setDragedItem"></ListItem>
                </div>
            </div>
            <div class="box button-group">
                <button :disabled="transferDisabledButton.left"
                    @click="removeRightListData(checkedData.right)">&lt;</button>
                <button :disabled="transferDisabledButton.right" @click="addRightListData(checkedData.left)">&gt;</button>
            </div>
            <div class="box right-list" @dragover.prevent @drop="addRightListData([dragedItem])">
                <ListTitle :title="rightTitle"></ListTitle>
                <div>
                    <ListItem :data="rightListData" left-or-right="right" @checkboxClick="setCheckedData"
                        @dragItem="setDragedItem"></ListItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import propsDefination from './extends/prop'
import ListItem from './components/ListItem';
import { useTargetIndex, useComputedDate, useRightListData, useCheckedData, useDragedItem } from './extends/hook'
import { computed } from 'vue';
import Selector from './components/selector';
import ListTitle from './components/ListTitle'
// 理解到propsDefination本质就是一个对象
const props = defineProps(propsDefination)
const options = props.data.map(({ title }) => title)
const [targetIndex, setTargetIndex] = useTargetIndex(0)
const { checkedData, addCheckedData, removeCheckedData } = useCheckedData()
const [rightListData, addRightListData, removeRightListData] = useRightListData([], checkedData)
const { leftTitle, leftListData } = useComputedDate(props.data, targetIndex, rightListData, checkedData)
const setCheckedData = (checked, leftOrRight, item) => {
    checked ? addCheckedData(leftOrRight, item) : removeCheckedData(leftOrRight, item.id)
}
const transferDisabledButton = computed(() => ({
    left: checkedData.right.length == 0,
    right: checkedData.left.length == 0
}))
const [dragedItem, setDragedItem] = useDragedItem()

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