/* =========================================================
   GÜL ASYA MİNİ MARKET — ÜRÜN VERİTABANI & YARDIMCILAR
   products.js  —  tüm sayfalar bu dosyayı kullanır
   ========================================================= */

const PRODUCTS = [
  // ─── TEMEL GIDA ────────────────────────────────────────────
  {
    id: 1, brand: "Türk Şeker", name: "Kristal Toz Şeker", size: "5 kg",
    price: 199.00, oldPrice: 225.00, unit: "çuval", cat: "gida", subcat: "Şeker",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/turk-seker-kristal-toz-seker-5-kg.jpg",
    badge: "indirim", stock: 80, minOrder: 1, maxOrder: 10,
    desc: "Türk Şeker'in kristal toz şekeri; çay, kahve ve tatlılarınız için idealdir. %100 doğal pancar şekeri.",
    features: ["100% Doğal Pancar Şekeri", "Gıda Bakanlığı Onaylı", "Uzun Raf Ömrü", "Her Tarife Uygun"],
    nutrition: { kalori: "400 kcal/100g", karbonhidrat: "100g", protein: "0g", yağ: "0g" }
  },
  {
    id: 2, brand: "Ülker Bizim", name: "Ayçiçek Yağı", size: "5 lt Pet",
    price: 489.00, oldPrice: 520.00, unit: "bidon", cat: "gida", subcat: "Sıvı Yağ",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-bizim-aycicek-yagi-dar-agiz-pet-5-l.jpg",
    badge: "indirim", stock: 55, minOrder: 1, maxOrder: 5,
    desc: "Ülker Bizim Ayçiçek Yağı, kızartma ve pişirme için ideal yüksek duman noktasına sahiptir. Vitamin E bakımından zengin.",
    features: ["Vitamin E Kaynağı", "Yüksek Duman Noktası", "Kızartma için İdeal", "Kolesterol İçermez"],
    nutrition: { kalori: "900 kcal/100ml", karbonhidrat: "0g", protein: "0g", yağ: "100g" }
  },
  {
    id: 3, brand: "Besler", name: "Domates Salçası", size: "830 g",
    price: 55.00, oldPrice: 68.00, unit: "kavanoz", cat: "gida", subcat: "Konserve",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/besler-mutfak-domates-salcasi-830-g.jpg",
    badge: "indirim", stock: 72, minOrder: 1, maxOrder: 20,
    desc: "Besler Mutfak Domates Salçası; geleneksel yemeklerinize gerçek domates aroması katar. Koruyucu madde içermez.",
    features: ["Koruyucu İçermez", "Yoğun Aroma", "Geleneksel Tarif", "Cam Kavanoz"],
    nutrition: { kalori: "82 kcal/100g", karbonhidrat: "16g", protein: "4g", yağ: "0.5g" }
  },
  {
    id: 4, brand: "Çaykur", name: "Tiryaki Çay", size: "1 kg",
    price: 249.00, oldPrice: 275.00, unit: "paket", cat: "gida", subcat: "Çay & Kahve",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/caykur-tiryaki-1-kg.jpg",
    badge: "popüler", stock: 68, minOrder: 1, maxOrder: 10,
    desc: "Çaykur Tiryaki, Doğu Karadeniz'in seçkin çay bahçelerinden toplanan yapraklardan üretilir. Koyu demli sevenlere özel.",
    features: ["Karadeniz Çayı", "Koyu Demleme", "Taze Toplanmış", "Aroma Koruyucu Ambalaj"],
    nutrition: { kalori: "1 kcal/fincan", karbonhidrat: "0g", protein: "0g", yağ: "0g" }
  },
  {
    id: 5, brand: "Ülker", name: "Çokokrem Fındık Kreması", size: "400 g Kase",
    price: 109.00, oldPrice: 125.00, unit: "kase", cat: "gida", subcat: "Kahvaltılık",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-cokokrem-kakaolu-findik-kremasi-kase-400-g.jpg",
    badge: "indirim", stock: 63, minOrder: 1, maxOrder: 12,
    desc: "Ülker Çokokrem; kakao ve fındığın mükemmel uyumunu sunar. Ekmek, waffle ve krepe ile harika gider.",
    features: ["Gerçek Fındık", "Kakao İçerir", "Sürülebilir Kıvam", "Kahvaltı Favorisi"],
    nutrition: { kalori: "550 kcal/100g", karbonhidrat: "57g", protein: "7g", yağ: "33g" }
  },
  {
    id: 6, brand: "Barilla", name: "Spagetti No.5", size: "500 g",
    price: 44.90, oldPrice: null, unit: "paket", cat: "gida", subcat: "Makarna",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/barilla-spaghetti-no-5-500-g.jpg",
    badge: null, stock: 88, minOrder: 1, maxOrder: 24,
    desc: "İtalyan usulü üretilen Barilla Spagetti; pürüzlü yüzeyi sayesinde sos tutunmasını artırır. 8-9 dakikada pişer.",
    features: ["İtalyan Usulü", "Al Dente Doku", "Sos Tutucu Yüzey", "8-9 dk Pişirme"],
    nutrition: { kalori: "353 kcal/100g", karbonhidrat: "70g", protein: "13g", yağ: "1.5g" }
  },
  {
    id: 7, brand: "Nuhun Ankara", name: "Penne Rigate", size: "500 g",
    price: 29.90, oldPrice: null, unit: "paket", cat: "gida", subcat: "Makarna",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/nuhun-ankara-penne-rigate-makarna-500g.jpg",
    badge: null, stock: 90, minOrder: 1, maxOrder: 24,
    desc: "Nuhun Ankara Penne Rigate; yivli yapısıyla kremali ve soslu tariflerde ideal sonuç verir.",
    features: ["Yivli Yüzey", "Sos Uyumu", "Türk Buğdayı", "Hızlı Pişer"],
    nutrition: { kalori: "350 kcal/100g", karbonhidrat: "71g", protein: "12g", yağ: "1.5g" }
  },
  {
    id: 8, brand: "Duru", name: "Kırmızı Mercimek", size: "1 kg",
    price: 44.90, oldPrice: 52.00, unit: "paket", cat: "gida", subcat: "Bakliyat",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/duru-kirmizi-mercimek-1-kg.jpg",
    badge: "indirim", stock: 77, minOrder: 1, maxOrder: 10,
    desc: "Duru Kırmızı Mercimek; protein ve lif bakımından zengin, çorba ve yemeklerde vazgeçilmez sağlıklı bir besindir.",
    features: ["Yüksek Protein", "Lif Kaynağı", "Kolay Pişer", "Diyet Dostu"],
    nutrition: { kalori: "352 kcal/100g", karbonhidrat: "60g", protein: "26g", yağ: "1g" }
  },
  {
    id: 9, brand: "Şehzade", name: "Pilavlık Pirinç", size: "1 kg",
    price: 59.90, oldPrice: null, unit: "paket", cat: "gida", subcat: "Bakliyat",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/sehzade-pilavlik-pirinc-1-kg.jpg",
    badge: null, stock: 70, minOrder: 1, maxOrder: 10,
    desc: "Şehzade Pilavlık Pirinç; çift pişirme yöntemiyle kabarmayan, tane tane kalan mükemmel pilav sunar.",
    features: ["Tane Tane Kalır", "Kabarmaz", "Kalın Tane", "Lezzetli Pilav"],
    nutrition: { kalori: "360 kcal/100g", karbonhidrat: "79g", protein: "7g", yağ: "0.5g" }
  },
  {
    id: 10, brand: "Knorr", name: "Tavuk Suyu Bulyon", size: "72 g (12'li)",
    price: 38.90, oldPrice: 45.00, unit: "kutu", cat: "gida", subcat: "Baharat",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/knorr-tavuk-suyu-bulyon-12li-72-g.jpg",
    badge: "indirim", stock: 82, minOrder: 1, maxOrder: 10,
    desc: "Knorr Tavuk Suyu Bulyon; çorba, pilav ve soslara gerçek tavuk lezzeti katar. 12 küp içerir.",
    features: ["Gerçek Tavuk Aroması", "12 Küp", "Çorba & Pilav", "Kolay Kullanım"],
    nutrition: { kalori: "28 kcal/küp", karbonhidrat: "2g", protein: "1g", yağ: "2g" }
  },
  {
    id: 11, brand: "Ülker", name: "Çikolatalı Gofret", size: "36 g × 36'lı",
    price: 475.21, oldPrice: 520.00, unit: "koli", cat: "atistirmalik", subcat: "Gofret",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-cikolatali-gofret-36-g-36li.jpg",
    badge: "indirim", stock: 68, minOrder: 1, maxOrder: 5,
    desc: "Ülker Çikolatalı Gofret; crispy wafer katmanları ve sütlü çikolata kaplamasıyla atıştırmalığın favorisi.",
    features: ["Sütlü Çikolata", "Crispy Wafer", "36 Adet Koli", "Tazelik Garantili"],
    nutrition: { kalori: "498 kcal/100g", karbonhidrat: "61g", protein: "6g", yağ: "25g" }
  },
  {
    id: 12, brand: "Ülker", name: "Halley Bisküvi", size: "30 g × 24'lü",
    price: 229.00, oldPrice: 260.00, unit: "koli", cat: "atistirmalik", subcat: "Bisküvi",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-halley-biskuvi-30-g-24lu.jpg",
    badge: "indirim", stock: 72, minOrder: 1, maxOrder: 5,
    desc: "Ülker Halley; yumuşak bisküvi, çilek reçeli ve çikolata kaplamasıyla nesillerin sevgilisi.",
    features: ["Çilek Reçeli", "Çikolata Kaplı", "Yumuşak Bisküvi", "24 Adet Koli"],
    nutrition: { kalori: "420 kcal/100g", karbonhidrat: "63g", protein: "5g", yağ: "17g" }
  },
  {
    id: 13, brand: "Ritz", name: "Kraker", size: "200 g",
    price: 49.90, oldPrice: 59.00, unit: "paket", cat: "atistirmalik", subcat: "Kraker",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ritz-kraker-200-g.jpg",
    badge: "indirim", stock: 78, minOrder: 1, maxOrder: 20,
    desc: "Ritz Kraker; tereyağı aromasıyla çay yanında, peynir ve şarküteri ile mükemmel uyum sağlar.",
    features: ["Tereyağı Aroması", "Crispy Doku", "Çok Amaçlı", "Aile Boyu"],
    nutrition: { kalori: "500 kcal/100g", karbonhidrat: "63g", protein: "7g", yağ: "25g" }
  },
  {
    id: 14, brand: "Eti", name: "Çikolatalı Kek", size: "35 g × 24'lü",
    price: 185.00, oldPrice: 210.00, unit: "koli", cat: "atistirmalik", subcat: "Kek",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/eti-cikolatali-kek-35-g-24lu.jpg",
    badge: "indirim", stock: 65, minOrder: 1, maxOrder: 5,
    desc: "Eti Çikolatalı Kek; nemli kek dokusu ve yoğun çikolata kremasıyla okul ve iş molalarının vazgeçilmezi.",
    features: ["Nemli Doku", "Çikolata Kremasi", "Bireysel Paket", "24 Adet Koli"],
    nutrition: { kalori: "390 kcal/100g", karbonhidrat: "53g", protein: "5g", yağ: "18g" }
  },
  // ─── İÇECEK ────────────────────────────────────────────────
  {
    id: 15, brand: "Beypazarı", name: "Sade Maden Suyu", size: "200 ml × 6'lı",
    price: 51.01, oldPrice: null, unit: "paket", cat: "icecek", subcat: "Maden Suyu",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/beypazari-sade-maden-suyu-200-ml-6li.jpg",
    badge: null, stock: 90, minOrder: 1, maxOrder: 20,
    desc: "Beypazarı Maden Suyu; Ankara Beypazarı'nın doğal kaynaklarından çıkar. Sindirim sistemini destekler.",
    features: ["Doğal Kaynak", "Yüksek Mineral", "Sindirim Dostu", "Cam Şişe Lezzeti"],
    nutrition: { kalori: "0 kcal", karbonhidrat: "0g", protein: "0g", yağ: "0g" }
  },
  {
    id: 16, brand: "Ömür", name: "Tam Yağlı Ayran", size: "285 ml",
    price: 12.90, oldPrice: null, unit: "adet", cat: "icecek", subcat: "Ayran",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/omur-tam-yagli-ayran-285-ml.jpg",
    badge: null, stock: 75, minOrder: 1, maxOrder: 48,
    desc: "Ömür Tam Yağlı Ayran; geleneksel yöntemle üretilen, yoğun kıvamlı ve taze ayrandır. Yemeklerin yanında idealdir.",
    features: ["Tam Yağlı", "Geleneksel Üretim", "Taze Aroma", "Probiyotik"],
    nutrition: { kalori: "55 kcal/100ml", karbonhidrat: "4g", protein: "3g", yağ: "3g" }
  },
  {
    id: 17, brand: "Coca-Cola", name: "Kola", size: "2.5 lt",
    price: 59.90, oldPrice: 69.90, unit: "şişe", cat: "icecek", subcat: "Gazlı İçecek",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/coca-cola-2-5-lt.jpg",
    badge: "indirim", stock: 65, minOrder: 1, maxOrder: 12,
    desc: "Coca-Cola; 130 yılı aşkın tarihi ile ikonik kola içeceği. Aile sofraları için büyük boy ekonomik paket.",
    features: ["İkonik Lezzet", "Aile Boy", "Soğuk İçilmeli", "Geri Dönüştürülebilir"],
    nutrition: { kalori: "42 kcal/100ml", karbonhidrat: "11g", protein: "0g", yağ: "0g" }
  },
  {
    id: 18, brand: "Nescafé", name: "Classic Hazır Kahve", size: "100 g",
    price: 189.00, oldPrice: 210.00, unit: "kavanoz", cat: "icecek", subcat: "Kahve",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/nescafe-classic-100-g.jpg",
    badge: "indirim", stock: 55, minOrder: 1, maxOrder: 6,
    desc: "Nescafé Classic; güçlü ve dengeli aromasıyla Türkiye'nin en sevilen hazır kahvesidir. Sıcak veya soğuk hazırlanabilir.",
    features: ["Güçlü Aroma", "Sıcak/Soğuk", "Cam Kavanoz", "Kolay Çözünür"],
    nutrition: { kalori: "2 kcal/fincan", karbonhidrat: "0g", protein: "0g", yağ: "0g" }
  },
  {
    id: 19, brand: "Damla", name: "Damla Su", size: "5 lt",
    price: 24.90, oldPrice: null, unit: "şişe", cat: "icecek", subcat: "Su",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/damla-su-5-lt.jpg",
    badge: null, stock: 92, minOrder: 1, maxOrder: 24,
    desc: "Damla doğal kaynak suyu; Türkiye'nin dört bir yanındaki doğal kaynaklardan özenle doldurulur.",
    features: ["Doğal Kaynak", "Düşük Sodyum", "pH Dengeli", "Büyük Ekonomik"],
    nutrition: { kalori: "0 kcal", karbonhidrat: "0g", protein: "0g", yağ: "0g" }
  },
  {
    id: 20, brand: "Çaykur", name: "Doğu Karadeniz Çayı", size: "500 g",
    price: 149.00, oldPrice: 165.00, unit: "paket", cat: "icecek", subcat: "Çay",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/caykur-dogu-karadeniz-cayi-500-g.jpg",
    badge: "indirim", stock: 60, minOrder: 1, maxOrder: 10,
    desc: "Çaykur Doğu Karadeniz Çayı; seçkin çay bahçelerinden toplanan yapraklarla üretilen orta kıvamlı güniçi çayı.",
    features: ["Orta Demleme", "Aromatik", "Karadeniz Yaylası", "Günlük Tüketim"],
    nutrition: { kalori: "1 kcal/fincan", karbonhidrat: "0g", protein: "0g", yağ: "0g" }
  },
  {
    id: 21, brand: "Fuse Tea", name: "Limon&Hibiskus", size: "250 ml × 12'li",
    price: 149.90, oldPrice: null, unit: "koli", cat: "icecek", subcat: "Soğuk Çay",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/fuse-tea-limon-hibiskus-250-ml-12li.jpg",
    badge: null, stock: 70, minOrder: 1, maxOrder: 5,
    desc: "Fuse Tea Limon & Hibiskus; gerçek çay özü ve meyve aromasıyla hazırlanan serinletici soğuk çay.",
    features: ["Gerçek Çay Özü", "Limon & Hibiskus", "Şekersiz Seçenek", "12 Adet Koli"],
    nutrition: { kalori: "26 kcal/100ml", karbonhidrat: "6g", protein: "0g", yağ: "0g" }
  },
  // ─── SÜT & SÜT ÜRÜNLERİ ────────────────────────────────────
  {
    id: 22, brand: "Sütaş", name: "Tam Yağlı Süt", size: "1 lt UHT",
    price: 32.90, oldPrice: 38.00, unit: "adet", cat: "sut", subcat: "Süt",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/sutas-tam-yagli-sut-1-lt.jpg",
    badge: "indirim", stock: 82, minOrder: 1, maxOrder: 24,
    desc: "Sütaş Tam Yağlı UHT Süt; günlük taze sütten üretilip UHT işlemiyle uzun ömürlü hale getirilir. Kalsiyum zengini.",
    features: ["UHT İşlemli", "Kalsiyum Zengini", "Uzun Raf Ömrü", "Vitamin D"],
    nutrition: { kalori: "64 kcal/100ml", karbonhidrat: "5g", protein: "3.3g", yağ: "3.5g" }
  },
  {
    id: 23, brand: "Pınar", name: "Kaşar Peyniri", size: "200 g Dilimli",
    price: 79.90, oldPrice: 94.00, unit: "paket", cat: "sut", subcat: "Peynir",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/pinar-kasar-peyniri-200-g-dilimli.jpg",
    badge: "indirim", stock: 60, minOrder: 1, maxOrder: 10,
    desc: "Pınar Kaşar Peyniri; yüksek kaliteli inek sütünden üretilen, dengeli tuzlu ve kremamsı lezzetiyle öne çıkar.",
    features: ["İnek Sütü", "Dilimli Hazır", "Dengeli Tuzluluk", "Breakfast & Snack"],
    nutrition: { kalori: "395 kcal/100g", karbonhidrat: "1g", protein: "26g", yağ: "32g" }
  },
  {
    id: 24, brand: "Ömür", name: "Tam Yağlı Yoğurt", size: "1 kg",
    price: 39.90, oldPrice: null, unit: "kova", cat: "sut", subcat: "Yoğurt",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/omur-tam-yagli-yogurt-1-kg.jpg",
    badge: null, stock: 70, minOrder: 1, maxOrder: 10,
    desc: "Ömür Tam Yağlı Yoğurt; geleneksel mayalama yöntemiyle üretilen, yoğun kıvamlı ve ekşimsiz lezzetiyle öne çıkar.",
    features: ["Geleneksel Maya", "Tam Yağlı", "Probiyotik", "Kremamsı"],
    nutrition: { kalori: "98 kcal/100g", karbonhidrat: "5g", protein: "4g", yağ: "6g" }
  },
  {
    id: 25, brand: "Sütaş", name: "Tereyağı", size: "250 g",
    price: 89.90, oldPrice: 105.00, unit: "paket", cat: "sut", subcat: "Tereyağı",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/sutas-tereyagi-250-g.jpg",
    badge: "indirim", stock: 55, minOrder: 1, maxOrder: 8,
    desc: "Sütaş Tereyağı; %100 inek kremasından üretilen, yüksek yağ içeriği ve zengin aromasıyla pişirme ve yayma için idealdir.",
    features: ["%100 İnek Kreması", "Zengin Aroma", "Pişirme İdeal", "A & D Vitamini"],
    nutrition: { kalori: "744 kcal/100g", karbonhidrat: "0g", protein: "0.7g", yağ: "82g" }
  },
  {
    id: 26, brand: "Doğal Çiftlik", name: "Köy Yumurtası", size: "10'lu",
    price: 44.90, oldPrice: null, unit: "karton", cat: "sut", subcat: "Yumurta",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/dogal-ciftlik-koy-yumurtasi-10lu.jpg",
    badge: "taze", stock: 90, minOrder: 1, maxOrder: 10,
    desc: "Doğal Çiftlik Köy Yumurtası; serbest dolaşımlı tavuklardan elde edilen, koyu sarılı, besleyici yumurtadır.",
    features: ["Serbest Dolaşım", "Koyu Sarılı", "Omega-3 Zengini", "Doğal Beslenme"],
    nutrition: { kalori: "155 kcal/100g", karbonhidrat: "1g", protein: "13g", yağ: "11g" }
  },
  // ─── TEMİZLİK ──────────────────────────────────────────────
  {
    id: 27, brand: "Omo", name: "Active Toz Deterjan", size: "6 kg",
    price: 349.00, oldPrice: 390.00, unit: "paket", cat: "temizlik", subcat: "Çamaşır",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/omo-active-toz-deterjan-6-kg.jpg",
    badge: "indirim", stock: 50, minOrder: 1, maxOrder: 4,
    desc: "Omo Active Toz Deterjan; inatçı lekeleri ilk yıkamada temizler. Hem renkli hem de beyaz çamaşırlar için uygundur.",
    features: ["İlk Yıkamada Temiz", "Renkli & Beyaz", "Aktif Enzimler", "6 kg Ekonomik"],
    nutrition: null
  },
  {
    id: 28, brand: "Fairy", name: "Sıvı Bulaşık Deterjanı", size: "1.35 lt",
    price: 89.90, oldPrice: 99.00, unit: "şişe", cat: "temizlik", subcat: "Bulaşık",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/fairy-sivi-bulasik-deterjan-1-35-lt.jpg",
    badge: "indirim", stock: 65, minOrder: 1, maxOrder: 8,
    desc: "Fairy Sıvı Bulaşık Deterjanı; yağlı lekeleri kolayca çözer, az ürünle çok bulaşık yıkamanızı sağlar.",
    features: ["Az Kullan Çok Yıka", "Yağ Çözücü", "El Dostu", "Ekonomik"],
    nutrition: null
  },
  {
    id: 29, brand: "Bingo", name: "Çamaşır Suyu", size: "4 lt",
    price: 59.90, oldPrice: null, unit: "bidon", cat: "temizlik", subcat: "Hijyen",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/bingo-camasir-suyu-4-lt.jpg",
    badge: null, stock: 72, minOrder: 1, maxOrder: 6,
    desc: "Bingo Çamaşır Suyu; beyazlatıcı ve dezenfektan etkisiyle hem çamaşır hem de yüzey temizliğinde kullanılır.",
    features: ["Beyazlatıcı", "Dezenfektan", "Çok Amaçlı", "4 lt Ekonomik"],
    nutrition: null
  },
  {
    id: 30, brand: "Ariel", name: "Sıvı Çamaşır Deterjani", size: "2.2 lt",
    price: 189.00, oldPrice: 220.00, unit: "şişe", cat: "temizlik", subcat: "Çamaşır",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ariel-sivi-camasir-deterjan-2-2-lt.jpg",
    badge: "indirim", stock: 58, minOrder: 1, maxOrder: 6,
    desc: "Ariel Sıvı Çamaşır Deterjanı; 0°C'de bile etkili temizleme sağlar. Renkleri canlı tutar, koku bırakmaz.",
    features: ["Soğukta Temizler", "Renk Koruyucu", "Koku Yok", "Sıvı Formül"],
    nutrition: null
  },
  // ─── KİŞİSEL BAKIM ─────────────────────────────────────────
  {
    id: 31, brand: "Dove", name: "Nemlendirici Sabun", size: "90 g × 4'lü",
    price: 69.90, oldPrice: 80.00, unit: "paket", cat: "kisisel", subcat: "Sabun",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/dove-nemlendirici-sabun-90-g-4lu.jpg",
    badge: "indirim", stock: 75, minOrder: 1, maxOrder: 8,
    desc: "Dove Nemlendirici Sabun; %1/4 nemlendirici krem formülüyle cildi yıkarken nemini korur. Kuru ciltler için idealdir.",
    features: ["%1/4 Krem Formül", "Nemlendirici", "Dermatolog Onaylı", "4'lü Ekonomik"],
    nutrition: null
  },
  {
    id: 32, brand: "Head & Shoulders", name: "Şampuan", size: "400 ml",
    price: 99.90, oldPrice: 115.00, unit: "şişe", cat: "kisisel", subcat: "Şampuan",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/head-shoulders-sampuan-400-ml.jpg",
    badge: "indirim", stock: 68, minOrder: 1, maxOrder: 6,
    desc: "Head & Shoulders Şampuan; kepeği önleme etkisi ile saç derisini temizler ve saçları canlandırır.",
    features: ["Kepek Önleyici", "Saç Derisi Bakım", "Günlük Kullanım", "Ferahlatıcı"],
    nutrition: null
  },
  // ─── DONDURLMUŞ ─────────────────────────────────────────────
  {
    id: 33, brand: "Çiçek", name: "Karışık Dondurulmuş Sebze", size: "1 kg",
    price: 55.90, oldPrice: null, unit: "paket", cat: "dondurulmus", subcat: "Sebze",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/cicek-karisik-dondurulmus-sebze-1-kg.jpg",
    badge: null, stock: 60, minOrder: 1, maxOrder: 10,
    desc: "Çiçek Karışık Dondurulmuş Sebze; hasat anında dondurulan taze sebzelerle besin değerini korur.",
    features: ["Taze Dondurulmuş", "Besin Değeri Korunur", "Hızlı Pişer", "Karışık"],
    nutrition: { kalori: "65 kcal/100g", karbonhidrat: "12g", protein: "3g", yağ: "0.5g" }
  },
  {
    id: 34, brand: "Panda", name: "Dondurulmuş Köfte", size: "500 g",
    price: 89.90, oldPrice: 105.00, unit: "paket", cat: "dondurulmus", subcat: "Et Ürünleri",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/panda-dondurulmus-kofte-500-g.jpg",
    badge: "indirim", stock: 45, minOrder: 1, maxOrder: 8,
    desc: "Panda Dondurulmuş Köfte; dana ve kuzu etinin harmanından hazırlanan, pratik ve lezzetli köftedir.",
    features: ["Dana & Kuzu Et", "Pratik Pişirme", "Baharat Eklendi", "Dondurucu Dostu"],
    nutrition: { kalori: "230 kcal/100g", karbonhidrat: "8g", protein: "15g", yağ: "16g" }
  },
  // ─── EKMEK ─────────────────────────────────────────────────
  {
    id: 35, brand: "Harry's", name: "Sandviç Ekmeği", size: "470 g",
    price: 49.90, oldPrice: 58.00, unit: "paket", cat: "ekmek", subcat: "Ekmek",
    img: "https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/harrys-sandvic-ekmegi-470-g.jpg",
    badge: "indirim", stock: 55, minOrder: 1, maxOrder: 5,
    desc: "Harry's Sandviç Ekmeği; yumuşak dokusu ve uzun tazeliğiyle sandviç ve tost için idealdir.",
    features: ["Uzun Taze Kalır", "Sandviç & Tost", "Yumuşak Doku", "Aile Boyu"],
    nutrition: { kalori: "264 kcal/100g", karbonhidrat: "49g", protein: "9g", yağ: "4g" }
  },
];

/* ─── YARDIMCI FONKSİYONLAR ────────────────────────────────── */
const Store = {
  getCart() { try { return JSON.parse(localStorage.getItem('ga_cart') || '[]'); } catch { return []; } },
  setCart(v) { localStorage.setItem('ga_cart', JSON.stringify(v)); },
  getFavs() { try { return JSON.parse(localStorage.getItem('ga_favs') || '[]'); } catch { return []; } },
  setFavs(v) { localStorage.setItem('ga_favs', JSON.stringify(v)); },
  getUser() { try { return JSON.parse(localStorage.getItem('ga_user') || 'null'); } catch { return null; } },
  setUser(v) { localStorage.setItem('ga_user', JSON.stringify(v)); },
  getUsers() { try { return JSON.parse(localStorage.getItem('ga_users') || '[]'); } catch { return []; } },
  setUsers(v) { localStorage.setItem('ga_users', JSON.stringify(v)); },
  getOrders() { try { return JSON.parse(localStorage.getItem('ga_orders') || '[]'); } catch { return []; } },
  setOrders(v) { localStorage.setItem('ga_orders', JSON.stringify(v)); },
  getSmsLog() { try { return JSON.parse(localStorage.getItem('ga_sms') || '[]'); } catch { return []; } },
  setSmsLog(v) { localStorage.setItem('ga_sms', JSON.stringify(v)); },
  getPrices() { try { return JSON.parse(localStorage.getItem('ga_prices') || 'null'); } catch { return null; } },
  setPrices(v) { localStorage.setItem('ga_prices', JSON.stringify(v)); },

  cartCount() { return this.getCart().reduce((a, i) => a + i.qty, 0); },
  cartTotal() {
    const prices = this.getPrices() || {};
    return this.getCart().reduce((a, i) => {
      const p = PRODUCTS.find(x => x.id === i.id);
      return a + (prices[i.id] || p?.price || 0) * i.qty;
    }, 0);
  },
  isFav(id) { return this.getFavs().includes(id); },
  toggleFav(id) {
    let favs = this.getFavs();
    favs.includes(id) ? favs.splice(favs.indexOf(id), 1) : favs.push(id);
    this.setFavs(favs);
    return favs.includes(id);
  },
  addToCart(id, qty = 1) {
    const cart = this.getCart();
    const item = cart.find(i => i.id === id);
    item ? item.qty = Math.min(item.qty + qty, 99) : cart.push({ id, qty });
    this.setCart(cart);
  },
  removeFromCart(id) {
    this.setCart(this.getCart().filter(i => i.id !== id));
  },
  updateCartQty(id, qty) {
    const cart = this.getCart();
    const item = cart.find(i => i.id === id);
    if (item) { item.qty = qty; this.setCart(cart); }
  },
  clearCart() { this.setCart([]); },
  sendSMS(phone, msg) {
    const log = this.getSmsLog();
    log.unshift({ time: new Date().toLocaleString('tr-TR'), phone, msg });
    if (log.length > 500) log.splice(500);
    this.setSmsLog(log);
    console.log(`📱 SMS → ${phone}: ${msg}`);
  },
};

function fmt(n) { return Number(n).toFixed(2).replace('.', ',') + ' ₺'; }
function catLabel(c) {
  return { gida: 'Temel Gıda', icecek: 'İçecek', sut: 'Süt & Süt Ürünleri', atistirmalik: 'Atıştırmalık', temizlik: 'Temizlik', kisisel: 'Kişisel Bakım', dondurulmus: 'Dondurulmuş', ekmek: 'Ekmek' }[c] || c;
}

// Ürün sayfasına yönlendirme
function goProduct(id) { window.location.href = `product.html?id=${id}`; }
// Sepet sayfasına yönlendirme
function goCart() { window.location.href = 'cart.html'; }
// Ana sayfaya
function goHome() { window.location.href = 'index.html'; }
// Admin'e
function goAdmin() { window.location.href = 'admin.html'; }