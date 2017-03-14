<template>
  <div>
    <hr>
    搜索头部
    {{value}}
    <input ref="input" type="text" :value="value" @input="updateValue($event.target.value)">
    <a href="javascript:void(0)" @click="$router.go(-1)">取消</a>
    <div>
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
  export  default {
    props: {
      value: {
        default: '123'
      },
      games: {
        type: Array,
        default(){
          return [{name: "英雄联盟"}, {name: "英雄联盟"}];
        }
      }
    },
    methods: {
      updateValue: function (val) {
        /**
         * 得到新输入的
         * 有空格
         *    回退输入的值
         *
         *    触发回调事件，传回新的value值
         *
         */
        let filterVal = val.trim();
        if (filterVal !== val) { //不等于，还原（有空格）
          this.$refs.input.value = filterVal;

        } else {
          console.log(this.value);
          this.$emit('input', val)
        }
      }
    }
  }
</script>

<style>

</style>
