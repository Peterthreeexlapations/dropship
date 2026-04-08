// Shared site chrome + helpers. Loaded on every page after data.js.
const fmt = n => "$" + Number(n).toFixed(2);
const qs  = k => new URLSearchParams(location.search).get(k);

function cartGet() { try { return JSON.parse(localStorage.getItem("cart")||"[]"); } catch { return []; } }
function cartSet(c){ localStorage.setItem("cart", JSON.stringify(c)); updateCartCount(); }
function cartAdd(slug,size){ const c = cartGet(); const r = c.find(i=>i.slug===slug && i.size===size); r ? r.qty++ : c.push({slug,size,qty:1}); cartSet(c); }
function cartRemove(slug,size){ cartSet(cartGet().filter(i=>!(i.slug===slug && i.size===size))); }
function cartCount(){ return cartGet().reduce((s,i)=>s+i.qty,0); }
function updateCartCount(){ const el = document.getElementById("cart-count"); if (el) el.textContent = cartCount(); }

function renderHeader() {
  const host = document.getElementById("site-header");
  if (!host) return;
  host.innerHTML = `
    <div class="bar">
      <button class="icon" aria-label="Menu" onclick="document.body.classList.toggle('menu-open')">☰</button>
      <a class="logo" href="index.html">${BRAND.name}</a>
      <div class="icons">
        <a class="icon" href="page.html?p=support" aria-label="Search">⌕</a>
        <a class="icon" href="account.html" aria-label="Account">◯</a>
        <a class="icon" href="cart.html" aria-label="Cart">▢ <span id="cart-count">0</span></a>
      </div>
    </div>
    <nav class="nav primary">
      ${NAV.primary.map(l => `<a href="${l.href}">${l.label}</a>`).join("")}
    </nav>
    <nav class="nav secondary">
      ${NAV.secondary.map(l => `<a href="${l.href}">${l.label}</a>`).join("")}
    </nav>
  `;
  // Highlight active collection if applicable
  const active = qs("c");
  if (active) {
    host.querySelectorAll(".nav.primary a").forEach(a => {
      if (a.getAttribute("href").includes("c="+active)) a.classList.add("active");
    });
  }
  updateCartCount();
}

function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) return;
  host.innerHTML = `
    <div class="cols">
      <div>
        <h4>SHOP</h4>
        ${NAV.primary.slice(0,7).map(l=>`<a href="${l.href}">${l.label}</a>`).join("")}
      </div>
      <div>
        <h4>HELP</h4>
        ${NAV.footer.map(l=>`<a href="${l.href}">${l.label}</a>`).join("")}
      </div>
      <div>
        <h4>FOLLOW</h4>
        <a href="${BRAND.instagram}" target="_blank" rel="noopener">Instagram</a>
        <a href="${BRAND.tiktok}" target="_blank" rel="noopener">TikTok</a>
      </div>
      <div>
        <h4>NEWSLETTER</h4>
        <p>Get 10% off your first order.</p>
        <form onsubmit="event.preventDefault();this.reset();alert('Subscribed (demo)');">
          <input type="email" placeholder="email@example.com" required />
          <button>JOIN</button>
        </form>
      </div>
    </div>
    <p class="copy">© ${new Date().getFullYear()} ${BRAND.name} — local dev clone.</p>
  `;
}

function productCard(p){
  return `
    <a class="card" href="product.html?p=${p.slug}">
      <div class="imgwrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        ${p.soldOut?'<span class="badge">SOLD OUT</span>':''}
      </div>
      <div class="title">${p.title}</div>
      <div class="price">${p.soldOut?'Sold Out':fmt(p.price)}</div>
    </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.title = document.title.replace(/RYOKO RAIN|drippppaprearl/g, BRAND.name);
  renderHeader();
  renderFooter();
});
