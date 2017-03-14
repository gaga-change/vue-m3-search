<template>
  <div class="search2" id="wrapper">

    <!--.............................搜索框中......................-->
    <vue-head v-model="searchInput"></vue-head>

    <!--.............................搜索历史......................-->
    <vue-history></vue-history>

    <!--.............................热门游戏......................-->
    <vue-hot :hot-list="hotList"></vue-hot>
  </div>

</template>

<script>
  import http from './data/index.js'
  import vueHead from './SearchAllHead.vue'
  import vueHistory from './SearchAllHistory.vue'
  import vueHot from './SearchAllHot.vue'

  export default {
    name: "HomeSearch",
    data(){
      return {
        searchInput: null,
        hotList: null,
        _num: null
      }
    },
    components: {
      vueHead,
      vueHistory,
      vueHot,
    },
    created(){
      this.setNum();
      this.setHostList();
    },
    methods: {
      setHostList() {
        http.getHot(this._num.hotNum).then((req) => {
          this.hotList = req.list;
          console.log('??');
        }, () => {
          console.log("数据请求错误");
        })
      },
      setNum() {
        let query = this.$route.query;
        let num = {hotNum: 15, searchNum: 15, historyNum: 15};
        for (let attr in query) {
          if (num[attr]) {
            num[attr] = Number(query[attr]) || 15;
          }
        }
        this._num = num;
      }
    }
  }
</script>

<style>
  @import "../../assets/css/common/search-ld.css";
</style>
