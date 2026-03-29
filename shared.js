/* =========================================================
   GÜL ASYA MİNİ MARKET — PAYLAŞILAN JS
   shared.js  —  tüm sayfalar bu dosyayı kullanır
   ========================================================= */

/* ── TOAST ─────────────────────────────────────────────── */
function toast(icon, msg, type = 's') {
  let container = document.getElementById('toast-container');
  if (!container) { container = document.createElement('div'); container.id = 'toast-container'; document.body.appendChild(container); }
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<div class="toast-icon">${icon}</div><span>${msg}</span>`;
  container.appendChild(el);
  setTimeout(() => { el.classList.add('removing'); setTimeout(() => el.remove(), 300); }, 3000);
}

/* ── MODAL ─────────────────────────────────────────────── */
function openModal(id) { const m = document.getElementById(id); if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; } }
function closeModal(id) { const m = document.getElementById(id); if (m) { m.classList.remove('open'); document.body.style.overflow = ''; } }
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeModal(e.target.id);
  if (e.target.classList.contains('modal-close')) {
    const overlay = e.target.closest('.modal-overlay');
    if (overlay) closeModal(overlay.id);
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
});

/* ── COOKIE BANNER ─────────────────────────────────────── */
function initCookieBanner() {
  if (localStorage.getItem('ga_cookies_accepted')) return;
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  banner.classList.remove('hidden');
  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('ga_cookies_accepted', '1');
    banner.style.animation = 'fadeOut .3s forwards';
    setTimeout(() => banner.remove(), 300);
    toast('🍪', 'Çerezler kabul edildi', 'i');
  });
  document.getElementById('cookie-settings')?.addEventListener('click', () => openModal('cookie-settings-modal'));
}

/* ── HEADER RENDER ─────────────────────────────────────── */
function renderHeader() {
  const topbar = document.getElementById('topbar');
  const header = document.getElementById('site-header');
  if (topbar) {
    const u = Store.getUser();
    topbar.innerHTML = `
      <div class="topbar-l">
        <span>🌹 Gül Asya Mini Market'e Hoş Geldiniz!</span>
        <div class="topbar-badge">Ücretsiz Kargo ₺300+</div>
      </div>
      <div class="topbar-r">
        <a href="index.html#kampanya">Kampanyalar</a>
        <a href="index.html#hakkimizda">Hakkımızda</a>
        ${u ? `<button onclick="doLogout()">Çıkış (${u.name})</button>` : ''}
        <button onclick="goAdmin()">⚙️ Admin</button>
      </div>`;
  }
  if (header) {
    const cartCount = Store.cartCount();
    const favCount = Store.getFavs().length;
    const u = Store.getUser();
    header.innerHTML = `
      <div class="header-inner">
        <div class="logo" onclick="goHome()">
          <div class="logo-icon">🌹</div>
          <div><div class="logo-name">Gül Asya</div><div class="logo-sub">Mini Market</div></div>
        </div>
        <div class="search-wrap">
          <span class="search-icon">🔍</span>
          <input class="search-input" id="main-search" type="text" placeholder="Ürün, marka veya kategori ara…" autocomplete="off">
          <button class="search-btn" onclick="doMainSearch()">Ara</button>
        </div>
        <div class="hbtns">
          <button class="hbtn" id="auth-btn" onclick="${u ? 'openProfileModal()' : 'openAuthModal()'}">
            <span>👤</span><span class="hbtn-text">${u ? u.name : 'Giriş Yap'}</span>
          </button>
          <button class="hbtn" onclick="goFavs()">
            <span>❤️</span><span class="hbtn-text">Favoriler</span>
            ${favCount > 0 ? `<span class="hbtn-badge red">${favCount}</span>` : ''}
          </button>
          <button class="hbtn primary" onclick="goCart()">
            <span>🛒</span><span class="hbtn-text">Sepetim</span>
            ${cartCount > 0 ? `<span class="hbtn-badge">${cartCount}</span>` : ''}
          </button>
        </div>
      </div>`;
    document.getElementById('main-search')?.addEventListener('keydown', e => { if (e.key === 'Enter') doMainSearch(); });
  }
}

function doMainSearch() {
  const q = document.getElementById('main-search')?.value.trim();
  if (q) window.location.href = `index.html?q=${encodeURIComponent(q)}`;
}

function goFavs() { window.location.href = 'favs.html'; }

/* ── CAT NAV ───────────────────────────────────────────── */
function renderCatNav(activecat = '') {
  const el = document.getElementById('cat-nav-inner');
  if (!el) return;
  const cats = [
    { id: '', label: '🏠 Tümü' },
    { id: 'gida', label: '🍞 Temel Gıda' },
    { id: 'icecek', label: '🥤 İçecek' },
    { id: 'sut', label: '🥛 Süt & Süt Ürünleri' },
    { id: 'atistirmalik', label: '🍫 Atıştırmalık' },
    { id: 'temizlik', label: '🧹 Temizlik' },
    { id: 'kisisel', label: '🧴 Kişisel Bakım' },
    { id: 'dondurulmus', label: '❄️ Dondurulmuş' },
    { id: 'ekmek', label: '🥖 Ekmek' },
  ];
  el.innerHTML = cats.map(c =>
    `<button class="clink${c.id === activecat ? ' active' : ''}" onclick="filterCatNav('${c.id}')">${c.label}</button>`
  ).join('');
}

function filterCatNav(cat) { window.location.href = `index.html?cat=${cat}`; }

/* ── AUTH MODAL ────────────────────────────────────────── */
function openAuthModal(tab = 'login') {
  if (!document.getElementById('auth-modal')) injectAuthModal();
  openModal('auth-modal');
  switchAuthTab(tab);
}
function injectAuthModal() {
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="modal-overlay" id="auth-modal">
    <div class="modal-box" style="max-width:460px">
      <button class="modal-close">✕</button>
      <div style="display:flex;gap:0;border:1.5px solid #e5e5e5;border-radius:8px;overflow:hidden;margin-bottom:20px">
        <button class="tab-btn" id="tab-login" onclick="switchAuthTab('login')" style="flex:1;padding:10px;font-size:13px;font-weight:800;background:#fff;border:none;cursor:pointer;transition:all.2s;color:#888">Giriş Yap</button>
        <button class="tab-btn" id="tab-register" onclick="switchAuthTab('register')" style="flex:1;padding:10px;font-size:13px;font-weight:800;background:#fff;border:none;cursor:pointer;transition:all.2s;color:#888">Kayıt Ol</button>
      </div>
      <div id="auth-login">
        <div class="form-group"><label class="form-label">E-posta</label><input class="form-input" id="l-email" type="email" placeholder="ornek@mail.com"></div>
        <div class="form-group"><label class="form-label">Şifre</label><input class="form-input" id="l-pass" type="password" placeholder="••••••••">
          <div id="l-err" class="form-error"></div></div>
        <button class="btn btn-black btn-block" onclick="doLogin()" style="margin-top:4px">Giriş Yap</button>
        <div style="text-align:center;margin-top:12px;font-size:12.5px;color:#888;font-weight:700">
          <span>Hesabın yok mu? </span><button onclick="switchAuthTab('register')" style="background:none;border:none;color:var(--r);font-weight:800;cursor:pointer;font-size:12.5px">Kayıt Ol</button>
        </div>
      </div>
      <div id="auth-register" style="display:none">
        <div class="form-row">
          <div class="form-group"><label class="form-label">Ad</label><input class="form-input" id="r-name" placeholder="Adınız"></div>
          <div class="form-group"><label class="form-label">Soyad</label><input class="form-input" id="r-surname" placeholder="Soyadınız"></div>
        </div>
        <div class="form-group"><label class="form-label">E-posta</label><input class="form-input" id="r-email" type="email" placeholder="ornek@mail.com"></div>
        <div class="form-group"><label class="form-label">Cep Telefonu</label><input class="form-input" id="r-phone" placeholder="05XXXXXXXXX"></div>
        <div class="form-group"><label class="form-label">Adres</label><textarea class="form-input" id="r-addr" rows="2" placeholder="Mahalle, sokak, kapı no…"></textarea></div>
        <div class="form-row">
          <div class="form-group"><label class="form-label">Şifre</label><input class="form-input" id="r-pass" type="password" placeholder="En az 6 karakter"></div>
          <div class="form-group"><label class="form-label">Şifre Tekrar</label><input class="form-input" id="r-pass2" type="password" placeholder="••••••••"></div>
        </div>
        <label style="display:flex;align-items:flex-start;gap:8px;font-size:12px;font-weight:600;color:#555;cursor:pointer;margin-bottom:14px">
          <input type="checkbox" id="r-privacy" style="margin-top:2px;accent-color:var(--r)">
          <span><a href="privacy.html" target="_blank" style="color:var(--r)">Gizlilik Politikası</a>'nı okudum ve kabul ediyorum.</span>
        </label>
        <div id="r-err" class="form-error"></div>
        <button class="btn btn-black btn-block" onclick="doRegister()">Kayıt Ol</button>
      </div>
    </div>
  </div>`;
  document.body.appendChild(div.firstElementChild);
}

function switchAuthTab(tab) {
  document.getElementById('auth-login').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('auth-register').style.display = tab === 'register' ? 'block' : 'none';
  const tl = document.getElementById('tab-login'), tr = document.getElementById('tab-register');
  if (tl) tl.style.cssText += tab === 'login' ? ';background:#111;color:#fff' : ';background:#fff;color:#888';
  if (tr) tr.style.cssText += tab === 'register' ? ';background:#111;color:#fff' : ';background:#fff;color:#888';
}

function doRegister() {
  const email = document.getElementById('r-email').value.trim().toLowerCase();
  const pass = document.getElementById('r-pass').value;
  const name = document.getElementById('r-name').value.trim();
  const err = document.getElementById('r-err');

  if (!email || !pass || !name) { err.textContent = 'Lütfen tüm alanları doldurun.'; return; }

  // Firebase'e yeni kullanıcı kaydet
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      // Başarılı olursa kullanıcının ekstra bilgilerini (ad, rol) veritabanına kaydet
      db.collection("users").doc(userCredential.user.uid).set({
        name: name,
        email: email,
        role: "customer",
        createdAt: new Date().toLocaleString('tr-TR')
      });
      toast('🎉', 'Kayıt başarılı! Hoş geldiniz.', 's');
      closeModal('auth-modal');
    })
    .catch((error) => {
      err.textContent = "Kayıt olunamadı. (Şifre en az 6 karakter olmalı veya e-posta kullanılıyor olabilir)";
      console.error(error);
    });
}

function doLogin() {
  const email = document.getElementById('l-email').value.trim().toLowerCase();
  const pass = document.getElementById('l-pass').value;
  const err = document.getElementById('l-err');

  if (!email || !pass) { err.textContent = 'Lütfen e-posta ve şifrenizi girin.'; return; }

  // Admin girişi için kısa yol (Veritabanında admin yetkisi ayarlayana kadar)
  if (email === 'admin@gulasya.com' && pass === 'admin123') {
    closeModal('auth-modal'); window.location.href = 'admin.html'; return;
  }

  // Firebase ile giriş yap
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => {
      toast('👋', 'Hoş geldin!', 's');
      closeModal('auth-modal');
    })
    .catch((error) => {
      err.textContent = "E-posta veya şifre hatalı.";
    });
}

function doLogout() {
  firebase.auth().signOut().then(() => {
    Store.setUser(null);
    toast('👋', 'Çıkış yapıldı.', 'i');
    renderHeader();
    window.location.href = 'index.html';
  });
}


function openProfileModal() {
  const u = Store.getUser();
  if (!u) { openAuthModal(); return; }
  if (!document.getElementById('profile-modal')) injectProfileModal();
  document.getElementById('pm-name').value = u.name;
  document.getElementById('pm-surname').value = u.surname;
  document.getElementById('pm-email').value = u.email;
  document.getElementById('pm-phone').value = u.phone || '';
  document.getElementById('pm-addr').value = u.address || '';
  openModal('profile-modal');
}
function injectProfileModal() {
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="modal-overlay" id="profile-modal">
    <div class="modal-box">
      <button class="modal-close">✕</button>
      <h2 class="modal-title">👤 Profilim</h2>
      <div class="form-group"><label class="form-label">Ad</label><input class="form-input" id="pm-name"></div>
      <div class="form-group"><label class="form-label">Soyad</label><input class="form-input" id="pm-surname"></div>
      <div class="form-group"><label class="form-label">E-posta</label><input class="form-input" id="pm-email" type="email"></div>
      <div class="form-group"><label class="form-label">Telefon</label><input class="form-input" id="pm-phone"></div>
      <div class="form-group"><label class="form-label">Adres</label><textarea class="form-input" id="pm-addr" rows="2"></textarea></div>
      <div style="display:flex;gap:10px;margin-top:4px">
        <button class="btn btn-black" style="flex:1" onclick="saveProfile()">Kaydet</button>
        <button class="btn btn-ghost" onclick="closeModal('profile-modal');doLogout()" style="flex:.6">Çıkış Yap</button>
      </div>
    </div>
  </div>`;
  document.body.appendChild(div.firstElementChild);
}
function saveProfile() {
  const u = Store.getUser();
  u.name = document.getElementById('pm-name').value.trim();
  u.surname = document.getElementById('pm-surname').value.trim();
  u.email = document.getElementById('pm-email').value.trim();
  u.phone = document.getElementById('pm-phone').value.trim();
  u.address = document.getElementById('pm-addr').value.trim();
  const users = Store.getUsers().map(x => x.id === u.id ? u : x);
  Store.setUsers(users); Store.setUser(u);
  toast('✓', 'Profil güncellendi', 's'); closeModal('profile-modal'); renderHeader();
}

/* ── FOOTER ────────────────────────────────────────────── */
function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="footer-main">
      <div class="footer-grid">
        <div>
          <div style="font-size:18px;font-weight:900;color:#fff;margin-bottom:10px;display:flex;align-items:center;gap:8px"><span>🌹</span>Gül Asya Mini Market</div>
          <p style="font-size:13px;line-height:1.7;color:rgba(255,255,255,.45);font-weight:600;margin-bottom:16px">Mahallenizin güvenilir mini marketi. Taze ürünler, uygun fiyatlar.</p>
          <div style="display:flex;gap:8px">
            ${['📘','📸','🐦','▶️'].map(i=>`<div style="width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer">${i}</div>`).join('')}
          </div>
        </div>
        <div class="footer-col"><h4>Market</h4>
          <a href="index.html">Tüm Ürünler</a>
          <a href="index.html?cat=gida">Temel Gıda</a>
          <a href="index.html?cat=icecek">İçecek</a>
          <a href="index.html?cat=atistirmalik">Atıştırmalık</a>
          <a href="index.html?cat=temizlik">Temizlik</a>
        </div>
        <div class="footer-col"><h4>Hesabım</h4>
          <a href="#" onclick="openAuthModal()">Giriş Yap</a>
          <a href="#" onclick="openAuthModal('register')">Kayıt Ol</a>
          <a href="cart.html">Sepetim</a>
          <a href="favs.html">Favorilerim</a>
          <a href="#" onclick="openProfileModal()">Profil</a>
        </div>
        <div class="footer-col"><h4>Yardım</h4>
          <a href="privacy.html">Gizlilik Politikası</a>
          <a href="privacy.html#cookies">Çerez Politikası</a>
          <a href="privacy.html#returns">İade & Değişim</a>
          <a href="privacy.html#delivery">Teslimat Bilgisi</a>
          <a href="#">İletişim</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Gül Asya Mini Market. Tüm hakları saklıdır.</p>
      <p>Fiyatlar değişkenlik gösterebilir · <span>Gizlilik korunur</span></p>
    </div>`;
}

/* ── INIT ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initCookieBanner();
});

/* ── ADMIN ERİŞİM KISAYOLU ─────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.shiftKey && e.key === 'A') goAdmin();
});

// SAYFA YENİLENDİĞİNDE KULLANICIYI HATIRLAMA (Bu kodu shared.js'in en altına ekle)
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Giriş yapmış birisi varsa bilgilerini al ve header'ı güncelle
    Store.setUser({ email: user.email, uid: user.uid, name: user.email.split('@')[0] });
    renderHeader();
  } else {
    // Çıkış yapılmışsa bilgileri temizle
    Store.setUser(null);
    renderHeader();
  }
});
