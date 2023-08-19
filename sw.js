/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3d5fce5ecf7d9e3743a576850448e30a"],["/archives/2018/01/index.html","892c26a66ed0986195cbd26331029f1f"],["/archives/2018/02/index.html","4f00928c6ae17dfb253b4eb550c5a86e"],["/archives/2018/03/index.html","f3d3d387c0ba25f3d508dcc38824a14d"],["/archives/2018/04/index.html","d84b7a1bd35a4ffbf2f55adecd9c87cb"],["/archives/2018/06/index.html","af3bd47a1fd7c87a1a07b7a058a6831a"],["/archives/2018/07/index.html","502c63d5719fd9c8f771444e674cc806"],["/archives/2018/10/index.html","1566b9281c2fbc8056bf79cd6dcf2dea"],["/archives/2018/index.html","63597129c2fb4e5bfe836e4f0efa906f"],["/archives/2018/page/2/index.html","87115704513f75e9849a17fea3383c23"],["/archives/2019/01/index.html","7f39675c07fa5aed2fcb8884c1f7f553"],["/archives/2019/03/index.html","81e1895d2c57e753c8559448c4f7b0a3"],["/archives/2019/04/index.html","17371d830f55d6fb37d6b86578af435e"],["/archives/2019/index.html","ee79cb1ad840461d272941896a8fe623"],["/archives/2020/01/index.html","d33a52ea263b79dce249218d1cb5c2cd"],["/archives/2020/08/index.html","696f04986073da2f9e20660d47807379"],["/archives/2020/12/index.html","6d6cc784d2040e810f07941c665c16ed"],["/archives/2020/index.html","75eee5b063c3bd6c8407c0fcf1ddb6e0"],["/archives/index.html","93bc1480b41651be075464654a13ef87"],["/archives/page/2/index.html","30da9d08f8ecefbeca9139293e4365d9"],["/archives/page/3/index.html","253ddbd3cf7825eae824f3f10f41e380"],["/categories/database/index.html","cca451f041bd0f9dc75b0b46a72653e2"],["/categories/hexo/index.html","6207f53505f1c7478785763afdc1d971"],["/categories/index.html","9a1c5f545a3e757aada790b7bd9d0d79"],["/categories/java/index.html","5c5b2d745fab5f97f5c4e0b2cd728795"],["/categories/linux/index.html","2f02c28097daf48cac7dc112178c9f90"],["/categories/mongo/index.html","1f5fbb7f750a5a339ded882bc4e14e51"],["/categories/nodejs/index.html","b9d7e254d5e1c5f98dba94a2a8ed619d"],["/categories/spring-boot/index.html","f95f10faf56889cb0bd0c6cfc8a5ea63"],["/categories/version-control/index.html","254fdfaad4921ab2ae2db254cc1452d8"],["/categories/架构设计/index.html","5beee087e89985accf0944b438859f16"],["/categories/缓存/index.html","46ba9b07e0f3d415f72cf4451e06b7f4"],["/css/custom/font.css","f266c560268139239e488f301d76f58a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","0884336ae836d1d514651e0c515526c8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/BILIBILI_LOGO.svg","03c26f40d8271b9eba14ecdca021ce91"],["/images/avatar.jpg","0379915ba7b73d65a8d4a97b4af3c82e"],["/images/exception/exception.png","26e323ec3b8fcf4bae800328970ae4d3"],["/images/icon_bilibili.svg","a66a1211bf77f14b4585e905e1e273c0"],["/images/install_jdk/install.png","d502571bc66b133faab4ae834a4081ec"],["/images/install_jdk/look.png","ec4dd5e25dc4bfe75c00e51a968e9f8f"],["/images/install_jdk/verify.png","ba61d616b5a019ca97cddc814f933994"],["/images/jvm_resolve/class_resolve/01.png","e860d6b657d27710bbec368972310b1f"],["/images/jvm_resolve/class_resolve/02.png","53763952df7a896d91c287aadf5902c3"],["/images/jvm_resolve/class_resolve/03.png","ef86ea0ef0e06c9a2eb5b477e2b2b32e"],["/images/jvm_resolve/class_resolve/04.png","10bbe45da31eb87f31de24aef1627bd2"],["/images/jvm_resolve/class_resolve/05.png","fc0df88e8ebccf618fa3acb5f1aea7c3"],["/images/jvm_resolve/class_resolve/access_flag.png","4babb5751196926194dcb2f1777f98a8"],["/images/jvm_resolve/class_resolve/access_flag_02.png","4866a296605ed15097fe4ae1e5db5238"],["/images/jvm_resolve/class_resolve/access_flag_03.png","a5ef6a9f089297609bc12588ca7ca914"],["/images/jvm_resolve/class_resolve/attri_01.png","1b70cf4c8df3df5f9e8c4ad2f3265038"],["/images/jvm_resolve/class_resolve/class_file_struct.png","8cef1d73614c59f985e6e839523e8ff2"],["/images/jvm_resolve/class_resolve/class_index_01.png","01cbff67a3080c2a981e5a81313c3f30"],["/images/jvm_resolve/class_resolve/class_index_02.png","3e231d516417551ceaaa315414d69e2e"],["/images/jvm_resolve/class_resolve/class_index_03.png","228089a4ac8743c72f2864253c236cee"],["/images/jvm_resolve/class_resolve/class_lib_init.png","d9c17f9ceda30229bd3ec1b4070e9a3f"],["/images/jvm_resolve/class_resolve/class_lib_size.png","794595544f3be4905d9165228429bc11"],["/images/jvm_resolve/class_resolve/class_struct.png","cc1912f5f8bd7c155661a21471ae4368"],["/images/jvm_resolve/class_resolve/code_info.png","b677b3f0ef4687f37b77bfdf03d8191c"],["/images/jvm_resolve/class_resolve/const_38.png","bd7fb3defcad198c52632cf710f9ee0b"],["/images/jvm_resolve/class_resolve/const_pool_01.png","d9f69a7c666b4928ff4387b127ce720c"],["/images/jvm_resolve/class_resolve/const_pool_02.png","9f96df1453a8d668e4471cb2a2c8f470"],["/images/jvm_resolve/class_resolve/const_pool_04.png","967951d0184dac85c8745ead77348d4a"],["/images/jvm_resolve/class_resolve/const_pool_05.png","f8796142eb3b23e67f276d2e73fc8968"],["/images/jvm_resolve/class_resolve/const_pool_06.png","45f5874c90aae1b191c7893e78bbdaa1"],["/images/jvm_resolve/class_resolve/const_pool_07.png","ae3db273dd1e98c6915cb89670ef1891"],["/images/jvm_resolve/class_resolve/const_pool_08.png","ebd9d8fddafa36f32bc39de8448fdf16"],["/images/jvm_resolve/class_resolve/const_table.png","890c94827395ec4854c684bf3f9ce0f2"],["/images/jvm_resolve/class_resolve/const_table_type.png","e7492d9862bf5fe56ba3b0827b6f5ac3"],["/images/jvm_resolve/class_resolve/const_table_type_02.png","9771afbb8fcf339deb5d29c293c21a52"],["/images/jvm_resolve/class_resolve/field_01.png","4297530589031686656ecdb979afa871"],["/images/jvm_resolve/class_resolve/field_02.png","2dc7b4b7503bbdb589e5885205442b38"],["/images/jvm_resolve/class_resolve/field_03.png","e0863a0bc832ad4ab2321a475b8468bf"],["/images/jvm_resolve/class_resolve/field_04.png","81b67c2e06c63e250537cbe636db2608"],["/images/jvm_resolve/class_resolve/field_05.png","a73d69a4c787fc45cbaab31255fbd6ca"],["/images/jvm_resolve/class_resolve/field_access_flag_01.png","713cedf8a4e6e5c7940d2f6b0f7bcf12"],["/images/jvm_resolve/class_resolve/field_access_flag_02.png","71789e95c1536e188c2d8561065f87be"],["/images/jvm_resolve/class_resolve/field_struct_01.png","cbfd88fc77f5ffbf1ceb8fe59a7f58cc"],["/images/jvm_resolve/class_resolve/field_type_desc.png","4685f2319fc92ab90373c8826aa6691e"],["/images/jvm_resolve/class_resolve/global_scan.png","e047061785adf0ac43f5893d51572a65"],["/images/jvm_resolve/class_resolve/method_01.png","3cebb477d878482b42b5dd23f7d062ef"],["/images/jvm_resolve/class_resolve/method_02.png","18d9d4fae7d17d2cf4065018cd7a73af"],["/images/jvm_resolve/class_resolve/method_03.png","5d417a46231d8503c256416303e3dd86"],["/images/jvm_resolve/class_resolve/method_04.png","afd25c4a007895bdd28b532c5ebf5bf6"],["/images/jvm_resolve/class_resolve/method_05.png","fe5c5719e4bffa1750bb37aea360fe40"],["/images/jvm_resolve/class_resolve/method_access_flag_01.png","459ac177aa06c8e833a350731f1cadff"],["/images/jvm_resolve/class_resolve/method_access_flag_02.png","0adfdf972793a359cafd5740e10730a2"],["/images/jvm_resolve/class_resolve/method_init.png","c7522a445fcbaf499708872d35204a97"],["/images/jvm_resolve/class_resolve/method_init_attri.png","f895011e5322fc1d2ab15a07515b1f14"],["/images/jvm_resolve/class_resolve/method_list.png","26c81f4a967b35653e2479ec5eba2ec4"],["/images/jvm_resolve/class_resolve/method_size.png","1211e4c0f97840dbf724e0d22ee92292"],["/images/mysql5.7/getMysql.png","87eecc64398503e66884347fa43138eb"],["/images/security/common.png","e6f3df9e6b5a590aa8543e104f12a60d"],["/images/security/referer.png","a2a3a47b800cc822e9e9961ceaae6d49"],["/images/招商银行.svg","6102cef745f9eb28f97570cad43b48f2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","59d108d994f2286e3e6637753cd6e50f"],["/js/main.js","f0e22839c4ea8571c74a19586bf1b8aa"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","245e24448735719fb13f584ba281d8fc"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/life/index.html","86a21399b7186a8528d37601ec563788"],["/page/2/index.html","f1d3c4bafdb6f375d7d2f5e060691318"],["/photo/index.html","11465803299a46d6e67552fa5b94eda2"],["/posts/102656676.html","488489b72ddc70370e3fda8a25c20665"],["/posts/1100949762.html","20963fa0f2f0b9d89e7cbc4839564859"],["/posts/1269898537.html","ed16a61bb881248045dae6d41a6a18bf"],["/posts/2072751892.html","356e08526422c75af8d46ae91e759bc7"],["/posts/2234952837.html","dff3826641e01adede54f0c2cf973fb3"],["/posts/2261290858.html","e5b2999c04e15b8db337a9f05ddc65ba"],["/posts/2537856230.html","cd5eed53fbcd21abf4cbbc14442149d2"],["/posts/2554747921.html","e538f8899bbd7ce60d9838028b520d34"],["/posts/3032883567.html","a120e2cd87beae46960abcd6f2c08c4f"],["/posts/3426230782.html","58e23abecea7abe84f89000da912b9a3"],["/posts/3742939765.html","9013c007b49f17e83028c621c1364140"],["/posts/3937382499.html","94db2393bbfa23f83023959d97de2eba"],["/posts/3993418584.html","e337dade930b6aefbdbbbd886202e59e"],["/posts/4273184585.html","1ed0882c3b62ae6a3e2fb40cbf604775"],["/posts/975069324.html","d98db68326081b105c6710b2398c772d"],["/self/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/self/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/self/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/self/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/self/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/self/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/self/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/self/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/self/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/self/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/self/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/self/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/self/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/self/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/self/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/self/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/self/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/self/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/self/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/self/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/self/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/self/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/self/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/self/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/self/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/self/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/self/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/self/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/self/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/self/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/self/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/self/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/self/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/self/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/self/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/self/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/self/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/self/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/self/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/self/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/self/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/self/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/self/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/self/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/self/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/self/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/self/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/self/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/self/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/self/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/self/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/self/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/self/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/self/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/self/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/self/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/self/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/self/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/self/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/self/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/self/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/self/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/self/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/self/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/self/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/self/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/self/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/self/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/self/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/self/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/self/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/self/love.min.js","98a427c2573b4799164f02f870f83972"],["/sw-register.js","3ef366020b816cb1afa2af10ca71a482"],["/tags/crond/index.html","3171c094fac67959fd9bee65d1c9965c"],["/tags/crontab/index.html","513186b8f771f504573035e026a895b7"],["/tags/git/index.html","f0ebdfdbbfe23c090f88770c2d25cd87"],["/tags/hexo/index.html","1b4bbbe55116f4f921498fa5de97fbce"],["/tags/index.html","4b85600ce0b41e01cb5cb554b759cc5f"],["/tags/java/index.html","3a41fe2bb4cf3ba406268e4d91a4f759"],["/tags/jdk/index.html","e9529c0153de738714ace0479bb5784e"],["/tags/jvm/index.html","fce20cdbde6487cbf85762e730cec71c"],["/tags/mongo/index.html","5ab8334e79fbc4cc04aed73ec62ca9a5"],["/tags/mysql/index.html","e671cefde0f8aa5ac9d438bd19cc7d84"],["/tags/redis/index.html","7c43881037018857f5ee1a2b67ad7701"],["/tags/web安全/index.html","a82a5255f9c31a870785e7a8c57dc2e7"],["/tags/前端/index.html","329dad36210f6ad5f68c3a6e028b91e8"],["/tags/防火墙/index.html","71dd2292966801176b5a67493c0b301d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
