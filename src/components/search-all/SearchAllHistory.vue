<template>
  <div v-if="isShow && show" class="pl-30 bg-fff mb-20 ">
    <div class="his clearfix border-bottom">
      <span type="text" placeholder="" class="f30 fl color-999" >搜索历史</span>
      <div class="fr del" @click="isShow = false">
        <img src="../../assets/images/common/del.png"/>
      </div>
    </div>
    <ul>
      <li v-for="item in historyList" class="Warrior clearfix border-bottom">
        <a href="#" style="display: block; width: 100%;height: 100%">
          <div class="Warrior-l fl " style="position: absolute">
            <h3 class="color-000 f32 dis-in ph" v-text="item.name"></h3>
          </div>
          <div class="fr Warrior-r pr-30">
            <img src="../../assets/images/common/right.png"/>
          </div>
        </a>
      </li>
    </ul>
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
      historyList: {
        type: Array,
        default(){
          return [];
        }
      },
      show: {
        default: false
      }
    },
    data(){
      return {
        isShow: false
      }
    },
    watch: {
      historyList: function (val, oldVal) {
//        console.log(val, oldVal);
        if (this.historyList != null && this.historyList.length > 0) {
          this.isShow = true
        }
      }
    }

  }
</script>

<style>

</style>
