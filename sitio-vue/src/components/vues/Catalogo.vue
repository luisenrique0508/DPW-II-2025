<template>
  <div class="catalogo-page">
    <!-- Hero Section -->
    <section
      class="hero-section position-relative min-vh-100 d-flex align-items-center"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="hero-content glass-card p-5">
              <h1 class="display-2 fw-bold mb-4 text-white glow-text">
                Nuestro <span class="text-warning">Catálogo</span>
                <i class="bi bi-cup-hot text-warning ms-3 float-animation"></i>
              </h1>
              <p class="lead fs-4 mb-0 text-white opacity-90">
                Descubre nuestra selección de cafés premium, postres artesanales
                y bebidas especiales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filtros Section -->
    <section class="py-4">
      <div class="container">
        <div class="glass-card p-4">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="filter-buttons d-flex flex-wrap gap-2">
                <button
                  v-for="categoria in categorias"
                  :key="categoria.id"
                  @click="filtrarPorCategoria(categoria.id)"
                  :class="[
                    'btn',
                    'rounded-pill',
                    'px-4',
                    categoriaActiva === categoria.id
                      ? 'glass-button'
                      : 'glass-card-dark text-white',
                  ]"
                >
                  <i :class="categoria.icono + ' me-2'"></i>
                  {{ categoria.nombre }}
                </button>
              </div>
            </div>
            <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <div
                class="d-flex gap-2 align-items-center justify-content-lg-end"
              >
                <div class="search-box position-relative flex-grow-1">
                  <input
                    type="text"
                    v-model="busqueda"
                    class="form-control glass-input rounded-pill ps-5"
                    placeholder="Buscar productos..."
                  />
                  <i
                    class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-warning"
                  ></i>
                </div>
                <button
                  @click="refrescarMenu"
                  class="btn glass-card-dark text-white rounded-pill px-3"
                  :disabled="loading"
                  title="Actualizar menú desde Google Sheets"
                >
                  <i
                    :class="[
                      'bi',
                      loading
                        ? 'bi-arrow-clockwise spin'
                        : 'bi-arrow-clockwise',
                    ]"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Productos Section -->
    <section class="py-5">
      <div class="container">
        <!-- Estado de carga -->
        <div v-if="loading" class="text-center py-5">
          <div class="glass-card p-5 d-inline-block">
            <div class="spinner-border text-warning mb-3" role="status">
              <span class="visually-hidden">Cargando...</span>
            </div>
            <h4 class="text-white mb-3">Cargando menú...</h4>
            <p class="text-white opacity-80">
              Obteniendo los productos más frescos desde nuestra base de datos.
            </p>
          </div>
        </div>

        <!-- Mensaje de error -->
        <div v-else-if="error" class="text-center py-3 mb-4">
          <div class="glass-card p-4 d-inline-block">
            <i class="bi bi-exclamation-triangle text-warning fs-4 me-2"></i>
            <span class="text-white">{{ error }}</span>
            <button
              @click="refrescarMenu"
              class="btn glass-button btn-sm ms-3 rounded-pill"
            >
              <i class="bi bi-arrow-clockwise me-1"></i>
              Reintentar
            </button>
          </div>
        </div>

        <!-- Grid de productos -->
        <div v-else class="row g-4">
          <div
            v-for="producto in productosFiltrados"
            :key="producto.id"
            class="col-lg-4 col-md-6"
          >
            <div class="producto-card glass-card h-100 overflow-hidden">
              <div class="producto-image position-relative">
                <img
                  :src="producto.imagen"
                  :alt="producto.nombre"
                  class="w-100"
                />
                <div
                  class="producto-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                >
                  <button
                    class="btn glass-button rounded-pill px-4"
                    @click="verDetalles(producto)"
                  >
                    <i class="bi bi-eye me-2"></i>
                    Ver Detalles
                  </button>
                </div>
                <div class="producto-badge position-absolute top-0 end-0 m-3">
                  <span
                    v-if="producto.nuevo"
                    class="badge glass-card text-warning rounded-pill px-3 py-2"
                  >
                    <i class="bi bi-star me-1"></i>Nuevo
                  </span>
                  <span
                    v-if="producto.popular"
                    class="badge glass-card text-danger rounded-pill px-3 py-2"
                  >
                    <i class="bi bi-heart me-1"></i>Popular
                  </span>
                </div>
              </div>

              <div class="producto-content p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-2"
                >
                  <h5 class="fw-bold text-white mb-0">{{ producto.nombre }}</h5>
                  <span class="precio text-warning fw-bold fs-5"
                    >{{ producto.precio }} Bs</span
                  >
                </div>

                <p class="text-white opacity-80 mb-3">
                  {{ producto.descripcion }}
                </p>

                <div class="producto-info mb-3">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-tag text-warning me-2"></i>
                    <span class="text-white opacity-70 small">{{
                      getCategoriaName(producto.categoria)
                    }}</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="rating me-3">
                      <i
                        v-for="n in 5"
                        :key="n"
                        :class="[
                          'bi',
                          n <= producto.rating
                            ? 'bi-star-fill text-warning'
                            : 'bi-star text-warning opacity-50',
                        ]"
                      >
                      </i>
                    </div>
                    <span class="text-white opacity-70 small"
                      >({{ producto.reviews }} reviews)</span
                    >
                  </div>
                </div>

                <div class="producto-actions d-flex gap-2">
                  <button
                    class="btn glass-button flex-grow-1 rounded-pill"
                    @click="agregarAlCarrito(producto)"
                  >
                    <i class="bi bi-cart-plus me-2"></i>
                    Agregar
                  </button>
                  <button
                    class="btn glass-card-dark text-white rounded-pill px-3"
                    @click="toggleFavorito(producto)"
                  >
                    <i
                      :class="[
                        'bi',
                        producto.favorito
                          ? 'bi-heart-fill text-danger'
                          : 'bi-heart',
                      ]"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- No hay productos -->
          <div
            v-if="productosFiltrados.length === 0"
            class="col-12 text-center py-5"
          >
            <div class="glass-card p-5 d-inline-block">
              <i class="bi bi-search fs-1 text-warning mb-3"></i>
              <h4 class="text-white mb-3">No se encontraron productos</h4>
              <p class="text-white opacity-80">
                Intenta con otros términos de búsqueda o selecciona una
                categoría diferente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de Detalles -->
    <div class="modal fade" id="detalleModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content glass-card border-0">
          <div class="modal-header border-0">
            <h5 class="modal-title text-white glow-text">
              {{ productoSeleccionado?.nombre }}
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body" v-if="productoSeleccionado">
            <div class="row g-4">
              <div class="col-md-6">
                <img
                  :src="productoSeleccionado.imagen"
                  :alt="productoSeleccionado.nombre"
                  class="img-fluid rounded-4 glow-border"
                />
              </div>
              <div class="col-md-6">
                <div class="producto-detalle">
                  <div
                    class="d-flex justify-content-between align-items-center mb-3"
                  >
                    <span class="precio text-warning fw-bold fs-3"
                      >{{ productoSeleccionado.precio }} Bs</span
                    >
                    <div class="rating">
                      <i
                        v-for="n in 5"
                        :key="n"
                        :class="[
                          'bi',
                          n <= productoSeleccionado.rating
                            ? 'bi-star-fill text-warning'
                            : 'bi-star text-warning opacity-50',
                        ]"
                      >
                      </i>
                    </div>
                  </div>

                  <p class="text-white opacity-90 mb-4">
                    {{ productoSeleccionado.descripcionCompleta }}
                  </p>

                  <div
                    class="ingredientes mb-4"
                    v-if="productoSeleccionado.ingredientes"
                  >
                    <h6 class="text-warning mb-2">Ingredientes:</h6>
                    <div class="d-flex flex-wrap gap-2">
                      <span
                        v-for="ingrediente in productoSeleccionado.ingredientes"
                        :key="ingrediente"
                        class="badge glass-card-dark text-white rounded-pill px-3 py-2"
                      >
                        {{ ingrediente }}
                      </span>
                    </div>
                  </div>

                  <div class="cantidad mb-4">
                    <label class="form-label text-white">Cantidad:</label>
                    <div class="input-group" style="max-width: 150px">
                      <button
                        class="btn glass-card-dark text-white"
                        @click="cantidad > 1 ? cantidad-- : null"
                      >
                        <i class="bi bi-dash"></i>
                      </button>
                      <input
                        type="number"
                        v-model="cantidad"
                        class="form-control glass-input text-center"
                        min="1"
                      />
                      <button
                        class="btn glass-card-dark text-white"
                        @click="cantidad++"
                      >
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer border-0">
            <button
              type="button"
              class="btn glass-card-dark text-white rounded-pill"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              class="btn glass-button rounded-pill px-4"
              @click="agregarAlCarritoModal"
            >
              <i class="bi bi-cart-plus me-2"></i>
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogoPage",
  data() {
    return {
      categoriaActiva: "todos",
      busqueda: "",
      cantidad: 1,
      productoSeleccionado: null,
      productos: [],
      loading: true,
      error: null,
      categorias: [
        { id: "todos", nombre: "Todos", icono: "bi bi-grid" },
        { id: "cafes", nombre: "Cafés", icono: "bi bi-cup-hot" },
        { id: "postres", nombre: "Postres", icono: "bi bi-cake2" },
        { id: "bebidas", nombre: "Bebidas Frias", icono: "bi bi-cup-straw" },
        { id: "snacks", nombre: "Snacks", icono: "bi bi-cookie" },
      ],
    };
  },
  async mounted() {
    await this.cargarMenuDesdeGoogleSheets();
  },
  computed: {
    productosFiltrados() {
      let productos = this.productos;

      // Filtrar por categoría
      if (this.categoriaActiva !== "todos") {
        productos = productos.filter(
          (p) => p.categoria === this.categoriaActiva
        );
      }

      // Filtrar por búsqueda
      if (this.busqueda.trim()) {
        const busqueda = this.busqueda.toLowerCase();
        productos = productos.filter(
          (p) =>
            p.nombre.toLowerCase().includes(busqueda) ||
            p.descripcion.toLowerCase().includes(busqueda)
        );
      }

      return productos;
    },
  },
  methods: {
    async cargarMenuDesdeGoogleSheets() {
      try {
        this.loading = true;
        this.error = null;

        // URL directa de tu Google Sheets (corregida con pestaña 'menu')
        const GOOGLE_SHEETS_URL =
          "https://opensheet.elk.sh/1a8IK5WebbuUZcm2x2W-dsiH4XFV8qAtjCsCvET2UcY8/menu";

        console.log("🔄 Cargando menú desde Google Sheets:", GOOGLE_SHEETS_URL);

        const response = await fetch(GOOGLE_SHEETS_URL);

        console.log("📡 Respuesta recibida:", {
          status: response.status,
          statusText: response.statusText,
          ok: response.ok,
          headers: Object.fromEntries(response.headers.entries()),
        });

        if (!response.ok) {
          throw new Error(
            `Error HTTP: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("📊 Datos brutos recibidos:", data);
        console.log("📊 Tipo de datos:", typeof data);
        console.log("📊 Es array:", Array.isArray(data));
        console.log("📊 Cantidad de elementos:", data?.length);

        if (!Array.isArray(data) || data.length === 0) {
          console.error("❌ Error: No hay datos válidos en la hoja");
          throw new Error("No se encontraron datos en la hoja de cálculo");
        }

        // Función para convertir enlaces de Google Drive
        const convertirGoogleDriveUrl = (url) => {
          if (!url)
            return "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop";

          // Si ya es una URL de imagen directa, devolverla tal como está
          if (
            url.includes("unsplash.com") ||
            url.includes("imgur.com") ||
            url.includes("drive.google.com/uc?id=")
          ) {
            return url;
          }

          // Convertir enlaces de Google Drive
          if (url.includes("drive.google.com/file/d/")) {
            const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
            if (match) {
              return `https://drive.google.com/uc?id=${match[1]}`;
            }
          }

          // Si no es un enlace reconocido, usar imagen por defecto
          return url.startsWith("http")
            ? url
            : "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop";
        };

        // Transformar los datos directamente
        this.productos = data.map((item, index) => {
          console.log(`🔄 Procesando producto ${index + 1}:`, item);

          const imagenOriginal = item.Imagen?.trim();
          const imagenConvertida = convertirGoogleDriveUrl(imagenOriginal);

          console.log(`📸 Imagen original: "${imagenOriginal}"`);
          console.log(`📸 Imagen convertida: "${imagenConvertida}"`);

          const producto = {
            id: index + 1,
            nombre: item.nombre?.trim() || "Producto sin nombre",
            precio: parseFloat(item.precio) || 0,
            categoria: item.categoria?.toLowerCase().trim() || "otros",
            imagen: imagenConvertida,
            descripcion:
              item.descripcion?.trim() || "Sin descripción disponible",
            descripcionCompleta:
              item.descripcion?.trim() || "Sin descripción disponible",
            ingredientes: [],
            rating: 5,
            reviews: Math.floor(Math.random() * 100) + 10,
            nuevo: Math.random() > 0.7,
            popular: Math.random() > 0.6,
            favorito: false,
          };

          console.log(`✅ Producto procesado:`, producto);
          return producto;
        });

        console.log(
          `✅ Menú cargado exitosamente: ${this.productos.length} productos`
        );
        console.log("📋 Productos finales:", this.productos);
      } catch (error) {
        console.error("❌ Error al cargar el menú desde Google Sheets:", error);

        let errorMessage = "Error al cargar el menú desde Google Sheets.";

        if (error.message.includes("HTTP")) {
          errorMessage =
            "No se pudo conectar con Google Sheets. Verifica la URL.";
        } else if (error.message.includes("datos")) {
          errorMessage =
            "La hoja de cálculo está vacía o no tiene el formato correcto.";
        } else if (error.name === "TypeError") {
          errorMessage = "Error de conexión. Verifica tu conexión a internet.";
        }

        this.error = `${errorMessage} Mostrando productos de ejemplo.`;

        // Productos de respaldo hardcodeados
        this.productos = [
          {
            id: 1,
            nombre: "Espresso Clásico",
            precio: 25.0,
            categoria: "cafes",
            imagen:
              "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop",
            descripcion: "Café espresso tradicional con granos 100% arábica",
            descripcionCompleta:
              "Nuestro espresso clásico está preparado con granos de café 100% arábica.",
            ingredientes: ["Café Arábica", "Agua filtrada"],
            rating: 5,
            reviews: 124,
            nuevo: false,
            popular: true,
            favorito: false,
          },
          {
            id: 2,
            nombre: "Cappuccino Artesanal",
            precio: 30.0,
            categoria: "cafes",
            imagen:
              "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",
            descripcion: "Espresso con leche vaporizada y espuma cremosa",
            descripcionCompleta:
              "Cappuccino preparado artesanalmente con espresso doble.",
            ingredientes: ["Espresso doble", "Leche entera", "Espuma de leche"],
            rating: 5,
            reviews: 89,
            nuevo: false,
            popular: true,
            favorito: false,
          },
          {
            id: 3,
            nombre: "Cheesecake de Frutos Rojos",
            precio: 35.0,
            categoria: "postres",
            imagen:
              "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop",
            descripcion: "Cremoso cheesecake con salsa de frutos rojos",
            descripcionCompleta:
              "Exquisito cheesecake artesanal con base de galleta.",
            ingredientes: ["Queso crema", "Galletas", "Frutos rojos"],
            rating: 5,
            reviews: 156,
            nuevo: true,
            popular: false,
            favorito: false,
          },
        ];
      } finally {
        this.loading = false;
      }
    },

    async refrescarMenu() {
      await this.cargarMenuDesdeGoogleSheets();
    },

    filtrarPorCategoria(categoria) {
      this.categoriaActiva = categoria;
    },

    getCategoriaName(categoriaId) {
      const categoria = this.categorias.find((c) => c.id === categoriaId);
      return categoria ? categoria.nombre : "";
    },

    verDetalles(producto) {
      this.productoSeleccionado = producto;
      this.cantidad = 1;
      // Usar Bootstrap desde window global
      const { Modal } = window.bootstrap || {};
      if (Modal) {
        const modal = new Modal(document.getElementById("detalleModal"));
        modal.show();
      }
    },

    agregarAlCarrito(producto) {
      // Aquí puedes implementar la lógica del carrito
      alert(
        `${producto.nombre} agregado al carrito por ${producto.precio} Bs!`
      );
    },

    agregarAlCarritoModal() {
      if (this.productoSeleccionado) {
        const total = (
          this.cantidad * this.productoSeleccionado.precio
        ).toFixed(2);
        alert(
          `${this.cantidad} x ${this.productoSeleccionado.nombre} agregado al carrito por ${total} Bs!`
        );
        // Usar Bootstrap desde window global
        const { Modal } = window.bootstrap || {};
        if (Modal) {
          const modal = Modal.getInstance(
            document.getElementById("detalleModal")
          );
          if (modal) {
            modal.hide();
          }
        }
      }
    },

    toggleFavorito(producto) {
      producto.favorito = !producto.favorito;
    },
  },
};
</script>

<style scoped>
.hero-section {
  padding-top: 100px;
  position: relative;
}

.glass-input {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.6) !important;
}

.glass-input:focus {
  background: rgba(255, 255, 255, 0.15) !important;
  border-color: rgba(255, 193, 7, 0.5) !important;
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25) !important;
  color: white !important;
}

.filter-buttons .btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.filter-buttons .btn:hover {
  transform: translateY(-2px);
}

.producto-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
}

.producto-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(255, 193, 7, 0.2);
}

.producto-image {
  height: 250px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
}

.producto-image img {
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.producto-overlay {
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: all 0.3s ease;
}

.producto-card:hover .producto-overlay {
  opacity: 1;
}

.producto-card:hover .producto-image img {
  transform: scale(1.1);
}

.producto-badge .badge {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.rating i {
  font-size: 0.9rem;
}

.producto-actions .btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.producto-actions .btn:hover {
  transform: translateY(-2px);
}

.modal-content {
  background: rgba(0, 0, 0, 0.8) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.search-box i {
  pointer-events: none;
}

/* Efectos adicionales para el estilo liquid glass */
.hero-content {
  position: relative;
  overflow: hidden;
}

.hero-content::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 193, 7, 0.1),
    transparent
  );
  animation: shimmer 4s infinite;
  pointer-events: none;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    padding-top: 80px;
  }

  .display-2 {
    font-size: 2.5rem;
  }

  .filter-buttons {
    justify-content: center;
  }

  .filter-buttons .btn {
    margin-bottom: 0.5rem;
  }

  .glass-card {
    padding: 2rem !important;
  }

  .producto-image {
    height: 200px;
  }
}

@media (max-width: 576px) {
  .display-2 {
    font-size: 2rem;
  }

  .glass-card {
    padding: 1.5rem !important;
  }

  .filter-buttons .btn {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
}

/* Animaciones flotantes */
.float-animation {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Animación de rotación para el botón de refrescar */
.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
