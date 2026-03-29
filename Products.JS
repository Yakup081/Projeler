/* =============================================================
   GÜL ASYA MİNİ MARKET — products.js v3
   75+ Bizim Toptan ürünü | Kalıcı admin değişiklikleri
   ============================================================= */

const DEFAULT_PRODUCTS = [
  /* ─── TEMEL GIDA ─────────────────────────────────────────── */
  {id:1,brand:"Türk Şeker",name:"Kristal Toz Şeker",size:"5 kg",price:199.00,oldPrice:225.00,unit:"çuval",cat:"gida",subcat:"Şeker",stock:80,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/turk-seker-kristal-toz-seker-5-kg.jpg",desc:"%100 doğal pancar şekeri. Çay, kahve ve tüm tatlılar için.",features:["100% Doğal","Gıda Bakanlığı Onaylı","Uzun Raf Ömrü","Her Tarife Uygun"],nutrition:{kalori:"400 kcal/100g",karbonhidrat:"100g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:10},
  {id:2,brand:"Ülker Bizim",name:"Ayçiçek Yağı",size:"5 lt Pet",price:489.00,oldPrice:520.00,unit:"bidon",cat:"gida",subcat:"Sıvı Yağ",stock:55,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-bizim-aycicek-yagi-dar-agiz-pet-5-l.jpg",desc:"Vitamin E zengini, kızartma için ideal yüksek duman noktalı ayçiçek yağı.",features:["Vitamin E","Yüksek Duman Noktası","Kızartma İdeal","Kolesterol İçermez"],nutrition:{kalori:"900 kcal/100ml",karbonhidrat:"0g",protein:"0g",yağ:"100g"},minOrder:1,maxOrder:5},
  {id:3,brand:"Besler",name:"Domates Salçası",size:"830 g",price:55.00,oldPrice:68.00,unit:"kavanoz",cat:"gida",subcat:"Konserve",stock:72,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/besler-mutfak-domates-salcasi-830-g.jpg",desc:"Koruyucu madde içermeyen yoğun aromalı domates salçası.",features:["Koruyucu İçermez","Yoğun Aroma","Cam Kavanoz","Geleneksel"],nutrition:{kalori:"82 kcal/100g",karbonhidrat:"16g",protein:"4g",yağ:"0.5g"},minOrder:1,maxOrder:20},
  {id:4,brand:"Çaykur",name:"Tiryaki Çay",size:"1 kg",price:249.00,oldPrice:275.00,unit:"paket",cat:"gida",subcat:"Çay",stock:68,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/caykur-tiryaki-1-kg.jpg",desc:"Doğu Karadeniz seçkin çay bahçelerinden. Koyu demli sevenlere özel.",features:["Karadeniz Çayı","Koyu Demleme","Taze Toplanmış","Aroma Koruyucu"],nutrition:{kalori:"1 kcal/fincan",karbonhidrat:"0g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:10},
  {id:5,brand:"Ülker",name:"Çokokrem Fındık Kreması",size:"400 g",price:109.00,oldPrice:125.00,unit:"kase",cat:"gida",subcat:"Kahvaltılık",stock:63,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-cokokrem-kakaolu-findik-kremasi-kase-400-g.jpg",desc:"Kakao ve fındığın mükemmel uyumu. Ekmek ve waffle ile harika.",features:["Gerçek Fındık","Kakao İçerir","Sürülebilir","Kahvaltı Favorisi"],nutrition:{kalori:"550 kcal/100g",karbonhidrat:"57g",protein:"7g",yağ:"33g"},minOrder:1,maxOrder:12},
  {id:6,brand:"Barilla",name:"Spagetti No.5",size:"500 g",price:44.90,oldPrice:null,unit:"paket",cat:"gida",subcat:"Makarna",stock:88,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/barilla-spaghetti-no-5-500-g.jpg",desc:"İtalyan usulü pürüzlü yüzeyi sos tutunmasını artırır. 8-9 dakikada pişer.",features:["İtalyan Usulü","Al Dente","Sos Tutucu","8-9 dk"],nutrition:{kalori:"353 kcal/100g",karbonhidrat:"70g",protein:"13g",yağ:"1.5g"},minOrder:1,maxOrder:24},
  {id:7,brand:"Nuhun Ankara",name:"Penne Rigate",size:"500 g",price:29.90,oldPrice:null,unit:"paket",cat:"gida",subcat:"Makarna",stock:90,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/nuhun-ankara-penne-rigate-makarna-500g.jpg",desc:"Yivli yapısıyla kremalı ve soslu tariflerde ideal.",features:["Yivli Yüzey","Sos Uyumu","Türk Buğdayı","Hızlı Pişer"],nutrition:{kalori:"350 kcal/100g",karbonhidrat:"71g",protein:"12g",yağ:"1.5g"},minOrder:1,maxOrder:24},
  {id:8,brand:"Duru",name:"Kırmızı Mercimek",size:"1 kg",price:44.90,oldPrice:52.00,unit:"paket",cat:"gida",subcat:"Bakliyat",stock:77,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/duru-kirmizi-mercimek-1-kg.jpg",desc:"Protein ve lif bakımından zengin. Çorba ve yemeklerde vazgeçilmez.",features:["Yüksek Protein","Lif Kaynağı","Kolay Pişer","Diyet Dostu"],nutrition:{kalori:"352 kcal/100g",karbonhidrat:"60g",protein:"26g",yağ:"1g"},minOrder:1,maxOrder:10},
  {id:9,brand:"Şehzade",name:"Pilavlık Pirinç",size:"1 kg",price:59.90,oldPrice:null,unit:"paket",cat:"gida",subcat:"Bakliyat",stock:70,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/sehzade-pilavlik-pirinc-1-kg.jpg",desc:"Tane tane kalan mükemmel pilavlık pirinç.",features:["Tane Tane Kalır","Kabarmaz","Kalın Tane","Lezzetli"],nutrition:{kalori:"360 kcal/100g",karbonhidrat:"79g",protein:"7g",yağ:"0.5g"},minOrder:1,maxOrder:10},
  {id:10,brand:"Knorr",name:"Tavuk Suyu Bulyon",size:"72 g (12'li)",price:38.90,oldPrice:45.00,unit:"kutu",cat:"gida",subcat:"Baharat",stock:82,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/knorr-tavuk-suyu-bulyon-12li-72-g.jpg",desc:"Çorba, pilav ve soslara gerçek tavuk lezzeti katar.",features:["Gerçek Tavuk","12 Küp","Çorba & Pilav","Kolay Kullanım"],nutrition:{kalori:"28 kcal/küp",karbonhidrat:"2g",protein:"1g",yağ:"2g"},minOrder:1,maxOrder:10},
  {id:36,brand:"Duru",name:"Çökeltme Bulgur",size:"1 kg",price:34.90,oldPrice:null,unit:"paket",cat:"gida",subcat:"Bakliyat",stock:85,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/duru-cokeltme-bulgur-1-kg.jpg",desc:"İnce öğütülmüş çökeltme bulguru. Köfte ve pilav için ideal.",features:["İnce Öğütülmüş","Pilavlık","Köfte İçin","Hızlı Pişer"],nutrition:{kalori:"342 kcal/100g",karbonhidrat:"68g",protein:"12g",yağ:"1.5g"},minOrder:1,maxOrder:10},
  {id:37,brand:"Torku",name:"Çiçek Bal",size:"450 g",price:149.00,oldPrice:175.00,unit:"kavanoz",cat:"gida",subcat:"Kahvaltılık",stock:60,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/torku-cicek-bal-450-g.jpg",desc:"Anadolu çiçek bahçelerinden toplanan saf çiçek balı.",features:["Saf Bal","Doğal Kaynak","Vitamin Deposu","Cam Kavanoz"],nutrition:{kalori:"304 kcal/100g",karbonhidrat:"82g",protein:"0.3g",yağ:"0g"},minOrder:1,maxOrder:6},
  {id:38,brand:"Tat",name:"Domates Konservesi",size:"400 g",price:19.90,oldPrice:null,unit:"adet",cat:"gida",subcat:"Konserve",stock:88,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/tat-domates-konservesi-400-g.jpg",desc:"Doğal domates aroması ile hazır konserve. Makarna ve pizza için.",features:["Doğal Aroma","Katkısız","Ekonomik","Pratik"],nutrition:{kalori:"24 kcal/100g",karbonhidrat:"4g",protein:"1.2g",yağ:"0.2g"},minOrder:1,maxOrder:24},
  {id:39,brand:"Komili",name:"Zeytinyağı",size:"1 lt",price:219.00,oldPrice:250.00,unit:"şişe",cat:"gida",subcat:"Sıvı Yağ",stock:55,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/komili-zeytinyagi-1-lt.jpg",desc:"Soğuk sıkım naturel sızma zeytinyağı. Antioksidan zengini.",features:["Soğuk Sıkım","Naturel Sızma","Antioksidan","Salata & Güveç"],nutrition:{kalori:"884 kcal/100ml",karbonhidrat:"0g",protein:"0g",yağ:"100g"},minOrder:1,maxOrder:6},
  {id:40,brand:"Lipton",name:"Demlik Poşet Çay",size:"500'lü",price:159.00,oldPrice:185.00,unit:"kutu",cat:"gida",subcat:"Çay",stock:72,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/lipton-demlik-poset-500lu.jpg",desc:"Büyük demlik poşet çayı. Kalabalık sofra ve işyerleri için.",features:["500 Poşet","Demlik Boy","Kolay Hazırlama","Ekonomik"],nutrition:{kalori:"1 kcal/fincan",karbonhidrat:"0g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:5},
  {id:41,brand:"Nescafé",name:"Gold Hazır Kahve",size:"200 g",price:339.00,oldPrice:375.00,unit:"kavanoz",cat:"gida",subcat:"Kahve",stock:50,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/nescafe-gold-200-g.jpg",desc:"Arabica ve Robusta karışımı premium hazır kahve.",features:["Arabica Karışımı","Dengeli Lezzet","Cam Kavanoz","Premium"],nutrition:{kalori:"2 kcal/fincan",karbonhidrat:"0g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:6},
  {id:42,brand:"Ülker",name:"Çikolata Kreması",size:"350 g",price:79.90,oldPrice:95.00,unit:"kutu",cat:"gida",subcat:"Kahvaltılık",stock:74,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-cikolata-kremasi-kakaolu-350-g.jpg",desc:"Sürme çikolata kreması. Ekmek, waffle ve krep ile harika.",features:["Kakaolu","Sürülebilir","Kahvaltı","Atıştırmalık"],nutrition:{kalori:"530 kcal/100g",karbonhidrat:"60g",protein:"6g",yağ:"30g"},minOrder:1,maxOrder:12},
  {id:43,brand:"Tat",name:"Ketçap",size:"650 g",price:49.90,oldPrice:58.00,unit:"şişe",cat:"gida",subcat:"Sos",stock:80,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/tat-ketchup-650-g.jpg",desc:"Doğal domates özlü ketçap. Fast food ve tost için vazgeçilmez.",features:["Doğal Domates","Ters Şişe","Kolay Uygulama","Koruyucu Yok"],nutrition:{kalori:"100 kcal/100g",karbonhidrat:"23g",protein:"1g",yağ:"0.2g"},minOrder:1,maxOrder:12},
  {id:44,brand:"Knorr",name:"Noodle Tavuklu",size:"66 g",price:12.90,oldPrice:null,unit:"paket",cat:"gida",subcat:"Hazır Yemek",stock:95,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/knorr-noodle-tavuklu-66-g.jpg",desc:"3 dakikada hazır tavuklu noodle. Pratik ve doyurucu.",features:["3 Dakikada Hazır","Tavuk Aromalı","Pratik","Ekonomik"],nutrition:{kalori:"280 kcal/paket",karbonhidrat:"45g",protein:"7g",yağ:"8g"},minOrder:1,maxOrder:48},
  {id:45,brand:"Pakmaya",name:"Instant Kuru Maya",size:"10 g × 10'lu",price:29.90,oldPrice:null,unit:"paket",cat:"gida",subcat:"Hamur",stock:90,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/pakmaya-instant-kuru-maya-10g-10lu.jpg",desc:"Pratik instant kuru maya. Ekmek, pizza ve börek hamurunuz için.",features:["Instant Maya","10'lu","Ekmek & Pizza","Kolay Kullanım"],nutrition:{kalori:"325 kcal/100g",karbonhidrat:"40g",protein:"40g",yağ:"7g"},minOrder:1,maxOrder:20},
  {id:46,brand:"Sana",name:"Margarin",size:"250 g",price:39.90,oldPrice:48.00,unit:"paket",cat:"gida",subcat:"Yağ",stock:75,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/sana-margarin-250-g.jpg",desc:"Kek, börek ve poğaça tarifleriniz için özel geliştirilmiş margarin.",features:["Pastacılık İçin","Hafif Tat","Kolay Sürülür","A & D Vitaminli"],nutrition:{kalori:"720 kcal/100g",karbonhidrat:"0g",protein:"0g",yağ:"80g"},minOrder:1,maxOrder:12},
  {id:76,brand:"Dida",name:"Un",size:"1 kg",price:22.90,oldPrice:null,unit:"paket",cat:"gida",subcat:"Un",stock:88,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/dida-un-1-kg.jpg",desc:"Sert buğday unu. Ekmek, börek ve pasta için.",features:["Sert Buğday","Ekmek İçin","Yüksek Gluten","Çok Amaçlı"],nutrition:{kalori:"364 kcal/100g",karbonhidrat:"76g",protein:"10g",yağ:"1g"},minOrder:1,maxOrder:20},
  {id:77,brand:"Nesquik",name:"Çikolatalı Süt Tozu",size:"200 g",price:45.90,oldPrice:55.00,unit:"kutu",cat:"gida",subcat:"İçecek Tozu",stock:70,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/nesquik-cikolatali-sut-tozu-200-g.jpg",desc:"Nesquik çikolatalı süt tozu. Çocukların sevdiği besleyici içecek.",features:["Vitaminli","Kalsiyumlu","Çocuk Dostu","Kolay Hazırlama"],nutrition:{kalori:"386 kcal/100g",karbonhidrat:"83g",protein:"4g",yağ:"3g"},minOrder:1,maxOrder:10},

  /* ─── ATIŞTIRIMLIK ───────────────────────────────────────── */
  {id:11,brand:"Ülker",name:"Çikolatalı Gofret",size:"36 g × 36'lı",price:475.21,oldPrice:520.00,unit:"koli",cat:"atistirmalik",subcat:"Gofret",stock:68,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-cikolatali-gofret-36-g-36li.jpg",desc:"Crispy wafer katmanları ve sütlü çikolata kaplama.",features:["Sütlü Çikolata","Crispy Wafer","36 Adet","Tazelik Garantili"],nutrition:{kalori:"498 kcal/100g",karbonhidrat:"61g",protein:"6g",yağ:"25g"},minOrder:1,maxOrder:5},
  {id:12,brand:"Ülker",name:"Halley Bisküvi",size:"30 g × 24'lü",price:229.00,oldPrice:260.00,unit:"koli",cat:"atistirmalik",subcat:"Bisküvi",stock:72,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-halley-biskuvi-30-g-24lu.jpg",desc:"Yumuşak bisküvi, çilek reçeli ve çikolata kaplama.",features:["Çilek Reçeli","Çikolata Kaplı","Yumuşak","24 Adet"],nutrition:{kalori:"420 kcal/100g",karbonhidrat:"63g",protein:"5g",yağ:"17g"},minOrder:1,maxOrder:5},
  {id:13,brand:"Ritz",name:"Kraker",size:"200 g",price:49.90,oldPrice:59.00,unit:"paket",cat:"atistirmalik",subcat:"Kraker",stock:78,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ritz-kraker-200-g.jpg",desc:"Tereyağı aromasıyla çay yanında mükemmel.",features:["Tereyağı Aroma","Crispy","Çok Amaçlı","Aile Boyu"],nutrition:{kalori:"500 kcal/100g",karbonhidrat:"63g",protein:"7g",yağ:"25g"},minOrder:1,maxOrder:20},
  {id:14,brand:"Eti",name:"Çikolatalı Kek",size:"35 g × 24'lü",price:185.00,oldPrice:210.00,unit:"koli",cat:"atistirmalik",subcat:"Kek",stock:65,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/eti-cikolatali-kek-35-g-24lu.jpg",desc:"Nemli kek dokusu ve yoğun çikolata kreması.",features:["Nemli Doku","Çikolata Kreması","Bireysel","24 Adet"],nutrition:{kalori:"390 kcal/100g",karbonhidrat:"53g",protein:"5g",yağ:"18g"},minOrder:1,maxOrder:5},
  {id:50,brand:"Eti",name:"Burçak Bisküvi",size:"126 g × 12'li",price:199.00,oldPrice:225.00,unit:"koli",cat:"atistirmalik",subcat:"Bisküvi",stock:70,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/eti-burcak-biskuvi-126-g-12li.jpg",desc:"Geleneksel sade bisküvi. Çay ile mükemmel uyum.",features:["Sade Bisküvi","Çay Yanı","12'li Koli","Uzun Raf"],nutrition:{kalori:"450 kcal/100g",karbonhidrat:"72g",protein:"8g",yağ:"15g"},minOrder:1,maxOrder:5},
  {id:51,brand:"Ülker",name:"Dankek Baton Kek Kakaolu",size:"35 g × 24'lü",price:199.00,oldPrice:225.00,unit:"koli",cat:"atistirmalik",subcat:"Kek",stock:68,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-dankek-baton-kek-kakaolu-35-g-24lu.jpg",desc:"Kakaolu baton kek. Pratik atıştırmalık.",features:["Kakaolu","Pratik","24 Adet","Çantalık"],nutrition:{kalori:"380 kcal/100g",karbonhidrat:"58g",protein:"5g",yağ:"14g"},minOrder:1,maxOrder:5},
  {id:52,brand:"Eti",name:"Pötibör Bisküvi",size:"1 kg",price:129.00,oldPrice:150.00,unit:"paket",cat:"atistirmalik",subcat:"Bisküvi",stock:80,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/eti-potibor-biskuvi-1-kg.jpg",desc:"Klasik sade pötibör bisküvi. Tatlı yapımı ve çay yanı için.",features:["Klasik Tarif","1 kg Ekonomik","Tatlı Yapımı","Çay Yanı"],nutrition:{kalori:"440 kcal/100g",karbonhidrat:"71g",protein:"8g",yağ:"14g"},minOrder:1,maxOrder:8},
  {id:53,brand:"Lay's",name:"Klasik Cips",size:"104 g × 10'lu",price:349.00,oldPrice:395.00,unit:"koli",cat:"atistirmalik",subcat:"Cips",stock:65,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/lays-klasik-cips-104-g-10lu.jpg",desc:"İnce dilimlenmiş, tuzlanmış klasik patates cipsi.",features:["Klasik Lezzet","Crispy","10'lu Koli","Atıştırmalık"],nutrition:{kalori:"530 kcal/100g",karbonhidrat:"52g",protein:"7g",yağ:"33g"},minOrder:1,maxOrder:5},
  {id:54,brand:"Ülker",name:"Şokonat Fındıklı",size:"60 g × 24'lü",price:289.00,oldPrice:330.00,unit:"koli",cat:"atistirmalik",subcat:"Çikolata",stock:62,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-sokonat-findikli-60-g-24lu.jpg",desc:"Bütün fındıklı sütlü çikolata.",features:["Bütün Fındık","Sütlü Çikolata","24 Adet","Premium"],nutrition:{kalori:"555 kcal/100g",karbonhidrat:"52g",protein:"8g",yağ:"35g"},minOrder:1,maxOrder:5},
  {id:55,brand:"Ülker",name:"Çikomel",size:"25 g × 36'lı",price:259.00,oldPrice:299.00,unit:"koli",cat:"atistirmalik",subcat:"Çikolata",stock:70,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-cikomel-25-g-36li.jpg",desc:"Karamelli ve fındıklı sütlü çikolata. Atıştırmalık olarak ideal.",features:["Karamel & Fındık","Sütlü","36 Adet","Bireysel"],nutrition:{kalori:"490 kcal/100g",karbonhidrat:"60g",protein:"5g",yağ:"26g"},minOrder:1,maxOrder:5},
  {id:48,brand:"Ülker",name:"Biskrem Fındıklı",size:"100 g × 18'li",price:310.00,oldPrice:360.00,unit:"koli",cat:"atistirmalik",subcat:"Bisküvi",stock:60,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ulker-biskrem-findikli-100g-18li.jpg",desc:"Fındık kremalı sandviç bisküvi.",features:["Fındık Kreması","Sandviç","18'li Koli","Çay Yanı"],nutrition:{kalori:"490 kcal/100g",karbonhidrat:"65g",protein:"7g",yağ:"23g"},minOrder:1,maxOrder:5},

  /* ─── İÇECEK ─────────────────────────────────────────────── */
  {id:15,brand:"Beypazarı",name:"Sade Maden Suyu",size:"200 ml × 6'lı",price:51.01,oldPrice:null,unit:"paket",cat:"icecek",subcat:"Maden Suyu",stock:90,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/beypazari-sade-maden-suyu-200-ml-6li.jpg",desc:"Beypazarı doğal kaynaklarından. Sindirim sistemini destekler.",features:["Doğal Kaynak","Yüksek Mineral","Sindirim Dostu","6'lı"],nutrition:{kalori:"0 kcal",karbonhidrat:"0g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:20},
  {id:16,brand:"Ömür",name:"Tam Yağlı Ayran",size:"285 ml",price:12.90,oldPrice:null,unit:"adet",cat:"icecek",subcat:"Ayran",stock:75,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/omur-tam-yagli-ayran-285-ml.jpg",desc:"Geleneksel yöntemle üretilen yoğun kıvamlı ayran.",features:["Tam Yağlı","Geleneksel","Probiyotik","Taze"],nutrition:{kalori:"55 kcal/100ml",karbonhidrat:"4g",protein:"3g",yağ:"3g"},minOrder:1,maxOrder:48},
  {id:17,brand:"Coca-Cola",name:"Kola",size:"2.5 lt",price:59.90,oldPrice:69.90,unit:"şişe",cat:"icecek",subcat:"Gazlı İçecek",stock:65,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/coca-cola-2-5-lt.jpg",desc:"İkonik kola içeceği. Aile sofraları için büyük boy.",features:["İkonik Lezzet","Aile Boy","Soğuk İçilmeli","Ekonomik"],nutrition:{kalori:"42 kcal/100ml",karbonhidrat:"11g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:12},
  {id:18,brand:"Nescafé",name:"Classic Hazır Kahve",size:"100 g",price:189.00,oldPrice:210.00,unit:"kavanoz",cat:"icecek",subcat:"Kahve",stock:55,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/nescafe-classic-100-g.jpg",desc:"Güçlü ve dengeli aromasıyla en sevilen hazır kahve.",features:["Güçlü Aroma","Sıcak/Soğuk","Cam Kavanoz","Kolay Çözünür"],nutrition:{kalori:"2 kcal/fincan",karbonhidrat:"0g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:6},
  {id:19,brand:"Damla",name:"Doğal Kaynak Suyu",size:"5 lt",price:24.90,oldPrice:null,unit:"şişe",cat:"icecek",subcat:"Su",stock:92,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/damla-su-5-lt.jpg",desc:"Doğal kaynaklardan özenle doldurulan su.",features:["Doğal Kaynak","Düşük Sodyum","pH Dengeli","Büyük Ekonomik"],nutrition:{kalori:"0 kcal",karbonhidrat:"0g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:24},
  {id:20,brand:"Çaykur",name:"Doğu Karadeniz Çayı",size:"500 g",price:149.00,oldPrice:165.00,unit:"paket",cat:"icecek",subcat:"Çay",stock:60,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/caykur-dogu-karadeniz-cayi-500-g.jpg",desc:"Seçkin çay bahçelerinden, orta kıvamlı günlük çay.",features:["Orta Demleme","Aromatik","Karadeniz","Günlük"],nutrition:{kalori:"1 kcal/fincan",karbonhidrat:"0g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:10},
  {id:21,brand:"Fuse Tea",name:"Limon & Hibiskus",size:"250 ml × 12'li",price:149.90,oldPrice:null,unit:"koli",cat:"icecek",subcat:"Soğuk Çay",stock:70,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/fuse-tea-limon-hibiskus-250-ml-12li.jpg",desc:"Gerçek çay özü ve limon & hibiskus aroması.",features:["Gerçek Çay Özü","Limon & Hibiskus","12 Adet","Serinletici"],nutrition:{kalori:"26 kcal/100ml",karbonhidrat:"6g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:5},
  {id:56,brand:"Pepsi",name:"Pepsi Cola",size:"2.5 lt",price:54.90,oldPrice:62.00,unit:"şişe",cat:"icecek",subcat:"Gazlı İçecek",stock:68,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/pepsi-2-5-lt.jpg",desc:"Pepsi Cola'nın ferahlatıcı lezzeti. Büyük boy.",features:["Ferahlatıcı","Büyük Boy","Soğuk","Ekonomik"],nutrition:{kalori:"41 kcal/100ml",karbonhidrat:"11g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:12},
  {id:57,brand:"Schweppes",name:"Tonic Water",size:"200 ml × 6'lı",price:75.00,oldPrice:null,unit:"paket",cat:"icecek",subcat:"Gazlı İçecek",stock:62,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/schweppes-tonic-water-200-ml-6li.jpg",desc:"Kinin özlü tonik su. Kokteyllerin vazgeçilmezi.",features:["Kinin Özlü","Kokteyller İçin","6'lı","Premium"],nutrition:{kalori:"34 kcal/100ml",karbonhidrat:"8g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:10},
  {id:58,brand:"Uludağ",name:"Frutti Extra Vişne",size:"200 ml × 24'lü",price:210.00,oldPrice:249.00,unit:"koli",cat:"icecek",subcat:"Meyve Suyu",stock:65,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/uludag-frutti-extra-visne-200-ml-24lu.jpg",desc:"Vişne aromalı meyve içeceği.",features:["Vişne Aromalı","24 Adet","Çocuk Dostu","Pratik"],nutrition:{kalori:"45 kcal/100ml",karbonhidrat:"11g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:5},
  {id:59,brand:"Red Bull",name:"Enerji İçeceği",size:"250 ml",price:59.90,oldPrice:null,unit:"adet",cat:"icecek",subcat:"Enerji",stock:75,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/red-bull-enerji-icecegi-250-ml.jpg",desc:"Taurin ve kafein içeren enerji içeceği. Performansı artırır.",features:["Taurin","Kafein","Vitamin B","Performans"],nutrition:{kalori:"45 kcal/100ml",karbonhidrat:"11g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:24},
  {id:60,brand:"Erikli",name:"Doğal Kaynak Suyu",size:"1.5 lt × 12'li",price:149.00,oldPrice:null,unit:"koli",cat:"icecek",subcat:"Su",stock:85,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/erikli-dogal-kaynak-suyu-1-5-lt-12li.jpg",desc:"Doğal kaynak suyu. 12'li ekonomik paket.",features:["Doğal Kaynak","12'li","Günlük Kullanım","Ekonomik"],nutrition:{kalori:"0 kcal",karbonhidrat:"0g",protein:"0g",yağ:"0g"},minOrder:1,maxOrder:5},

  /* ─── SÜT & SÜT ÜRÜNLERİ ────────────────────────────────── */
  {id:22,brand:"Sütaş",name:"Tam Yağlı Süt",size:"1 lt UHT",price:32.90,oldPrice:38.00,unit:"adet",cat:"sut",subcat:"Süt",stock:82,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/sutas-tam-yagli-sut-1-lt.jpg",desc:"UHT işlemli tam yağlı süt. Kalsiyum ve D vitamini zengini.",features:["UHT","Kalsiyum","D Vitamini","Uzun Raf"],nutrition:{kalori:"64 kcal/100ml",karbonhidrat:"5g",protein:"3.3g",yağ:"3.5g"},minOrder:1,maxOrder:24},
  {id:23,brand:"Pınar",name:"Kaşar Peyniri",size:"200 g dilimli",price:79.90,oldPrice:94.00,unit:"paket",cat:"sut",subcat:"Peynir",stock:60,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/pinar-kasar-peyniri-200-g-dilimli.jpg",desc:"İnek sütünden kremamsı kaşar peyniri.",features:["İnek Sütü","Dilimli","Dengeli Tuz","Kahvaltılık"],nutrition:{kalori:"395 kcal/100g",karbonhidrat:"1g",protein:"26g",yağ:"32g"},minOrder:1,maxOrder:10},
  {id:24,brand:"Ömür",name:"Tam Yağlı Yoğurt",size:"1 kg",price:39.90,oldPrice:null,unit:"kova",cat:"sut",subcat:"Yoğurt",stock:70,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/omur-tam-yagli-yogurt-1-kg.jpg",desc:"Geleneksel mayalama yöntemiyle üretilen yoğun kıvamlı yoğurt.",features:["Geleneksel Maya","Tam Yağlı","Probiyotik","Kremamsı"],nutrition:{kalori:"98 kcal/100g",karbonhidrat:"5g",protein:"4g",yağ:"6g"},minOrder:1,maxOrder:10},
  {id:25,brand:"Sütaş",name:"Tereyağı",size:"250 g",price:89.90,oldPrice:105.00,unit:"paket",cat:"sut",subcat:"Tereyağı",stock:55,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/sutas-tereyagi-250-g.jpg",desc:"%100 inek kremasından zengin aromalı tereyağı.",features:["%100 Krem","Zengin Aroma","Pişirme İdeal","A&D Vitamini"],nutrition:{kalori:"744 kcal/100g",karbonhidrat:"0g",protein:"0.7g",yağ:"82g"},minOrder:1,maxOrder:8},
  {id:26,brand:"Doğal Çiftlik",name:"Köy Yumurtası",size:"10'lu",price:44.90,oldPrice:null,unit:"karton",cat:"sut",subcat:"Yumurta",stock:90,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/dogal-ciftlik-koy-yumurtasi-10lu.jpg",desc:"Serbest dolaşımlı tavuklardan koyu sarılı köy yumurtası.",features:["Serbest Dolaşım","Koyu Sarılı","Omega-3","Doğal"],nutrition:{kalori:"155 kcal/100g",karbonhidrat:"1g",protein:"13g",yağ:"11g"},minOrder:1,maxOrder:10},
  {id:47,brand:"Pınar",name:"Beyaz Peynir",size:"500 g",price:119.90,oldPrice:139.00,unit:"paket",cat:"sut",subcat:"Peynir",stock:65,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/pinar-beyaz-peynir-500-g.jpg",desc:"Geleneksel salamura beyaz peynir. Kahvaltı, börek ve pide için.",features:["Salamura","Geleneksel","Kahvaltılık","Börek İçin"],nutrition:{kalori:"260 kcal/100g",karbonhidrat:"1g",protein:"18g",yağ:"21g"},minOrder:1,maxOrder:8},
  {id:61,brand:"Sütaş",name:"Yarım Yağlı Süt",size:"1 lt UHT",price:30.90,oldPrice:36.00,unit:"adet",cat:"sut",subcat:"Süt",stock:78,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/sutas-yarim-yagli-sut-1-lt.jpg",desc:"Yarım yağlı UHT süt. Diyet ve çocuklar için.",features:["Yarım Yağlı","Kalsiyum","Çocuk Dostu","Diyet Uygun"],nutrition:{kalori:"47 kcal/100ml",karbonhidrat:"5g",protein:"3.5g",yağ:"1.5g"},minOrder:1,maxOrder:24},
  {id:62,brand:"Pınar",name:"İçim Süt",size:"1 lt UHT",price:31.90,oldPrice:null,unit:"adet",cat:"sut",subcat:"Süt",stock:80,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/pinar-icim-sut-1-lt.jpg",desc:"Pınar tam yağlı UHT sütü.",features:["UHT","Tam Yağlı","Besleyici","Uzun Ömürlü"],nutrition:{kalori:"62 kcal/100ml",karbonhidrat:"5g",protein:"3.2g",yağ:"3.4g"},minOrder:1,maxOrder:24},
  {id:63,brand:"Sütaş",name:"Ayran",size:"1 lt",price:22.90,oldPrice:null,unit:"şişe",cat:"sut",subcat:"Ayran",stock:72,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/sutas-ayran-1-lt.jpg",desc:"Sütaş yoğurdundan üretilen köpüklü ayran.",features:["Yoğurttan","Köpüklü","Ferahlatıcı","1 lt"],nutrition:{kalori:"55 kcal/100ml",karbonhidrat:"4g",protein:"3g",yağ:"3g"},minOrder:1,maxOrder:12},

  /* ─── TEMİZLİK ───────────────────────────────────────────── */
  {id:27,brand:"Omo",name:"Active Toz Deterjan",size:"6 kg",price:349.00,oldPrice:390.00,unit:"paket",cat:"temizlik",subcat:"Çamaşır",stock:50,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/omo-active-toz-deterjan-6-kg.jpg",desc:"İnatçı lekeleri ilk yıkamada temizler.",features:["İlk Yıkamada","Renkli & Beyaz","Aktif Enzimler","6 kg"],nutrition:null,minOrder:1,maxOrder:4},
  {id:28,brand:"Fairy",name:"Sıvı Bulaşık Deterjanı",size:"1.35 lt",price:89.90,oldPrice:99.00,unit:"şişe",cat:"temizlik",subcat:"Bulaşık",stock:65,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/fairy-sivi-bulasik-deterjan-1-35-lt.jpg",desc:"Az kullanımla çok bulaşık. Yağ çözücü.",features:["Az Kullan Çok Yıka","Yağ Çözücü","El Dostu","Ekonomik"],nutrition:null,minOrder:1,maxOrder:8},
  {id:29,brand:"Bingo",name:"Çamaşır Suyu",size:"4 lt",price:59.90,oldPrice:null,unit:"bidon",cat:"temizlik",subcat:"Hijyen",stock:72,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/bingo-camasir-suyu-4-lt.jpg",desc:"Beyazlatıcı ve dezenfektan. Çok amaçlı.",features:["Beyazlatıcı","Dezenfektan","Çok Amaçlı","4 lt"],nutrition:null,minOrder:1,maxOrder:6},
  {id:30,brand:"Ariel",name:"Sıvı Çamaşır Deterjanı",size:"2.2 lt",price:189.00,oldPrice:220.00,unit:"şişe",cat:"temizlik",subcat:"Çamaşır",stock:58,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/ariel-sivi-camasir-deterjan-2-2-lt.jpg",desc:"0°C'de bile etkili. Renkleri canlı tutar.",features:["Soğukta Temizler","Renk Koruyucu","Koku Yok","Sıvı Formül"],nutrition:null,minOrder:1,maxOrder:6},
  {id:64,brand:"Domestos",name:"Çamaşır Suyu Oksijen Etkili",size:"750 ml",price:44.90,oldPrice:52.00,unit:"şişe",cat:"temizlik",subcat:"Hijyen",stock:70,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/domestos-camasir-suyu-oksijen-etkili-750-ml.jpg",desc:"Oksijen etkili formülüyle renkli & beyaz çamaşırlar için.",features:["Oksijen Etkili","Renkli & Beyaz","Dezenfektan","Ekonomik"],nutrition:null,minOrder:1,maxOrder:8},
  {id:65,brand:"Pril",name:"Bulaşık Makinesi Kapsülü",size:"50'li",price:149.00,oldPrice:175.00,unit:"kutu",cat:"temizlik",subcat:"Bulaşık",stock:60,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/pril-bulasik-makinesi-kapsul-50li.jpg",desc:"All in One kapsül. Yıkama, parlatma ve tuz bir arada.",features:["All in One","50 Kapsül","Parlatıcı Dahil","Her Makine"],nutrition:null,minOrder:1,maxOrder:5},
  {id:66,brand:"Persil",name:"Jel Çamaşır Deterjanı",size:"3 lt",price:219.00,oldPrice:259.00,unit:"şişe",cat:"temizlik",subcat:"Çamaşır",stock:55,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/persil-jel-camasir-deterjan-3-lt.jpg",desc:"Güçlü jel formülle 40 yıkama. Leke çıkarmada uzman.",features:["Jel Formül","40 Yıkama","Leke Uzmanı","3 lt"],nutrition:null,minOrder:1,maxOrder:4},

  /* ─── KİŞİSEL BAKIM ─────────────────────────────────────── */
  {id:31,brand:"Dove",name:"Nemlendirici Sabun",size:"90 g × 4'lü",price:69.90,oldPrice:80.00,unit:"paket",cat:"kisisel",subcat:"Sabun",stock:75,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/dove-nemlendirici-sabun-90-g-4lu.jpg",desc:"%1/4 krem formülüyle cildi nemli tutar.",features:["%1/4 Krem","Nemlendirici","Dermatolog Onaylı","4'lü"],nutrition:null,minOrder:1,maxOrder:8},
  {id:32,brand:"Head & Shoulders",name:"Kepek Önleyici Şampuan",size:"400 ml",price:99.90,oldPrice:115.00,unit:"şişe",cat:"kisisel",subcat:"Şampuan",stock:68,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/head-shoulders-sampuan-400-ml.jpg",desc:"Kepeği önler, saç derisini temizler.",features:["Kepek Önleyici","Saç Derisi Bakım","Günlük","Ferahlatıcı"],nutrition:null,minOrder:1,maxOrder:6},
  {id:67,brand:"Colgate",name:"Diş Macunu Triple Action",size:"100 ml × 6'lı",price:169.00,oldPrice:195.00,unit:"paket",cat:"kisisel",subcat:"Ağız Bakım",stock:70,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/colgate-dis-macunu-triple-action-100-ml-6li.jpg",desc:"Üçlü etki: beyazlatır, korur, nefes tazeler.",features:["Beyazlatır","Korur","Nefes Tazer","6'lı"],nutrition:null,minOrder:1,maxOrder:5},
  {id:68,brand:"Gillette",name:"Tıraş Jeli",size:"200 ml",price:79.90,oldPrice:95.00,unit:"şişe",cat:"kisisel",subcat:"Tıraş",stock:65,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/gillette-tiras-jeli-200-ml.jpg",desc:"Hassas ciltler için koruyucu tıraş jeli.",features:["Hassas Ciltler","Koruyucu","Tahriş Yok","200 ml"],nutrition:null,minOrder:1,maxOrder:6},
  {id:69,brand:"Pantene",name:"Şampuan Pro-V",size:"400 ml",price:89.90,oldPrice:109.00,unit:"şişe",cat:"kisisel",subcat:"Şampuan",stock:72,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/pantene-pro-v-sampuan-400-ml.jpg",desc:"Pro-Vitamin B5 ile güç ve parlaklık.",features:["Pro-Vitamin B5","Güçlendirici","Parlaklık","Günlük"],nutrition:null,minOrder:1,maxOrder:6},
  {id:70,brand:"Fa",name:"Duş Jeli Ocean",size:"500 ml",price:55.90,oldPrice:65.00,unit:"şişe",cat:"kisisel",subcat:"Duş Jeli",stock:75,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/fa-dus-jeli-ocean-500-ml.jpg",desc:"Okyanus freskliğiyle nemlendirici duş jeli.",features:["Okyanus Kokusu","Nemlendirici","500 ml","Ferahlatıcı"],nutrition:null,minOrder:1,maxOrder:8},

  /* ─── DONDURULMUŞ ───────────────────────────────────────── */
  {id:33,brand:"Çiçek",name:"Karışık Dondurulmuş Sebze",size:"1 kg",price:55.90,oldPrice:null,unit:"paket",cat:"dondurulmus",subcat:"Sebze",stock:60,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/cicek-karisik-dondurulmus-sebze-1-kg.jpg",desc:"Hasat anında dondurulan taze sebzelerle besin değeri korunur.",features:["Taze Dondurulmuş","Besin Değeri","Hızlı Pişer","Karışık"],nutrition:{kalori:"65 kcal/100g",karbonhidrat:"12g",protein:"3g",yağ:"0.5g"},minOrder:1,maxOrder:10},
  {id:34,brand:"Panda",name:"Dondurulmuş Köfte",size:"500 g",price:89.90,oldPrice:105.00,unit:"paket",cat:"dondurulmus",subcat:"Et Ürünleri",stock:45,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/panda-dondurulmus-kofte-500-g.jpg",desc:"Dana ve kuzu etinden pratik köfte.",features:["Dana & Kuzu","Pratik","Baharat Eklendi","Dondurucu"],nutrition:{kalori:"230 kcal/100g",karbonhidrat:"8g",protein:"15g",yağ:"16g"},minOrder:1,maxOrder:8},
  {id:71,brand:"Harput",name:"Kızartmalık Patates",size:"2.5 kg",price:119.00,oldPrice:139.00,unit:"paket",cat:"dondurulmus",subcat:"Sebze",stock:58,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/harput-dondurulmus-patates-kizartmalik-2-5-kg.jpg",desc:"Önceden kızartılmış dondurulmuş patates. Fırın veya fritöz.",features:["Önceden Kızartılmış","Fırın Uyumlu","Aile Boy","Pratik"],nutrition:{kalori:"154 kcal/100g",karbonhidrat:"24g",protein:"2g",yağ:"5g"},minOrder:1,maxOrder:5},
  {id:72,brand:"İyi Tarım",name:"Dondurulmuş Bezelye",size:"1 kg",price:45.90,oldPrice:null,unit:"paket",cat:"dondurulmus",subcat:"Sebze",stock:65,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/iyi-tarim-dondurulmus-bezelye-1-kg.jpg",desc:"Taze hasatla dondurulmuş yeşil bezelye.",features:["Taze Hasat","Vitamin Korunur","Çabuk Pişer","Pratik"],nutrition:{kalori:"81 kcal/100g",karbonhidrat:"14g",protein:"5g",yağ:"0.4g"},minOrder:1,maxOrder:8},

  /* ─── EKMEK ─────────────────────────────────────────────── */
  {id:35,brand:"Harry's",name:"Sandviç Ekmeği",size:"470 g",price:49.90,oldPrice:58.00,unit:"paket",cat:"ekmek",subcat:"Ekmek",stock:55,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/harrys-sandvic-ekmegi-470-g.jpg",desc:"Yumuşak dokusu ve uzun tazeliğiyle sandviç için ideal.",features:["Uzun Taze","Sandviç & Tost","Yumuşak","Aile Boyu"],nutrition:{kalori:"264 kcal/100g",karbonhidrat:"49g",protein:"9g",yağ:"4g"},minOrder:1,maxOrder:5},
  {id:73,brand:"Uno",name:"Tam Buğday Ekmek",size:"450 g",price:42.90,oldPrice:50.00,unit:"paket",cat:"ekmek",subcat:"Ekmek",stock:62,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/uno-tam-bugday-ekmek-450-g.jpg",desc:"Tam buğday unundan lif zengini sağlıklı ekmek.",features:["Tam Buğday","Lif Zengini","Sağlıklı","Uzun Taze"],nutrition:{kalori:"245 kcal/100g",karbonhidrat:"44g",protein:"10g",yağ:"3g"},minOrder:1,maxOrder:5},
  {id:74,brand:"Uno",name:"Çıtır Lavaş",size:"10'lu 300 g",price:34.90,oldPrice:null,unit:"paket",cat:"ekmek",subcat:"Lavaş",stock:70,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/uno-citir-lavas-10lu-300-g.jpg",desc:"İnce ve çıtır lavaş. Dürüm ve pizza için ideal.",features:["Çıtır","İnce","Dürüm İçin","Pizza İçin"],nutrition:{kalori:"340 kcal/100g",karbonhidrat:"68g",protein:"10g",yağ:"3g"},minOrder:1,maxOrder:8},
  {id:75,brand:"Divan",name:"Açma",size:"90 g × 8'li",price:69.90,oldPrice:80.00,unit:"paket",cat:"ekmek",subcat:"Poğaça",stock:55,img:"https://img-bizimtoptan.mncdn.com/mnresize/300/300/Content/Upload/Upload/divan-acma-90-g-8li.jpg",desc:"Tereyağlı yumuşak açma. Kahvaltı ve öğünler için.",features:["Tereyağlı","Yumuşak","Kahvaltılık","8'li"],nutrition:{kalori:"320 kcal/100g",karbonhidrat:"50g",protein:"9g",yağ:"10g"},minOrder:1,maxOrder:5},
];

/* ─── KALICI ÜRÜN YÖNETİMİ ────────────────────────────────── */
const PRODUCT_STORAGE_KEY = 'ga_products_v3';
const EXTRA_PRODUCTS_KEY  = 'ga_extra_products_v3';

function _loadOverrides() {
  try { return JSON.parse(localStorage.getItem(PRODUCT_STORAGE_KEY) || '{}'); } catch { return {}; }
}
function _loadExtras() {
  try { return JSON.parse(localStorage.getItem(EXTRA_PRODUCTS_KEY) || '[]'); } catch { return []; }
}

// Başlangıçta PRODUCTS'ı oluştur
let PRODUCTS = (() => {
  const overrides = _loadOverrides();
  const base = DEFAULT_PRODUCTS
    .filter(p => !overrides[p.id]?._deleted)
    .map(p => overrides[p.id] ? { ...p, ...overrides[p.id] } : { ...p });
  const extras = _loadExtras().filter(p => !overrides[p.id]?._deleted);
  return [...base, ...extras];
})();

function saveProductOverride(id, changes) {
  const overrides = _loadOverrides();
  overrides[id] = { ...(overrides[id] || {}), ...changes };
  localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(overrides));
  const idx = PRODUCTS.findIndex(p => p.id === id);
  if (idx !== -1) PRODUCTS[idx] = { ...PRODUCTS[idx], ...changes };
}

function saveExtraProduct(product) {
  const extras = _loadExtras();
  const idx = extras.findIndex(p => p.id === product.id);
  idx !== -1 ? extras[idx] = product : extras.push(product);
  localStorage.setItem(EXTRA_PRODUCTS_KEY, JSON.stringify(extras));
  const pi = PRODUCTS.findIndex(p => p.id === product.id);
  pi !== -1 ? PRODUCTS[pi] = product : PRODUCTS.push(product);
}

function deleteProductById(id) {
  // Override olarak sil işareti koy
  const overrides = _loadOverrides();
  overrides[id] = { ...(overrides[id] || {}), _deleted: true };
  localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(overrides));
  // Extra'dan da çıkar
  const extras = _loadExtras().filter(p => p.id !== id);
  localStorage.setItem(EXTRA_PRODUCTS_KEY, JSON.stringify(extras));
  PRODUCTS = PRODUCTS.filter(p => p.id !== id);
}

/* ─── STORE ─────────────────────────────────────────────────── */
const Store = {
  getCart()    { try{return JSON.parse(localStorage.getItem('ga_cart')||'[]')}catch{return[]} },
  setCart(v)   { localStorage.setItem('ga_cart',JSON.stringify(v)) },
  getFavs()    { try{return JSON.parse(localStorage.getItem('ga_favs')||'[]')}catch{return[]} },
  setFavs(v)   { localStorage.setItem('ga_favs',JSON.stringify(v)) },
  getUser()    { try{return JSON.parse(localStorage.getItem('ga_user')||'null')}catch{return null} },
  setUser(v)   { localStorage.setItem('ga_user',JSON.stringify(v)) },
  getUsers()   { try{return JSON.parse(localStorage.getItem('ga_users')||'[]')}catch{return[]} },
  setUsers(v)  { localStorage.setItem('ga_users',JSON.stringify(v)) },
  getOrders()  { try{return JSON.parse(localStorage.getItem('ga_orders')||'[]')}catch{return[]} },
  setOrders(v) { localStorage.setItem('ga_orders',JSON.stringify(v)) },
  getSmsLog()  { try{return JSON.parse(localStorage.getItem('ga_sms')||'[]')}catch{return[]} },
  setSmsLog(v) { localStorage.setItem('ga_sms',JSON.stringify(v)) },
  getPrices()  { try{return JSON.parse(localStorage.getItem('ga_prices')||'null')}catch{return null} },
  setPrices(v) { localStorage.setItem('ga_prices',JSON.stringify(v)) },

  // ── Admin oturum (sessionStorage — sekme kapanınca sona erer)
  isAdminLoggedIn() { return sessionStorage.getItem('ga_admin_auth')==='true'; },
  setAdminAuth(v)   { v ? sessionStorage.setItem('ga_admin_auth','true') : sessionStorage.removeItem('ga_admin_auth'); },

  cartCount() { return this.getCart().reduce((a,i)=>a+i.qty,0); },
  cartTotal() {
    const pr=this.getPrices()||{};
    return this.getCart().reduce((a,i)=>{
      const p=PRODUCTS.find(x=>x.id===i.id);
      return a+(pr[i.id]||p?.price||0)*i.qty;
    },0);
  },
  isFav(id)    { return this.getFavs().includes(id); },
  toggleFav(id){
    let f=this.getFavs();
    f.includes(id)?f.splice(f.indexOf(id),1):f.push(id);
    this.setFavs(f); return f.includes(id);
  },
  addToCart(id,qty=1){
    const c=this.getCart(),item=c.find(i=>i.id===id);
    item?item.qty=Math.min(item.qty+qty,99):c.push({id,qty});
    this.setCart(c);
  },
  removeFromCart(id){ this.setCart(this.getCart().filter(i=>i.id!==id)); },
  updateCartQty(id,qty){ const c=this.getCart(),item=c.find(i=>i.id===id); if(item){item.qty=qty;this.setCart(c);} },
  clearCart(){ this.setCart([]); },
  sendSMS(phone,msg){
    const log=this.getSmsLog();
    log.unshift({time:new Date().toLocaleString('tr-TR'),phone,msg});
    if(log.length>500)log.splice(500);
    this.setSmsLog(log);
    console.log(`📱 SMS → ${phone}: ${msg}`);
  },
};

/* ─── YARDIMCILAR ────────────────────────────────────────────── */
function fmt(n){ return Number(n).toFixed(2).replace('.',',')+' ₺'; }
function catLabel(c){
  return {gida:'Temel Gıda',icecek:'İçecek',sut:'Süt & Süt Ürünleri',
    atistirmalik:'Atıştırmalık',temizlik:'Temizlik',kisisel:'Kişisel Bakım',
    dondurulmus:'Dondurulmuş',ekmek:'Ekmek'}[c]||c;
}
function goProduct(id){ window.location.href=`product.html?id=${id}`; }
function goCart()     { window.location.href='cart.html'; }
function goHome()     { window.location.href='index.html'; }

// Admin erişimi — şifre kontrolü
function goAdmin(){
  if(Store.isAdminLoggedIn()){
    window.location.href='admin.html';
  } else {
    if(typeof openAdminLogin==='function') openAdminLogin();
    else _showAdminLoginFallback();
  }
}

function _showAdminLoginFallback(){
  const pw = prompt('Admin şifresini girin:');
  if(pw==='GulAsya2026!'){
    Store.setAdminAuth(true);
    window.location.href='admin.html';
  } else if(pw!==null){
    alert('Hatalı şifre!');
  }
}
