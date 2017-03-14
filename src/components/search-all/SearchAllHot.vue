<template>
  <div>
    <div v-if="isShow">
      5173热搜
      <ul>
        <li v-for="item in games">
          <router-link to="" v-text="item.name"></router-link>
        </li>
      </ul>
    </div>
    <hr>
  </div>
</template>

<script>
  /**
   * 历史记录方案：
   *  方案一：
   *    数据自己请求
   *  方案二：
   *    数据父组件传入 √
   */
  export  default {
    props: {
      games: {
        type: Array,
        default(){
          return [{name: "英雄联盟"}, {name: "英雄联盟"}];
        }
      }
    },
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style>

</style>
