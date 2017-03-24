<template>
    <div class="search2" id="wrapper" ref="abc">
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
    import http from './http'
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
                showOther: true, // 控制历史记录、热搜不会和搜索引擎同时出现
                _logined: null, // 当前登入状态，不能直接调用该变量
            }
        },
        components: {
            vueHead,
            vueHistory,
            vueHot,
        },
        created(){
            this.setNum(); // 配置每一项的条数，必须先放在第一个条
            this.getLoginState().then((logined) => {
                this.setHistoryList(logined);
            });
            this.setHostList();
        },
        beforeRouteLeave (to, from, next) {
            console.log(to);
            if (to.query != null,
                to.query.gid != null,
                to.query.gname != null,
                to.query.gameType != null
            ) {
                console.log("进入保存流程")
                this.getLoginState().then((logined) => {
                    http.saveHistory({
                        gameId: to.query.gid,
                        name: to.query.gname,
                        gameType: to.query.gameType,
                    }, logined);
                    if(to.query.gameType == 2) {
                        let queryStr = '';
                        for(let key in to.query) {
                            queryStr += key + "=" + to.query[key] + "&"
                        }
                        window.location.href = this.$CONSTANTS.HOST + '/search/search-ptyys.html?'  + queryStr;
                    }else {
                        next();
                    }
                });
            } else {
//                console.warn("参数不对，自动静止跳入下个页面")
                next();
            }
        },
        methods: {
            setHostList() {
                http.getHot(this._num.hotNum).then((req) => {
                    this.hotList = req.list;
                })
            },
            setHistoryList(logined) {
                http.getHistory(this._num.historyNum, logined).then((req) => {
                    this.historyList = req.list;
                })
            },
            setSearchList(str){
                http.getSearch(this._num.searchNum, str).then((req) => {
                    this.searchList = req.list;
                })
            },
            setNum() {
                let num = {hotNum: 12, searchNum: 10, historyNum: 4};
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
            },
            /**
             * 获取当前的登入状态
             * @returns {Promise<T>|Promise}
             */
            getLoginState(){
                return new Promise((resolve) => {
                    if (this._logined != null) {
                        resolve(this._logined);
                    } else {
                        this.$getAccount().then((account) => {
                            if (account) {
                                this._logined = true;
                            } else {
                                this._logined = false;
                            }
                            resolve(this._logined)
                        }, () => {
                            resolve(false);
                        })
                    }

                })
            }
        }
    }
</script>

<style>
    @import "/css/common/search-ld.css";
</style>
