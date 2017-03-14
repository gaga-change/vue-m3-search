<template>
  <!--<div>-->
    <!--<div v-if="isShow">-->
      <!--历史记录-->
      <!--<ul>-->
        <!--<li v-for="item in games">-->
          <!--<router-link to="" v-text="item.name"></router-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <!--<button type="button" @click="isShow =! isShow">{{isShow? "点击隐藏": "点击显示"}}</button>-->
    <!--<hr>-->
  <!--</div>-->
  <div class="pl-30 bg-fff mb-20 "><!--把dis-no删掉就可以看到-->
    <div class="his clearfix border-bottom">
      <input type="text" placeholder="搜索历史" class="f30 fl">
      <div class="fr del">
        <img src="../../assets/images/common/del.png" />
      </div>
    </div>
    <div class="Warrior clearfix border-bottom">
      <div class="Warrior-l fl">
        <h3 class="color-000 f32 dis-in">地下城勇士</h3>
      </div>
      <div class="fr Warrior-r pr-30">
        <img src="../../assets/images/common/right.png" />
      </div>
    </div>
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
