/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c2130b85ab2b11b628e98904d38f9847"],["/archives/2018/01/index.html","8de91e1c486451e718d15cedc77dad73"],["/archives/2018/02/index.html","9fcae1f2e0f7b9c49072e9dcf9d9e0a5"],["/archives/2018/03/index.html","66216a1574521cd6feced73eecfc8579"],["/archives/2018/04/index.html","16331f5b281f092784ea886eec38765c"],["/archives/2018/06/index.html","3562c4b6aa3e06e5de99858a4574a24c"],["/archives/2018/07/index.html","953eacd0cddc7cdd31e25e25a2ec645f"],["/archives/2018/10/index.html","e0c97d690448e6a70ba962a7c45df679"],["/archives/2018/index.html","a2931986ae368db45b8fd77225e947d0"],["/archives/2018/page/2/index.html","79e2afd0f034cef98bdf0d0487e8df48"],["/archives/2019/01/index.html","6443d99ce9e73d6aff60e45817d747ec"],["/archives/2019/03/index.html","6cdccb6d61ddea0fe07da789aba00e5f"],["/archives/2019/04/index.html","07a4167f92d7b2774a160cb8c801f374"],["/archives/2019/index.html","fc00bd03be026fe106fdda3606a98780"],["/archives/2020/01/index.html","d445f7bff141aa58fd245bd452f9b6b9"],["/archives/2020/08/index.html","3cd6e0e8202e5e1412a5b8e13f3fee7f"],["/archives/2020/12/index.html","106a5bd8e8b64107f2e0b1876453b8ef"],["/archives/2020/index.html","d9bd7cdc81b0609cc3f39395a5bfc7fd"],["/archives/index.html","6299ea6b1f62a49c2d9c2658884dc4f8"],["/archives/page/2/index.html","9f6856ca2384e690ec2acf9709afc8ee"],["/archives/page/3/index.html","d1db5120677f716efb2a4acdbddfe790"],["/categories/database/index.html","fe22bb5688684591780857b5f128f45d"],["/categories/hexo/index.html","d55574d0deb32ae4b268692b6524e537"],["/categories/index.html","ec8f1f42750f0fe6d617509442f71360"],["/categories/java/index.html","f34559ba5f4766a594e26ca3bc99d212"],["/categories/linux/index.html","7068b9d10729fe655def8eb17287784b"],["/categories/mongo/index.html","2fe2716cbb41f4a0ede92151b8b519a8"],["/categories/nodejs/index.html","1309a308b78d09b243845c425c2a19b9"],["/categories/spring-boot/index.html","86ad072e033a3aa065591c2a3828757f"],["/categories/version-control/index.html","46e110991841e92b17bbdf3970be6630"],["/categories/架构设计/index.html","aa075cf01c4038ee145673b248f83e26"],["/categories/缓存/index.html","ed0dd3468c448cb68d4f3f26d9f4edbe"],["/css/custom/font.css","f266c560268139239e488f301d76f58a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","0884336ae836d1d514651e0c515526c8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/BILIBILI_LOGO.svg","03c26f40d8271b9eba14ecdca021ce91"],["/images/avatar.jpg","0379915ba7b73d65a8d4a97b4af3c82e"],["/images/exception/exception.png","26e323ec3b8fcf4bae800328970ae4d3"],["/images/icon_bilibili.svg","a66a1211bf77f14b4585e905e1e273c0"],["/images/install_jdk/install.png","d502571bc66b133faab4ae834a4081ec"],["/images/install_jdk/look.png","ec4dd5e25dc4bfe75c00e51a968e9f8f"],["/images/install_jdk/verify.png","ba61d616b5a019ca97cddc814f933994"],["/images/jvm_resolve/class_resolve/01.png","e860d6b657d27710bbec368972310b1f"],["/images/jvm_resolve/class_resolve/02.png","53763952df7a896d91c287aadf5902c3"],["/images/jvm_resolve/class_resolve/03.png","ef86ea0ef0e06c9a2eb5b477e2b2b32e"],["/images/jvm_resolve/class_resolve/04.png","10bbe45da31eb87f31de24aef1627bd2"],["/images/jvm_resolve/class_resolve/05.png","fc0df88e8ebccf618fa3acb5f1aea7c3"],["/images/jvm_resolve/class_resolve/access_flag.png","4babb5751196926194dcb2f1777f98a8"],["/images/jvm_resolve/class_resolve/access_flag_02.png","4866a296605ed15097fe4ae1e5db5238"],["/images/jvm_resolve/class_resolve/access_flag_03.png","a5ef6a9f089297609bc12588ca7ca914"],["/images/jvm_resolve/class_resolve/attri_01.png","1b70cf4c8df3df5f9e8c4ad2f3265038"],["/images/jvm_resolve/class_resolve/class_file_struct.png","8cef1d73614c59f985e6e839523e8ff2"],["/images/jvm_resolve/class_resolve/class_index_01.png","01cbff67a3080c2a981e5a81313c3f30"],["/images/jvm_resolve/class_resolve/class_index_02.png","3e231d516417551ceaaa315414d69e2e"],["/images/jvm_resolve/class_resolve/class_index_03.png","228089a4ac8743c72f2864253c236cee"],["/images/jvm_resolve/class_resolve/class_lib_init.png","d9c17f9ceda30229bd3ec1b4070e9a3f"],["/images/jvm_resolve/class_resolve/class_lib_size.png","794595544f3be4905d9165228429bc11"],["/images/jvm_resolve/class_resolve/class_struct.png","cc1912f5f8bd7c155661a21471ae4368"],["/images/jvm_resolve/class_resolve/code_info.png","b677b3f0ef4687f37b77bfdf03d8191c"],["/images/jvm_resolve/class_resolve/const_38.png","bd7fb3defcad198c52632cf710f9ee0b"],["/images/jvm_resolve/class_resolve/const_pool_01.png","d9f69a7c666b4928ff4387b127ce720c"],["/images/jvm_resolve/class_resolve/const_pool_02.png","9f96df1453a8d668e4471cb2a2c8f470"],["/images/jvm_resolve/class_resolve/const_pool_04.png","967951d0184dac85c8745ead77348d4a"],["/images/jvm_resolve/class_resolve/const_pool_05.png","f8796142eb3b23e67f276d2e73fc8968"],["/images/jvm_resolve/class_resolve/const_pool_06.png","45f5874c90aae1b191c7893e78bbdaa1"],["/images/jvm_resolve/class_resolve/const_pool_07.png","ae3db273dd1e98c6915cb89670ef1891"],["/images/jvm_resolve/class_resolve/const_pool_08.png","ebd9d8fddafa36f32bc39de8448fdf16"],["/images/jvm_resolve/class_resolve/const_table.png","890c94827395ec4854c684bf3f9ce0f2"],["/images/jvm_resolve/class_resolve/const_table_type.png","e7492d9862bf5fe56ba3b0827b6f5ac3"],["/images/jvm_resolve/class_resolve/const_table_type_02.png","9771afbb8fcf339deb5d29c293c21a52"],["/images/jvm_resolve/class_resolve/field_01.png","4297530589031686656ecdb979afa871"],["/images/jvm_resolve/class_resolve/field_02.png","2dc7b4b7503bbdb589e5885205442b38"],["/images/jvm_resolve/class_resolve/field_03.png","e0863a0bc832ad4ab2321a475b8468bf"],["/images/jvm_resolve/class_resolve/field_04.png","81b67c2e06c63e250537cbe636db2608"],["/images/jvm_resolve/class_resolve/field_05.png","a73d69a4c787fc45cbaab31255fbd6ca"],["/images/jvm_resolve/class_resolve/field_access_flag_01.png","713cedf8a4e6e5c7940d2f6b0f7bcf12"],["/images/jvm_resolve/class_resolve/field_access_flag_02.png","71789e95c1536e188c2d8561065f87be"],["/images/jvm_resolve/class_resolve/field_struct_01.png","cbfd88fc77f5ffbf1ceb8fe59a7f58cc"],["/images/jvm_resolve/class_resolve/field_type_desc.png","4685f2319fc92ab90373c8826aa6691e"],["/images/jvm_resolve/class_resolve/global_scan.png","e047061785adf0ac43f5893d51572a65"],["/images/jvm_resolve/class_resolve/method_01.png","3cebb477d878482b42b5dd23f7d062ef"],["/images/jvm_resolve/class_resolve/method_02.png","18d9d4fae7d17d2cf4065018cd7a73af"],["/images/jvm_resolve/class_resolve/method_03.png","5d417a46231d8503c256416303e3dd86"],["/images/jvm_resolve/class_resolve/method_04.png","afd25c4a007895bdd28b532c5ebf5bf6"],["/images/jvm_resolve/class_resolve/method_05.png","fe5c5719e4bffa1750bb37aea360fe40"],["/images/jvm_resolve/class_resolve/method_access_flag_01.png","459ac177aa06c8e833a350731f1cadff"],["/images/jvm_resolve/class_resolve/method_access_flag_02.png","0adfdf972793a359cafd5740e10730a2"],["/images/jvm_resolve/class_resolve/method_init.png","c7522a445fcbaf499708872d35204a97"],["/images/jvm_resolve/class_resolve/method_init_attri.png","f895011e5322fc1d2ab15a07515b1f14"],["/images/jvm_resolve/class_resolve/method_list.png","26c81f4a967b35653e2479ec5eba2ec4"],["/images/jvm_resolve/class_resolve/method_size.png","1211e4c0f97840dbf724e0d22ee92292"],["/images/mysql5.7/getMysql.png","87eecc64398503e66884347fa43138eb"],["/images/security/common.png","e6f3df9e6b5a590aa8543e104f12a60d"],["/images/security/referer.png","a2a3a47b800cc822e9e9961ceaae6d49"],["/images/招商银行.svg","6102cef745f9eb28f97570cad43b48f2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5926bfef7fc8db2f390aae0250f8179e"],["/js/main.js","f0e22839c4ea8571c74a19586bf1b8aa"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","245e24448735719fb13f584ba281d8fc"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/life/index.html","54c4b6bd3000b44bac6f80e3f9ae55e7"],["/page/2/index.html","8d15ac0c52a94ff6f9bf27dfc1337dfa"],["/photo/index.html","9c77977a8fa7e0c9cb2ed6feb1a01ba3"],["/posts/102656676.html","ff31ecb48b931770c79858bfcfc5037e"],["/posts/1100949762.html","a26fcd01881dd33f2e8dc7f512f9d5f7"],["/posts/1269898537.html","6312abd42ec80820e325aa3bb5eda7fb"],["/posts/2072751892.html","870a91e37c35d16217c23f3b0d3444b6"],["/posts/2234952837.html","74fc9d0487c8a7eae2b2b18ca9ff0fa8"],["/posts/2261290858.html","77e34e0deef82814a578807773ee5324"],["/posts/2537856230.html","5b47a181aba31c1d9e96f2084d808020"],["/posts/2554747921.html","80a5b8b02732618fe1e779bbd03b893c"],["/posts/3032883567.html","300471d222e8733a9814e98f25e56c3c"],["/posts/3426230782.html","d0da867cd855e75bac2566f41db1a5b5"],["/posts/3742939765.html","9ca427d52a3b236bfbb11e92c3f58027"],["/posts/3937382499.html","5126f4bfbf72f72d37b6c181f8a0b24f"],["/posts/3993418584.html","b8c95da906bf9524c8dcb46a5edc9eca"],["/posts/4273184585.html","ab010493422898f55ddb1739c3876e30"],["/posts/975069324.html","3f528271ba4ad8ad1cfe8e24985e23ba"],["/self/file/default.css","051182343c030bf463a817ab92d32176"],["/self/file/functions.js","28b1a964e367c876acfb79c4f7dfd3fb"],["/self/file/jquery.min.js","db2cccefedcc741a45a582e91a5afe8d"],["/self/file/jscex-async-powerpack.min.js","fd45d8a1f07587f6c02374252ec473ff"],["/self/file/jscex-async.min.js","aa6f97f754cafa543faaab169e3fd001"],["/self/file/jscex-builderbase.min.js","9b8461afeb0b66c0d0ad1301b41c243c"],["/self/file/jscex-jit.js","c8694188c517a0c89ceb784fbda10e49"],["/self/file/jscex-parser.js","a23cd8fa9a8937aed571c01ba52139a6"],["/self/file/jscex.min.js","c36e85ee92e83d634d0245bc83889d87"],["/self/file/love.js","3a08011e8453f0eb2f819bcd9e339240"],["/self/index.html","b65b197763d3b6d40ebd82b54cf4d1f9"],["/sw-register.js","23612bfac1bd3cfd239677d81e040f80"],["/tags/crond/index.html","e31fbc51fc35936ec42c8b7e56b8a934"],["/tags/crontab/index.html","e9796c66d17a6350d9b821a670edeb0b"],["/tags/git/index.html","2271aa1c080d458fe5d24543dfb3bfac"],["/tags/hexo/index.html","f4a6f6f1cb5e44249a851b70c17f5e3c"],["/tags/index.html","bc9da7842e90ae8d4a6e9ce69f9c9e38"],["/tags/java/index.html","a264851cf95025055d8f4c5898cf6b6f"],["/tags/jdk/index.html","3ecb7646a41dba4faaf4439a19d3aa67"],["/tags/jvm/index.html","33960173f5f8eec7134c43c870353a62"],["/tags/mongo/index.html","0ce147f1500567e8f8e28cd385dbbb31"],["/tags/mysql/index.html","9f3c922f306d9e62842ff9955ea6db04"],["/tags/redis/index.html","64fe331669139bda51d22167f0e3c59d"],["/tags/web安全/index.html","e1a35a18ab4b5e5591ad49187f8a6202"],["/tags/前端/index.html","46abd786b18862552a84ac07be2181fd"],["/tags/防火墙/index.html","b5f7af537236e99d5d0e03fefb88a10e"]];
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
