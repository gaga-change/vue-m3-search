<template>
  <div class="search2" id="wrapper">

    <!--.............................搜索框中......................-->
    <vue-head v-model="searchInput"></vue-head>

    <!--.............................搜索历史......................-->
    <vue-history></vue-history>

    <!--.............................热门游戏......................-->
    <vue-hot></vue-hot>
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
