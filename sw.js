/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e5b9ed8adc90fbf8c2f078886ea7ddd2"],["/archives/2018/01/index.html","b4d89ac088749e64ac53f51d7475efed"],["/archives/2018/02/index.html","4dcf247f2490988efc2ec5eb2b42cb90"],["/archives/2018/03/index.html","66921e47bd45f0ed37b5d6fd77737132"],["/archives/2018/04/index.html","add60232f1309fbe0684aaecbc611df7"],["/archives/2018/06/index.html","84e44a66481e98bf3e22e126e2f5ac40"],["/archives/2018/07/index.html","e3d594dc1e6c4ba64c19bc3af817177c"],["/archives/2018/10/index.html","4b78da7376584c717c1baf6d5ac39bf4"],["/archives/2018/index.html","90a648d52f3565d95aee11efb04ff8f2"],["/archives/2018/page/2/index.html","9368809051c145ff6633f753f8d5e282"],["/archives/2019/01/index.html","6a2aa5bd0818681c259bdf6a973ea422"],["/archives/2019/03/index.html","b4755547b0b61c1ee032ad8bd58cd75e"],["/archives/2019/04/index.html","bd081000ac9f7d52dfd7aff3a885a3c1"],["/archives/2019/index.html","06652ac31b61f1532a5ec9a7cd840454"],["/archives/2020/01/index.html","f6621e8baed7a03f03a852322fb0d352"],["/archives/2020/08/index.html","ab5302e7835a00bede981bd192c2b9af"],["/archives/2020/12/index.html","102be34b477145aa8791d1cbf0b1f902"],["/archives/2020/index.html","1a2622c1c7161ce80752dac2e75611b6"],["/archives/index.html","4234a0b0c39362d302bafa34cfb9bf0e"],["/archives/page/2/index.html","69d359fdb28274d8abf14ec3153ca679"],["/archives/page/3/index.html","c2e3d7be88873a5d9a3264cb533949dc"],["/categories/database/index.html","aa30246d8cb8908b48b489e434719852"],["/categories/hexo/index.html","6acb8434aa4d9305de73054671279266"],["/categories/index.html","c8dc687ccb0bae61368f18b9f1b7cb23"],["/categories/java/index.html","d3ce62993c2865351d10aba6f7124f42"],["/categories/linux/index.html","8cbb2b75a7203897821fb7df5024281e"],["/categories/mongo/index.html","e39f26af47444d2894d488e5e7531738"],["/categories/nodejs/index.html","ae33bebb87b44b48ef72132b2f4ec583"],["/categories/spring-boot/index.html","ca270e90ac4433ba9ddc35a01832befa"],["/categories/version-control/index.html","2a7e175f6b3fd7856fe0e002f9bf8832"],["/categories/架构设计/index.html","b23159e115ce7a06485b705fd028c44b"],["/categories/缓存/index.html","584792395ee00aaf19a1f3525fbb15f1"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","480fa5707a9432ec24225156863fb1a4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/BILIBILI_LOGO.svg","03c26f40d8271b9eba14ecdca021ce91"],["/images/avatar.jpg","0379915ba7b73d65a8d4a97b4af3c82e"],["/images/exception/exception.png","26e323ec3b8fcf4bae800328970ae4d3"],["/images/icon_bilibili.svg","a66a1211bf77f14b4585e905e1e273c0"],["/images/install_jdk/install.png","d502571bc66b133faab4ae834a4081ec"],["/images/install_jdk/look.png","ec4dd5e25dc4bfe75c00e51a968e9f8f"],["/images/install_jdk/verify.png","ba61d616b5a019ca97cddc814f933994"],["/images/jvm_resolve/class_resolve/01.png","e860d6b657d27710bbec368972310b1f"],["/images/jvm_resolve/class_resolve/02.png","53763952df7a896d91c287aadf5902c3"],["/images/jvm_resolve/class_resolve/03.png","ef86ea0ef0e06c9a2eb5b477e2b2b32e"],["/images/jvm_resolve/class_resolve/04.png","10bbe45da31eb87f31de24aef1627bd2"],["/images/jvm_resolve/class_resolve/05.png","fc0df88e8ebccf618fa3acb5f1aea7c3"],["/images/jvm_resolve/class_resolve/access_flag.png","4babb5751196926194dcb2f1777f98a8"],["/images/jvm_resolve/class_resolve/access_flag_02.png","4866a296605ed15097fe4ae1e5db5238"],["/images/jvm_resolve/class_resolve/access_flag_03.png","a5ef6a9f089297609bc12588ca7ca914"],["/images/jvm_resolve/class_resolve/attri_01.png","1b70cf4c8df3df5f9e8c4ad2f3265038"],["/images/jvm_resolve/class_resolve/class_file_struct.png","8cef1d73614c59f985e6e839523e8ff2"],["/images/jvm_resolve/class_resolve/class_index_01.png","01cbff67a3080c2a981e5a81313c3f30"],["/images/jvm_resolve/class_resolve/class_index_02.png","3e231d516417551ceaaa315414d69e2e"],["/images/jvm_resolve/class_resolve/class_index_03.png","228089a4ac8743c72f2864253c236cee"],["/images/jvm_resolve/class_resolve/class_lib_init.png","d9c17f9ceda30229bd3ec1b4070e9a3f"],["/images/jvm_resolve/class_resolve/class_lib_size.png","794595544f3be4905d9165228429bc11"],["/images/jvm_resolve/class_resolve/class_struct.png","cc1912f5f8bd7c155661a21471ae4368"],["/images/jvm_resolve/class_resolve/code_info.png","b677b3f0ef4687f37b77bfdf03d8191c"],["/images/jvm_resolve/class_resolve/const_38.png","bd7fb3defcad198c52632cf710f9ee0b"],["/images/jvm_resolve/class_resolve/const_pool_01.png","d9f69a7c666b4928ff4387b127ce720c"],["/images/jvm_resolve/class_resolve/const_pool_02.png","9f96df1453a8d668e4471cb2a2c8f470"],["/images/jvm_resolve/class_resolve/const_pool_04.png","967951d0184dac85c8745ead77348d4a"],["/images/jvm_resolve/class_resolve/const_pool_05.png","f8796142eb3b23e67f276d2e73fc8968"],["/images/jvm_resolve/class_resolve/const_pool_06.png","45f5874c90aae1b191c7893e78bbdaa1"],["/images/jvm_resolve/class_resolve/const_pool_07.png","ae3db273dd1e98c6915cb89670ef1891"],["/images/jvm_resolve/class_resolve/const_pool_08.png","ebd9d8fddafa36f32bc39de8448fdf16"],["/images/jvm_resolve/class_resolve/const_table.png","890c94827395ec4854c684bf3f9ce0f2"],["/images/jvm_resolve/class_resolve/const_table_type.png","e7492d9862bf5fe56ba3b0827b6f5ac3"],["/images/jvm_resolve/class_resolve/const_table_type_02.png","9771afbb8fcf339deb5d29c293c21a52"],["/images/jvm_resolve/class_resolve/field_01.png","4297530589031686656ecdb979afa871"],["/images/jvm_resolve/class_resolve/field_02.png","2dc7b4b7503bbdb589e5885205442b38"],["/images/jvm_resolve/class_resolve/field_03.png","e0863a0bc832ad4ab2321a475b8468bf"],["/images/jvm_resolve/class_resolve/field_04.png","81b67c2e06c63e250537cbe636db2608"],["/images/jvm_resolve/class_resolve/field_05.png","a73d69a4c787fc45cbaab31255fbd6ca"],["/images/jvm_resolve/class_resolve/field_access_flag_01.png","713cedf8a4e6e5c7940d2f6b0f7bcf12"],["/images/jvm_resolve/class_resolve/field_access_flag_02.png","71789e95c1536e188c2d8561065f87be"],["/images/jvm_resolve/class_resolve/field_struct_01.png","cbfd88fc77f5ffbf1ceb8fe59a7f58cc"],["/images/jvm_resolve/class_resolve/field_type_desc.png","4685f2319fc92ab90373c8826aa6691e"],["/images/jvm_resolve/class_resolve/global_scan.png","e047061785adf0ac43f5893d51572a65"],["/images/jvm_resolve/class_resolve/method_01.png","3cebb477d878482b42b5dd23f7d062ef"],["/images/jvm_resolve/class_resolve/method_02.png","18d9d4fae7d17d2cf4065018cd7a73af"],["/images/jvm_resolve/class_resolve/method_03.png","5d417a46231d8503c256416303e3dd86"],["/images/jvm_resolve/class_resolve/method_04.png","afd25c4a007895bdd28b532c5ebf5bf6"],["/images/jvm_resolve/class_resolve/method_05.png","fe5c5719e4bffa1750bb37aea360fe40"],["/images/jvm_resolve/class_resolve/method_access_flag_01.png","459ac177aa06c8e833a350731f1cadff"],["/images/jvm_resolve/class_resolve/method_access_flag_02.png","0adfdf972793a359cafd5740e10730a2"],["/images/jvm_resolve/class_resolve/method_init.png","c7522a445fcbaf499708872d35204a97"],["/images/jvm_resolve/class_resolve/method_init_attri.png","f895011e5322fc1d2ab15a07515b1f14"],["/images/jvm_resolve/class_resolve/method_list.png","26c81f4a967b35653e2479ec5eba2ec4"],["/images/jvm_resolve/class_resolve/method_size.png","1211e4c0f97840dbf724e0d22ee92292"],["/images/mysql5.7/getMysql.png","87eecc64398503e66884347fa43138eb"],["/images/security/common.png","e6f3df9e6b5a590aa8543e104f12a60d"],["/images/security/referer.png","a2a3a47b800cc822e9e9961ceaae6d49"],["/images/招商银行.svg","6102cef745f9eb28f97570cad43b48f2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","4184c39877e36bcc44a4c4db99543e77"],["/js/main.js","f0e22839c4ea8571c74a19586bf1b8aa"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","245e24448735719fb13f584ba281d8fc"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/life/index.html","e56baaad88c457ce57847c435efe24fd"],["/page/2/index.html","a7c3eb5bdc249c13f264043ad120d21e"],["/photo/index.html","7e8def147bc8b14ea63e4d97af8908d7"],["/posts/102656676.html","472261f51e90a73c0466bdeaecbab6ec"],["/posts/1100949762.html","08c834b7fa54fa7e018dadd7ee28c435"],["/posts/1269898537.html","fd5edb5141ca1d14f4457c846303bbe9"],["/posts/2072751892.html","b9025b9822de70f6e16932d99dfbb8d2"],["/posts/2234952837.html","5605646fd1f87a57c5df4a214668744a"],["/posts/2261290858.html","9896325f35a5be40efb25a9ba944afe4"],["/posts/2537856230.html","5a9b21bb18ac62cadd0d7438e4cc7458"],["/posts/2554747921.html","30b2d772513a890d09148ee7798dfcd3"],["/posts/3032883567.html","4c3a6a0b6d86515bf8395fc0a505dd50"],["/posts/3426230782.html","f065a03079e855e251b2142a8b00adf3"],["/posts/3742939765.html","8c4a55d2e0634c2f6470029e2ad97bef"],["/posts/3937382499.html","f8384006f31728f1af98b9d2386ab3e7"],["/posts/3993418584.html","e861d4a424ac84d838ff02d05d7ceeeb"],["/posts/4273184585.html","1c6417f7d6092171a57f045f21a9df71"],["/posts/975069324.html","b9ada80efc81a52153e2e540c273a341"],["/self/index.html","06a3fc9225cdb4dfa0339f64810ead2b"],["/sw-register.js","5b135a69cbeaed62861d7ba0f8d4f996"],["/tags/crond/index.html","5177168b62cc2d4332068d38afc569c2"],["/tags/crontab/index.html","7fca5fd1021ab19c58f8b20e1f880ec3"],["/tags/git/index.html","6c6de0fdbb8f576f6217468d0f7fa15c"],["/tags/hexo/index.html","40c52d3b7afd2c2ae119b4391914c2bf"],["/tags/index.html","cdd048088cae69d8b018fa89b0fab927"],["/tags/java/index.html","7d70edbc8326bdb8b49a4b9731f35bb1"],["/tags/jdk/index.html","5a5e7097a2c3186bb8313631cb0c0ac2"],["/tags/jvm/index.html","9aa0695a7894e25f7bb7c7f5971a319e"],["/tags/mongo/index.html","529ee5bd86f8a14f08074955810bd41f"],["/tags/mysql/index.html","e8347b693e2fc5664ebcb6fd69a23ccb"],["/tags/redis/index.html","e8e08994f100e45ea31128b8297aa760"],["/tags/web安全/index.html","6fcdc861e49458793627a19154cba0ba"],["/tags/前端/index.html","21fd263ff91a032f0a9bb9cc06055329"],["/tags/防火墙/index.html","65c847953e2e0a5e299656fe9feb2c11"]];
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
