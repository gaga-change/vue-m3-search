<template>
  <div>
    <h1>选一个</h1>
    <ul>
      <li>
        <router-link to="/#">游戏币</router-link>
        <router-link to="/#">账号</router-link>
        <router-link to="/#">装备</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{}
</script>

<style scoped>
  h1 {
    text-align: center;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul > li:nth-child(even) {
    background-color: #bbefa0;
  }

  ul > li:nth-child(odd) {
    background-color: #efbdcb;
  }

  li a {
    border-bottom: 1px solid gainsboro;
    padding: 20px 30px;
    display: block;
  }


</style>
