import { computed, ref } from "vue";

export function useTargetIndex(initialIndex) {
    const targetIndex = ref(initialIndex);
    function setTargetIndex(newIndex) {
        targetIndex.value = Number(newIndex)
    }
    return [targetIndex, setTargetIndex]

}

export function useRightListData(initialData) {
    const rightListData = ref(initialData)
    function addRightListData(newData) {
        rightListData.value = [...rightListData.value, ...newData.value]
    }

    function removeRightListData(newData) {
        newData.forEach(newDataItem => {
            rightListData.value = rightListData.value.filter((item) => item.id != newDataItem.id)
        });
    }
    return [rightListData, addRightListData, removeRightListData]
}

export function useComputedDate(data, targetIndex, rightListData) {
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