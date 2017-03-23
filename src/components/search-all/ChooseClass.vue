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
                <ul class="style03">
                    <a>
                        <li> 游戏币</li>
                    </a>
                    <a>
                        <li>账号</li>
                    </a>
                    <a>
                        <li>装备</li>
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                title: ''
            }
        },
        mounted(){
            if (this.$route != null && this.$route.query['gname'] != null) {
                this.title = this.$route.query['gname'];
            }
        }
    }
</script>
