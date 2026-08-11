// Tragones Header v6 - STICKY REAL FIX + CARRITO SIDEBAR + WHATSAPP FORMATO DONCHELERO
// Mantiene: toolbar fuera del sticky, #tragones-header ES sticky, links sin mover

(function(){
  const criticalCSS = `
    html{overflow-x:clip !important;}
    body{overflow-x:clip !important; position:relative !important;}
    #tragones-header{
      position: sticky !important;
      top: 0 !important;
      z-index: 100 !important;
      display: block !important;
      width: 100% !important;
      overflow: visible !important;
      background: #050505 !important;
    }
    #tragones-toolbar{
      position: relative !important;
      display: flex !important;
      width: 100% !important;
      z-index: 99 !important;
    }
    #tragones-main-nav{
      position: relative !important;
      width: 100% !important;
      background: #050505 !important;
    }
    /* Carrito Sidebar */
    #tragonesCartOverlay{
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(2px);
      z-index: 199;
      display: none;
    }
    #tragonesCartOverlay.open{display:block;}
    #tragonesCartSidebar{
      position: fixed;
      top: 0;
      right: 0;
      width: 92%;
      max-width: 420px;
      height: 100dvh;
      background: #0f0f0f;
      border-left: 1px solid #222;
      z-index: 200;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
      display: flex;
      flex-direction: column;
      box-shadow: -10px 0 40px rgba(0,0,0,0.6);
    }
    #tragonesCartSidebar.open{transform: translateX(0);}
    .cart-scroll::-webkit-scrollbar{width:6px}
    .cart-scroll::-webkit-scrollbar-thumb{background:#333;border-radius:10px}
  `;
  const styleEl = document.createElement('style');
  styleEl.id = 'tragones-sticky-fix';
  styleEl.textContent = criticalCSS;
  document.head.appendChild(styleEl);

  const toolbarHTML = `
    <div id="tragones-toolbar" class="bg-[#050505] border-b border-[#222] py-2 flex justify-center items-center gap-2 md:gap-3 w-full">
      <a href="https://wa.me/51933475638?text=Hola,%20quisiera%20realizar%20un%20pedido%20de%20delivery" target="_blank" rel="noopener">
        <div class="bg-[#25D366] border border-[#25D366] text-white px-4 py-1.5 rounded-full text-[11px] md:text-xs font-bold tracking-widest flex items-center gap-2 hover:bg-[#4df58d] hover:text-black transition shadow-[0_0_15px_rgba(37,211,102,.6)]">
          <i class="fab fa-whatsapp text-sm"></i><span>WhatsApp</span>
        </div>
      </a>
      <a href="https://tragones-licoreria-delivery.ola.click/products" target="_blank" rel="noopener">
        <div class="bg-[#2563eb] border border-[#2563eb] text-white px-4 py-1.5 rounded-full text-[11px] md:text-xs font-bold tracking-widest flex items-center gap-2 hover:bg-[#60a5fa] hover:text-black transition shadow-[0_0_15px_rgba(37,99,235,.6)]">
          <i class="fas fa-book-open"></i><span>TIENDA ONLINE</span><i class="fas fa-arrow-right text-[10px]"></i>
        </div>
      </a>
    </div>
  `;

  const navHTML = `
    <header id="tragones-main-nav" class="bg-[#050505] border-b border-[#1a1a1a] shadow-[0_4px_20px_rgba(0,0,0,.5)] w-full">
      <div class="max-w-[1300px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-2">
          <img src="https://tragoneslicoreriadelivery.com/wp-content/uploads/2021/09/LOGO-TRAGONES-chiki.png" alt="Tragones" class="h-[48px] md:h-[56px] w-auto object-contain">
        </a>
        <nav id="desktopNav" class="hidden md:flex items-center gap-8 font-oswald text-sm tracking-widest">
          <a href="index.html" data-page="inicio" class="nav-link">INICIO</a>
          <a href="nosotros.html" data-page="nosotros" class="nav-link">NOSOTROS</a>
          <a href="tienda.html" data-page="tienda" class="nav-link">TIENDA</a>
          <a href="promociones.html" data-page="promociones" class="nav-link">PROMOCIONES</a>
          <a href="contactos.html" data-page="contactos" class="nav-link">CONTACTOS</a>
        </nav>
        <div class="flex items-center gap-3">
          <a href="#" id="tragonesCartBtn" class="relative text-white w-10 h-10 flex items-center justify-center bg-[#1a1a1a] border border-[#222] rounded-full hover:bg-[#222] transition">
            <i class="fas fa-shopping-cart text-[16px]"></i>
            <span id="tragonesCartCount" class="absolute -top-1 -right-1 bg-[#ffaa00] text-black text-[10px] min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center font-bold leading-none">0</span>
          </a>
          <button id="menuBtn" class="md:hidden text-white text-2xl w-8 h-8 flex items-center justify-center"><i class="fas fa-bars"></i></button>
        </div>
      </div>
      <div id="mobileMenu" class="hidden md:hidden bg-[#0f0f0f] border-t border-[#222] px-4 py-4 space-y-1 font-oswald tracking-widest text-sm">
        <a href="index.html" data-page="inicio" class="nav-link-mobile block py-2 px-3 rounded-lg">INICIO</a>
        <a href="nosotros.html" data-page="nosotros" class="nav-link-mobile block py-2 px-3 rounded-lg">NOSOTROS</a>
        <a href="tienda.html" data-page="tienda" class="nav-link-mobile block py-2 px-3 rounded-lg">TIENDA</a>
        <a href="promociones.html" data-page="promociones" class="nav-link-mobile block py-2 px-3 rounded-lg">PROMOCIONES</a>
        <a href="contactos.html" data-page="contactos" class="nav-link-mobile block py-2 px-3 rounded-lg">CONTACTOS</a>
      </div>
    </header>

    <!-- CART OVERLAY -->
    <div id="tragonesCartOverlay"></div>

    <!-- CART SIDEBAR DERECHA -->
    <div id="tragonesCartSidebar">
      <!-- Header -->
      <div class="flex items-center justify-between p-5 border-b border-[#222] bg-[#050505]">
        <h3 class="font-oswald font-bold text-white text-[18px] tracking-widest uppercase flex items-center gap-2"><i class="fas fa-shopping-bag text-[#ffaa00]"></i> Tu Carrito <span id="cartHeaderCount" class="bg-[#1a1a1a] border border-[#333] text-[#999] text-[11px] px-2 py-0.5 rounded-full">0 items</span></h3>
        <button id="tragonesCartClose" class="w-8 h-8 bg-[#1a1a1a] border border-[#222] rounded-full flex items-center justify-center text-white hover:bg-[#222] transition"><i class="fas fa-times text-[12px]"></i></button>
      </div>

      <!-- Productos -->
      <div id="tragonesCartItems" class="flex-1 overflow-y-auto cart-scroll p-4 space-y-3 bg-[#0a0a0a]">
        <div class="text-center py-12 text-[#555] text-[13px]"><i class="fas fa-shopping-cart text-3xl mb-3 block opacity-30"></i>Tu carrito está vacío<br><a href="tienda.html" class="text-[#ffaa00] text-[12px] underline mt-2 inline-block">Ir a tienda</a></div>
      </div>

      <!-- Formulario Cliente -->
      <div class="border-t border-[#222] bg-[#111] p-4 space-y-3 max-h-[42vh] overflow-y-auto cart-scroll">
        <h4 class="font-oswald font-bold text-white text-[12px] tracking-widest uppercase">Datos de entrega</h4>
        <div class="grid grid-cols-2 gap-2">
          <select id="cartServicio" class="bg-[#0a0a0a] border border-[#222] rounded-full px-3 py-2.5 text-[12px] focus:border-[#ffaa00] outline-none col-span-2">
            <option value="Domicilio">Tipo: Domicilio</option>
            <option value="Recojo en tienda">Recojo en tienda</option>
          </select>
          <input id="cartNombre" type="text" placeholder="Nombre" class="bg-[#0a0a0a] border border-[#222] rounded-full px-3 py-2.5 text-[12px] focus:border-[#ffaa00] outline-none col-span-2">
          <input id="cartTelefono" type="tel" placeholder="Teléfono: 51 999999999" class="bg-[#0a0a0a] border border-[#222] rounded-full px-3 py-2.5 text-[12px] focus:border-[#ffaa00] outline-none col-span-2">
          <input id="cartDireccion" type="text" placeholder="Dirección: Av. Petit Thouars 269" class="bg-[#0a0a0a] border border-[#222] rounded-full px-3 py-2.5 text-[12px] focus:border-[#ffaa00] outline-none col-span-2">
        </div>

        <div class="bg-[#0a0a0a] border border-[#222] rounded-2xl p-3 space-y-2 mt-2">
          <div class="flex justify-between text-[12px]"><span class="text-[#666]">Subtotal:</span><span id="cartSubtotal" class="text-white font-bold">S/. 0,00</span></div>
          <div class="flex justify-between items-center text-[12px]">
            <span class="text-[#666]">Entrega:</span>
            <div class="flex items-center gap-1">
              <span class="text-white text-[11px]">S/.</span>
              <input id="cartEntrega" type="number" value="7.90" step="0.1" min="0" class="w-[70px] bg-[#111] border border-[#222] rounded-full px-2 py-1 text-[12px] text-white font-bold text-right focus:border-[#ffaa00] outline-none">
            </div>
          </div>
          <div class="flex justify-between text-[13px] border-t border-[#222] pt-2"><span class="text-white font-bold">Total:</span><span id="cartTotal" class="text-[#ffaa00] font-bold">S/. 0,00</span></div>
        </div>

        <div class="bg-[#0a0a0a] border border-[#222] rounded-2xl p-3 space-y-2">
          <h4 class="font-bold text-white text-[11px] uppercase">💲 Pago</h4>
          <select id="cartPago" class="w-full bg-[#111] border border-[#222] rounded-full px-3 py-2 text-[11px] focus:border-[#ffaa00] outline-none">
            <option value="Yape">Yape</option>
            <option value="Plin">Plin</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Transferencia">Transferencia</option>
          </select>
          <p class="text-[#666] text-[10px] leading-4">Estado: No pagado<br>El motorizado le mostrará el QR de pago al llegar.</p>
        </div>
      </div>

      <!-- Botón WhatsApp -->
      <div class="p-4 bg-[#050505] border-t border-[#222]">
        <button id="tragonesCartWhatsapp" class="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-[13px] tracking-widest py-4 rounded-full flex items-center justify-center gap-2 transition shadow-[0_0_20px_rgba(37,211,102,.3)]">
          <i class="fab fa-whatsapp text-[18px]"></i> ENVIAR PEDIDO POR WHATSAPP
        </button>
        <p class="text-[#555] text-[9px] text-center mt-2 leading-3">Se enviará ordenado como el formato de DonChelero con ID, fecha, productos y mapa</p>
      </div>
    </div>
  `;

  function getActivePage() {
    const p = window.location.pathname.toLowerCase();
    if (p.includes('nosotros')) return 'nosotros';
    if (p.includes('tienda')) return 'tienda';
    if (p.includes('promoc')) return 'promociones';
    if (p.includes('contact')) return 'contactos';
    const f = p.split('/').pop();
    if (f === '' || f === 'index.html' || f === 'index.htm' || p.endsWith('/')) return 'inicio';
    return 'inicio';
  }
  function paintActive() {
    const a = getActivePage();
    document.querySelectorAll('#desktopNav .nav-link').forEach(l => {
      l.className = l.dataset.page === a ? 'nav-link text-[#ffaa00] font-bold' : 'nav-link text-white/70 hover:text-white transition';
    });
    document.querySelectorAll('#mobileMenu .nav-link-mobile').forEach(l => {
      l.className = l.dataset.page === a ? 'nav-link-mobile block py-2 px-3 rounded-lg bg-[#1a1a1a] text-[#ffaa00] font-bold border border-[#ffaa00]/20' : 'nav-link-mobile block py-2 px-3 rounded-lg text-white/70 hover:text-white hover:bg-[#1a1a1a]';
    });
  }

  // ---- CARRITO LOGICA ----
  const CART_KEY = 'tragones_cart';
  const WA_NUMBER = '51933475638';

  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); } catch { return []; }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
  function updateCartCount() {
    const cart = getCart();
    const totalQty = cart.reduce((s, c) => s + (c.qty || 1), 0);
    const el = document.getElementById('tragonesCartCount');
    const headerCount = document.getElementById('cartHeaderCount');
    if (el) el.textContent = totalQty;
    if (headerCount) headerCount.textContent = totalQty + ' items';
    // compatibilidad con ids viejos
    const oldCount = document.getElementById('cartCount');
    if (oldCount && oldCount.id !== 'tragonesCartCount') oldCount.textContent = totalQty;
  }
  function formatPrice(num) {
    // Formato S/. 8,00 con coma como en ejemplo DonChelero
    return 'S/. ' + Number(num).toFixed(2).replace('.', ',');
  }
  function formatPricePlain(num) {
    return Number(num).toFixed(2).replace('.', ',');
  }

  function renderCart() {
    const cart = getCart();
    const cont = document.getElementById('tragonesCartItems');
    if (!cont) return;
    if (cart.length === 0) {
      cont.innerHTML = '<div class="text-center py-12 text-[#555] text-[13px]"><i class="fas fa-shopping-cart text-3xl mb-3 block opacity-30"></i>Tu carrito está vacío<br><a href="tienda.html" class="text-[#ffaa00] text-[12px] underline mt-2 inline-block">Ir a tienda</a></div>';
      document.getElementById('cartSubtotal').textContent = formatPrice(0);
      document.getElementById('cartTotal').textContent = formatPrice(0);
      return;
    }

    cont.innerHTML = cart.map(item => `
      <div class="bg-[#111] border border-[#222] rounded-2xl p-3 flex gap-3">
        <img src="${item.imagen || 'https://via.placeholder.com/60'}" class="w-[56px] h-[56px] rounded-xl object-cover bg-white p-1 flex-shrink-0">
        <div class="flex-1 min-w-0">
          <p class="text-white text-[12px] leading-tight line-clamp-2">${(item.nombre || '').substring(0,60)}</p>
          <p class="text-[#ffaa00] font-bold text-[12px] mt-1">${formatPrice(item.precio)}</p>
          <div class="flex items-center gap-2 mt-2">
            <button onclick="window.TragonesCart.updateQty(${item.id}, -1)" class="w-6 h-6 bg-[#0a0a0a] border border-[#222] rounded-full flex items-center justify-center text-white text-[10px] hover:bg-[#222]"><i class="fas fa-minus"></i></button>
            <span class="text-white text-[12px] font-bold min-w-[20px] text-center">${item.qty || 1}</span>
            <button onclick="window.TragonesCart.updateQty(${item.id}, 1)" class="w-6 h-6 bg-[#0a0a0a] border border-[#222] rounded-full flex items-center justify-center text-white text-[10px] hover:bg-[#222]"><i class="fas fa-plus"></i></button>
            <button onclick="window.TragonesCart.remove(${item.id})" class="ml-auto text-[#555] hover:text-[#ff4444] text-[11px]"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      </div>
    `).join('');

    const subtotal = cart.reduce((s, c) => s + (Number(c.precio) * (c.qty || 1)), 0);
    const entregaInput = document.getElementById('cartEntrega');
    const entrega = parseFloat(entregaInput ? entregaInput.value : 7.9) || 0;
    const total = subtotal + entrega;

    document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('cartTotal').textContent = formatPrice(total);
  }

  function openCart() {
    document.getElementById('tragonesCartOverlay').classList.add('open');
    document.getElementById('tragonesCartSidebar').classList.add('open');
    document.body.style.overflow = 'hidden';
    renderCart();
  }
  function closeCart() {
    document.getElementById('tragonesCartOverlay').classList.remove('open');
    document.getElementById('tragonesCartSidebar').classList.remove('open');
    document.body.style.overflow = '';
  }

  function generateOrderId() {
    // PE- + 10 digitos random como ejemplo 6274684179
    return 'PE-' + Math.floor(1000000000 + Math.random() * 9000000000);
  }
  function formatDateTime() {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();
    let h = now.getHours();
    const min = String(now.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? 'pm' : 'am';
    let h12 = h % 12; if (h12 === 0) h12 = 12;
    const hh = String(h12).padStart(2, '0');
    return {fecha: `${dd}/${mm}/${yyyy}`, hora: `${hh}:${min} ${ampm}`};
  }

  function buildWhatsappMessage() {
    const cart = getCart();
    if (cart.length === 0) {
      alert('Tu carrito está vacío');
      return null;
    }
    const nombre = (document.getElementById('cartNombre')?.value || 'Xxxxx').trim() || 'Xxxxx';
    const telefono = (document.getElementById('cartTelefono')?.value || '51 999999999').trim() || '51 999999999';
    const direccion = (document.getElementById('cartDireccion')?.value || 'Av. Petit Thouars 269').trim() || 'Av. Petit Thouars 269';
    const servicio = document.getElementById('cartServicio')?.value || 'Domicilio';
    const entrega = parseFloat(document.getElementById('cartEntrega')?.value || 7.9) || 0;
    const pagoMetodo = document.getElementById('cartPago')?.value || 'Yape';

    if (!direccion || !telefono || !nombre) {
      alert('Completa Nombre, Teléfono y Dirección');
      return null;
    }

    const subtotal = cart.reduce((s, c) => s + (Number(c.precio) * (c.qty || 1)), 0);
    const total = subtotal + entrega;
    const orderId = generateOrderId();
    const {fecha, hora} = formatDateTime();

    // Maps link desde dirección
    const mapsQuery = encodeURIComponent(direccion + ', Lima, Peru');
    // Si quieres coordenadas fijas como ejemplo, puedes usar las del ejemplo, pero generamos dinamico
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

    // UTM origen - usa tragones + mantiene estructura donchelero como pediste
    const utmLink = 'https://tragoneslicoreriadelivery.com?utm_source=bot&utm_campaign=std&utm_medium=wa_ext&utm_content=summary';
    // Si quieres exactamente el de ejemplo: https://donchelero.com?utm_source=bot&utm_campaign=std&utm_medium=wa_ext&utm_content=summary
    // Usamos el de tragones para branding
    const origenLink = utmLink;

    let productosTexto = cart.map(item => {
      const qty = item.qty || 1;
      const nombreProd = (item.nombre || '').toUpperCase().substring(0, 60);
      const precioLinea = formatPricePlain(Number(item.precio) * qty);
      return `X${qty} ${nombreProd}  S/. ${precioLinea}`;
    }).join('\n');

    const mensaje = `👋 Vengo de ${origenLink}
${orderId}
🗓 ${fecha} ⏰ ${hora}

Tipo de servicio: ${servicio}

Nombre: ${nombre}
Teléfono: ${telefono}
Dirección: ${direccion} (${mapsLink})

📝 Productos
${productosTexto}

Subtotal: ${formatPrice(subtotal)}
Entrega: ${formatPrice(entrega)}
Total: ${formatPrice(total)}

💲 Pago
Estado del pago: No pagado
Total a pagar: ${formatPrice(total)}
${pagoMetodo} ${formatPricePlain(total)}
El motorizado le mostrará el QR de pago al llegar.

👆 Envíanos este mensaje ahora. En cuanto lo recibamos estaremos atendiéndole.`;

    return mensaje;
  }

  function sendWhatsapp() {
    const msg = buildWhatsappMessage();
    if (!msg) return;
    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${WA_NUMBER}?text=${encoded}`;
    window.open(url, '_blank');
  }

  function initTragonesHeader() {
    const container = document.getElementById('tragones-header');
    if (!container) {
      document.body.insertAdjacentHTML('afterbegin', toolbarHTML + `<div id="tragones-header" style="position:sticky;top:0;z-index:100;">${navHTML}</div>`);
    } else {
      container.insertAdjacentHTML('beforebegin', toolbarHTML);
      container.innerHTML = navHTML;
      container.setAttribute('style', 'position:sticky !important; top:0 !important; z-index:100 !important; display:block !important; width:100% !important; background:#050505 !important; overflow:visible !important;');
    }

    // Inserta cart HTML al final del body si no existe
    if (!document.getElementById('tragonesCartSidebar')) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = navHTML.match(/<!-- CART OVERLAY -->[\s\S]*/)?.[0] || '';
      // Como navHTML ya incluye cart, extraemos la parte del cart que está dentro de navHTML string
      // Mejor: busca overlay y sidebar en el DOM actual, si no están, inserta desde el template completo
      const fullTemplate = document.createElement('div');
      fullTemplate.innerHTML = `
        <div id="tragonesCartOverlay"></div>
        <div id="tragonesCartSidebar">
          <div class="flex items-center justify-between p-5 border-b border-[#222] bg-[#050505]">
            <h3 class="font-oswald font-bold text-white text-[18px] tracking-widest uppercase flex items-center gap-2"><i class="fas fa-shopping-bag text-[#ffaa00]"></i> Tu Carrito <span id="cartHeaderCount" class="bg-[#1a1a1a] border border-[#333] text-[#999] text-[11px] px-2 py-0.5 rounded-full">0 items</span></h3>
            <button id="tragonesCartClose" class="w-8 h-8 bg-[#1a1a1a] border border-[#222] rounded-full flex items-center justify-center text-white hover:bg-[#222] transition"><i class="fas fa-times text-[12px]"></i></button>
          </div>
          <div id="tragonesCartItems" class="flex-1 overflow-y-auto cart-scroll p-4 space-y-3 bg-[#0a0a0a]"></div>
          <div class="border-t border-[#222] bg-[#111] p-4 space-y-3 max-h-[42vh] overflow-y-auto cart-scroll">
            <h4 class="font-oswald font-bold text-white text-[12px] tracking-widest uppercase">Datos de entrega</h4>
            <div class="grid grid-cols-2 gap-2">
              <select id="cartServicio" class="bg-[#0a0a0a] border border-[#222] rounded-full px-3 py-2.5 text-[12px] focus:border-[#ffaa00] outline-none col-span-2">
                <option value="Domicilio">Tipo: Domicilio</option>
                <option value="Recojo en tienda">Recojo en tienda</option>
              </select>
              <input id="cartNombre" type="text" placeholder="Nombre" class="bg-[#0a0a0a] border border-[#222] rounded-full px-3 py-2.5 text-[12px] focus:border-[#ffaa00] outline-none col-span-2">
              <input id="cartTelefono" type="tel" placeholder="Teléfono: 51 999999999" class="bg-[#0a0a0a] border border-[#222] rounded-full px-3 py-2.5 text-[12px] focus:border-[#ffaa00] outline-none col-span-2">
              <input id="cartDireccion" type="text" placeholder="Dirección: Av. Petit Thouars 269" class="bg-[#0a0a0a] border border-[#222] rounded-full px-3 py-2.5 text-[12px] focus:border-[#ffaa00] outline-none col-span-2">
            </div>
            <div class="bg-[#0a0a0a] border border-[#222] rounded-2xl p-3 space-y-2 mt-2">
              <div class="flex justify-between text-[12px]"><span class="text-[#666]">Subtotal:</span><span id="cartSubtotal" class="text-white font-bold">S/. 0,00</span></div>
              <div class="flex justify-between items-center text-[12px]">
                <span class="text-[#666]">Entrega:</span>
                <div class="flex items-center gap-1">
                  <span class="text-white text-[11px]">S/.</span>
                  <input id="cartEntrega" type="number" value="7.90" step="0.1" min="0" class="w-[70px] bg-[#111] border border-[#222] rounded-full px-2 py-1 text-[12px] text-white font-bold text-right focus:border-[#ffaa00] outline-none">
                </div>
              </div>
              <div class="flex justify-between text-[13px] border-t border-[#222] pt-2"><span class="text-white font-bold">Total:</span><span id="cartTotal" class="text-[#ffaa00] font-bold">S/. 0,00</span></div>
            </div>
            <div class="bg-[#0a0a0a] border border-[#222] rounded-2xl p-3 space-y-2">
              <h4 class="font-bold text-white text-[11px] uppercase">💲 Pago</h4>
              <select id="cartPago" class="w-full bg-[#111] border border-[#222] rounded-full px-3 py-2 text-[11px] focus:border-[#ffaa00] outline-none">
                <option value="Yape">Yape</option>
                <option value="Plin">Plin</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Transferencia">Transferencia</option>
              </select>
              <p class="text-[#666] text-[10px] leading-4">Estado: No pagado<br>El motorizado le mostrará el QR de pago al llegar.</p>
            </div>
          </div>
          <div class="p-4 bg-[#050505] border-t border-[#222]">
            <button id="tragonesCartWhatsapp" class="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-[13px] tracking-widest py-4 rounded-full flex items-center justify-center gap-2 transition shadow-[0_0_20px_rgba(37,211,102,.3)]">
              <i class="fab fa-whatsapp text-[18px]"></i> ENVIAR PEDIDO POR WHATSAPP
            </button>
            <p class="text-[#555] text-[9px] text-center mt-2 leading-3">Formato ordenado con ID, fecha, productos y mapa</p>
          </div>
        </div>
      `;
      // Extrae solo overlay y sidebar del template interno de navHTML que ya está en variable
      // Pero para asegurar, inyectamos desde aquí
      // El navHTML ya trae overlay y sidebar, así que los buscamos en el HTML string
      const parser = new DOMParser();
      const doc = parser.parseFromString(navHTML, 'text/html');
      const overlay = doc.getElementById('tragonesCartOverlay');
      const sidebar = doc.getElementById('tragonesCartSidebar');
      if (overlay && sidebar) {
        document.body.appendChild(overlay);
        document.body.appendChild(sidebar);
      } else {
        // fallback: inyecta todo el cart desde fullTemplate
        document.body.appendChild(fullTemplate.querySelector('#tragonesCartOverlay'));
        document.body.appendChild(fullTemplate.querySelector('#tragonesCartSidebar'));
      }
    }

    paintActive();

    // Eventos
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = menuBtn.querySelector('i');
        if (icon) { icon.classList.toggle('fa-bars'); icon.classList.toggle('fa-times'); }
      });
    }

    document.getElementById('tragonesCartBtn')?.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    document.getElementById('tragonesCartClose')?.addEventListener('click', closeCart);
    document.getElementById('tragonesCartOverlay')?.addEventListener('click', closeCart);
    document.getElementById('tragonesCartWhatsapp')?.addEventListener('click', sendWhatsapp);
    document.getElementById('cartEntrega')?.addEventListener('input', renderCart);

    // Exponer API global para tienda.html y producto.html
    window.TragonesCart = {
      get: getCart,
      save: saveCart,
      add: function(id, qty = 1, prodData = null) {
        let cart = getCart();
        // Si pasan datos completos
        if (prodData && prodData.nombre) {
          const ex = cart.find(c => c.id == prodData.id);
          if (ex) ex.qty = (ex.qty || 1) + qty;
          else cart.push({...prodData, qty});
        } else {
          // Busca en PRODUCTOS_INICIALES si existe
          let prod = null;
          if (typeof PRODUCTOS_INICIALES !== 'undefined') {
            prod = PRODUCTOS_INICIALES.find(p => p.id == id);
          }
          if (!prod) {
            try {
              const local = JSON.parse(localStorage.getItem('tragones_db_v1') || '[]');
              prod = local.find(p => p.id == id);
            } catch {}
          }
          if (prod) {
            const ex = cart.find(c => c.id == id);
            if (ex) ex.qty = (ex.qty || 1) + qty;
            else cart.push({id: prod.id, nombre: prod.nombre, precio: prod.precio, imagen: prod.imagen, qty});
          } else {
            // Si no hay datos, crea placeholder
            const ex = cart.find(c => c.id == id);
            if (ex) ex.qty += qty;
            else cart.push({id, nombre: 'Producto ' + id, precio: 0, imagen: '', qty});
          }
        }
        saveCart(cart);
        openCart();
        return cart;
      },
      remove: function(id) {
        let cart = getCart().filter(c => c.id != id);
        saveCart(cart);
      },
      updateQty: function(id, delta) {
        let cart = getCart();
        const item = cart.find(c => c.id == id);
        if (!item) return;
        item.qty = (item.qty || 1) + delta;
        if (item.qty <= 0) cart = cart.filter(c => c.id != id);
        saveCart(cart);
      },
      open: openCart,
      close: closeCart,
      sendWhatsapp
    };

    // Compatibilidad con funciones viejas
    window.addCart = window.TragonesCart.add;
    window.agregarCarrito = window.TragonesCart.add;

    updateCartCount();
    renderCart();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTragonesHeader);
  } else {
    initTragonesHeader();
  }
})();
