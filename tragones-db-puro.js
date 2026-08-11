
// tragones-db-puro.js - 100% HTML/CSS/JS - SIN PHP
// Guarda en localStorage y permite descargar el archivo nuevo

const DB_KEY = 'tragones_db_v1';

const TragonesDB = {
  productos: [],

  async init() {
    // 1. Intenta cargar productos.json del servidor
    try {
      const res = await fetch('./productos.json?t=' + Date.now());
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          // Si hay datos en localStorage, los respetamos (ediciones del admin)
          const local = localStorage.getItem(DB_KEY);
          if (local) {
            try {
              const localData = JSON.parse(local);
              if (localData.length >= data.length) {
                this.productos = localData;
                return localData;
              }
            } catch {}
          }
          this.productos = data;
          this.saveLocal(data);
          return data;
        }
      }
    } catch(e) {
      console.log('No se pudo cargar productos.json, usando localStorage');
    }

    // 2. Carga de localStorage
    const local = localStorage.getItem(DB_KEY);
    if (local) {
      try {
        this.productos = JSON.parse(local);
        return this.productos;
      } catch {}
    }

    // 3. Fallback a PRODUCTOS_INICIALES
    if (typeof PRODUCTOS_INICIALES !== 'undefined') {
      this.productos = PRODUCTOS_INICIALES;
      this.saveLocal(PRODUCTOS_INICIALES);
      return this.productos;
    }

    return [];
  },

  saveLocal(productos) {
    localStorage.setItem(DB_KEY, JSON.stringify(productos));
    this.productos = productos;
  },

  saveAll(productos) {
    this.saveLocal(productos);
  },

  getAll() {
    if (this.productos.length === 0) {
      try { return JSON.parse(localStorage.getItem(DB_KEY)) || []; } catch { return []; }
    }
    return this.productos;
  },

  getById(id) { return this.getAll().find(p => p.id == id); },
  getBySlug(slug) { return this.getAll().find(p => p.slug === slug); },

  getCategorias() {
    const cats = {};
    this.getAll().forEach(p => {
      const c = p.categoria || 'Sin Categoria';
      cats[c] = (cats[c] || 0) + 1;
    });
    return Object.entries(cats).map(([nombre, total]) => ({nombre, total})).sort((a,b) => b.total - a.total);
  },

  getByCategoria(categoria) {
    if (!categoria || categoria === 'Todos') return this.getAll();
    return this.getAll().filter(p => 
      p.categoria === categoria || 
      (p.categorias && p.categorias.includes(categoria))
    );
  },

  add(producto) {
    const productos = this.getAll();
    producto.id = Date.now();
    if (!producto.slug) producto.slug = producto.nombre.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    productos.push(producto);
    this.saveAll(productos);
    return producto;
  },

  update(id, datos) {
    let productos = this.getAll();
    const i = productos.findIndex(p => p.id == id);
    if (i === -1) return null;
    productos[i] = {...productos[i], ...datos};
    this.saveAll(productos);
    return productos[i];
  },

  delete(id) {
    const productos = this.getAll().filter(p => p.id != id);
    this.saveAll(productos);
  },

  search(q) {
    const s = q.toLowerCase();
    return this.getAll().filter(p => 
      p.nombre.toLowerCase().includes(s) ||
      (p.marca && p.marca.toLowerCase().includes(s)) ||
      p.categoria.toLowerCase().includes(s)
    );
  },

  // Para HTML/CSS/JS puro: descarga el archivo para reemplazarlo en el servidor manualmente
  descargarJSON() {
    const data = JSON.stringify(this.getAll(), null, 2);
    const blob = new Blob([data], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'productos.json';
    a.click();
    URL.revokeObjectURL(url);
  },

  descargarJS() {
    const data = 'const PRODUCTOS_INICIALES = ' + JSON.stringify(this.getAll(), null, 2) + ';';
    const blob = new Blob([data], {type: 'text/javascript'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'productos.db.js';
    a.click();
    URL.revokeObjectURL(url);
  }
};
