<script setup>
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
  <transfer :data="data" right-Title="已选择"></transfer>
</template>

<style scoped></style>
