<template>
    <div v-if="show" class="hot pl-30 bg-fff border-bottom ">
        <h4 class="f30 color-999 border-bottom">5173热搜</h4>
        <div v-for="item in showList" class="search-all-hot game-n ps-r clearfix border-bottom">
            <!--<div  class="game-n ps-r clearfix border-bottom">-->
            <router-link
                    :to="{name:'ChooseClass', query:{gid:item[0]?item[0].gameId:'', gname:item[0]?item[0].gameName:''} }"
                    class="fl f32 color-000" v-text="item[0].gameName"></router-link>
            <i class="pa"></i>
            <router-link
                    :to="{name:'ChooseClass', query:{gid:item[1]?item[1].gameId:'', gname:item[1]?item[1].gameName:''} }"
                    class="fl f32 color-000"><span v-text="item[1]?item[1].gameName:'' "></span></router-link>
        </div>
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
            hotList: {
                type: Array,
                default(){
                    return [];
                }
            },
            show: {
                default: false
            }
        },
        computed: {
            showList(){
                // 如果hotList为空，返回[]
                if (this.hotList == null) {
                    return [];
                }
                else {
                    let ret = [];
                    this.hotList.map((val, index) => {
                        if (index % 2 == 0) ret[index / 2] = [];
                        ret[parseInt(index / 2)].push(val);
                    });
                    return ret;
                }
            }
        }
    }
</script>
<style scoped>
    .search-all-hot a {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: 0.2rem;
    }
</style>