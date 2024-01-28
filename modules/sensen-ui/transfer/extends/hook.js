import { computed, reactive, ref } from "vue";

export function useTargetIndex(initialIndex) {
    const targetIndex = ref(initialIndex);
    function setTargetIndex(newIndex) {
        targetIndex.value = Number(newIndex)
    }
    return [targetIndex, setTargetIndex]

}

export function useDragedItem() {
    const dragedItem = ref(null)
    function setDragedItem(item) {
        dragedItem.value = item
    }
    return [
        dragedItem, setDragedItem
    ]
}

export function useRightListData(initialData, checkedData) {
    const rightListData = ref(initialData)
    function addRightListData(newData) {
        console.log(2, newData);
        rightListData.value = [...rightListData.value, ...newData]
        checkedData.left = []
    }

    function removeRightListData(newData) {
        console.log(1);
        newData.forEach(newDataItem => {
            rightListData.value = rightListData.value.filter((item) => item.id != newDataItem.id)
        });
        checkedData.right = []
    }
    return [rightListData, addRightListData, removeRightListData]
}

export function useCheckedData() {
    const checkedData = reactive({
        left: [],
        right: []
    })
    function addCheckedData(leftOrRight, item) {
        switch (leftOrRight) {
            case 'left':
                checkedData.left.push(item)
                break;
            case 'right':
                checkedData.right.push(item)
                break
            default:
                break;
        }
    }
    function removeCheckedData(leftOrRight, id) {
        switch (leftOrRight) {
            case 'left':
                checkedData.left = checkedData.left.filter(item => item.id != id)
                break;
            case 'right':
                checkedData.right = checkedData.right.filter(item => item.id != id)
                break
            default:
                break;
        }
    }
    return {
        checkedData, addCheckedData, removeCheckedData
    }
}

export function useComputedDate(data, targetIndex, rightListData, checkedData) {
    const leftTitle = computed(() => data[targetIndex.value].title)
    const leftListData = computed(() => {
        // 起别名
        const { data: currentData } = data[targetIndex.value]
        return currentData.filter(item => {
            if (!rightListData.value.find(({ id }) => item.id == id)) {
                return item
            }
        })
    })

    return {
        leftTitle, leftListData
    }

}

const queryStringToObject = (string) => {
    Object.fromEntries(...new URLSearchParams(string.split('?')[1]))
}