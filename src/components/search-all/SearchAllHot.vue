<template>
  <!--<div>-->
    <!--<div v-if="isShow">-->
      <!--5173热搜-->
      <!--<ul>-->
        <!--<li v-for="item in games">-->
          <!--<router-link to="" v-text="item.name"></router-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <!--<hr>-->
    <div class="hot pl-30 bg-fff border-bottom ">
      <h4 class="f30 color-999 border-bottom">热门游戏</h4>
      <div class="game-n ps-r clearfix border-bottom">
        <a class="fl f32 color-000" href="#">英雄联盟</a>
        <i class="pa"></i>
        <a class="fl f32 color-000" href="#"><span>王者荣耀(手游）</span></a>
      </div>
      <div class="game-n ps-r clearfix border-bottom">
        <a class="fl f32 color-000" href="#">魔兽世界</a>
        <i class="pa"></i>
        <a class="fl f32 color-000" href="#"><span>梦幻西游(手游)</span></a>
      </div>
      <div class="game-n ps-r clearfix border-bottom">
        <a class="fl f32 color-000" href="#">天涯明月刀</a>
        <i class="pa"></i>
        <a class="fl f32 color-000" href="#"><span>阴阳师(手游）</span></a>
      </div>
      <div class="game-n ps-r clearfix border-bottom">
        <a class="fl f32 color-000" href="#">穿越火线</a>
        <i class="pa"></i>
        <a class="fl f32 color-000" href="#"><span>火线精英(手游）</span></a>
      </div>
      <div class="game-n ps-r clearfix border-bottom">
        <a class="fl f32 color-000" href="#">疾风之刀</a>
        <i class="pa"></i>
        <a class="fl f32 color-000" href="#"><span>街篮(手游）</span></a>
      </div>
      <div class="game-n ps-r clearfix ">
        <a class="fl f32 color-000" href="#">魔域</a>
        <i class="pa"></i>
        <a class="fl f32 color-000" href="#"><span>倩女幽魂(手游)</span></a>
      </div>
    </div>
  <!--</div>-->
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
