<template>
  <!--<div>-->
    <!--<hr>-->
    <!--搜索头部-->
    <!--{{value}}-->
    <!--<input ref="input" type="text" :value="value" @input="updateValue($event.target.value)">-->
    <!--<a href="javascript:void(0)" @click="$router.go(-1)">取消</a>-->
    <!--<div>-->
      <!--<ul>-->
        <!--<li v-for="item in games">-->
          <!--<router-link to="" v-text="item.name"></router-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <!--<hr>-->
  <!--</div>-->
  <div>
    <div class="header pl-30 clearfix border-bottom">
      <div class="header-l ps-r">
        <input type="text" placeholder="请输入游戏名称或首字母" class="f30"/>
      </div>
      <h3 class="color-f7 f32 header-r">取消</h3>
    </div>
    <div class="rake pl-30 bg-fff dis-no"><!--删除dis-no就可以看见-->
      <div class="rake-con clearfix border-bottom">
        <a href="#" class="dis-b clearfix ps-r" >
          <div class="rake-con-l  ps-a">
            <i ></i>
            <h4 class="f32 color-000 dis-in">地下城与勇士</h4>
          </div>
          <img src="../../assets/images/common/right.png" class="ps-a "/>
        </a>
      </div>
      <div class="rake-con clearfix border-bottom">
        <a href="#" class="dis-b clearfix ps-r" >
          <div class="rake-con-l  ps-a">
            <i ></i>
            <h4 class="f32 color-000 dis-in">大天使之剑</h4>
          </div>
          <img src="../../assets/images/common/right.png" class="ps-a "/>
        </a>
      </div>
      <div class="rake-con clearfix border-bottom">
        <a href="#" class="dis-b clearfix ps-r" >
          <div class="rake-con-l  ps-a">
            <i ></i>
            <h4 class="f32 color-000 dis-in">DATA2</h4>
          </div>
          <img src="../../assets/images/common/right.png" class="ps-a "/>
        </a>
      </div>
      <div class="rake-con clearfix border-bottom">
        <a href="#" class="dis-b clearfix ps-r" >
          <div class="rake-con-l  ps-a">
            <i class="ph"></i><!--................加了ph的是手游图标.................-->
            <h4 class="f32 color-000 dis-in">大话西游(手游)</h4>
          </div>
          <img src="../../assets/images/common/right.png" class="ps-a "/>
        </a>
      </div>
      <div class="rake-con clearfix border-bottom">
        <a href="#" class="dis-b clearfix ps-r" >
          <div class="rake-con-l  ps-a">
            <i ></i>
            <h4 class="f32 color-000 dis-in">大冲锋</h4>
          </div>
          <img src="../../assets/images/common/right.png" class="ps-a "/>
        </a>
      </div>
      <div class="rake-con clearfix border-bottom">
        <a href="#" class="dis-b clearfix ps-r" >
          <div class="rake-con-l  ps-a">
            <i ></i>
            <h4 class="f32 color-000 dis-in">大唐无双零</h4>
          </div>
          <img src="../../assets/images/common/right.png" class="ps-a "/>
        </a>
      </div>
      <div class="rake-con clearfix border-bottom">
        <a href="#" class="dis-b clearfix ps-r" >
          <div class="rake-con-l  ps-a">
            <i ></i>
            <h4 class="f32 color-000 dis-in">弹头奇兵</h4>
          </div>
          <img src="../../assets/images/common/right.png" class="ps-a "/>
        </a>
      </div>
      <div class="rake-con clearfix border-bottom">
        <a href="#" class="dis-b clearfix ps-r" >
          <div class="rake-con-l  ps-a">
            <i ></i>
            <h4 class="f32 color-000 dis-in">斗破苍穹OL</h4>
          </div>
          <img src="../../assets/images/common/right.png" class="ps-a "/>
        </a>
      </div>
    </div>
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
