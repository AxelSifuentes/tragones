// tragones-cart.js - CARRITO con LocalStorage
// Guarda carrito y actualiza contador header

const CART_KEY = 'tragones_cart_v1';

const TragonesCart = {
  get() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
      return [];
    }
  },

  save(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    this.updateBadge();
  },

  add(productId, qty = 1) {
    const cart = this.get();
    const existing = cart.find(item => item.id == productId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, qty: qty });
    }
    this.save(cart);
    this.showToast('Producto agregado');
  },

  remove(productId) {
    const cart = this.get().filter(item => item.id != productId);
    this.save(cart);
  },

  updateQty(productId, qty) {
    const cart = this.get();
    const item = cart.find(i => i.id == productId);
    if (item) {
      if (qty <= 0) {
        this.remove(productId);
      } else {
        item.qty = qty;
        this.save(cart);
      }
    }
  },

  clear() {
    this.save([]);
  },

  count() {
    return this.get().reduce((acc, item) => acc + item.qty, 0);
  },

  total() {
    const productos = TragonesDB ? TragonesDB.getAll() : [];
    return this.get().reduce((acc, item) => {
      const prod = productos.find(p => p.id == item.id);
      return acc + (prod ? prod.precio * item.qty : 0);
    }, 0);
  },

  // Actualiza badge carrito en header
  updateBadge() {
    const badges = document.querySelectorAll('#cartCount, .mini-cart-items, [data-cart-count]');
    const count = this.count();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  showToast(msg) {
    // Simple toast visual
    let t = document.getElementById('cartToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'cartToast';
      t.style.cssText = 'position:fixed;bottom:90px;right:20px;background:#ffaa00;color:#000;padding:12px 20px;border-radius:9999px;font-weight:bold;font-size:13px;z-index:9999;box-shadow:0 10px 30px rgba(0,0,0,.4);transform:translateY(20px);opacity:0;transition:.3s';
      document.body.appendChild(t);
    }
    t.textContent = msg + ' (' + this.count() + ')';
    t.style.transform = 'translateY(0)';
    t.style.opacity = '1';
    setTimeout(() => {
      t.style.transform = 'translateY(20px)';
      t.style.opacity = '0';
    }, 2000);
  },

  // Genera mensaje WhatsApp con carrito
  getWhatsAppMessage() {
    const productos = TragonesDB ? TragonesDB.getAll() : [];
    let msg = 'Hola Tragones! Quiero pedir:%0A';
    this.get().forEach(item => {
      const prod = productos.find(p => p.id == item.id);
      if (prod) {
        msg += `- ${prod.nombre} x${item.qty} = S/ ${(prod.precio * item.qty).toFixed(2)}%0A`;
      }
    });
    msg += `%0ATotal: S/ ${this.total().toFixed(2)}`;
    return msg;
  }
};

// Actualiza badge al cargar
document.addEventListener('DOMContentLoaded', () => {
  TragonesCart.updateBadge();
});
