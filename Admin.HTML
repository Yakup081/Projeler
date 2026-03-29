<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Girişi — Gül Asya</title>
<link rel="stylesheet" href="shared.css">
<style>
/* ─── GENEL ─────────────────────────────────────── */
body { background: #f0f0f0; }

/* ─── GİRİŞ EKRANI ──────────────────────────────── */
#login-screen {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #111 0%, #1a0000 60%, #220000 100%);
}
.login-card {
  background: #fff; border-radius: 16px; padding: 40px 36px;
  width: 100%; max-width: 380px; box-shadow: 0 20px 60px rgba(0,0,0,.4);
  text-align: center;
}
.login-logo { font-size: 36px; margin-bottom: 6px; }
.login-title { font-size: 22px; font-weight: 900; margin-bottom: 4px; }
.login-sub { font-size: 13px; color: #888; font-weight: 600; margin-bottom: 28px; }
.login-err { color: var(--r); font-size: 12.5px; font-weight: 700; margin-top: 10px; min-height: 18px; }
.first-time-note {
  background: var(--al); border: 1px solid #fde68a; border-radius: 8px;
  padding: 10px 13px; font-size: 12px; font-weight: 700; color: var(--amber);
  margin-top: 14px; text-align: left; line-height: 1.6;
}

/* ─── ADMIN SHELL ────────────────────────────────── */
#admin-screen { display: none; }
.admin-shell { display: flex; min-height: 100vh; }
.admin-sidebar {
  width: 220px; background: var(--blk); flex-shrink: 0;
  display: flex; flex-direction: column;
  position: fixed; top: 0; left: 0; bottom: 0; z-index: 100; overflow-y: auto;
}
.admin-logo { padding: 20px 18px 16px; border-bottom: 1px solid rgba(255,255,255,.08); }
.admin-logo-title { font-size: 16px; font-weight: 900; color: #fff; display: flex; align-items: center; gap: 8px; }
.admin-logo-sub { font-size: 10.5px; color: rgba(255,255,255,.4); font-weight: 700; margin-top: 2px; }
.admin-nav { flex: 1; padding: 12px 0; }
.anav-item {
  display: flex; align-items: center; gap: 10px; padding: 11px 18px;
  font-size: 13px; font-weight: 700; color: rgba(255,255,255,.55);
  cursor: pointer; transition: all .15s; border-left: 3px solid transparent;
  border: none; background: none; width: 100%; text-align: left;
}
.anav-item:hover { color: #fff; background: rgba(255,255,255,.06); }
.anav-item.active { color: #fff; background: rgba(220,38,38,.15); border-left: 3px solid var(--r); }
.anav-icon { font-size: 17px; width: 22px; text-align: center; flex-shrink: 0; }
.anav-badge { margin-left: auto; background: var(--r); color: #fff; font-size: 10px; font-weight: 900; padding: 1px 7px; border-radius: 100px; }
.admin-sidebar-footer { padding: 16px 18px; border-top: 1px solid rgba(255,255,255,.08); }

.admin-main { margin-left: 220px; flex: 1; display: flex; flex-direction: column; min-height: 100vh; }
.admin-topbar {
  background: #fff; border-bottom: 1px solid #eee; padding: 0 24px;
  display: flex; align-items: center; height: 56px; gap: 16px;
  position: sticky; top: 0; z-index: 50; box-shadow: var(--sh);
}
.admin-topbar-title { font-size: 16px; font-weight: 900; flex: 1; }
.admin-content { padding: 22px 24px; flex: 1; }

/* STATS */
.stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-bottom: 22px; }
@media(max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr)}}
.stat-card { background: #fff; border-radius: var(--rad); padding: 18px 20px; box-shadow: var(--sh); border-left: 4px solid var(--blk); }
.stat-card.red{border-left-color:var(--r)}.stat-card.green{border-left-color:var(--green)}.stat-card.amber{border-left-color:var(--amber)}.stat-card.blue{border-left-color:var(--blue)}
.stat-n { font-size: 28px; font-weight: 900; letter-spacing: -1px; line-height: 1; margin-bottom: 4px; }
.stat-l { font-size: 11.5px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: .05em; }

/* CARDS / TABLES */
.acard { background: #fff; border-radius: var(--rad); box-shadow: var(--sh); overflow: hidden; margin-bottom: 18px; }
.acard-header { padding: 14px 18px; border-bottom: 1px solid #eee; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.acard-title { font-size: 15px; font-weight: 900; }
.table-scroll { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; white-space: nowrap; }
th { padding: 9px 14px; text-align: left; font-size: 11px; font-weight: 900; color: #888; text-transform: uppercase; letter-spacing: .06em; background: #fafafa; border-bottom: 1px solid #eee; }
td { padding: 11px 14px; font-size: 13px; font-weight: 600; border-bottom: 1px solid #f5f5f5; vertical-align: middle; }
tr:last-child td { border-bottom: none; }
tr:hover td { background: #fafafa; }
.status-chip { display: inline-flex; align-items: center; gap: 4px; padding: 3px 9px; border-radius: 100px; font-size: 10.5px; font-weight: 900; }
.s-new{background:#dbeafe;color:#1d4ed8}.s-prep{background:#fef3c7;color:#b45309}.s-sent{background:#dcfce7;color:#15803d}.s-done{background:#f3f4f6;color:#374151}.s-cancel{background:#fee2e2;color:#991b1b}

/* ADMIN TABS */
.atab-content { display: none; }
.atab-content.active { display: block; }
.admin-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }
.admin-form-grid.g3 { grid-template-columns: 1fr 1fr 1fr; }
@media(max-width:600px){.admin-form-grid,.admin-form-grid.g3{grid-template-columns:1fr}}

/* TABLE SEARCH */
.table-search { padding: 10px 18px; border-bottom: 1px solid #eee; }
.table-search input { width: 100%; padding: 8px 14px; border: 1.5px solid #eee; border-radius: 7px; font-size: 13px; font-weight: 600; outline: none; }
.table-search input:focus { border-color: var(--r); }

/* SMS TERMINAL */
.sms-terminal { background: #111; color: #0f0; font-family: var(--mono); font-size: 12px; padding: 16px; border-radius: 9px; max-height: 320px; overflow-y: auto; line-height: 1.9; }
.sms-row { border-bottom: 1px solid #1a1a1a; padding: 4px 0; }
.sms-time { color: #555; }
.sms-phone { color: #fbbf24; }
.sms-msg { color: #d4d4d4; }

/* PRODUCT IMAGE */
.prod-img-preview { width: 48px; height: 48px; border-radius: 7px; border: 1px solid #eee; object-fit: contain; background: #f9f9f9; padding: 3px; }

/* MINI BUTTONS */
.mbtn { padding: 5px 10px; border-radius: 6px; font-size: 11.5px; font-weight: 800; cursor: pointer; border: none; transition: all .15s; }
.mbtn-ghost { background: #f5f5f5; color: #444; }
.mbtn-ghost:hover { background: #e5e5e5; }
.mbtn-danger { background: var(--rl); color: var(--r); }
.mbtn-danger:hover { background: var(--r); color: #fff; }
.mbtn-success { background: var(--gl); color: var(--green); }
.mbtn-success:hover { background: var(--green); color: #fff; }
.mbtn-primary { background: var(--blk); color: #fff; }
.mbtn-primary:hover { background: var(--r); }

/* IMG CHANGE SECTION */
.img-change-box { border: 2px dashed #e5e5e5; border-radius: 10px; padding: 16px; text-align: center; margin-top: 10px; }
.img-change-box img { width: 80px; height: 80px; object-fit: contain; border-radius: 8px; border: 1px solid #eee; margin: 0 auto 10px; }
.img-change-box.drag-over { border-color: var(--r); background: var(--rv); }
</style>
</head>
<body>

<!-- ══════════════════════════════════════════
  GİRİŞ EKRANI
══════════════════════════════════════════ -->
<div id="login-screen">
  <div class="login-card">
    <div class="login-logo">🌹</div>
    <div class="login-title">Admin Girişi</div>
    <div class="login-sub">Gül Asya Mini Market Yönetim Paneli</div>
    <div class="form-group" style="text-align:left">
      <label class="form-label">Kullanıcı Adı</label>
      <input class="form-input" id="admin-user" placeholder="admin" autocomplete="username">
    </div>
    <div class="form-group" style="text-align:left">
      <label class="form-label">Şifre</label>
      <input class="form-input" id="admin-pass" type="password" placeholder="••••••••" autocomplete="current-password">
    </div>
    <div class="login-err" id="login-err"></div>
    <button class="btn btn-primary btn-block btn-lg" style="margin-top:8px" onclick="tryAdminLogin()">Giriş Yap</button>
    <div class="first-time-note" id="first-time-note" style="display:none">
      ℹ️ Gül Asya Admin Paneli — Ayarlar &gt; Şifre bölümünden şifrenizi değiştirebilirsiniz.
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════
  ADMIN PANELİ
══════════════════════════════════════════ -->
<div id="admin-screen">
<div class="admin-shell">

  <!-- SIDEBAR -->
  <aside class="admin-sidebar">
    <div class="admin-logo">
      <div class="admin-logo-title">🌹 Gül Asya</div>
      <div class="admin-logo-sub">Admin Paneli v3.0</div>
    </div>
    <nav class="admin-nav">
      <button class="anav-item active" onclick="showTab('dashboard',this)"><span class="anav-icon">📊</span>Dashboard</button>
      <button class="anav-item" onclick="showTab('orders',this)"><span class="anav-icon">📦</span>Siparişler<span class="anav-badge" id="new-order-badge">0</span></button>
      <button class="anav-item" onclick="showTab('products',this)"><span class="anav-icon">🛒</span>Ürünler</button>
      <button class="anav-item" onclick="showTab('users',this)"><span class="anav-icon">👥</span>Kullanıcılar</button>
      <button class="anav-item" onclick="showTab('prices',this)"><span class="anav-icon">💰</span>Fiyat Yönetimi</button>
      <button class="anav-item" onclick="showTab('sms',this)"><span class="anav-icon">📱</span>SMS Kayıtları</button>
      <button class="anav-item" onclick="showTab('settings',this)"><span class="anav-icon">⚙️</span>Ayarlar</button>
    </nav>
    <div class="admin-sidebar-footer">
      <button class="btn btn-sm btn-block" onclick="window.open('index.html','_blank')" style="background:rgba(255,255,255,.1);color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.15);border-radius:7px;padding:8px;font-size:12px;font-weight:700;cursor:pointer">🌐 Siteyi Aç</button>
      <button class="btn btn-sm btn-block" onclick="adminLogout()" style="background:rgba(220,38,38,.15);color:#fca5a5;border:none;border-radius:7px;padding:8px;font-size:12px;font-weight:700;cursor:pointer;margin-top:6px;width:100%">← Çıkış Yap</button>
    </div>
  </aside>

  <!-- MAIN -->
  <div class="admin-main">
    <div class="admin-topbar">
      <div class="admin-topbar-title" id="admin-page-title">Dashboard</div>
      <div style="font-size:12px;color:#aaa;font-weight:700" id="admin-clock"></div>
      <button class="btn btn-ghost btn-sm" onclick="refreshAll()">↻ Yenile</button>
    </div>

    <div class="admin-content">

      <!-- DASHBOARD -->
      <div class="atab-content active" id="tab-dashboard">
        <div class="stats-grid">
          <div class="stat-card red"><div class="stat-n" id="s-revenue">₺0</div><div class="stat-l">Toplam Gelir</div></div>
          <div class="stat-card green"><div class="stat-n" id="s-orders">0</div><div class="stat-l">Sipariş Sayısı</div></div>
          <div class="stat-card blue"><div class="stat-n" id="s-users">0</div><div class="stat-l">Kayıtlı Üye</div></div>
          <div class="stat-card amber"><div class="stat-n" id="s-products">0</div><div class="stat-l">Aktif Ürün</div></div>
        </div>
        <div class="acard">
          <div class="acard-header">
            <span class="acard-title">Son Siparişler</span>
            <button class="mbtn mbtn-primary" onclick="showTab('orders',null)">Tümünü Gör</button>
          </div>
          <div class="table-scroll" id="dash-orders"></div>
        </div>
      </div>

      <!-- SİPARİŞLER -->
      <div class="atab-content" id="tab-orders">
        <div class="acard">
          <div class="acard-header">
            <span class="acard-title">Tüm Siparişler</span>
            <select id="order-filter" onchange="renderOrdersTable()" style="padding:7px 11px;border:1.5px solid #eee;border-radius:7px;font-weight:700;font-family:inherit;font-size:12.5px;outline:none">
              <option value="">Tüm Durumlar</option>
              <option value="Yeni">Yeni</option>
              <option value="Hazırlanıyor">Hazırlanıyor</option>
              <option value="Yolda">Yolda</option>
              <option value="Teslim Edildi">Teslim Edildi</option>
              <option value="İptal">İptal</option>
            </select>
          </div>
          <div class="table-search"><input type="text" id="order-search" placeholder="Sipariş no, müşteri veya telefon ara…" oninput="renderOrdersTable()"></div>
          <div class="table-scroll" id="orders-table"></div>
        </div>
      </div>

      <!-- ÜRÜNLER -->
      <div class="atab-content" id="tab-products">
        <div class="acard">
          <div class="acard-header">
            <span class="acard-title">Ürün Yönetimi <span style="font-size:12px;color:#aaa;font-weight:600" id="prod-count-label"></span></span>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <select id="prod-cat-f" onchange="renderProductsTable()" style="padding:7px 11px;border:1.5px solid #eee;border-radius:7px;font-weight:700;font-family:inherit;font-size:12.5px;outline:none">
                <option value="">Tüm Kategoriler</option>
                <option value="gida">Temel Gıda</option>
                <option value="icecek">İçecek</option>
                <option value="sut">Süt Ürünleri</option>
                <option value="atistirmalik">Atıştırmalık</option>
                <option value="temizlik">Temizlik</option>
                <option value="kisisel">Kişisel Bakım</option>
                <option value="dondurulmus">Dondurulmuş</option>
                <option value="ekmek">Ekmek</option>
              </select>
              <button class="btn btn-primary btn-sm" onclick="openProductModal()">+ Yeni Ürün Ekle</button>
            </div>
          </div>
          <div class="table-search"><input type="text" id="prod-search" placeholder="Ürün adı veya marka ara…" oninput="renderProductsTable()"></div>
          <div class="table-scroll" id="products-table"></div>
        </div>
      </div>

      <!-- KULLANICILAR -->
      <div class="atab-content" id="tab-users">
        <div class="acard">
          <div class="acard-header"><span class="acard-title">Kayıtlı Kullanıcılar</span></div>
          <div class="table-search"><input type="text" id="user-search" placeholder="İsim, e-posta veya telefon ara…" oninput="renderUsersTable()"></div>
          <div class="table-scroll" id="users-table"></div>
        </div>
      </div>

      <!-- FİYAT YÖNETİMİ -->
      <div class="atab-content" id="tab-prices">
        <div class="acard">
          <div class="acard-header">
            <span class="acard-title">Fiyat Yönetimi</span>
            <div style="display:flex;gap:8px">
              <button class="mbtn mbtn-ghost" onclick="resetAllPrices()">↺ Fiyatları Sıfırla</button>
            </div>
          </div>
          <div class="table-search"><input type="text" id="price-search" placeholder="Ürün ara…" oninput="renderPricesTable()"></div>
          <div class="table-scroll" id="prices-table"></div>
        </div>
      </div>

      <!-- SMS -->
      <div class="atab-content" id="tab-sms">
        <div class="acard">
          <div class="acard-header">
            <span class="acard-title">SMS Kayıtları</span>
            <div style="display:flex;gap:8px;align-items:center">
              <span style="font-size:12px;font-weight:700;color:#888" id="sms-count-lbl"></span>
              <button class="mbtn mbtn-danger" onclick="clearSms()">🗑️ Temizle</button>
            </div>
          </div>
          <div style="padding:16px">
            <div class="sms-terminal" id="sms-terminal"><span style="color:#555">Yükleniyor…</span></div>
          </div>
        </div>
      </div>

      <!-- AYARLAR -->
      <div class="atab-content" id="tab-settings">
        <div class="acard">
          <div class="acard-header"><span class="acard-title">Admin Şifresini Değiştir</span></div>
          <div style="padding:20px;max-width:400px">
            <div class="form-group"><label class="form-label">Mevcut Şifre</label><input class="form-input" id="set-cur" type="password"></div>
            <div class="form-group"><label class="form-label">Yeni Şifre</label><input class="form-input" id="set-new" type="password"></div>
            <div class="form-group"><label class="form-label">Yeni Şifre Tekrar</label><input class="form-input" id="set-new2" type="password"></div>
            <div id="set-err" class="form-error"></div>
            <div id="set-ok" class="form-success"></div>
            <button class="btn btn-primary" onclick="changeAdminPass()">Şifreyi Güncelle</button>
          </div>
        </div>
        <div class="acard">
          <div class="acard-header"><span class="acard-title">Veri Yönetimi</span></div>
          <div style="padding:20px;display:flex;gap:12px;flex-wrap:wrap">
            <button class="btn btn-ghost btn-sm" onclick="exportData()">📥 Verileri Dışa Aktar</button>
            <button class="btn btn-ghost btn-sm" onclick="AdminProducts.resetOverrides();toast('↺','Ürün değişiklikleri sıfırlandı','i');renderProductsTable()">🔄 Ürün Değişikliklerini Sıfırla</button>
          </div>
        </div>
      </div>

    </div><!-- /admin-content -->
  </div><!-- /admin-main -->
</div><!-- /admin-shell -->
</div><!-- /admin-screen -->

<!-- ─── MODALS ─────────────────────────────────────────── -->

<!-- SİPARİŞ DETAYI -->
<div class="modal-overlay" id="order-detail-modal">
  <div class="modal-box wide">
    <button class="modal-close">✕</button>
    <h2 class="modal-title">📦 Sipariş Detayı</h2>
    <div id="order-detail-body"></div>
  </div>
</div>

<!-- ÜRÜN EKLE / DÜZENLE -->
<div class="modal-overlay" id="product-modal">
  <div class="modal-box wide" style="max-width:600px">
    <button class="modal-close">✕</button>
    <h2 class="modal-title" id="pm-title">Yeni Ürün Ekle</h2>
    <div class="admin-form-grid">
      <div class="form-group"><label class="form-label">Marka *</label><input class="form-input" id="pm-brand" placeholder="Ülker"></div>
      <div class="form-group"><label class="form-label">Ürün Adı *</label><input class="form-input" id="pm-name" placeholder="Çikolatalı Gofret"></div>
      <div class="form-group"><label class="form-label">Boyut/Miktar *</label><input class="form-input" id="pm-size" placeholder="100 g"></div>
      <div class="form-group"><label class="form-label">Birim *</label><input class="form-input" id="pm-unit" placeholder="adet / paket"></div>
      <div class="form-group"><label class="form-label">Satış Fiyatı (₺) *</label><input class="form-input" id="pm-price" type="number" step="0.01" min="0"></div>
      <div class="form-group"><label class="form-label">Eski Fiyat (₺)</label><input class="form-input" id="pm-oldprice" type="number" step="0.01" placeholder="opsiyonel"></div>
      <div class="form-group"><label class="form-label">Stok % (1-99)</label><input class="form-input" id="pm-stock" type="number" min="1" max="99" value="75"></div>
      <div class="form-group"><label class="form-label">Emoji</label><input class="form-input" id="pm-emoji" placeholder="🛒"></div>
    </div>
    <div class="form-group" style="margin-top:8px"><label class="form-label">Kategori *</label>
      <select class="form-input" id="pm-cat">
        <option value="gida">Temel Gıda</option>
        <option value="icecek">İçecek</option>
        <option value="sut">Süt & Süt Ürünleri</option>
        <option value="atistirmalik">Atıştırmalık</option>
        <option value="temizlik">Temizlik</option>
        <option value="kisisel">Kişisel Bakım</option>
        <option value="dondurulmus">Dondurulmuş</option>
        <option value="ekmek">Ekmek</option>
      </select>
    </div>

    <!-- GÖRSEL ─── özel bölüm -->
    <div class="form-group">
      <label class="form-label">Ürün Görseli</label>
      <div class="img-change-box" id="img-preview-box">
        <img id="pm-img-preview" src="" alt="" style="display:none">
        <div id="img-drop-hint" style="color:#aaa;font-size:13px;font-weight:700;margin-bottom:10px">
          🖼️ URL girin veya dosya yükleyin
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">
          <input class="form-input" id="pm-img" placeholder="https://... (görsel URL)" style="flex:1;min-width:200px" oninput="previewImg(this.value)">
          <label class="btn btn-ghost btn-sm" style="cursor:pointer">
            📁 Dosya Seç
            <input type="file" id="pm-img-file" accept="image/*" style="display:none" onchange="handleImgFile(this)">
          </label>
        </div>
      </div>
    </div>

    <div class="form-group"><label class="form-label">Açıklama</label><textarea class="form-input" id="pm-desc" rows="3" placeholder="Ürün açıklaması…"></textarea></div>
    <div id="pm-err" class="form-error"></div>
    <div style="display:flex;gap:10px;margin-top:10px">
      <button class="btn btn-primary" style="flex:1" onclick="saveProduct()">💾 Kaydet</button>
      <button class="btn btn-ghost" onclick="closeModal('product-modal')" style="flex:.4">İptal</button>
    </div>
  </div>
</div>

<div id="toast-container"></div>

<script src="products.js"></script>
<script>
/* ══════════════════════════════════════════════
   ADMİN GİRİŞ SİSTEMİ
══════════════════════════════════════════════ */
const DEFAULT_ADMIN = { user: 'admin', passHash: simpleHash('GulAsya@2026!') };

function tryAdminLogin() {
  const user = document.getElementById('admin-user').value.trim();
  const pass = document.getElementById('admin-pass').value;
  const err  = document.getElementById('login-err');

  if (!user || !pass) { err.textContent = 'Kullanıcı adı ve şifre zorunludur.'; return; }

  const savedHash = Store.getAdminHash() || DEFAULT_ADMIN.passHash;
  const inputHash = simpleHash(pass);

  if (user !== 'admin' || inputHash !== savedHash) {
    err.textContent = 'Kullanıcı adı veya şifre hatalı!';
    return;
  }
  err.textContent = '';
  Store.setAdminSession();
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('admin-screen').style.display = 'block';
  initAdmin();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('login-screen').style.display !== 'none') tryAdminLogin();
});

function adminLogout() {
  Store.clearAdminSession();
  location.reload();
}

/* İlk yükleme */
document.addEventListener('DOMContentLoaded', () => {
  // İpucu göster
  document.getElementById('first-time-note').style.display = 'block';

  // Aktif oturum var mı?
  if (Store.isAdminLoggedIn()) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-screen').style.display = 'block';
    initAdmin();
  }
});

/* ══════════════════════════════════════════════
   ADMİN PANEL BAŞLATMA
══════════════════════════════════════════════ */
function initAdmin() {
  updateClock();
  setInterval(updateClock, 1000);
  refreshAll();
}

function updateClock() {
  const el = document.getElementById('admin-clock');
  if (el) el.textContent = new Date().toLocaleString('tr-TR');
}

function refreshAll() {
  renderDashboard();
  renderOrdersTable();
  renderProductsTable();
  renderUsersTable();
  renderPricesTable();
  renderSmsLog();
  updateBadges();
}

function showTab(tab, btn) {
  document.querySelectorAll('.atab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.anav-item').forEach(b => b.classList.remove('active'));
  const tc = document.getElementById('tab-' + tab);
  if (tc) tc.classList.add('active');
  if (btn) btn.classList.add('active');
  const titles = {
    dashboard:'Dashboard', orders:'Siparişler', products:'Ürün Yönetimi',
    users:'Kullanıcılar', prices:'Fiyat Yönetimi', sms:'SMS Kayıtları', settings:'Ayarlar'
  };
  document.getElementById('admin-page-title').textContent = titles[tab] || tab;
}

function updateBadges() {
  const n = Store.getOrders().filter(o => o.status === 'Yeni').length;
  const el = document.getElementById('new-order-badge');
  if (el) { el.textContent = n; el.style.display = n ? 'inline' : 'none'; }
}

/* ── DASHBOARD ──────────────────────────────────────── */
function renderDashboard() {
  const orders  = Store.getOrders();
  const revenue = orders.filter(o => o.status !== 'İptal').reduce((a, o) => a + o.total, 0);
  document.getElementById('s-revenue').textContent  = fmt(revenue);
  document.getElementById('s-orders').textContent   = orders.length;
  document.getElementById('s-users').textContent    = Store.getUsers().length;
  document.getElementById('s-products').textContent = AdminProducts.getAll().length;
  const last10 = [...orders].reverse().slice(0, 10);
  document.getElementById('dash-orders').innerHTML = ordersHTML(last10);
}

/* ── SİPARİŞLER ──────────────────────────────────────── */
function renderOrdersTable() {
  let orders = [...Store.getOrders()].reverse();
  const filter = document.getElementById('order-filter')?.value;
  const search = (document.getElementById('order-search')?.value || '').toLowerCase();
  if (filter) orders = orders.filter(o => o.status === filter);
  if (search) orders = orders.filter(o =>
    o.id.toLowerCase().includes(search) ||
    (o.userName || '').toLowerCase().includes(search) ||
    (o.phone || '').includes(search)
  );
  document.getElementById('orders-table').innerHTML = ordersHTML(orders, true);
}

function ordersHTML(orders) {
  if (!orders.length) return '<div style="padding:20px;text-align:center;color:#aaa;font-weight:700">Sipariş bulunamadı</div>';
  const sm = { Yeni:'s-new', Hazırlanıyor:'s-prep', Yolda:'s-sent', 'Teslim Edildi':'s-done', İptal:'s-cancel' };
  return `<table><thead><tr>
    <th>#Kod</th><th>Müşteri</th><th>Telefon</th><th>Toplam</th><th>Tarih</th><th>Durum</th><th>İşlem</th>
  </tr></thead><tbody>
  ${orders.map(o => `<tr>
    <td style="font-family:var(--mono);font-size:12px">${o.id}</td>
    <td><strong>${o.userName || o.user}</strong></td>
    <td style="font-size:12.5px">${o.phone}</td>
    <td style="font-weight:900">${fmt(o.total)}</td>
    <td style="font-size:11.5px;color:#888">${o.date}</td>
    <td><span class="status-chip ${sm[o.status]||'s-new'}">${o.status}</span></td>
    <td style="display:flex;gap:5px">
      <button class="mbtn mbtn-ghost" onclick="openOrderDetail('${o.id}')">👁 Detay</button>
      <select style="padding:4px 7px;border:1px solid #eee;border-radius:6px;font-size:11.5px;font-weight:700;font-family:inherit;cursor:pointer;outline:none" onchange="changeStatus('${o.id}',this.value);this.value=''">
        <option value="">Durum Değiştir…</option>
        ${['Yeni','Hazırlanıyor','Yolda','Teslim Edildi','İptal'].map(s=>`<option value="${s}">${s}</option>`).join('')}
      </select>
    </td>
  </tr>`).join('')}
  </tbody></table>`;
}

function openOrderDetail(id) {
  const o = Store.getOrders().find(x => x.id === id);
  if (!o) return;
  document.getElementById('order-detail-body').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px;margin-bottom:16px">
      <div><strong>Sipariş No:</strong><br><span style="font-family:var(--mono)">#${o.id}</span></div>
      <div><strong>Tarih:</strong><br>${o.date}</div>
      <div><strong>Müşteri:</strong><br>${o.userName}</div>
      <div><strong>Telefon:</strong><br>${o.phone}</div>
      <div><strong>Ödeme:</strong><br>${o.paytype==='kart'?'💳 Kart'+(o.cardLast4?` (*${o.cardLast4})`:''): o.paytype==='kapida'?'💵 Kapıda Nakit':'💳 Kapıda Kart'}</div>
      <div><strong>Teslimat:</strong><br>${o.deliveryType==='express'?'⚡ Ekspres':o.deliveryType==='free'?'🎁 Ücretsiz':'🚚 Standart'}</div>
      <div style="grid-column:1/-1"><strong>Adres:</strong><br>${o.addr}</div>
      ${o.note?`<div style="grid-column:1/-1"><strong>Not:</strong><br>${o.note}</div>`:''}
    </div>
    <div style="background:#f5f5f5;border-radius:9px;padding:14px;margin-bottom:14px;font-size:13px">
      ${o.items.map(item=>{
        const p=AdminProducts.getAll().find(x=>x.id===item.id)||{name:'Ürün #'+item.id,emoji:'📦'};
        const pr=item.price||p.price||0;
        return `<div style="display:flex;justify-content:space-between;padding:3px 0;font-weight:700"><span>${p.emoji||'📦'} ${p.name} ×${item.qty}</span><span>${fmt(pr*item.qty)}</span></div>`;
      }).join('')}
      <div style="display:flex;justify-content:space-between;border-top:1px solid #ddd;margin-top:6px;padding-top:8px;font-size:15px;font-weight:900"><span>Toplam</span><span>${fmt(o.total)}</span></div>
    </div>
    <div class="form-group">
      <label class="form-label">Durum Güncelle & SMS Gönder</label>
      <select class="form-input" id="od-status-sel">
        ${['Yeni','Hazırlanıyor','Yolda','Teslim Edildi','İptal'].map(s=>`<option value="${s}"${s===o.status?' selected':''}>${s}</option>`).join('')}
      </select>
    </div>
    <div style="display:flex;gap:10px;margin-top:8px">
      <button class="btn btn-primary" style="flex:1" onclick="saveOrderStatus('${o.id}')">✓ Güncelle</button>
      <button class="btn btn-ghost" onclick="closeModal('order-detail-modal')" style="flex:.4">Kapat</button>
    </div>`;
  openModal('order-detail-modal');
}

function saveOrderStatus(id) {
  const st = document.getElementById('od-status-sel')?.value;
  if (!st) return;
  changeStatus(id, st);
  closeModal('order-detail-modal');
}

function changeStatus(id, st) {
  if (!st) return;
  const orders = Store.getOrders();
  const o = orders.find(x => x.id === id);
  if (!o) return;
  o.status = st;
  Store.setOrders(orders);
  const msgs = {
    Hazırlanıyor: `#${id} siparişiniz hazırlanıyor. 🌹`,
    Yolda: `#${id} siparişiniz yola çıktı! Tahmini 30-60 dk. 🚚`,
    'Teslim Edildi': `#${id} siparişiniz teslim edildi. Afiyet olsun! 🌹`,
    İptal: `#${id} siparişiniz iptal edildi. Detay için arayın.`,
  };
  if (msgs[st] && o.phone) Store.sendSMS(o.phone, `Gül Asya Mini Market: ${msgs[st]}`);
  toast('✓', `#${id} → ${st}`, 's');
  renderOrdersTable(); renderDashboard(); updateBadges(); renderSmsLog();
}

/* ── ÜRÜNLER ──────────────────────────────────────────── */
function renderProductsTable() {
  const catF   = document.getElementById('prod-cat-f')?.value || '';
  const search = (document.getElementById('prod-search')?.value || '').toLowerCase();
  let list = AdminProducts.getAll();
  if (catF)   list = list.filter(p => p.cat === catF);
  if (search) list = list.filter(p => (p.name+' '+p.brand).toLowerCase().includes(search));

  const lbl = document.getElementById('prod-count-label');
  if (lbl) lbl.textContent = `(${list.length} ürün)`;

  document.getElementById('products-table').innerHTML = `
    <table><thead><tr>
      <th>Görsel</th><th>Marka / Ürün</th><th>Boyut</th><th>Kategori</th><th>Fiyat</th><th>Stok</th><th>İşlem</th>
    </tr></thead><tbody>
    ${list.map(p=>{
      const sc = p.stock >= 50 ? 'var(--green)' : p.stock >= 20 ? 'var(--amber)' : 'var(--r)';
      return `<tr>
        <td><img class="prod-img-preview" src="${p.img||''}" alt=""
          onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>${p.emoji||'🛒'}</text></svg>'"></td>
        <td><div style="font-weight:800">${p.name}</div><div style="font-size:11px;color:#aaa">${p.brand}</div></td>
        <td style="font-size:12px;color:#888">${p.size}</td>
        <td><span class="badge badge-k" style="white-space:nowrap">${catLabel(p.cat)}</span></td>
        <td style="font-weight:900">${fmt(p.price)}</td>
        <td>
          <div style="display:flex;align-items:center;gap:6px">
            <div style="width:40px;height:5px;background:#f0f0f0;border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${p.stock}%;background:${sc};border-radius:3px"></div>
            </div>
            <span style="font-size:12px;font-weight:800;color:${sc}">${p.stock}%</span>
          </div>
        </td>
        <td style="display:flex;gap:5px;flex-wrap:wrap">
          <button class="mbtn mbtn-ghost" onclick="openProductModal(${p.id})">✏️ Düzenle</button>
          <button class="mbtn mbtn-danger" onclick="deleteProduct(${p.id})">🗑️</button>
        </td>
      </tr>`;
    }).join('')}
    </tbody></table>`;
}

/* ── ÜRÜN MODAL ──────────────────────────────────────── */
let editingProdId = null;

function openProductModal(id = null) {
  editingProdId = id;
  document.getElementById('pm-title').textContent = id ? 'Ürünü Düzenle' : 'Yeni Ürün Ekle';
  const clear = ['pm-brand','pm-name','pm-size','pm-unit','pm-price','pm-oldprice','pm-desc','pm-img'];
  if (id) {
    const p = AdminProducts.getAll().find(x => x.id === id);
    if (!p) return;
    document.getElementById('pm-brand').value    = p.brand   || '';
    document.getElementById('pm-name').value     = p.name    || '';
    document.getElementById('pm-size').value     = p.size    || '';
    document.getElementById('pm-unit').value     = p.unit    || '';
    document.getElementById('pm-price').value    = p.price   || '';
    document.getElementById('pm-oldprice').value = p.oldPrice|| '';
    document.getElementById('pm-stock').value    = p.stock   || 75;
    document.getElementById('pm-emoji').value    = p.emoji   || '🛒';
    document.getElementById('pm-cat').value      = p.cat     || 'gida';
    document.getElementById('pm-img').value      = p.img     || '';
    document.getElementById('pm-desc').value     = p.desc    || '';
    previewImg(p.img || '');
  } else {
    clear.forEach(f => { const el=document.getElementById(f); if(el) el.value=''; });
    document.getElementById('pm-stock').value = '75';
    document.getElementById('pm-emoji').value = '🛒';
    document.getElementById('pm-img-preview').style.display = 'none';
    document.getElementById('img-drop-hint').style.display = 'block';
  }
  document.getElementById('pm-err').textContent = '';
  openModal('product-modal');
}

function previewImg(url) {
  const prev = document.getElementById('pm-img-preview');
  const hint = document.getElementById('img-drop-hint');
  if (url) {
    prev.src = url; prev.style.display = 'block'; hint.style.display = 'none';
    prev.onerror = () => { prev.style.display = 'none'; hint.style.display = 'block'; };
  } else {
    prev.style.display = 'none'; hint.style.display = 'block';
  }
}

function handleImgFile(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const dataUrl = e.target.result;
    document.getElementById('pm-img').value = dataUrl;
    previewImg(dataUrl);
    toast('🖼️', 'Görsel yüklendi (base64)', 's');
  };
  reader.readAsDataURL(file);
}

function saveProduct() {
  const brand    = document.getElementById('pm-brand').value.trim();
  const name     = document.getElementById('pm-name').value.trim();
  const size     = document.getElementById('pm-size').value.trim();
  const unit     = document.getElementById('pm-unit').value.trim();
  const price    = parseFloat(document.getElementById('pm-price').value);
  const oldPrice = parseFloat(document.getElementById('pm-oldprice').value) || null;
  const stock    = parseInt(document.getElementById('pm-stock').value)  || 75;
  const emoji    = document.getElementById('pm-emoji').value.trim()     || '🛒';
  const cat      = document.getElementById('pm-cat').value;
  const img      = document.getElementById('pm-img').value.trim();
  const desc     = document.getElementById('pm-desc').value.trim();
  const err      = document.getElementById('pm-err');

  if (!brand||!name||!size||!unit||isNaN(price)||price<=0) {
    err.textContent = '* ile işaretli alanları doldurun.'; return;
  }

  if (editingProdId) {
    /* Mevcut ürünü güncelle — override olarak kaydet (kalıcı!) */
    AdminProducts.applyOverride(editingProdId, { brand, name, size, unit, price, oldPrice, stock, emoji, cat, img, desc });
    toast('✓', `${name} güncellendi ve kaydedildi`, 's');
  } else {
    /* Yeni ürün — extra products'a ekle (kalıcı!) */
    AdminProducts.addProduct({ brand, name, size, unit, price, oldPrice, stock, emoji, cat, img, desc, features:[], minOrder:1, maxOrder:20 });
    toast('✓', `${name} eklendi`, 's');
  }

  closeModal('product-modal');
  renderProductsTable();
  renderDashboard();
}

function deleteProduct(id) {
  const p = AdminProducts.getAll().find(x => x.id === id);
  if (!p) return;
  if (!confirm(`"${p.name}" ürününü silmek istediğinizden emin misiniz?`)) return;
  AdminProducts.deleteProduct(id);
  toast('🗑️', `${p.name} silindi`, 'i');
  renderProductsTable(); renderDashboard();
}

/* ── KULLANICILAR ────────────────────────────────────── */
function renderUsersTable() {
  const search = (document.getElementById('user-search')?.value || '').toLowerCase();
  let users = Store.getUsers();
  if (search) users = users.filter(u => (u.name+' '+u.surname+' '+u.email+' '+(u.phone||'')).toLowerCase().includes(search));
  const el = document.getElementById('users-table');
  if (!users.length) { el.innerHTML='<div style="padding:20px;text-align:center;color:#aaa;font-weight:700">Henüz kayıtlı kullanıcı yok</div>'; return; }
  el.innerHTML = `<table><thead><tr>
    <th>Ad Soyad</th><th>E-posta</th><th>Telefon</th><th>Adres</th><th>Kayıt</th><th>Sipariş</th><th>İşlem</th>
  </tr></thead><tbody>
  ${users.map(u=>{
    const oc = Store.getOrders().filter(o=>o.user===u.email).length;
    return `<tr>
      <td><strong>${u.name} ${u.surname}</strong></td>
      <td style="font-size:12px">${u.email}</td>
      <td>${u.phone||'-'}</td>
      <td style="font-size:12px;max-width:160px;overflow:hidden;text-overflow:ellipsis">${u.address||'-'}</td>
      <td style="font-size:11.5px;color:#888">${u.createdAt}</td>
      <td style="font-weight:900;text-align:center">${oc}</td>
      <td><button class="mbtn mbtn-danger" onclick="deleteUser(${u.id})">🗑️</button></td>
    </tr>`;
  }).join('')}
  </tbody></table>`;
}

function deleteUser(id) {
  if (!confirm('Bu kullanıcıyı silmek istediğinizden emin misiniz?')) return;
  Store.setUsers(Store.getUsers().filter(u => u.id !== id));
  renderUsersTable(); renderDashboard();
  toast('🗑️', 'Kullanıcı silindi', 'i');
}

/* ── FİYAT YÖNETİMİ ─────────────────────────────────── */
function renderPricesTable() {
  const search = (document.getElementById('price-search')?.value || '').toLowerCase();
  let list = AdminProducts.getAll();
  if (search) list = list.filter(p => (p.name+' '+p.brand).toLowerCase().includes(search));
  const overrides = _loadOverrides();

  document.getElementById('prices-table').innerHTML = `
    <table><thead><tr>
      <th>Ürün</th><th>Orijinal</th><th>Aktif</th><th>Yeni Satış Fiyatı</th><th>Eski Fiyat</th><th>İşlem</th>
    </tr></thead><tbody>
    ${list.map(p => `<tr>
      <td><strong>${p.emoji||''} ${p.name}</strong><br><span style="font-size:11px;color:#aaa">${p.brand} · ${p.size}</span></td>
      <td style="font-size:12.5px;color:#aaa">${fmt(BASE_PRODUCTS.find(b=>b.id===p.id)?.price || p.price)}</td>
      <td style="font-weight:900;color:var(--r)">${fmt(p.price)}</td>
      <td><input class="form-input" id="np-${p.id}" value="${p.price.toFixed(2)}" type="number" step="0.01" min="0" style="padding:6px 10px;font-size:12px;width:110px"></td>
      <td><input class="form-input" id="op-${p.id}" value="${p.oldPrice||''}" type="number" step="0.01" placeholder="opsiyonel" style="padding:6px 10px;font-size:12px;width:110px"></td>
      <td><button class="mbtn mbtn-success" onclick="savePrice(${p.id})">✓ Kaydet</button></td>
    </tr>`).join('')}
    </tbody></table>`;
}

function savePrice(id) {
  const np = parseFloat(document.getElementById('np-'+id)?.value);
  const op = parseFloat(document.getElementById('op-'+id)?.value) || null;
  if (isNaN(np) || np <= 0) { toast('⚠️','Geçerli bir fiyat girin','e'); return; }
  /* Fiyat değişikliğini override olarak kalıcı kaydet */
  AdminProducts.applyOverride(id, { price: np, oldPrice: op });
  const p = AdminProducts.getAll().find(x => x.id === id);
  toast('✓', `${p?.name} → ${fmt(np)} (kaydedildi)`, 's');
  renderPricesTable();
}

function resetAllPrices() {
  if (!confirm('Tüm fiyat değişikliklerini sıfırlamak istediğinizden emin misiniz?')) return;
  /* Sadece fiyat ve oldPrice override'larını temizle */
  const ov = _loadOverrides();
  Object.keys(ov).forEach(k => { delete ov[k].price; delete ov[k].oldPrice; if(Object.keys(ov[k]).length===0) delete ov[k]; });
  _saveOverrides(ov);
  PRODUCTS = buildProducts();
  toast('↺','Tüm fiyatlar sıfırlandı','i');
  renderPricesTable();
}

/* ── SMS ────────────────────────────────────────────── */
function renderSmsLog() {
  const logs = Store.getSmsLog();
  const el = document.getElementById('sms-terminal');
  const cnt = document.getElementById('sms-count-lbl');
  if (cnt) cnt.textContent = `${logs.length} kayıt`;
  if (!el) return;
  if (!logs.length) { el.innerHTML='<span style="color:#555">Henüz SMS gönderilmedi.</span>'; return; }
  el.innerHTML = logs.map(l => `
    <div class="sms-row">
      <span class="sms-time">[${l.time}]</span>
      <span class="sms-phone"> ${l.phone} </span>
      <span class="sms-msg">→ ${l.msg}</span>
    </div>`).join('');
}

function clearSms() {
  if (!confirm('SMS kayıtları temizlensin mi?')) return;
  Store.setSmsLog([]);
  renderSmsLog();
  toast('🗑️','SMS kayıtları temizlendi','i');
}

/* ── AYARLAR ───────────────────────────────────────── */
function changeAdminPass() {
  const cur  = document.getElementById('set-cur').value;
  const nw   = document.getElementById('set-new').value;
  const nw2  = document.getElementById('set-new2').value;
  const err  = document.getElementById('set-err');
  const ok   = document.getElementById('set-ok');
  err.textContent=''; ok.textContent='';
  const savedHash = Store.getAdminHash() || DEFAULT_ADMIN.passHash;
  if (simpleHash(cur) !== savedHash) { err.textContent='Mevcut şifre yanlış.'; return; }
  if (nw.length < 6) { err.textContent='Yeni şifre en az 6 karakter olmalıdır.'; return; }
  if (nw !== nw2)    { err.textContent='Yeni şifreler eşleşmiyor.'; return; }
  Store.setAdminHash(simpleHash(nw));
  ok.textContent = '✓ Şifre başarıyla güncellendi!';
  document.getElementById('set-cur').value='';
  document.getElementById('set-new').value='';
  document.getElementById('set-new2').value='';
  toast('🔐','Admin şifresi güncellendi','s');
}

function exportData() {
  const data = {
    users: Store.getUsers().map(u => ({...u, password: '***'})),
    orders: Store.getOrders(),
    smsLog: Store.getSmsLog(),
    productOverrides: _loadOverrides(),
    extraProducts: _loadExtraProducts(),
    exportDate: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `gulasya-data-${Date.now()}.json`;
  a.click();
  toast('📥','Veriler indirildi','s');
}

/* ── MODAL YARDIMCI ─────────────────────────────────── */
function openModal(id) { const m=document.getElementById(id); if(m){m.classList.add('open');document.body.style.overflow='hidden';} }
function closeModal(id){ const m=document.getElementById(id); if(m){m.classList.remove('open');document.body.style.overflow='';} }
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeModal(e.target.id);
  if (e.target.classList.contains('modal-close')) { const ov=e.target.closest('.modal-overlay'); if(ov) closeModal(ov.id); }
});
document.addEventListener('keydown', e => {
  if (e.key==='Escape') document.querySelectorAll('.modal-overlay.open').forEach(m=>closeModal(m.id));
});

/* ── TOAST ──────────────────────────────────────────── */
function toast(icon, msg, type='s') {
  let container = document.getElementById('toast-container');
  if (!container) { container=document.createElement('div'); container.id='toast-container'; document.body.appendChild(container); }
  const el = document.createElement('div');
  el.className=`toast toast-${type}`;
  el.innerHTML=`<div class="toast-icon">${icon}</div><span>${msg}</span>`;
  container.appendChild(el);
  setTimeout(()=>{ el.classList.add('removing'); setTimeout(()=>el.remove(),300); },3000);
}
</script>
</body>
</html>
