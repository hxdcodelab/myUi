<script setup>
import useUserInfo from './store/user'
import CommentOne from './comments/CommentOne';
const userInfoStore = useUserInfo()
const data = [
  {
    title: '华为', data: [{
      id: 1,
      phone_name: 'a',
      disabled: false
    }, {
      id: 2,
      phone_name: 'b',
      disabled: false
    }, {
      id: 3,
      phone_name: 'c',
      disabled: false
    }
    ]
  }, {
    title: '小米', data: [{
      id: 5,
      phone_name: 'd',
      disabled: true
    }, {
      id: 6,
      phone_name: 'e',
      disabled: true
    }, {
      id: 7,
      phone_name: 'f',
      disabled: false
    }, {
      id: 8,
      phone_name: 'g',
      disabled: false
    }
    ]
  }, {
    title: 'iphone', data: [{
      id: 9,
      phone_name: 'h',
      disabled: true
    }, {
      id: 10,
      phone_name: 'i',
      disabled: true
    }, {
      id: 11,
      phone_name: 'j',
      disabled: false
    }, {
      id: 12,
      phone_name: 'k',
      disabled: true
    }
    ]
  }
]
</script>

<template>
  <!-- <transfer :data="data" right-Title="已选择"></transfer> -->
  <div>
    <h1>{{ userInfoStore.userInfo.username }}</h1>
    <!-- setUserInfo不需要传入store -->
    <button :class="{ active: userInfoStore.userInfo.id == 1 }" @click="userInfoStore.setUserInfo({
      id: 1, username: '张三'
    })">张三</button>
    <button :class="{ active: userInfoStore.userInfo.id == 2 }" @click="userInfoStore.setUserInfo({
      id: 2, username: '李四'
    })">李四</button>
    <button :class="{ active: userInfoStore.userInfo.id == 3 }" @click="userInfoStore.setUserInfo({
      id: 3, username: '王五'
    })">王五</button>
    <hr>
    <CommentOne></CommentOne>
  </div>
</template>

<style scoped>
.active {
  background-color: #000;
  color: #fff;
}
</style>
