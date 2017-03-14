<template>
  <!--<div>-->
    <!--<vue-head v-model="searchInput"></vue-head>-->
    <!--<vue-history></vue-history>-->
    <!--<vue-hot></vue-hot>-->
  <!--</div>-->
  <div class="search2" id="wrapper">
    <div class="header pl-30 clearfix border-bottom">
      <div class="header-l ps-r">
        <input type="text" placeholder="请输入游戏名称或首字母" class="f30"/>
      </div>
      <h3 class="color-f7 f32 header-r">取消</h3>
    </div>
    <!--.............................搜索历史......................-->
    <div class="pl-30 bg-fff mb-20 dis-no "><!--把dis-no删掉就可以看到-->
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
    <!--.............................热门游戏......................-->
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
    <!--.............................搜索框中打字出现的页面......................-->
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
  import vueHead from './SearchAllHead.vue'
  import vueHistory from './SearchAllHistory.vue'
  import vueHot from './SearchAllHot.vue'
  export default {
    data(){
      return {
        searchInput: '',
      }
    },
    components: {
      vueHead,
      vueHistory,
      vueHot,
    }
  }
</script>

<style>
  @import "../../assets/css/common/search-ld.css";
</style>
