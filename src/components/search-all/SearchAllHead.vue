<template>
    <div>
        <div class="header pl-30 clearfix border-bottom">
            <div class="header-l ps-r">
                <input
                        class="f30"
                        ref="input"
                        type="text"
                        placeholder="请输入游戏名称或首字母"
                        :value="value"
                        @input="updateValue($event.target.value)">
            </div>
            <h3 class="color-f7 f32 header-r" @click="goBack">取消</h3>
        </div>
        <div v-if="!showOther" class="rake pl-30 bg-fff " style="position: absolute;width: 100%">
            <div class="rake-con clearfix border-bottom" v-for="item in searchList">
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
    export  default {
        props: {
            value: {
                default: ''
            },
            searchList: {
                type: Array,
                default(){
                    return [];
                }
            },
            showOther: {}
        },
        methods: {
            updateValue: function (val) {
                /**
                 * 得到新输入的
                 * 有空格
                 *    回退输入的值
                 *
                 *    触发回调事件，传回新的value值
                 *
                 */
                let filterVal = val.trim();
                if (filterVal !== val) { //不等于，还原（有空格）
                    this.$refs.input.value = filterVal;
                } else {
                    this.$emit('input', val)
                }
            },
            goBack: function () {
                if (this.value != null && this.value.length > 0) {
                    this.$refs.input.value = '';
                    this.$emit('input', '');
                } else {
                    this.$router.go(-1);
                }
            }
        }
    }
</script>
