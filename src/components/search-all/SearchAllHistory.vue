<template>
    <div v-if="isShow && show" class="pl-30 bg-fff mb-20  ">
        <div class="his clearfix border-bottom">
            <h3 class="f30 fl color-999">搜索历史</h3>
            <div class="fr del" @click="isShow = false">
                <img src="/images/common/del.png"/>
            </div>
        </div>
        <div v-for="item in historyList" class="Warrior clearfix border-bottom">
            <div class="rake-con clearfix border-bottom">
                <router-link
                        :to="{name:'ChooseClass', query:{gid:item.catagoryId,gname:item.name,isRecharge: item.isRecharge} }"
                        class="dis-b clearfix ps-r">
                    <div class="rake-con-l  ps-a">
                        <i :class="{'ph': item.gameType == 2}"></i>
                        <h4 class="f32 color-000 dis-in" v-text="item.name"></h4>
                    </div>
                    <img src="/images/common/right.png" class="ps-a "/>
                </router-link>
            </div>
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
            historyList: {
                type: Array,
                default(){
                    return [];
                }
            },
            show: {
                default: false
            }
        },
        data(){
            return {
                isShow: false
            }
        },
        watch: {
            historyList: function (val, oldVal) {
//        console.log(val, oldVal);
                if (this.historyList != null && this.historyList.length > 0) {
                    this.isShow = true
                }
            }
        }

    }
</script>
