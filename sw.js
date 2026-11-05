/* =====================================================
   MAXX ROYAL — SERVICE WORKER v2

   - precache app-shell + популярные блюда
   - cache-first для изображений
   - FIFO-чистка image-кэша
   ===================================================== */

const CACHE_NAME   = 'maxxroyal-v2';
const IMAGE_CACHE  = 'maxxroyal-images-v2';
const IMAGE_LIMIT  = 300;

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './products.js',
  './manifest.json',
];

// ⚡ Прекеш популярных блюд из разных категорий.
// Пути должны совпадать с полем image в products.js.
// Если файла пока нет — SW не упадёт, просто пропустит.
const PRECACHE_IMAGES = [
  // первые 8 товаров — порядок как в PRODUCTS / что видно сразу
  './imageswebp/vmr420420.webp',       // 1. VIP Макс Рояль
  './imageswebp/mr300300.webp',         // 2. Макс Рояль
  './imageswebp/db320.webp',            // 3. Дубай бургер
  './imageswebp/kbr420420.webp',        // 4. Кинг Блэк Рояль
  './imageswebp/br300300.webp',         // 5. Блэк Рояль
  './imageswebp/kb300300.webp',         // 6. Кинг Бургер
  './imageswebp/ch170170.webp',         // 7. Чизбургер
  './imageswebp/kd180.webp',            // 8. Кинг дог
];

/* ---------- установка ---------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const appCache = await caches.open(CACHE_NAME);
      await appCache.addAll(ASSETS).catch(err => console.log('Cache addAll:', err));

      const imgCache = await caches.open(IMAGE_CACHE);
      await Promise.all(
        PRECACHE_IMAGES.map(url =>
          imgCache.add(url).catch(() => console.log('Precache miss:', url))
        )
      );
    })()
  );
  self.skipWaiting();
});

/* ---------- активация ---------- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME && k !== IMAGE_CACHE)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ---------- чистка image-кэша ---------- */
async function pruneImageCache() {
  const cache = await caches.open(IMAGE_CACHE);
  const keys  = await cache.keys();
  if (keys.length <= IMAGE_LIMIT) return;
  const toDelete = keys.slice(0, keys.length - IMAGE_LIMIT);
  await Promise.all(toDelete.map(k => cache.delete(k)));
}

/* ---------- fetch ---------- */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  const isImage =
    event.request.destination === 'image' ||
    /\.(jpe?g|png|webp|gif|avif|svg)(\?.*)?$/i.test(event.request.url);

  if (isImage) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) return cached;

        try {
          const response = await fetch(event.request);
          if (response && response.status === 200) {
            cache.put(event.request, response.clone())
                 .then(pruneImageCache)
                 .catch(() => {});
          }
          return response;
        } catch (e) {
          return cached || Response.error();
        }
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone).catch(() => {});
          });
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then(cached => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        })
      )
  );
});