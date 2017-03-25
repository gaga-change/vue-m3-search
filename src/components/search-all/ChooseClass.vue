<template>
    <div id="wrapper">
        <!---------------------------- top ---------------------------->
        <div class="top-header fixed-top border-bottom" style="z-index:61;">
            <div class="top-back">
                <a href="javascript:history.go(-1)"></a>
            </div>
            <h2 class="f36" v-text="title"></h2>
            <div class="top-right"></div>
        </div>
        <!------------------------*填补fixed留下的下方空块*------------------------>
        <div class="fixedspace2" style="height: 0.96rem"></div>
        <!---------------------------- search ---------------------------->
        <div class="search-game border-bottom fw">
            <div class="sgame fw bg-fff f30">
                <span>请选择商品类型</span>
            </div>
        </div>
        <!---------------------------- 区服选择 ------------------------------>
        <div class="search-list pb-200 fw ">
            <div class="slist fw f30 bg-fff">
                <ul class="style01" v-if="list ==null || list.length == 0">
                    <li>没有商品类型。</li>
                </ul>
                <ul class="style03">
                    <li v-for="item in list" v-if="item.link">
                        <a :href="item.link" v-text="item.goodsTypeName"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * 该Vue有设计缺陷，将来会有一种很好的方案代替  ps:严俊东
     */
    import http from './http'
    export default{
        data(){
            return {
                title: '',
                gid: null,
                list: []
            }
        },
        mounted(){
            if (this.$route != null
                && this.$route.query['gname'] != null
                && this.$route.query['gid'] != null) {
                this.title = this.$route.query['gname'];
                this.gid = this.$route.query['gid'];
            }
        },
        beforeRouteEnter(to, from, next){
            if (to.query.gid) {
                http.getClass({gameId: to.query.gid}).then(list => {
                    if (list) {
                        next(vm => {
//                            console.log(list);
                            vm.addLink(list.list);
                            vm.list.push(...list.list);
                        })
                    } else {
                        next();
                    }
                });
            } else {
                next();
            }
        },
        methods: {
            addLink(list){
                list.map((v) => {
                    switch (v.goodsType) {
                        case 1:
                        // 装备
                        case 3:
                            // 游戏币
                            v.link = this.$CONSTANTS.HOST + "/search/search-game-area.html?" +
                                "gid=" + this.gid +
                                "&gname=" + this.title +
                                "&goodsType=" + v.goodsType +
                                "&typename=" + v.goodsTypeName;
                            break;
                        case 2:
                            // 账号
                            v.link = this.$CONSTANTS.HOST + "/list-account.html?" +
                                "gid=" + this.gid +
                                "&gname=" + this.title +
                                "&goodsType=" + v.goodsType +
                                "&typename=" + v.goodsTypeName +
                                "&areaname=全区&servername=全服"
                            break;

                    }
                })
            }
        }


    }
</script>
