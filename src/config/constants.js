/**
 * Created by 严俊东 on 2017/3/23.
 */

const CONSTANTS = {
    API: '/api/',
    // HOST: 'http://mn.5173.cn/'
    // HOST: 'http://m.5173.com/'
    // HOST: 'http://172.16.76.116/'
    HOST: '/'
    // API: './',
};
CONSTANTS.APIGoods = CONSTANTS.API + 'mobile-goods-service/rs/'; // 商品接口
CONSTANTS.APISearchCenter = CONSTANTS.API + 'mobile-searchCenter-service/rs/'; // 搜索接口
CONSTANTS.APICategory = CONSTANTS.API + 'mobile-category-service/rs/'; // 游戏接口
CONSTANTS.APILogin = CONSTANTS.API + 'mobile-user-service/rs/'; // 登录接口
CONSTANTS.APIOrder = CONSTANTS.API + 'mobile-order-service/rs/'; // 订单接口
CONSTANTS.APISearch1 = CONSTANTS.API + 'search/'; // 搜索接口
CONSTANTS.APIUser = CONSTANTS.API + 'mobile-user-service/rs/'; // 用户接口
CONSTANTS.APIWithdraw = CONSTANTS.API + 'mobile-financing-service/rs/'; // 提现接口
CONSTANTS.APISms = CONSTANTS.API + 'mobile-sms-service/rs/'; // 短信接口
CONSTANTS.APISafebuy = CONSTANTS.API + 'mobile-safebuy-service/rs/'; // 保险接口 安心买
CONSTANTS.APIArena = CONSTANTS.API + 'mobile-arena-service/rs/'; // 竞技场借口
CONSTANTS.APILoginNew = CONSTANTS.API.replace("/api/","") + ':8080/mobile-user-service/rs/'; // 登录接口9b
CONSTANTS.APIdl = CONSTANTS.API + 'mobile-leveling-service/rs/'; //代练接口
CONSTANTS.APIArena = CONSTANTS.API + 'mobile-arena-service/rs/'; //竞技场接口
CONSTANTS.APIGoldBean = CONSTANTS.API + 'mobile-goldbean-service/rs/'; //金豆接口
CONSTANTS.DSB = CONSTANTS.API.replace("api/","");//打手宝英雄联盟详情切换页面使用
CONSTANTS.FBD = CONSTANTS.API.replace("api/","");//手游充值发布单
CONSTANTS.GOLDGAME = CONSTANTS.API + 'mobile-fruitMachines-service/rs/'; // goldGame接口
CONSTANTS.APIPurchase = CONSTANTS.API + 'mobile-purchase-service/rs/'; // 采购接口
CONSTANTS.APIAthletics = CONSTANTS.API + 'mobile-athletics-service/rs/'; // 电子竞技接口
CONSTANTS.APIPromotion = CONSTANTS.API + 'mobile-promotion-service/rs/'; //合伙人推广接口
CONSTANTS.APIQuestion = CONSTANTS.API + 'mobile-question-service/rs/'; // 客服中心接口

CONSTANTS.APIRecharge = CONSTANTS.API + 'mobile-recharge-service/rs/'; // 手游充值
CONSTANTS.APIStore = CONSTANTS.API + 'mobile-store-service/rs/'; // 代练店铺接口
CONSTANTS.APIRent = CONSTANTS.API + 'mobile-rent-service/rs/'; // 代练店铺接口

CONSTANTS.APITGP =CONSTANTS.API + 'mobile-tgp-service/rs/'; // tgp接口

CONSTANTS.APIMainGoods = CONSTANTS.API +'mobile-mainGoods-service/rs/'; //  主站商品接口

export {CONSTANTS}