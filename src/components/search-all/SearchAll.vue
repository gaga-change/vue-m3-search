<template>
  <div>
    <vue-head v-model="searchInput"></vue-head>
    <vue-history></vue-history>
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

</style>
