importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([
  {
    "url": "icons-actionbar.html",
    "revision": "61685c01cc6c2b8cec602d69f117e40e"
  },
  {
    "url": "icons-app-shortcut.html",
    "revision": "37a73db319f0c8665ddbfd4a5ed5273c"
  },
  {
    "url": "icons-generic.html",
    "revision": "a49b15e53b0d20622f9ebeba2132b468"
  },
  {
    "url": "icons-launcher.html",
    "revision": "32b0ddc9ae780b4e20c595005a04c0a1"
  },
  {
    "url": "icons-notification.html",
    "revision": "a865941d056cafe59836f8dc01309ecc"
  },
  {
    "url": "index.html",
    "revision": "77cb6aeb83cc6ae6411145bac26bd8d2"
  },
  {
    "url": "nine-patches.html",
    "revision": "bc4911d92d2633f219c4699232218c91"
  },
  {
    "url": "res/generator-thumbs/icon-animator.svg",
    "revision": "47d59b4fd0289994d2f8bd27efacdff1"
  },
  {
    "url": "res/generator-thumbs/icons-actionbar.svg",
    "revision": "bdacfa754719b69a03734fa15b2c2e0c"
  },
  {
    "url": "res/generator-thumbs/icons-app-shortcut.svg",
    "revision": "50baa429922a87fb96080fc6c8cecd0a"
  },
  {
    "url": "res/generator-thumbs/icons-generic.svg",
    "revision": "7e9aaa9edeaf210c7afac117cf094192"
  },
  {
    "url": "res/generator-thumbs/icons-launcher.svg",
    "revision": "ac624b8aabda5851413f3ccfd252b80d"
  },
  {
    "url": "res/generator-thumbs/icons-notification.svg",
    "revision": "cfc9273c4ce8a151fa5d25dbded7914d"
  },
  {
    "url": "res/generator-thumbs/nine-patches.svg",
    "revision": "c37457a837ee23a6c1981b5d993ee72e"
  },
  {
    "url": "app.js",
    "revision": "f64dd18399fe197ab36a0d7b73709a1f"
  },
  {
    "url": "vendor.js",
    "revision": "e7ed041554d1603a964b39a3b1010a9d"
  },
  {
    "url": "app.css",
    "revision": "c7ac3bad6868fa8632b47f98361dfaa5"
  }
]);

workbox.routing.registerRoute(
  new RegExp('https://(?:fonts|www).(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        purgeOnQuotaError: true,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
    ],
  }),
);

workbox.googleAnalytics.initialize();
