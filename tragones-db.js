// tragones-db.js - SIMULADOR DE BASE DE DATOS con LocalStorage
// Uso: carga primero productos.db.js, luego este archivo

const DB_KEY = 'tragones_db_v1';

const TragonesDB = {
  // Inicializa DB si no existe
  init() {
    if (!localStorage.getItem(DB_KEY)) {
      console.log('DB: Creando base inicial con', PRODUCTOS_INICIALES.length, 'productos');
      this.saveAll(PRODUCTOS_INICIALES);
    }
  },

  // Guarda todo el array
  saveAll(productos) {
    localStorage.setItem(DB_KEY, JSON.stringify(productos));
  },

  // Obtiene todos
  getAll() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem(DB_KEY)) || [];
    } catch {
      return [];
    }
  },

  // Simula fetch AJAX - retorna Promise como API real
  fetchAll() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.getAll()), 150); // simula latencia
    });
  },

  getById(id) {
    return this.getAll().find(p => p.id == id);
  },

  getBySlug(slug) {
    return this.getAll().find(p => p.slug === slug);
  },

  // CRUD
  add(producto) {
    const productos = this.getAll();
    producto.id = Date.now(); // id único simple
    if (!producto.slug) {
      producto.slug = producto.nombre.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }
    productos.push(producto);
    this.saveAll(productos);
    return producto;
  },

  update(id, nuevosDatos) {
    let productos = this.getAll();
    const index = productos.findIndex(p => p.id == id);
    if (index === -1) return null;
    productos[index] = { ...productos[index], ...nuevosDatos };
    this.saveAll(productos);
    return productos[index];
  },

  delete(id) {
    let productos = this.getAll();
    productos = productos.filter(p => p.id != id);
    this.saveAll(productos);
  },

  search(query) {
    const q = query.toLowerCase();
    return this.getAll().filter(p => 
      p.nombre.toLowerCase().includes(q) ||
      p.marca.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q)
    );
  },

  // Exporta para reemplazar productos.db.js en servidor
  exportJSON() {
    return JSON.stringify(this.getAll(), null, 2);
  },

  exportJSFile() {
    return `const PRODUCTOS_INICIALES = ${this.exportJSON()};`;
  }
};

// Auto-init
TragonesDB.init();
