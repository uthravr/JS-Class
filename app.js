const API_URL = 'https://fakestoreapi.com/products';

const els = {
  products: document.getElementById('products'),
  search: document.getElementById('search'),
  category: document.getElementById('category'),
  cartToggle: document.getElementById('cart-toggle'),
  cartCount: document.getElementById('cart-count'),
  cartPanel: document.getElementById('cart-panel'),
  cartItems: document.getElementById('cart-items'),
  cartTotal: document.getElementById('cart-total'),
  closeCart: document.getElementById('close-cart'),
  toast: document.getElementById('toast')
};

let products = [];
let cart = JSON.parse(localStorage.getItem('mini_store_cart') || '{}');

function showToast(msg){
  els.toast.textContent = msg; els.toast.classList.add('show');
  setTimeout(()=>els.toast.classList.remove('show'),1400);
}

function saveCart(){
  localStorage.setItem('mini_store_cart', JSON.stringify(cart));
}

function cartCount(){
  const count = Object.values(cart).reduce((s,i)=>s+i,0);
  els.cartCount.textContent = count;
}

function updateCartUI(){
  els.cartItems.innerHTML = '';
  const ids = Object.keys(cart);
  if(ids.length===0){ els.cartItems.innerHTML = '<div>Your cart is empty.</div>'; els.cartTotal.textContent='0.00'; return }
  let total = 0;
  ids.forEach(id=>{
    const p = products.find(x=>String(x.id)===String(id));
    const qty = cart[id];
    total += p.price * qty;
    const div = document.createElement('div'); div.className='cart-item';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="info">
        <div class="title">${p.title}</div>
        <div class="meta">${qty} × $${p.price.toFixed(2)}</div>
      </div>
      <div class="controls">
        <button class="btn" data-action="dec" data-id="${p.id}">-</button>
        <button class="btn" data-action="inc" data-id="${p.id}">+</button>
        <button class="btn" data-action="remove" data-id="${p.id}">Remove</button>
      </div>
    `;
    els.cartItems.appendChild(div);
  });
  els.cartTotal.textContent = total.toFixed(2);
  cartCount();
}

function addToCart(id){
  cart[id] = (cart[id]||0) + 1; saveCart(); updateCartUI(); showToast('Added to cart');
}

function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id] = Math.max(0, cart[id]+delta);
  if(cart[id]===0) delete cart[id];
  saveCart(); updateCartUI();
}

function removeFromCart(id){ delete cart[id]; saveCart(); updateCartUI(); }

els.cartItems?.addEventListener('click', (e)=>{
  const btn = e.target.closest('button'); if(!btn) return;
  const action = btn.dataset.action; const id = btn.dataset.id;
  if(action==='inc') changeQty(id,1);
  if(action==='dec') changeQty(id,-1);
  if(action==='remove') removeFromCart(id);
});

els.cartToggle.addEventListener('click', ()=>{
  els.cartPanel.classList.toggle('open'); els.cartPanel.setAttribute('aria-hidden', String(!els.cartPanel.classList.contains('open')));
});
els.closeCart.addEventListener('click', ()=>{ els.cartPanel.classList.remove('open'); els.cartPanel.setAttribute('aria-hidden','true'); });

function renderProducts(list){
  els.products.innerHTML = '';
  list.forEach(p=>{
    const el = document.createElement('article'); el.className='card';
    el.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="title">${p.title}</div>
      <div class="meta">${p.category}</div>
      <div class="price">$${p.price.toFixed(2)}</div>
      <div class="actions">
        <button class="btn" data-id="${p.id}" data-action="view">View</button>
        <button class="btn primary" data-id="${p.id}" data-action="add">Add to cart</button>
      </div>
    `;
    els.products.appendChild(el);
  });
}

els.products.addEventListener('click', (e)=>{
  const btn = e.target.closest('button'); if(!btn) return;
  const action = btn.dataset.action; const id = btn.dataset.id;
  if(action==='add') addToCart(id);
  if(action==='view') {
    const p = products.find(x=>String(x.id)===String(id));
    alert(p.title + '\n\n' + p.description);
  }
});

function populateCategories(){
  const cats = Array.from(new Set(products.map(p=>p.category)));
  cats.forEach(c=>{ const opt = document.createElement('option'); opt.value=c; opt.textContent=c; els.category.appendChild(opt); });
}

function applyFilters(){
  const q = (els.search.value||'').trim().toLowerCase();
  const cat = els.category.value;
  let list = products.slice();
  if(cat && cat!=='all') list = list.filter(p=>p.category===cat);
  if(q) list = list.filter(p=>p.title.toLowerCase().includes(q) || (p.description||'').toLowerCase().includes(q));
  renderProducts(list);
}

let searchTimer = null;
els.search.addEventListener('input', ()=>{ clearTimeout(searchTimer); searchTimer = setTimeout(applyFilters,250); });
els.category.addEventListener('change', applyFilters);

async function init(){
  try{
    const res = await fetch(API_URL);
    products = await res.json();
    populateCategories();
    renderProducts(products);
    updateCartUI();
  }catch(err){
    els.products.innerHTML = '<div class="card">Failed to load products.</div>';
    console.error(err);
  }
}

init();
