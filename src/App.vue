<script setup>
import useUserInfo from './store/user'
import { ref } from 'vue'
// import CommentOne from './comments/CommentOne';
// import MyTable from '../modules/sensen-ui/myTable/MyTable.vue';
import Message, { types } from '../modules/sensen-ui/message';
import JsppMessage from '../modules/sensen-ui/message/Message.vue';
import MyMessageBox from '../modules/sensen-ui/messageBox';

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
const tableData = ref({
  tHead: [
    { key: 'id', text: '学号', editable: true },
    {
      key: 'name', text: '姓名', editable: true
    },
    {
      key: 'age', text: '年龄', editable: true
    },
    {
      key: 'chinese', text: '语文', editable: true
    }, {
      key: 'math', text: '数学', editable: true
    }, {
      key: 'english', text: '英语', editable: true
    }
  ],
  tBody: [
    {
      id: 1, name: '张三', age: 16, chinese: 121, math: 98, english: 138
    }, {
      id: 2, name: '李四', age: 16, chinese: 121, math: 98, english: 138
    }, {
      id: 3, name: '王五', age: 16, chinese: 121, math: 98, english: 138
    }
  ]
})
const editData = ({ index, key, value, text }, removeInput) => {
  if (tableData.value.tBody[index][key] !== value) {
    const cfm = window.confirm(`需要将${index}项${text}字段内容修改为${value}吗？`)
    if (cfm) {
      tableData.value.tBody = tableData.value.tBody.map((item, idx) => {
        index == idx && (item[key] = value)
        return item
      })
    } else {
      removeInput()
    }
  }

}
const getStarNum = () => {
}
const showMessageBox = () => {
  MyMessageBox({
    confirmBtnText: '确定',
    title: 'MessageBox',
    content: 'messageBox content'
  })
  // .then(() => {
  //   console.log('messagebox resolve');
  // }).catch(() => {
  //   console.log('messagebox reject');
  // })
}
const showConfirmMessageBox = () => {
  MyMessageBox.confirm({
    showCancelBtn: true,
    cancelBtnText: '取消',
    title: 'confirmMessageBox',
    content: 'confirmmessageBox content'
  })
  // .then(() => {
  //   console.log('confirmmessagebox resolve');
  // }).catch(() => {
  //   console.log('confirmmessagebox reject');
  // })
}
const showPromptessageBox = () => {
  MyMessageBox.prompt({
    confirmBtnText: '确定',
    showCancelBtn: true,
    cancelBtnText: '取消',
    title: 'promptMessageBox',
    content: 'promptmessageBox content'
  })
  // .then(() => {
  //   console.log('promptmessagebox resolve');
  // }).catch(() => {
  //   console.log('promptmessagebox reject');
  // })
}
</script>

<template>
  <!-- <transfer :data="data" right-Title="已选择"></transfer> -->
  <!-- <div>
    <h1>{{ userInfoStore.userInfo.username }}</h1>
    setUserInfo不需要传入store
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
  </div> -->
  <!-- <MyTable :data="tableData" @submit="editData"></MyTable> -->
  <!-- <Stars :num="5" :size="30" @getStarNum="getStarNum"></Stars> -->
  <div>
    <!-- 传递props时不一定需要： -->
    <!-- <JsppMessage type="warning" message="test Message component" :duration="5000"></JsppMessage> -->
    <!-- <button @click="Message.success({ message: 'success' })">show success</button> -->
    <!-- <button @click="Message.warning({ message: 'warning' })">show warning</button> -->
    <!-- <button @click="Message({ type: types.message, message: '' })">show message</button> -->
    <!-- <button @click="Message({ type: types.error, message: 'success' })">show error</button> -->
    <button @click="showMessageBox">showMessageBox</button>
    <button @click="showConfirmMessageBox">showConfirmMessageBox</button>
    <button @click="showPromptessageBox">showPromptessageBox</button>
  </div>
</template>

<style scoped>
.active {
  background-color: #000;
  color: #fff;
}
</style>
