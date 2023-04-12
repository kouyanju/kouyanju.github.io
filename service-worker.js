/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6dffeaf6388553c8e101d088998f9c67"
  },
  {
    "url": "about.html",
    "revision": "e37dc70fd0f2ed467aed93c456f660af"
  },
  {
    "url": "about1.html",
    "revision": "066b330809c840d7418316cd721f3ebf"
  },
  {
    "url": "all/css/c-aaa.html",
    "revision": "288d5f1f7fcb01ef29261011d677113c"
  },
  {
    "url": "all/css/c-bbb.html",
    "revision": "58225e67509f1cc1c63a25343388281c"
  },
  {
    "url": "all/css/c-ccc.html",
    "revision": "28fefec1c83d9d3054762b7ed6aff138"
  },
  {
    "url": "all/css/css选择器.html",
    "revision": "e2b54f323a09de8c73ac34ab229c9651"
  },
  {
    "url": "all/css/display属性.html",
    "revision": "c85f2592e6d77c2fec69b19f8b89fdbf"
  },
  {
    "url": "all/css/h5+css3新增.html",
    "revision": "2e8631691ea3eeb0d1bd6e1694242901"
  },
  {
    "url": "all/css/动画.html",
    "revision": "a62d0f658230117171599662a9b55251"
  },
  {
    "url": "all/css/块级元素和行内元素.html",
    "revision": "5c069ab4d9b37cf9d5ec9fbe20360973"
  },
  {
    "url": "all/css/实践经验.html",
    "revision": "fb5cab874a3fd0915a6a896406373c82"
  },
  {
    "url": "all/css/布局.html",
    "revision": "e02d7dee30cd9b3426aedc4469911600"
  },
  {
    "url": "all/css/水平垂直居中.html",
    "revision": "255533a105a157f7d70532f86c481ddc"
  },
  {
    "url": "all/javascript/es6新增.html",
    "revision": "eeac948ab1ae89b111cc810332bf042e"
  },
  {
    "url": "all/javascript/this指向.html",
    "revision": "3a60c6edcf2beb2e9b3ca48c4c4a77ad"
  },
  {
    "url": "all/javascript/事件相关.html",
    "revision": "8535854e1fe2b542f3e94dc4b2e2a000"
  },
  {
    "url": "all/javascript/数据类型.html",
    "revision": "611645c94ecfc25118e4704c5353d966"
  },
  {
    "url": "all/javascript/数组.html",
    "revision": "d92654fd6755a1253b592ed50190a458"
  },
  {
    "url": "all/javascript/防抖节流.html",
    "revision": "6d48dfa500cc2da323b15f55243d6e29"
  },
  {
    "url": "all/others/algorithm.html",
    "revision": "cd6f9d4de1a0ead85ba2e0b50d27f4a3"
  },
  {
    "url": "all/others/didi需求.html",
    "revision": "8cd7680632e9e42775d25936a56e8f6d"
  },
  {
    "url": "all/others/git.html",
    "revision": "c9b5a827c7f39ae4d4b85c46ea12dc4b"
  },
  {
    "url": "all/others/study.html",
    "revision": "42a26011d44807e134fc49a512dc86e6"
  },
  {
    "url": "all/others/vuepress搭建blog.html",
    "revision": "2f6b6014d098517679dc9e9e5ed9ba5e"
  },
  {
    "url": "all/vue/v-if和v-show的区别.html",
    "revision": "2bd9d36e40295dc9a1f576237ec62959"
  },
  {
    "url": "all/vue/vue路由的两种实现.html",
    "revision": "d36cd69718c5c5ad59d51343743e3751"
  },
  {
    "url": "all/vue/动态绑定多个class.html",
    "revision": "3092e1c72c7555986f5b982d6c0c1df4"
  },
  {
    "url": "all/vue/生命周期.html",
    "revision": "397ccfb6bc4ffbf59baf88b86dfe467f"
  },
  {
    "url": "all/vue/组件.html",
    "revision": "d9406adcd8212c2f8dfe71bc89254d95"
  },
  {
    "url": "assets/css/0.styles.230c51a8.css",
    "revision": "3e12a98d8d012fe9681efe105255dbb9"
  },
  {
    "url": "assets/guo.png",
    "revision": "be167a05fbbba61de484bb6858effab4"
  },
  {
    "url": "assets/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/hotdog.png",
    "revision": "9aedbe64262b88dd78b689b39955f12a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/ssh-rsa.dc72d8cc.png",
    "revision": "dc72d8cc17112300ed0993a7f1ba5915"
  },
  {
    "url": "assets/js/10.e3e6c322.js",
    "revision": "45132653ebc41b3906d3b380e5905688"
  },
  {
    "url": "assets/js/11.228d98be.js",
    "revision": "aaa4cdd92a25b2824cfea72e5e903acd"
  },
  {
    "url": "assets/js/12.f8a5cb39.js",
    "revision": "df28aed1d642611b3d9f47cbf2f34fe7"
  },
  {
    "url": "assets/js/13.ce215a70.js",
    "revision": "5f09bdded6f1484b4239c2955db69549"
  },
  {
    "url": "assets/js/14.9f4e8c9e.js",
    "revision": "5cb125d8e0070f6cc72c531e88fd3371"
  },
  {
    "url": "assets/js/15.96a627fa.js",
    "revision": "571ab1b923ff3c556547be0f79382202"
  },
  {
    "url": "assets/js/16.ae2bfa5b.js",
    "revision": "14193e8fccf0b74f4a7f4f2b3a78370d"
  },
  {
    "url": "assets/js/17.2cd68db2.js",
    "revision": "23e71feb3f33d035c7d57caba4345642"
  },
  {
    "url": "assets/js/18.574535e2.js",
    "revision": "5981ad2a130e8dfe6d3a88ee461477e3"
  },
  {
    "url": "assets/js/19.4a324c3b.js",
    "revision": "03dc086beade182a49dbbdf2409da1ab"
  },
  {
    "url": "assets/js/2.24852a69.js",
    "revision": "98a8ddda4519c0e0dd56957d8a19b324"
  },
  {
    "url": "assets/js/20.2086e1fb.js",
    "revision": "58dc1b63616a8ae0fd15be5ed34d6713"
  },
  {
    "url": "assets/js/21.22a9bfd5.js",
    "revision": "8457defb8bcc052fc7534bc63af6f609"
  },
  {
    "url": "assets/js/22.fdb51f9d.js",
    "revision": "f3747a83d0591f35add03159247bb8af"
  },
  {
    "url": "assets/js/23.dc91556f.js",
    "revision": "06a936774c65c6c18d7180489072942b"
  },
  {
    "url": "assets/js/24.3e96dfc1.js",
    "revision": "bf59bf3845e46c0b41f5926b0e962060"
  },
  {
    "url": "assets/js/25.7420810a.js",
    "revision": "317cf7e3ae1da680b51b47bf57c59e40"
  },
  {
    "url": "assets/js/26.f63a9bc3.js",
    "revision": "02d803974a21892151a595ba48d8f806"
  },
  {
    "url": "assets/js/27.98826bf8.js",
    "revision": "5136513f5a6aaf6367ea5535c2b967a7"
  },
  {
    "url": "assets/js/28.f673e9ea.js",
    "revision": "b82378ea06811fdb823dc52ece6b14b9"
  },
  {
    "url": "assets/js/29.b20daf38.js",
    "revision": "dd17feb2e15a0786000b513b5a89223f"
  },
  {
    "url": "assets/js/3.b9b601be.js",
    "revision": "58e5f7d1572ea1bff01323f1df23e551"
  },
  {
    "url": "assets/js/30.1d612d76.js",
    "revision": "a50e907f2f2c49660b4e6152a594644d"
  },
  {
    "url": "assets/js/31.231f8c0d.js",
    "revision": "59059501ee2d4776bb7ee92a8b67358f"
  },
  {
    "url": "assets/js/32.7a514c5e.js",
    "revision": "7d9f7ebe748d9a1930b93bd35683e90c"
  },
  {
    "url": "assets/js/33.720d7888.js",
    "revision": "49ca5df0cf33658166f80b4d8523b54a"
  },
  {
    "url": "assets/js/34.9320d1c9.js",
    "revision": "367017b60df305576b6cb3113966c0f7"
  },
  {
    "url": "assets/js/35.fcb69f29.js",
    "revision": "c8ad772f6209e056bdffcdaae73b9204"
  },
  {
    "url": "assets/js/36.7bb1f436.js",
    "revision": "deba4fef4dcd05c3ed02936b7ff10254"
  },
  {
    "url": "assets/js/37.540c89f2.js",
    "revision": "2650c64f4ad8dbe4d06df7e5c871c9e2"
  },
  {
    "url": "assets/js/38.cda3c3f2.js",
    "revision": "a55bffcd63d4dbddfe59d6ed2e3b8a04"
  },
  {
    "url": "assets/js/39.fb312ed5.js",
    "revision": "c23752d13d296677a990296094f2740c"
  },
  {
    "url": "assets/js/4.7cd247e8.js",
    "revision": "3accbde5667ffe3c679b9db71c411ff5"
  },
  {
    "url": "assets/js/40.48835ab5.js",
    "revision": "afbc4c21c13b13d2d1e18fa93ad80a92"
  },
  {
    "url": "assets/js/41.9d9cd62d.js",
    "revision": "aaad0636c8f239661ca542c76e960fc1"
  },
  {
    "url": "assets/js/5.eb101ce4.js",
    "revision": "0c02072d0e22e007e46627041e00f0ea"
  },
  {
    "url": "assets/js/6.fefcd371.js",
    "revision": "662b85b52d354b8538ce4d18bd6bc37c"
  },
  {
    "url": "assets/js/7.93ceabf4.js",
    "revision": "728062dad0eec1d80fb60001b30e5daa"
  },
  {
    "url": "assets/js/8.cd4380ab.js",
    "revision": "3f2efeb5175376fb1114592fb5763a3f"
  },
  {
    "url": "assets/js/9.5572125b.js",
    "revision": "0ae409ff360619ca51c6556a60965467"
  },
  {
    "url": "assets/js/app.2c23168a.js",
    "revision": "7a13e49227ba02f77f751a4f393ee193"
  },
  {
    "url": "assets/kfc.png",
    "revision": "a8e68bda58ae06b27b237be68bf03cc3"
  },
  {
    "url": "assets/play.png",
    "revision": "bcc7a270a0fc1d6966f38f8db13b0e38"
  },
  {
    "url": "assets/ssh-rsa.png",
    "revision": "dc72d8cc17112300ed0993a7f1ba5915"
  },
  {
    "url": "assets/touxiang.png",
    "revision": "76276823d8fd957793972e33c2a78b52"
  },
  {
    "url": "assets/tree.png",
    "revision": "250c3b9e269a46ab5280fa428fba0507"
  },
  {
    "url": "index.html",
    "revision": "bcb57ffa8c49ed76a595e9bb4801fb33"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
