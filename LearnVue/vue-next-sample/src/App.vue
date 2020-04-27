<template>
  <div>hello {{ title }}</div>
</template>

<script>
// export default {
//     setup (){

//     }
// }
import { defineComponent } from 'vue'
// 这样写有智能提示
export default defineComponent({
    setup(){
        return {
            title: 'Vue.ja 3.0'
        }
    }
})
</script>

<style>
div {
    color: blue;
}
</style>