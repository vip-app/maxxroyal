/* =====================================================
   MAXX ROYAL — ДАННЫЕ МЕНЮ

   Имена изображений:
   - первые буквы всех слов названия (предлоги/союзы считаются);
   - для вариантов — цены подряд;
   - формат: imageswebp/<initials><price(s)>.webp

   Объёмы указаны в литрах: 400 мл → 0.4, 1000 мл → 1.
   Вес, если появится, указывать в кг: 300 г → 0.3.

   id идут строго последовательно 1–157 по порядку в массиве.
   ===================================================== */

const CATEGORIES = [
  { id: 'burgers',    name: 'БУРГЕРЫ СЭНДВИЧИ',              emoji: '🍔' },
  { id: 'rolls',      name: 'РОЛЛЫ',                          emoji: '🍣' },
  { id: 'grill',      name: 'МАНГАЛ СТЕЙКИ КРЫЛЫШКИ',        emoji: '🥩' },
  { id: 'shawarma',   name: 'ШАУРМА ГИРО ДОНАР НА МАНГАЛЕ',  emoji: '🌯' },
  { id: 'salads',     name: 'САЛАТЫ',                         emoji: '🥗' },
  { id: 'lemonades',  name: 'ФИРМЕННЫЙ ЛИМОНАД',              emoji: '🍹' },
  { id: 'streetfood', name: 'СТРИТ ФУД',                      emoji: '🍟' },
  { id: 'pizza',      name: 'ПИЦЦЫ',                          emoji: '🍕' },
  { id: 'sauces',     name: 'СОУСЫ',                          emoji: '🥫' },
  { id: 'soups',      name: 'СУПЫ',                           emoji: '🍜' },
  { id: 'bread',      name: 'ЛЕПЕШКИ',                        emoji: '🫓' },
  { id: 'desserts',   name: 'ДЕСЕРТЫ',                        emoji: '🍰' },
  { id: 'cocktails',  name: 'КОКТЕЙЛИ',                       emoji: '🍸' },
  { id: 'pepsi',      name: 'ПЕПСИ РАЗЛИВ',                   emoji: '🥤' },
  { id: 'drinks',     name: 'НАПИТКИ С ХОЛОДИЛЬНИКА',         emoji: '🥤' }
];

const PRODUCTS = [
  // ==================== БУРГЕРЫ СЭНДВИЧИ ====================
  { id: 1, cat: 'burgers', name: 'VIP МАКС РОЯЛЬ', desc: '', image: 'imageswebp/vmr420420.webp', variants: [
    { name: 'Говяжий', price: 420 },
    { name: 'Куриный', price: 420 }
  ], emoji: '🍔', grad: 1 },
  { id: 2, cat: 'burgers', name: 'МАКС РОЯЛЬ', desc: '', image: 'imageswebp/mr300300.webp', variants: [
    { name: 'Говяжий', price: 300 },
    { name: 'Куриный', price: 300 }
  ], emoji: '🍔', grad: 2 },
  { id: 3, cat: 'burgers', name: 'ДУБАЙ БУРГЕР', desc: '', price: 320, image: 'imageswebp/db320.webp', emoji: '🍔', grad: 3 },
  { id: 4, cat: 'burgers', name: 'КИНГ БЛЭК РОЯЛЬ', desc: '', image: 'imageswebp/kbr420420.webp', variants: [
    { name: 'Говяжий', price: 420 },
    { name: 'Куриный', price: 420 }
  ], emoji: '🍔', grad: 4 },
  { id: 5, cat: 'burgers', name: 'БЛЭК РОЯЛЬ', desc: '', image: 'imageswebp/br300300.webp', variants: [
    { name: 'Говяжий', price: 300 },
    { name: 'Куриный', price: 300 }
  ], emoji: '🍔', grad: 5 },
  { id: 6, cat: 'burgers', name: 'КИНГ БУРГЕР', desc: '', image: 'imageswebp/kb300300.webp', variants: [
    { name: 'Говяжий', price: 300 },
    { name: 'Куриный', price: 300 }
  ], emoji: '🍔', grad: 6 },
  { id: 7, cat: 'burgers', name: 'ЧИЗБУРГЕР', desc: '', image: 'imageswebp/ch170170.webp', variants: [
    { name: 'Говяжий', price: 170 },
    { name: 'Куриный', price: 170 }
  ], emoji: '🍔', grad: 7 },
  { id: 8, cat: 'burgers', name: 'КИНГ ДОГ', desc: '', price: 180, image: 'imageswebp/kd180.webp', emoji: '🌭', grad: 8 },
  { id: 9, cat: 'burgers', name: 'ХОТ ДОГ', desc: '', price: 160, image: 'imageswebp/hd160.webp', emoji: '🌭', grad: 1 },
  { id: 10, cat: 'burgers', name: 'КИНГ РОЛЛ', desc: '', image: 'imageswebp/kr180180.webp', variants: [
    { name: 'Оригинальный', price: 180 },
    { name: 'Острый', price: 180 }
  ], emoji: '🌯', grad: 2 },
  { id: 11, cat: 'burgers', name: 'СЭНДВИЧ', desc: '', image: 'imageswebp/s280280280.webp', variants: [
    { name: 'С курицей', price: 280 },
    { name: 'Стрипсами', price: 280 },
    { name: 'С курицей и соусами', price: 280 }
  ], emoji: '🥪', grad: 3 },

  // ==================== РОЛЛЫ ====================
  { id: 12, cat: 'rolls', name: 'VIP СЕТ 7 ПОРЦИЙ', desc: '', price: 3000, image: 'imageswebp/vsp3000.webp', emoji: '🍣', grad: 1 },
  { id: 13, cat: 'rolls', name: 'СЕТ ROYAL', desc: '', price: 2500, image: 'imageswebp/sr2500.webp', emoji: '🍣', grad: 2 },
  { id: 14, cat: 'rolls', name: 'БАНЗАЙ РОЛЛ NEW', desc: '', price: 580, image: 'imageswebp/brn580.webp', emoji: '🍣', grad: 3 },
  { id: 15, cat: 'rolls', name: 'СЕТ КЛАССИЧЕСКИЙ 4 ПОРЦИЙ', desc: '', price: 1700, image: 'imageswebp/skp1700.webp', emoji: '🍣', grad: 4 },
  { id: 16, cat: 'rolls', name: 'СЕТ ГОРЯЧИЙ', desc: '', price: 1700, image: 'imageswebp/sg1700.webp', emoji: '🍣', grad: 5 },
  { id: 17, cat: 'rolls', name: 'АМЕРИКАННО С КРЕВЕТКОЙ', desc: '', price: 480, image: 'imageswebp/ask480.webp', emoji: '🍣', grad: 6 },
  { id: 18, cat: 'rolls', name: 'ГОРЯЧИЙ ДУБАЙ', desc: '', price: 490, image: 'imageswebp/gd490.webp', emoji: '🍣', grad: 7 },
  { id: 19, cat: 'rolls', name: 'ГОРЯЧИЙ ЩИК', desc: '', price: 480, image: 'imageswebp/gsh480.webp', emoji: '🍣', grad: 8 },
  { id: 20, cat: 'rolls', name: 'САКУРА', desc: '', price: 480, image: 'imageswebp/s480.webp', emoji: '🍣', grad: 1 },
  { id: 21, cat: 'rolls', name: 'РОЛЛ КАНАДА', desc: '', price: 480, image: 'imageswebp/rk480.webp', emoji: '🍣', grad: 2 },
  { id: 158, cat: 'rolls', name: 'СЭНДВИЧ РОЛЛ', desc: '', price: 510, image: 'imageswebp/sr510.webp', emoji: '🍣', grad: 3 },
  { id: 22, cat: 'rolls', name: 'АМЕРИКАННО С ЛОСОСЕМ', desc: '', price: 480, image: 'imageswebp/asl480.webp', emoji: '🍣', grad: 4 },
  { id: 23, cat: 'rolls', name: 'ОКИ', desc: '', price: 480, image: 'imageswebp/o480.webp', emoji: '🍣', grad: 5 },
  { id: 24, cat: 'rolls', name: 'БЕШЕННЫЙ ЛОСОСЬ', desc: '', price: 480, image: 'imageswebp/bl480.webp', emoji: '🍣', grad: 6 },
  { id: 25, cat: 'rolls', name: 'ЦУНАМИ', desc: '', price: 480, image: 'imageswebp/c480.webp', emoji: '🍣', grad: 7 },
  { id: 26, cat: 'rolls', name: 'КАЛИФОРНИЯ', desc: '', image: 'imageswebp/k460460460.webp', variants: [
    { name: 'С крабом', price: 460 },
    { name: 'С креветкой', price: 460 },
    { name: 'С лососем', price: 460 }
  ], emoji: '🍣', grad: 8 },
  { id: 27, cat: 'rolls', name: 'ФИЛАДЕЛЬФИЯ', desc: '', price: 460, image: 'imageswebp/f460.webp', emoji: '🍣', grad: 1 },
  { id: 28, cat: 'rolls', name: 'СЭНДВИЧ РОЛЛ', desc: '', price: 510, image: 'imageswebp/sr510.webp', emoji: '🍣', grad: 3 },
  { id: 29, cat: 'rolls', name: 'САМУРАЙ НОВИНКА', desc: '', price: 510, image: 'imageswebp/s510.webp', emoji: '🍣', grad: 2 },
  { id: 30, cat: 'rolls', name: 'ХРУСТЯЩАЯ КРЕВЕТКА', desc: '', price: 490, image: 'imageswebp/hk490.webp', emoji: '🍣', grad: 3 },
  { id: 31, cat: 'rolls', name: 'РОЛЛ НОЧНОЕ НЕБО', desc: '', price: 490, image: 'imageswebp/rnn490.webp', emoji: '🍣', grad: 4 },
  { id: 32, cat: 'rolls', name: 'КРЕВЕТКИ НА ШПАЖКАХ', desc: '', price: 550, image: 'imageswebp/knsh550.webp', emoji: '🍣', grad: 5 },
  { id: 33, cat: 'rolls', name: 'РОЛЛ КУЛЛИНАН', desc: '', price: 500, image: 'imageswebp/rk500.webp', emoji: '🍣', grad: 6 },
  { id: 34, cat: 'rolls', name: 'ФИЛАДЕЛЬФИЯ РОЯЛ', desc: '', price: 480, image: 'imageswebp/fr480.webp', emoji: '🍣', grad: 7 },
  { id: 35, cat: 'rolls', name: 'ЗВЕЗДА ДУБАЯ РОЛЛЫ', desc: '', price: 480, image: 'imageswebp/zdr480.webp', emoji: '🍣', grad: 8 },
  { id: 36, cat: 'rolls', name: 'ТЕМПУРА САЛМОН', desc: '', price: 470, image: 'imageswebp/ts470.webp', emoji: '🍣', grad: 1 },
  { id: 37, cat: 'rolls', name: 'АКИТА МАКИ', desc: '', price: 480, image: 'imageswebp/am480.webp', emoji: '🍣', grad: 2 },
  { id: 38, cat: 'rolls', name: 'РАСУ ДРАКОН МАКИ', desc: '', price: 470, image: 'imageswebp/rdm470.webp', emoji: '🍣', grad: 3 },
  { id: 39, cat: 'rolls', name: 'НАГГЕТСЫ ИЗ ЛОСОСЯ', desc: '', price: 430, image: 'imageswebp/nil430.webp', emoji: '🍣', grad: 4 },
  { id: 40, cat: 'rolls', name: 'РОЛЛ ЭЛЕГАНТС', desc: '', price: 510, image: 'imageswebp/re510.webp', emoji: '🍣', grad: 5 },
  { id: 41, cat: 'rolls', name: 'ПРИНЦ', desc: '', price: 490, image: 'imageswebp/p490.webp', emoji: '🍣', grad: 6 },
  { id: 42, cat: 'rolls', name: 'ЦЕЗАРЬ СУШИ', desc: '', price: 460, image: 'imageswebp/cs460.webp', emoji: '🍣', grad: 7 },
  { id: 43, cat: 'rolls', name: 'ВУЛКАН', desc: '', price: 470, image: 'imageswebp/v470.webp', emoji: '🍣', grad: 8 },
  { id: 44, cat: 'rolls', name: 'КРЕВЕТКИ', desc: '', price: 460, image: 'imageswebp/k-460.webp', emoji: '🍣', grad: 1 },

  // ==================== МАНГАЛ СТЕЙКИ КРЫЛЫШКИ ====================
  { id: 45, cat: 'grill', name: 'СТЕЙК MAXX ROYAL', desc: '', image: 'imageswebp/smr900900.webp', variants: [
    { name: 'С деревенским', price: 900 },
    { name: 'С фри', price: 900 }
  ], emoji: '🥩', grad: 1 },
  { id: 46, cat: 'grill', name: 'СТЕЙК ROYAL', desc: '', price: 800, image: 'imageswebp/sr800.webp', emoji: '🥩', grad: 2 },
  { id: 47, cat: 'grill', name: 'НОЖКИ', desc: '', image: 'imageswebp/n480480430.webp', variants: [
    { name: '5 шт. с фри', price: 480 },
    { name: '5 шт. с деревенским', price: 480 },
    { name: '4 шт. с фри', price: 430 },
    { name: '4 шт. с деревенским', price: 430 }
  ], emoji: '🍗', grad: 3 },
  { id: 48, cat: 'grill', name: 'КРЫЛЫШКИ НА МАНГАЛЕ', desc: '', image: 'imageswebp/knm430430350350.webp', variants: [
    { name: '7 шт. с фри', price: 430 },
    { name: '7 шт. с деревенским', price: 430 },
    { name: '5 шт. с фри', price: 350 },
    { name: '5 шт. с деревенским', price: 350 }
  ], emoji: '🍗', grad: 4 },

  // ==================== ШАУРМА ГИРО ДОНАР НА МАНГАЛЕ ====================
  { id: 49, cat: 'shawarma', name: 'ШАУРМА В ТАРЕЛКЕ', desc: '', price: 350, image: 'imageswebp/shvt350.webp', emoji: '🌯', grad: 1 },
  { id: 50, cat: 'shawarma', name: 'ШАУРМА В БАТОНЕ', desc: '', image: 'imageswebp/shvb280280.webp', variants: [
    { name: 'Обычный', price: 280 },
    { name: 'Острый', price: 280 }
  ], emoji: '🌯', grad: 2 },
  { id: 51, cat: 'shawarma', name: 'ГИРО В ТАРЕЛКЕ', desc: '', price: 400, image: 'imageswebp/gvt400.webp', emoji: '🌯', grad: 3 },
  { id: 52, cat: 'shawarma', name: 'ДОНАР МАЛЕНЬКИЙ', desc: '', image: 'imageswebp/dm200200.webp', variants: [
    { name: 'Обычный', price: 200 },
    { name: 'Обычный острый', price: 200 }
  ], emoji: '🌯', grad: 4 },
  { id: 53, cat: 'shawarma', name: 'ДОНАР БОЛЬШОЙ', desc: '', image: 'imageswebp/db250250.webp', variants: [
    { name: 'Большой', price: 250 },
    { name: 'Большой острый', price: 250 }
  ], emoji: '🌯', grad: 5 },
  { id: 54, cat: 'shawarma', name: 'ГИРО В ЛАВАШЕ', desc: '', image: 'imageswebp/gvl260260.webp', variants: [
    { name: 'Обычный', price: 260 },
    { name: 'Острый', price: 260 }
  ], emoji: '🌯', grad: 6 },
  { id: 55, cat: 'shawarma', name: 'ШАУРМА', desc: '', image: 'imageswebp/sh200200250250300300.webp', variants: [
    { name: 'Маленькая', price: 200 },
    { name: 'Маленькая острая', price: 200 },
    { name: 'Средняя', price: 250 },
    { name: 'Средняя острая', price: 250 },
    { name: 'Большая', price: 300 },
    { name: 'Большая острая', price: 300 }
  ], emoji: '🌯', grad: 7 },
  { id: 56, cat: 'shawarma', name: 'ШАУРМА В КЛЯРЕ', desc: '', image: 'imageswebp/shvk250250.webp', variants: [
    { name: 'Острый', price: 250 },
    { name: 'Обычный', price: 250 }
  ], emoji: '🌯', grad: 8 },
  { id: 57, cat: 'shawarma', name: 'КИНГ РОЛЛ', desc: '', image: 'imageswebp/kr180180.webp', variants: [
    { name: 'Оригинальный', price: 180 },
    { name: 'Острый', price: 180 }
  ], emoji: '🌯', grad: 1 },

  // ==================== САЛАТЫ ====================
  { id: 58, cat: 'salads', name: 'САЛАТ АРАБСКИЙ', desc: '', price: 300, image: 'imageswebp/sa300.webp', emoji: '🥗', grad: 1 },
  { id: 59, cat: 'salads', name: 'ГРЕЧЕСКИЙ САЛАТ', desc: '', price: 300, image: 'imageswebp/gs300.webp', emoji: '🥗', grad: 2 },
  { id: 60, cat: 'salads', name: 'СВЕЖИЙ САЛАТ С МАЙОНЕЗОМ', desc: '', price: 300, image: 'imageswebp/sscm300.webp', emoji: '🥗', grad: 3 },
  { id: 61, cat: 'salads', name: 'САЛАТ ЦЕЗАРЬ', desc: '', price: 300, image: 'imageswebp/sc300.webp', emoji: '🥗', grad: 4 },
  { id: 62, cat: 'salads', name: 'СВЕЖИЙ САЛАТ С МАСЛОМ', desc: '', price: 300, image: 'imageswebp/sssm300.webp', emoji: '🥗', grad: 5 },
  { id: 63, cat: 'salads', name: 'ОВОЩНАЯ НАРЕЗКА', desc: '', price: 450, image: 'imageswebp/nb450.webp', emoji: '🥗', grad: 6 },

  // ==================== ФИРМЕННЫЙ ЛИМОНАД ====================
  { id: 64, cat: 'lemonades', name: 'ТОНИК ГРАНАТОВЫЙ', desc: '', price: 350, image: 'imageswebp/tg350.webp', emoji: '🍹', grad: 1 },
  { id: 65, cat: 'lemonades', name: 'ЛИМОНАД АССОРТИ', desc: '', price: 200, volume: 0.4, image: 'imageswebp/la200.webp', emoji: '🍹', grad: 2 },
  { id: 66, cat: 'lemonades', name: 'ЛИМОНАД АНАНАСОВЫЙ', desc: '', price: 200, volume: 0.4, image: 'imageswebp/la200-2.webp', emoji: '🍹', grad: 3 },
  { id: 67, cat: 'lemonades', name: 'ЛИМОНАД АПЕЛЬСИНОВЫЙ', desc: '', price: 200, volume: 0.4, image: 'imageswebp/la200-3.webp', emoji: '🍹', grad: 4 },
  { id: 68, cat: 'lemonades', name: 'ЛИМОНАД ГРУШЕВЫЙ', desc: '', price: 200, volume: 0.4, image: 'imageswebp/lg200.webp', emoji: '🍹', grad: 5 },
  { id: 69, cat: 'lemonades', name: 'ЛИМОНАД КЛАССИЧЕСКИЙ', desc: '', price: 200, volume: 0.4, image: 'imageswebp/lk200.webp', emoji: '🍹', grad: 6 },
  { id: 70, cat: 'lemonades', name: 'ЛИМОНАД ЯБЛОЧНЫЙ', desc: '', price: 200, volume: 0.4, image: 'imageswebp/lya200.webp', emoji: '🍹', grad: 7 },
  { id: 71, cat: 'lemonades', name: 'ЛИМОНАД КЛУБНИЧНЫЙ', desc: '', price: 200, volume: 0.4, image: 'imageswebp/lk200-2.webp', emoji: '🍹', grad: 8 },
  { id: 72, cat: 'lemonades', name: 'ЛИМОНАД ЯГОДНЫЙ', desc: '', price: 200, volume: 0.4, image: 'imageswebp/lya200-2.webp', emoji: '🍹', grad: 1 },
  { id: 73, cat: 'lemonades', name: 'МАРАКУЙЯ', desc: '', price: 200, volume: 0.4, image: 'imageswebp/m200.webp', emoji: '🍹', grad: 2 },
  { id: 74, cat: 'lemonades', name: 'ЛИМОНАД КЛУБНИЧНЫЙ', desc: '', price: 350, volume: 1, image: 'imageswebp/lk350.webp', emoji: '🍹', grad: 3 },
  { id: 75, cat: 'lemonades', name: 'ЛИМОНАД МАРАКУЙЯ', desc: '', price: 200, volume: 0.4, image: 'imageswebp/lm200.webp', emoji: '🍹', grad: 4 },
  { id: 76, cat: 'lemonades', name: 'ЛИМОНАД АНАНАСОВЫЙ', desc: '', price: 350, volume: 1, image: 'imageswebp/l-a-350.webp', emoji: '🍹', grad: 5 },
  { id: 77, cat: 'lemonades', name: 'ЛИМОНАД АССОРТИ', desc: '', price: 350, volume: 1, image: 'imageswebp/la350-2.webp', emoji: '🍹', grad: 6 },
  { id: 78, cat: 'lemonades', name: 'ЛИМОНАД АПЕЛЬСИНОВЫЙ', desc: '', price: 350, volume: 1, image: 'imageswebp/la350-3.webp', emoji: '🍹', grad: 7 },
  { id: 79, cat: 'lemonades', name: 'ЛИМОНАД ГРУШЕВЫЙ', desc: '', price: 350, volume: 1, image: 'imageswebp/lg350.webp', emoji: '🍹', grad: 8 },
  { id: 80, cat: 'lemonades', name: 'ЛИМОНАД КЛАССИЧЕСКИЙ', desc: '', price: 350, volume: 1, image: 'imageswebp/lk350-2.webp', emoji: '🍹', grad: 1 },
  { id: 81, cat: 'lemonades', name: 'ЛИМОНАД ЯБЛОЧНЫЙ', desc: '', price: 350, volume: 1, image: 'imageswebp/lya350.webp', emoji: '🍹', grad: 2 },
  { id: 82, cat: 'lemonades', name: 'ЛИМОНАД ЯГОДНЫЙ', desc: '', price: 350, volume: 1, image: 'imageswebp/lya350-2.webp', emoji: '🍹', grad: 3 },
  { id: 83, cat: 'lemonades', name: 'МАРАКУЙЯ', desc: '', price: 350, volume: 1, image: 'imageswebp/m350.webp', emoji: '🍹', grad: 4 },

  // ==================== СТРИТ ФУД ====================
  { id: 84, cat: 'streetfood', name: 'КРЫЛЫШКИ В ПАНИРОВКЕ НА ТАРЕЛКЕ', desc: '', image: 'imageswebp/kvpnt300300.webp', variants: [
    { name: 'Без соуса', price: 300 },
    { name: 'С соусом', price: 300 }
  ], emoji: '🍗', grad: 1 },
  { id: 85, cat: 'streetfood', name: 'НАГГЕТСЫ В ТАРЕЛКЕ', desc: '', image: 'imageswebp/nvt280280.webp', variants: [
    { name: 'Соус сверху', price: 280 },
    { name: 'Без соуса', price: 280 }
  ], emoji: '🍗', grad: 2 },
  { id: 86, cat: 'streetfood', name: 'СТРИПСЫ В ТАРЕЛКЕ', desc: '', image: 'imageswebp/svt360360.webp', variants: [
    { name: 'Без соуса', price: 360 },
    { name: 'С соусом', price: 360 }
  ], emoji: '🍗', grad: 3 },
  { id: 87, cat: 'streetfood', name: 'ФРИ НА ТАРЕЛКЕ', desc: '', price: 200, image: 'imageswebp/fnt200.webp', emoji: '🍟', grad: 4 },
  { id: 88, cat: 'streetfood', name: 'ДЕРЕВЕНСКАЯ НА ТАРЕЛКЕ', desc: '', price: 200, image: 'imageswebp/dnt200.webp', emoji: '🍟', grad: 5 },
  { id: 89, cat: 'streetfood', name: 'СЫРНЫЕ ПАЛОЧКИ В ТАРЕЛКЕ', desc: '', image: 'imageswebp/spvt300300.webp', variants: [
    { name: 'С соусом', price: 300 },
    { name: 'Без соуса', price: 300 }
  ], emoji: '🧀', grad: 6 },
  { id: 90, cat: 'streetfood', name: 'КРЫЛЫШКИ BLACK', desc: '', image: 'imageswebp/kb300300-2.webp', variants: [
    { name: 'С соусом', price: 300 },
    { name: 'Без соуса', price: 300 }
  ], emoji: '🍗', grad: 7 },
  { id: 91, cat: 'streetfood', name: 'ФРИ В СТАКАНЕ', desc: '', price: 120, image: 'imageswebp/fvs120.webp', emoji: '🍟', grad: 8 },
  { id: 92, cat: 'streetfood', name: 'ДЕРЕВЕНСКАЯ КАРТОШКА В СТАКАНЕ', desc: '', price: 120, image: 'imageswebp/dkvs120.webp', emoji: '🍟', grad: 1 },
  { id: 93, cat: 'streetfood', name: 'НАГГЕТСЫ В СТАКАНЕ', desc: '', price: 180, image: 'imageswebp/nvs180.webp', emoji: '🍗', grad: 2 },
  { id: 94, cat: 'streetfood', name: 'КРЫЛЫШКИ В ПАНИРОВКЕ В СТАКАНЕ', desc: '', price: 200, image: 'imageswebp/kvpvs200.webp', emoji: '🍗', grad: 3 },
  { id: 95, cat: 'streetfood', name: 'СТРИПСЫ В СТАКАНЕ', desc: '', price: 260, image: 'imageswebp/svs260.webp', emoji: '🍗', grad: 4 },
  { id: 96, cat: 'streetfood', name: 'СЫРНЫЕ ПАЛОЧКИ', desc: '', image: 'imageswebp/sp200300.webp', variants: [
    { name: 'Стакан', price: 200 },
    { name: 'Контейнер', price: 300 }
  ], emoji: '🧀', grad: 5 },
  { id: 97, cat: 'streetfood', name: 'КРЫЛЫШКИ BLACK СТАКАН', desc: '', price: 200, image: 'imageswebp/kbs200.webp', emoji: '🍗', grad: 6 },

  // ==================== ПИЦЦЫ ====================
  { id: 98, cat: 'pizza', name: 'ПИЦЦА АССОРТИ', desc: '', image: 'imageswebp/pa470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🍕', grad: 1 },
  { id: 99, cat: 'pizza', name: 'ПИЦЦА ЦЕЗАРЬ', desc: '', image: 'imageswebp/pc470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🍕', grad: 2 },
  { id: 100, cat: 'pizza', name: 'ПИЦЦА ЧИКЕН', desc: '', image: 'imageswebp/pch470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🍕', grad: 3 },
  { id: 101, cat: 'pizza', name: 'ПИЦЦА ПИДЕ', desc: '', price: 500, image: 'imageswebp/pp500.webp', emoji: '🍕', grad: 4 },
  { id: 102, cat: 'pizza', name: 'ПИЦЦА ПЕППЕРОНИ', desc: '', image: 'imageswebp/pp470520520.webp', variants: [
    { name: 'Средняя острая', price: 470 },
    { name: 'Большая не острая', price: 520 },
    { name: 'Большая острая', price: 520 }
  ], emoji: '🍕', grad: 5 },
  { id: 103, cat: 'pizza', name: 'ПИЦЦА СЫРНАЯ', desc: '', image: 'imageswebp/ps470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🧀', grad: 6 },
  { id: 104, cat: 'pizza', name: 'ПИЦЦА ГРИБНАЯ', desc: '', image: 'imageswebp/pg470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🍕', grad: 7 },
  { id: 105, cat: 'pizza', name: 'ОСЕТИНСКИЙ ПИРОГ', desc: '', image: 'imageswebp/op430430450.webp', variants: [
    { name: 'С картофелем', price: 430 },
    { name: 'С сыром', price: 430 },
    { name: 'С мясом', price: 450 }
  ], emoji: '🫓', grad: 8 },
  { id: 106, cat: 'pizza', name: 'ПИЦЦА ФИЛАДЕЛЬФИЯ', desc: '', image: 'imageswebp/pf550600.webp', variants: [
    { name: 'Средняя', price: 550 },
    { name: 'Большая', price: 600 }
  ], emoji: '🍕', grad: 1 },
  { id: 107, cat: 'pizza', name: 'ПИЦЦА МОРТАДЕЛЛА', desc: '', image: 'imageswebp/pm450500.webp', variants: [
    { name: 'Средняя', price: 450 },
    { name: 'Большая', price: 500 }
  ], emoji: '🍕', grad: 2 },
  { id: 108, cat: 'pizza', name: 'МЯСНАЯ ПИЦЦА', desc: '', image: 'imageswebp/mp520470.webp', variants: [
    { name: 'Большая', price: 520 },
    { name: 'Средняя', price: 470 }
  ], emoji: '🍕', grad: 3 },
  { id: 109, cat: 'pizza', name: 'ХАЧАПУРИ', desc: '', price: 350, image: 'imageswebp/h350.webp', emoji: '🫓', grad: 4 },
  { id: 110, cat: 'pizza', name: 'ХАЧАПУРИ ПО-ДУБАЙСКИ', desc: '', price: 350, image: 'imageswebp/hpd350.webp', emoji: '🫓', grad: 5 },
  { id: 111, cat: 'pizza', name: 'ПИЦЦА МАРГАРИТА', desc: '', image: 'imageswebp/pm-470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🍕', grad: 6 },

  // ==================== СОУСЫ ====================
  { id: 112, cat: 'sauces', name: 'СЫРНЫЙ СОУС', desc: '', price: 50, image: 'imageswebp/ss-50.webp', emoji: '🧀', grad: 1 },
  { id: 113, cat: 'sauces', name: 'ТОМАТНЫЙ СОУС', desc: '', price: 50, image: 'imageswebp/ts50.webp', emoji: '🥫', grad: 2 },
  { id: 114, cat: 'sauces', name: 'ЧЕСНОЧНЫЙ СОУС', desc: '', price: 50, image: 'imageswebp/chs50.webp', emoji: '🧄', grad: 3 },
  { id: 115, cat: 'sauces', name: 'КИСЛОСЛАДКИЙ СОУС', desc: '', price: 50, image: 'imageswebp/ks50.webp', emoji: '🥫', grad: 4 },
  { id: 116, cat: 'sauces', name: 'БЕЛЫЙ СОУС ШАУРМЫ', desc: '', price: 50, image: 'imageswebp/bssh50.webp', emoji: '🥫', grad: 5 },
  { id: 117, cat: 'sauces', name: 'КРАСНЫЙ СОУС ШАУРМЫ', desc: '', price: 50, image: 'imageswebp/kssh50.webp', emoji: '🥫', grad: 6 },
  { id: 118, cat: 'sauces', name: 'ГИРО СОУС', desc: '', price: 50, image: 'imageswebp/gs50.webp', emoji: '🥫', grad: 7 },
  { id: 119, cat: 'sauces', name: 'СОЕВЫЙ СОУС', desc: '', price: 50, image: 'imageswebp/ss50-2.webp', emoji: '🥫', grad: 8 },
  { id: 120, cat: 'sauces', name: 'СПАЙСИ СОУС', desc: '', price: 50, image: 'imageswebp/ss50-3.webp', emoji: '🌶️', grad: 1 },
  { id: 121, cat: 'sauces', name: 'ИМБИРЬ', desc: '', price: 50, image: 'imageswebp/i50.webp', emoji: '🫚', grad: 2 },
  { id: 122, cat: 'sauces', name: 'ВАСАБИ', desc: '', price: 50, image: 'imageswebp/v50.webp', emoji: '🌿', grad: 3 },

  // ==================== СУПЫ ====================
  { id: 123, cat: 'soups', name: 'СУП ТОМ ЯМ', desc: '', price: 550, image: 'imageswebp/sty550.webp', emoji: '🍜', grad: 1 },
  { id: 124, cat: 'soups', name: 'СУП ЧЕЧЕВИЧНЫЙ', desc: '', price: 300, image: 'imageswebp/sch300.webp', emoji: '🍜', grad: 2 },
  { id: 125, cat: 'soups', name: 'УКРАИНСКИЙ БОРЩ', desc: '', price: 300, image: 'imageswebp/ub300.webp', emoji: '🍲', grad: 3 },
  { id: 126, cat: 'soups', name: 'СУП КУРИНЫЙ', desc: '', price: 300, image: 'imageswebp/sk300.webp', emoji: '🍜', grad: 4 },

  // ==================== ЛЕПЕШКИ ====================
  { id: 127, cat: 'bread', name: 'ГИРО ЛЕПЕШКА', desc: '', price: 50, image: 'imageswebp/gl50.webp', emoji: '🫓', grad: 1 },
  { id: 128, cat: 'bread', name: 'ЛЕПЕШКА ДОНАРА', desc: '', price: 50, image: 'imageswebp/ld50.webp', emoji: '🫓', grad: 2 },

  // ==================== ДЕСЕРТЫ ====================
  { id: 129, cat: 'desserts', name: 'САН СЕБАСТЬЯН', desc: '', price: 300, image: 'imageswebp/ss-300.webp', emoji: '🍰', grad: 1 },
  { id: 130, cat: 'desserts', name: 'ТИРАМИСУ', desc: '', price: 250, image: 'imageswebp/t250.webp', emoji: '🍮', grad: 2 },
  { id: 131, cat: 'desserts', name: 'ЧИЗКЕЙК ШОКОЛАДНЫЙ', desc: '', price: 250, image: 'imageswebp/chsh250.webp', emoji: '🍰', grad: 3 },
  { id: 132, cat: 'desserts', name: 'ДЕСЕРТЫ НЬЮ ЙОРК', desc: '', price: 250, image: 'imageswebp/dny250.webp', emoji: '🍰', grad: 4 },
  { id: 133, cat: 'desserts', name: 'ПОНЧИК ШОКОЛАДНЫЙ', desc: '', price: 200, image: 'imageswebp/psh200.webp', emoji: '🍩', grad: 5 },
  { id: 134, cat: 'desserts', name: 'МОРОЖЕНОЕ ШОКОЛАДНОЕ', desc: '', price: 250, image: 'imageswebp/msh250.webp', emoji: '🍨', grad: 6 },
  { id: 135, cat: 'desserts', name: 'МОРОЖЕНОЕ ВАНИЛЬНОЕ', desc: '', price: 250, image: 'imageswebp/mv250.webp', emoji: '🍨', grad: 7 },

  // ==================== КОКТЕЙЛИ ====================
  { id: 136, cat: 'cocktails', name: 'КОФЕ С УРБИЧЕМ', desc: '', price: 300, image: 'imageswebp/ksu300.webp', emoji: '🥤', grad: 1 },
  { id: 137, cat: 'cocktails', name: 'КОКТЕЙЛЬ СНИКЕРС', desc: '', price: 300, image: 'imageswebp/ks-300.webp', emoji: '🥤', grad: 2 },
  { id: 138, cat: 'cocktails', name: 'БАМБЛ МАКС РОЯЛ', desc: '', price: 350, image: 'imageswebp/bmr350.webp', emoji: '🥤', grad: 3 },
  { id: 139, cat: 'cocktails', name: 'КОКТЕЙЛЬ БАНАНОВЫЙ', desc: '', price: 250, image: 'imageswebp/kb-250.webp', emoji: '🥤', grad: 4 },
  { id: 140, cat: 'cocktails', name: 'КОКТЕЙЛЬ ВАНИЛЬНЫЙ', desc: '', price: 250, image: 'imageswebp/kv250.webp', emoji: '🥤', grad: 5 },
  { id: 141, cat: 'cocktails', name: 'КОКТЕЙЛЬ ШОКОЛАДНЫЙ', desc: '', price: 250, image: 'imageswebp/ksh250.webp', emoji: '🥤', grad: 6 },
  { id: 142, cat: 'cocktails', name: 'КОКТЕЙЛЬ КЛУБНИЧНЫЙ', desc: '', price: 250, image: 'imageswebp/kk250.webp', emoji: '🥤', grad: 7 },

  // ==================== ПЕПСИ РАЗЛИВ ====================
  { id: 143, cat: 'pepsi', name: 'ПЕПСИ РАЗЛИВ', desc: '', price: 110, volume: 0.4, image: 'imageswebp/pr110.webp', emoji: '🥤', grad: 1 },
  { id: 144, cat: 'pepsi', name: 'ПЕПСИ РАЗЛИВ', desc: '', price: 120, volume: 0.5, image: 'imageswebp/pr120.webp', emoji: '🥤', grad: 2 },

  // ==================== НАПИТКИ С ХОЛОДИЛЬНИКА ====================
  { id: 145, cat: 'drinks', name: 'КОЛА СТЕКЛО', desc: '', price: 120, image: 'imageswebp/ks120.webp', emoji: '🥤', grad: 1 },
  { id: 146, cat: 'drinks', name: 'КОЛА ЗЕРО СТЕКЛО', desc: '', price: 120, image: 'imageswebp/kzs120.webp', emoji: '🥤', grad: 2 },
  { id: 147, cat: 'drinks', name: 'ЛИПТОН ПЕРСИК', desc: '', price: 100, image: 'imageswebp/lp100.webp', emoji: '🧃', grad: 3 },
  { id: 148, cat: 'drinks', name: 'ЛИПТОН ЗЕЛЕНЫЙ', desc: '', price: 100, image: 'imageswebp/lz100.webp', emoji: '🧃', grad: 4 },
  { id: 149, cat: 'drinks', name: 'КОЛА ЖБ', desc: '', price: 100, image: 'imageswebp/kzh100.webp', emoji: '🥤', grad: 5 },
  { id: 150, cat: 'drinks', name: 'ПЕПСИ ЖБ', desc: '', price: 100, image: 'imageswebp/pzh100.webp', emoji: '🥤', grad: 6 },
  { id: 151, cat: 'drinks', name: 'КИНЗА ORANGE', desc: '', price: 130, image: 'imageswebp/ko130.webp', emoji: '🧃', grad: 7 },
  { id: 152, cat: 'drinks', name: 'КИНЗА ВИШНЯ', desc: '', price: 130, image: 'imageswebp/kv130.webp', emoji: '🧃', grad: 8 },
  { id: 153, cat: 'drinks', name: 'ЧЕРНЫЙ ЧАЙ В БУТЫЛКЕ', desc: '', price: 100, image: 'imageswebp/chchvb100.webp', emoji: '🧊', grad: 1 },
  { id: 154, cat: 'drinks', name: 'МОХИТО ЛАЙМ ЖБ', desc: '', price: 120, image: 'imageswebp/mlzh120.webp', emoji: '🥤', grad: 2 },
  { id: 155, cat: 'drinks', name: 'ВОДА', desc: '', price: 40, image: 'imageswebp/v40.webp', emoji: '💧', grad: 3 },
  { id: 156, cat: 'drinks', name: 'ДЕТСКИЙ СОК', desc: '', price: 60, image: 'imageswebp/ds60.webp', emoji: '🧃', grad: 4 },
  { id: 157, cat: 'drinks', name: 'СОК ВИКО', desc: '', image: 'imageswebp/sv200200200200.webp', variants: [
    { name: 'Вишня', price: 200 },
    { name: 'Мультифрукт', price: 200 },
    { name: 'Персик', price: 200 },
    { name: 'Яблоко', price: 200 }
  ], emoji: '🧃', grad: 5 }
];