/* =====================================================
   MAXX ROYAL — Service Worker v3.0.1 (VPN-friendly)
   Стратегия:
   - app-shell (html/css/js/vue/icons) → cache-first (мгновенно)
   - навигация                          → stale-while-revalidate
   - картинки                           → cache-first + LRU 500
   ===================================================== */

const APP_VERSION   = 'v3.0.1';
const SHELL_CACHE   = 'maxx-shell-' + APP_VERSION;
const IMAGE_CACHE   = 'maxx-img-'   + APP_VERSION;
const IMAGE_LIMIT   = 500;

// ⚠️ ВАЖНО: сюда добавлены vue.min.js и иконки — их не было в старой версии
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './products.js',
  './manifest.json',
  './js/vue.min.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// Популярные картинки для первой отрисовки меню
const PRECACHE_IMAGES = [
  './imageswebp/vmr420420.webp',
  './imageswebp/mr300300.webp',
  './imageswebp/db320.webp',
  './imageswebp/kbr420420.webp',
  './imageswebp/br300300.webp',
  './imageswebp/kb300300.webp',
  './imageswebp/ch170170.webp',
  './imageswebp/kd180.webp',
  './imageswebp/vsp3000.webp',
  './imageswebp/sr2500.webp',
  './imageswebp/brn580.webp',
  './imageswebp/smr900900.webp',
  './imageswebp/shvt350.webp',
  './imageswebp/pa470520.webp',
  './imageswebp/fnt200.webp',
  './imageswebp/la200.webp',
];

/* ================= INSTALL ================= */
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const shell = await caches.open(SHELL_CACHE);
    await Promise.all(
      APP_SHELL.map(url => shell.add(url).catch(e => console.warn('shell miss:', url)))
    );

    const imgs = await caches.open(IMAGE_CACHE);
    await Promise.all(
      PRECACHE_IMAGES.map(url => imgs.add(url).catch(() => {}))
    );
  })());
  self.skipWaiting();
});

/* ================= ACTIVATE ================= */
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(k => k !== SHELL_CACHE && k !== IMAGE_CACHE)
        .map(k => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

/* ================= HELPERS ================= */
async function pruneImageCache() {
  const cache = await caches.open(IMAGE_CACHE);
  const keys  = await cache.keys();
  if (keys.length <= IMAGE_LIMIT) return;
  await Promise.all(
    keys.slice(0, keys.length - IMAGE_LIMIT).map(k => cache.delete(k))
  );
}

async function cacheFirst(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      cache.put(request, response.clone()).catch(() => {});
    }
    return response;
  } catch (e) {
    return cached || new Response('', { status: 504 });
  }
}

async function cacheFirstImage(request) {
  const cache  = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      cache.put(request, response.clone())
           .then(pruneImageCache)
           .catch(() => {});
    }
    return response;
  } catch (e) {
    return cached || new Response('', { status: 504 });
  }
}

/* ================= FETCH ================= */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET') return;
  if (!req.url.startsWith('http')) return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const isImage =
    req.destination === 'image' ||
    /\.(jpe?g|png|webp|gif|avif|svg|ico)(\?.*)?$/i.test(url.pathname);

  /* --- Навигация: отдаём из кеша мгновенно, обновляем в фоне --- */
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const cache  = await caches.open(SHELL_CACHE);
      const cached = await cache.match('./index.html');

      fetch(req).then(res => {
        if (res && res.status === 200) {
          cache.put('./index.html', res.clone()).catch(() => {});
        }
      }).catch(() => {});

      return cached || fetch(req).catch(() =>
        new Response('<h1>Нет сети</h1>', { status: 503, headers: { 'Content-Type': 'text/html' } })
      );
    })());
    return;
  }

  /* --- Картинки: cache-first --- */
  if (isImage) {
    event.respondWith(cacheFirstImage(req));
    return;
  }

  /* --- CSS/JS/JSON/шрифты/иконки: cache-first --- */
  const isStatic =
    /\.(css|js|mjs|json|woff2?|ttf|eot|webmanifest)(\?.*)?$/i.test(url.pathname) ||
    url.pathname.startsWith('/icons/') ||
    url.pathname === '/manifest.json';

  if (isStatic) {
    event.respondWith(cacheFirst(req, SHELL_CACHE));
    return;
  }

  /* --- Всё остальное: сеть, при падении — кеш --- */
  event.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(SHELL_CACHE).then(c => c.put(req, clone)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || Response.error()))
  );
});