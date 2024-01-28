<template>
    <div>
        <div>
            <p>
                <textarea v-model="state.commentText"></textarea>
            </p>
            <p>
                <button @click="addComment">提交评论</button>
            </p>
        </div>
        <div>
            <comment-comp :data="state.commentTree" @add-reply="addReply"></comment-comp>
        </div>
    </div>
</template>

<script setup>
import useUserInfoStore from '../store/user'
import { reactive } from 'vue';
import CommentComp from './CommentComp.vue';

const userInfoStore = useUserInfoStore()
//用这种写法需要在reactive定义之前定义，如果直接定义fun
const getComment = (field) => {
    return JSON.parse(localStorage.getItem(field) || '[]')
}
const state = reactive({
    commentText: '',
    commentTree: formatTree(getComment('one'))
})
const addComment = () => {
    const { id, username } = userInfoStore.userInfo
    const commentInfo = {
        id: new Date().getTime(),
        pid: 0,
        uid: id,
        username,
        comment: state.commentText
    }
    setComment('one', commentInfo)
}
const addReply = (item, replyText) => {
    const { id, username } = userInfoStore.userInfo;
    const replyInfo = {
        id: new Date().getTime(),
        pid: item.id,
        uid: id,
        username,
        comment: replyText
    }
        ; (item.children || (item.children = [])).unshift(replyInfo)
    setComment('one', replyInfo)
}
const setComment = (field, comment) => {
    const commentList = JSON.parse(localStorage.getItem(field) || '[]')
    commentList.unshift(comment)
    localStorage.setItem(field, JSON.stringify(commentList))
}
function formatTree(data) {
    const result = []
    const map = {}
    data.forEach(item => {
        map[item.id] = item;
    })
    data.forEach(item => {
        const parent = map[item.pid]
        if (parent) {
            (parent.children || (parent.children = [])).unshift(item)
        } else {
            result.unshift(item)
        }
    })
    return result
}
</script>

<style lang="scss" scoped></style>