import { ref } from 'vue' //import 应该放在最顶部而不是函数体内
export function useStars(num) {
    const starNum = ref(num)
    const setStarNum = (num, callback) => {
        starNum.value = num
        callback()
    }
    return [
        starNum, setStarNum
    ]
}