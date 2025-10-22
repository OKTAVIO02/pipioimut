'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ea33ff93e0c4d790ebf62786e0436e05",
".git/config": "556a27d624ac53ca00600687b91f2aed",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ac63c3d5388f30fae25beaa0fb47f93d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5de681f13e0f9ee5bc46adbc8beabf31",
".git/logs/refs/heads/main": "35e8575c91f2b7e291950465104b7f49",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/05/f85e532c874e95e4e2315b9af99db21a4e0773": "9a3fcd394cfdaec711cd8c95d2a037e6",
".git/objects/08/1b323d9f4af61f3d9aa84ac64e45be97c0fa10": "9798897aeca9e56854fccd3211348444",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/0d/4967f629ea6f42b9dcbc87b07349afdee44c12": "b5139570949315f2db58b1ea4652db61",
".git/objects/0e/d436c89e89d57457a62e9d3a09eddee7b94df4": "eec24b539e59a264c08fd811a653b822",
".git/objects/0f/0524b3c073ffdc9bc69002e6f21d0284e30d4f": "91c2ccd05ceb2f5a663f60d7f8636106",
".git/objects/10/543858d178f108a7524975e2ff9da68bf5f841": "ac86d522008410d10066213d8403ecaa",
".git/objects/10/68c7378b2795542b10fa42cd7220849bf6de43": "a3a2ed31692158b5faa5a9ff73fd48c0",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/1e/640548baa39555898450f7d45c0b976cf466ce": "452c6ae7c84faa60917cbe0306a18556",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/29/c38fb3380c287c3c6c83b2ea747edf8b583aea": "e6e84067e303787b9663aa4a44f8d0d6",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/836fe27eed64dea7d390f65a5307ec87bd2c4d": "aff17fb01de32b743c9c2b6ed162528d",
".git/objects/2d/46b52492fa33de0988286dcf84cd379e69b90f": "fdc48653c23a0cdf25bd02018f262eea",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/3a/6527d27e879a7956095658a5577d230b15b9dc": "bfbf9fdd4311fcfa08514bdfae964d43",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3c/2bf64298569b6d401c34102e52ea45ed5f3497": "72d53cb27b9788376eda986f3f6b922e",
".git/objects/3f/5af943e1eceb3c2f7d035591078f63cf425b2c": "89462daa7a7ff99d83262ed55bd53e79",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/35953f31d46cf74af49593f5e3319ceb9b106c": "b29e39504a96193542f1df4d557c53e9",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/41f2b338a366a3691772eee15a5d17e327d7ee": "943381dc499ecffeed497b222b7259a8",
".git/objects/53/92b84eba343b51a85af62444df6739942f573b": "5939b77789079a478cdcc04cbaf27c48",
".git/objects/5d/cb806c3cbbe2b8c193643028edc1363a92021b": "434a0a4d534e9c4a32fc26f73a672045",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/f0547345254de669669df66a314a00cd7e77b0": "3e5aac7f9a4c9ba9ce31bcd136813689",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/77/0fdc6304872f478428ca0d48a23356037809b9": "ec764caa40aa09e9231a1c430b9ff2f4",
".git/objects/78/1eb44b20c4f3981cf029c69b483b254b6233b8": "59c8b06016cac2c71ef149a3c48c003e",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7f/2ac8c281eaef204d184b28524e4b75db05e22b": "fb04abe08c42904c9b88cd9a62ecc09a",
".git/objects/80/87fcd8badebec6e9f9693ae4e230db09a76d7e": "18774e68ab1d88164e01184909bda7b3",
".git/objects/83/41089c681ec099bd24510755767c2b78f3fe34": "59aa3a4177b0a0267ca0a41b33136da4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/9df6aa8ead69d96ebba407e54ef200bf29848d": "0c6b06ef12bfffde066e1fa2f98d0e40",
".git/objects/95/d6bc6205a0252e712b0362f7b03e4895442a1c": "bd1910b4eb7b8f87ec0b29983898d34b",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/ce53051bcef9fa78ddb833b3ce3ef2d0639391": "b74ea94db7553a0767f7e921d2d01d62",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a8/548e19007f92497cdb595377db3fd9e27c40f8": "b28bdc346ce8c181329f70ae86063f01",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/ffc6f1699b9fcdd4bc54b70b35d38d905fd24c": "6f90a0aef6d8a8c524b1f822dc2fa6e4",
".git/objects/c2/9c0417caa67a509d0e47080fbc15acfb2af3d9": "3e63377bfccd4c9e57099fae8ea08659",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/61190e65f3ecf2c8d8c6390fdd9c1d3021a60d": "82ae88c48358a85b7cd66fd24c770694",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/2b757b7f09b56ff75cd2051fd7f6be9ed45f96": "ea78a0db854ae6ca6a1eeca602bead0f",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e7/e5a488b0ae7859e6f71ca297498982491aa2c1": "14f02350a5d9cfd4138c68f32f9bd471",
".git/objects/e9/8a26909190bf08d17a77f0cf3524442f260ad7": "1726a47e970685478cfbbc5faea1d7ee",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4107e36322e947d7d26087edc3f7ee5af0660c": "fa8f9fcb0f92b66a114c831adea72a46",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/87c84cbeab9753a65d4ae6708c3db2152405f5": "82c4b0dcc507ebcf5a385d518f8e5a3a",
".git/objects/f8/366e6d8121965c58f71af547ea5de0c8f47202": "b77e0b668b7c8170f26781d8dfd70a14",
".git/objects/fa/c80eb1566939de87f8961a5eb4efba1bb78042": "66ff43ec30a912d9b07b502a65a03808",
".git/objects/fc/d3471e0e010e2a8bfdaa8cf379557d61b9430e": "ca029a4571b3aef9e5b3e1122b0fa8a1",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "220f3b814a0a9be8699438c2777ef4cb",
"assets/AssetManifest.bin": "816c03116e9fe63dcae2f8a13747ea56",
"assets/AssetManifest.bin.json": "2bbcda5abaadbc2592bef40a2aa06867",
"assets/AssetManifest.json": "b67627ac7bec0c31bc418e221b7027e5",
"assets/assets/bg_login.jpg": "88d3eaac8e5d076caee8c6e5b1ffddb0",
"assets/assets/celana%2520chino.png": "4965761f9c2ec07932db665e827b7624",
"assets/assets/celana%2520jeans.png": "976177b67a2a290808f69c686780768d",
"assets/assets/celana%2520pendek.png": "b368ca0cb81ee8d58f57210a4615190d",
"assets/assets/celana.png": "e9eb7b746d4c8a943a4237a11da90dab",
"assets/assets/dress%2520elegan.png": "7713e4f7f3708a130dc1688439e43e5c",
"assets/assets/dress.png": "b7e29697e2b90fc1fbdefc5c87da04eb",
"assets/assets/jaket%2520bomber.png": "7e22eb4c33e061f92b8cf704fca618fa",
"assets/assets/jaket%2520hoodie.png": "2b27604b4d4aea4279b1b2affc6df92e",
"assets/assets/jaket%2520jeans.png": "bf1be39b7671abd8a42257b49af625a7",
"assets/assets/jaket.png": "b77ec6b50811a677cb64b551fabac607",
"assets/assets/kaos%2520garis.png": "6d15b861c28e74a8e38b5aa9f4774bbc",
"assets/assets/kaos%2520hitam.png": "c46e1b708b3545741883476a4f4dfec7",
"assets/assets/kaos%2520putih.png": "a90e2af2edcbea7ce3615a5800275ef6",
"assets/assets/kaos.png": "dbea8204ddcac0728f36598646d7a494",
"assets/assets/kemeja%2520batik.png": "5f880f0a5906ac36f58ab2ff74b85d05",
"assets/assets/kemeja%2520flanel.png": "3b4595955423eb0e04ee0dbfffcccef4",
"assets/assets/kemeja%2520putih.png": "74d4635b1e4885f79b1bcecf10279816",
"assets/assets/kemeja.png": "f225aa6cc31204b0fd2c3ed4a19db340",
"assets/assets/logo.png": "69437c24be24dfa1b5f9ff2367b017af",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "58e376391b56a2f3be55a41e59f2ae3f",
"assets/NOTICES": "e0a72a4f3f7f196a2c8ff8db3931a6ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "932a588d7c394ff83d65de06ef6e24c9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"/": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"main.dart.js": "9f4290813ffed862908825c19726cac5",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
