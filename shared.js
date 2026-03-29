/* =============================================================
   GÜL ASYA MİNİ MARKET — shared.js v3
   Admin şifre koruması dahil tüm ortak fonksiyonlar
   ============================================================= */

/* ── TOAST ─────────────────────────────────────────────────── */
function toast(icon, msg, type='s') {
  let c = document.getElementById('toast-container');
  if (!c) { c = document.createElement('div'); c.id = 'toast-container'; document.body.appendChild(c); }
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<div class="toast-icon">${icon}</div><span>${msg}</span>`;
  c.appendChild(el);
  setTimeout(() => { el.classList.add('removing'); setTimeout(() => el.remove(), 300); }, 3000);
}

/* ── MODAL ──────────────────────────────────────────────────── */
function openModal(id)  { const m=document.getElementById(id); if(m){m.classList.add('open');document.body.style.overflow='hidden';} }
function closeModal(id) { const m=document.getElementById(id); if(m){m.classList.remove('open');document.body.style.overflow='';} }
document.addEventListener('click', e => {
  if(e.target.classList.contains('modal-overlay')) closeModal(e.target.id);
  if(e.target.classList.contains('modal-close')){ const o=e.target.closest('.modal-overlay'); if(o) closeModal(o.id); }
});
document.addEventListener('keydown', e => {
  if(e.key==='Escape') document.querySelectorAll('.modal-overlay.open').forEach(m=>closeModal(m.id));
});

/* ── COOKIE BANNER ─────────────────────────────────────────── */
function initCookieBanner() {
  if(localStorage.getItem('ga_cookies_accepted')) return;
  const banner = document.getElementById('cookie-banner');
  if(!banner) return;
  banner.classList.remove('hidden');
  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('ga_cookies_accepted','1');
    banner.style.animation='fadeOut .3s forwards';
    setTimeout(()=>banner.remove(),300);
    toast('🍪','Çerezler kabul edildi','i');
  });
  document.getElementById('cookie-settings')?.addEventListener('click', ()=>openModal('cookie-settings-modal'));
}

/* ── HEADER ─────────────────────────────────────────────────── */
function renderHeader() {
  const topbar = document.getElementById('topbar');
  const header = document.getElementById('site-header');
  const u = Store.getUser();
  if (topbar) {
    topbar.innerHTML = `
      <div class="topbar-l">
        <span>🌹 Gül Asya Mini Market'e Hoş Geldiniz!</span>
        <div class="topbar-badge">Ücretsiz Kargo ₺300+</div>
      </div>
      <div class="topbar-r">
        <a href="index.html?cat=">Kampanyalar</a>
        <a href="index.html">Tüm Ürünler</a>
        ${u ? `<button onclick="doLogout()">Çıkış (${u.name})</button>` : ''}
        <button onclick="goAdmin()">⚙️ Admin</button>
      </div>`;
  }
  if (header) {
    const cartCount = Store.cartCount();
    const favCount  = Store.getFavs().length;
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
          <button class="hbtn" id="auth-btn" onclick="${u?'openProfileModal()':'openAuthModal()'}">
            <span>👤</span><span class="hbtn-text">${u?u.name:'Giriş Yap'}</span>
          </button>
          <button class="hbtn" onclick="goFavs()">
            <span>❤️</span><span class="hbtn-text">Favoriler</span>
            ${favCount>0?`<span class="hbtn-badge red">${favCount}</span>`:''}
          </button>
          <button class="hbtn primary" onclick="goCart()">
            <span>🛒</span><span class="hbtn-text">Sepetim</span>
            ${cartCount>0?`<span class="hbtn-badge">${cartCount}</span>`:''}
          </button>
        </div>
      </div>`;
    document.getElementById('main-search')?.addEventListener('keydown', e=>{ if(e.key==='Enter') doMainSearch(); });
  }
}

function doMainSearch() {
  const q = document.getElementById('main-search')?.value.trim();
  if(q) window.location.href=`index.html?q=${encodeURIComponent(q)}`;
}
function goFavs() { window.location.href='favs.html'; }

/* ── CAT NAV ────────────────────────────────────────────────── */
function renderCatNav(activecat='') {
  const el = document.getElementById('cat-nav-inner');
  if(!el) return;
  const cats=[
    {id:'',label:'🏠 Tümü'},{id:'gida',label:'🍞 Temel Gıda'},
    {id:'icecek',label:'🥤 İçecek'},{id:'sut',label:'🥛 Süt & Süt Ürünleri'},
    {id:'atistirmalik',label:'🍫 Atıştırmalık'},{id:'temizlik',label:'🧹 Temizlik'},
    {id:'kisisel',label:'🧴 Kişisel Bakım'},{id:'dondurulmus',label:'❄️ Dondurulmuş'},
    {id:'ekmek',label:'🥖 Ekmek'},
  ];
  el.innerHTML = cats.map(c=>
    `<button class="clink${c.id===activecat?' active':''}" onclick="filterCatNav('${c.id}')">${c.label}</button>`
  ).join('');
}
function filterCatNav(cat) { window.location.href=`index.html?cat=${cat}`; }

/* ══════════════════════════════════════════════════════════════
   ADMIN GİRİŞ MODAL — Şifre: GulAsya2026!
   ══════════════════════════════════════════════════════════════ */
function openAdminLogin() {
  if(!document.getElementById('admin-login-modal')) _injectAdminLoginModal();
  document.getElementById('al-pw').value='';
  document.getElementById('al-err').textContent='';
  openModal('admin-login-modal');
  setTimeout(()=>document.getElementById('al-pw')?.focus(),100);
}

function _injectAdminLoginModal() {
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="modal-overlay" id="admin-login-modal">
    <div class="modal-box" style="max-width:380px;text-align:center">
      <button class="modal-close">✕</button>
      <div style="font-size:40px;margin-bottom:12px">🔐</div>
      <h2 style="font-size:20px;font-weight:900;margin-bottom:6px">Admin Girişi</h2>
      <p style="font-size:13px;color:#888;font-weight:600;margin-bottom:20px">
        Bu alana yalnızca yetkili kişiler erişebilir.
      </p>
      <div class="form-group" style="text-align:left">
        <label class="form-label">Şifre</label>
        <input class="form-input" id="al-pw" type="password" placeholder="••••••••••"
          onkeydown="if(event.key==='Enter')doAdminLogin()">
        <div id="al-err" class="form-error"></div>
      </div>
      <button class="btn btn-black btn-block" onclick="doAdminLogin()" style="margin-top:4px">
        Giriş Yap
      </button>
      <p style="margin-top:14px;font-size:11.5px;color:#ccc;font-weight:600">
        Yetkisiz erişim girişimleri kayıt altına alınır.
      </p>
    </div>
  </div>`;
  document.body.appendChild(div.firstElementChild);
}

function doAdminLogin() {
  const pw  = document.getElementById('al-pw')?.value||'';
  const err = document.getElementById('al-err');
  // Şifre: GulAsya2026!
  const ADMIN_HASH = 'GulAsya2026!';
  if(pw === ADMIN_HASH) {
    Store.setAdminAuth(true);
    closeModal('admin-login-modal');
    toast('🔓','Admin girişi başarılı','s');
    window.location.href='admin.html';
  } else {
    err.textContent='Hatalı şifre! Tekrar deneyin.';
    const inp=document.getElementById('al-pw');
    if(inp){inp.value='';inp.focus();}
    // Brute-force koruması: 3 yanlış girişte 30 sn kilitle
    const key='ga_admin_fails';
    const data=JSON.parse(sessionStorage.getItem(key)||'{"count":0,"until":0}');
    data.count++;
    if(data.count>=3){ data.until=Date.now()+30000; data.count=0; err.textContent='Çok fazla hatalı deneme! 30 saniye bekleyin.'; }
    sessionStorage.setItem(key,JSON.stringify(data));
  }
}

/* ── AUTH MODAL ─────────────────────────────────────────────── */
function openAuthModal(tab='login') {
  if(!document.getElementById('auth-modal')) _injectAuthModal();
  openModal('auth-modal');
  switchAuthTab(tab);
}

function _injectAuthModal() {
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="modal-overlay" id="auth-modal">
    <div class="modal-box" style="max-width:460px">
      <button class="modal-close">✕</button>
      <div style="display:flex;border:1.5px solid #e5e5e5;border-radius:8px;overflow:hidden;margin-bottom:20px">
        <button id="tab-login" onclick="switchAuthTab('login')" style="flex:1;padding:10px;font-size:13px;font-weight:800;background:#111;color:#fff;border:none;cursor:pointer">Giriş Yap</button>
        <button id="tab-register" onclick="switchAuthTab('register')" style="flex:1;padding:10px;font-size:13px;font-weight:800;background:#fff;color:#888;border:none;cursor:pointer">Kayıt Ol</button>
      </div>
      <div id="auth-login">
        <div class="form-group"><label class="form-label">E-posta</label><input class="form-input" id="l-email" type="email" placeholder="ornek@mail.com" onkeydown="if(event.key==='Enter')doLogin()"></div>
        <div class="form-group"><label class="form-label">Şifre</label><input class="form-input" id="l-pass" type="password" placeholder="••••••••" onkeydown="if(event.key==='Enter')doLogin()">
          <div id="l-err" class="form-error"></div></div>
        <button class="btn btn-black btn-block" onclick="doLogin()" style="margin-top:4px">Giriş Yap</button>
        <div style="text-align:center;margin-top:12px;font-size:12.5px;color:#888;font-weight:700">
          Hesabın yok mu? <button onclick="switchAuthTab('register')" style="background:none;border:none;color:var(--r);font-weight:800;cursor:pointer;font-size:12.5px">Kayıt Ol</button>
        </div>
      </div>
      <div id="auth-register" style="display:none">
        <div class="form-row">
          <div class="form-group"><label class="form-label">Ad *</label><input class="form-input" id="r-name" placeholder="Adınız"></div>
          <div class="form-group"><label class="form-label">Soyad *</label><input class="form-input" id="r-surname" placeholder="Soyadınız"></div>
        </div>
        <div class="form-group"><label class="form-label">E-posta *</label><input class="form-input" id="r-email" type="email" placeholder="ornek@mail.com"></div>
        <div class="form-group"><label class="form-label">Cep Telefonu *</label><input class="form-input" id="r-phone" placeholder="05XXXXXXXXX" maxlength="11" oninput="this.value=this.value.replace(/\D/g,'')"></div>
        <div class="form-group"><label class="form-label">Adres</label><textarea class="form-input" id="r-addr" rows="2" placeholder="Mahalle, sokak, kapı no…"></textarea></div>
        <div class="form-row">
          <div class="form-group"><label class="form-label">Şifre *</label><input class="form-input" id="r-pass" type="password" placeholder="En az 6 karakter"></div>
          <div class="form-group"><label class="form-label">Şifre Tekrar *</label><input class="form-input" id="r-pass2" type="password" placeholder="••••••••"></div>
        </div>
        <label style="display:flex;align-items:flex-start;gap:8px;font-size:12px;font-weight:600;color:#555;cursor:pointer;margin-bottom:14px">
          <input type="checkbox" id="r-privacy" style="margin-top:2px;accent-color:var(--r);flex-shrink:0">
          <span><a href="privacy.html" target="_blank" style="color:var(--r)">Gizlilik Politikası</a> ve <a href="privacy.html#cookies" target="_blank" style="color:var(--r)">Çerez Politikası</a>'nı okudum ve kabul ediyorum.</span>
        </label>
        <div id="r-err" class="form-error"></div>
        <button class="btn btn-black btn-block" onclick="doRegister()">Kayıt Ol</button>
      </div>
    </div>
  </div>`;
  document.body.appendChild(div.firstElementChild);
}

function switchAuthTab(tab) {
  document.getElementById('auth-login').style.display  = tab==='login'    ? 'block' : 'none';
  document.getElementById('auth-register').style.display = tab==='register' ? 'block' : 'none';
  const tl=document.getElementById('tab-login'), tr=document.getElementById('tab-register');
  if(tl) { tl.style.background=tab==='login'?'#111':'#fff'; tl.style.color=tab==='login'?'#fff':'#888'; }
  if(tr) { tr.style.background=tab==='register'?'#111':'#fff'; tr.style.color=tab==='register'?'#fff':'#888'; }
}

function doLogin() {
  const email = (document.getElementById('l-email')?.value||'').trim().toLowerCase();
  const pass  = document.getElementById('l-pass')?.value||'';
  const err   = document.getElementById('l-err');
  if(!email||!pass){ err.textContent='Tüm alanlar zorunludur.'; return; }
  const user = Store.getUsers().find(u=>u.email===email&&u.password===pass);
  if(!user){ err.textContent='E-posta veya şifre hatalı.'; return; }
  err.textContent='';
  Store.setUser(user);
  toast('👋',`Hoş geldin, ${user.name}!`,'s');
  closeModal('auth-modal');
  renderHeader();
}

function doRegister() {
  const name    = (document.getElementById('r-name')?.value||'').trim();
  const surname = (document.getElementById('r-surname')?.value||'').trim();
  const email   = (document.getElementById('r-email')?.value||'').trim().toLowerCase();
  const phone   = (document.getElementById('r-phone')?.value||'').trim();
  const addr    = (document.getElementById('r-addr')?.value||'').trim();
  const pass    = document.getElementById('r-pass')?.value||'';
  const pass2   = document.getElementById('r-pass2')?.value||'';
  const privacy = document.getElementById('r-privacy')?.checked;
  const err     = document.getElementById('r-err');
  err.textContent='';
  if(!name||!surname||!email||!phone||!pass){ err.textContent='Zorunlu (*) alanları doldurun.'; return; }
  if(!privacy){ err.textContent='Gizlilik politikasını kabul etmelisiniz.'; return; }
  if(pass.length<6){ err.textContent='Şifre en az 6 karakter olmalıdır.'; return; }
  if(pass!==pass2){ err.textContent='Şifreler eşleşmiyor.'; return; }
  if(!/^05\d{9}$/.test(phone)){ err.textContent='Geçerli bir telefon giriniz (05XXXXXXXXX).'; return; }
  const users=Store.getUsers();
  if(users.find(u=>u.email===email)){ err.textContent='Bu e-posta zaten kayıtlı.'; return; }
  const user={id:Date.now(),name,surname,email,phone,address:addr,password:pass,createdAt:new Date().toLocaleString('tr-TR')};
  users.push(user); Store.setUsers(users);
  Store.setUser(user);
  Store.sendSMS(phone,`Gül Asya Mini Market: Merhaba ${name}! Üyeliğiniz oluşturuldu. İyi alışverişler! 🌹`);
  toast('🎉','Kayıt başarılı! Hoş geldiniz.','s');
  closeModal('auth-modal');
  renderHeader();
}

function doLogout() {
  Store.setUser(null);
  toast('👋','Çıkış yapıldı.','i');
  renderHeader();
  window.location.href='index.html';
}

/* ── PROFİL ─────────────────────────────────────────────────── */
function openProfileModal() {
  const u=Store.getUser();
  if(!u){ openAuthModal(); return; }
  if(!document.getElementById('profile-modal')) _injectProfileModal();
  document.getElementById('pm-name').value    = u.name;
  document.getElementById('pm-surname').value = u.surname;
  document.getElementById('pm-email').value   = u.email;
  document.getElementById('pm-phone').value   = u.phone||'';
  document.getElementById('pm-addr').value    = u.address||'';
  openModal('profile-modal');
}
function _injectProfileModal() {
  const div=document.createElement('div');
  div.innerHTML=`
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
        <button class="btn btn-ghost" onclick="closeModal('profile-modal');doLogout()" style="flex:.5">Çıkış Yap</button>
      </div>
    </div>
  </div>`;
  document.body.appendChild(div.firstElementChild);
}
function saveProfile() {
  const u=Store.getUser(); if(!u) return;
  u.name=document.getElementById('pm-name').value.trim();
  u.surname=document.getElementById('pm-surname').value.trim();
  u.email=document.getElementById('pm-email').value.trim();
  u.phone=document.getElementById('pm-phone').value.trim();
  u.address=document.getElementById('pm-addr').value.trim();
  const users=Store.getUsers().map(x=>x.id===u.id?u:x);
  Store.setUsers(users); Store.setUser(u);
  toast('✓','Profil güncellendi','s'); closeModal('profile-modal'); renderHeader();
}

/* ── FOOTER ─────────────────────────────────────────────────── */
function renderFooter() {
  const el=document.getElementById('site-footer');
  if(!el) return;
  el.innerHTML=`
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
          <a href="#" onclick="openProfileModal()">Profilim</a>
        </div>
        <div class="footer-col"><h4>Yardım & Politikalar</h4>
          <a href="privacy.html">Gizlilik Politikası</a>
          <a href="privacy.html#cookies">Çerez Politikası</a>
          <a href="privacy.html#returns">İade & Değişim</a>
          <a href="privacy.html#delivery">Teslimat Bilgisi</a>
          <a href="privacy.html#kvkk">KVKK</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Gül Asya Mini Market. Tüm hakları saklıdır.</p>
      <p>Fiyatlar değişkenlik gösterebilir · <span>Gizlilik korunur</span></p>
    </div>`;
}

/* ── INIT ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initCookieBanner();
});

// Ctrl+Shift+A → admin giriş
document.addEventListener('keydown', e => {
  if(e.ctrlKey&&e.shiftKey&&e.key==='A') goAdmin();
});
