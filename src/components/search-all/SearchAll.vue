<template>
    <div class="search2" id="wrapper">
        <!--.............................搜索框组......................-->
        <vue-head
                v-model="searchInput"
                @input="changeInput"
                :search-list="searchList"
                :show-other="showOther"
        ></vue-head>

        <!--.............................搜索历史......................-->
        <vue-history
                :history-list="historyList"
                :show="showOther"
        ></vue-history>

        <!--.............................热门游戏......................-->
        <vue-hot
                :hot-list="hotList"
                :show="showOther"
        ></vue-hot>
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
                searchInput: null, // 搜索输入框
                hotList: null, // 热搜
                historyList: null, // 历史列表
                searchList: null, // 搜索显示的列表
                _num: null,  // 控制每种列表的显示条数（上线删除）
                showOther: true // 控制历史记录、热搜不会和搜索引擎同时出现
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
            this.setHistoryList();
        },
        methods: {
            setHostList() {
                http.getHot(this._num.hotNum).then((req) => {
                    this.hotList = req.list;
                })
            },
            setHistoryList() {
                http.getHistory(this._num.historyNum).then((req) => {
                    this.historyList = req.list;
                }, () => {
                    console.log("账号历史 数据请求错误");
                })
            },
            setSearchList(str){
                http.getSearch(this._num.searchNum, str).then((req) => {
                    this.searchList = req.list;
                }, () => {
                    console.log("账号历史 数据请求错误");
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
            },
            // 输入内容改变的回调函数
            changeInput() {
                if (this.searchInput != null && this.searchInput.length != 0) {
                    this.showOther = false;
                } else {
                    this.showOther = true;
                }
                this.setSearchList(this.searchInput)
            }
        }
    }
</script>

<style>
    @import "/css/common/search-ld.css";
</style>
