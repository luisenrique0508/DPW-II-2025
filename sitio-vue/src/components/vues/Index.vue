<template>
  <div class="index-page">
    <!-- Hero Section -->
    <section class="hero-section position-relative min-vh-100 d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content glass-card p-5 mb-4 mb-lg-0">
              <h1 class="display-3 fw-bold mb-4 text-white glow-text">
                Bienvenidos a 
                <span class="text-warning">Cafetería Luu</span>
                <i class="bi bi-cup-hot text-warning ms-2 float-animation"></i>
              </h1>
              <p class="lead mb-4 fs-5 text-white opacity-90">
                Disfruta de los mejores cafés de especialidad y postres artesanales 
                en un ambiente acogedor. Cada taza cuenta una historia única.
              </p>
              <div class="hero-buttons d-flex flex-wrap gap-3">
                <router-link to="/catalogo" class="btn glass-button btn-lg rounded-pill px-4">
                  <i class="bi bi-grid me-2"></i>
                  Ver Catálogo
                </router-link>
                <router-link to="/contacto" class="btn glass-card-dark text-white btn-lg rounded-pill px-4">
                  <i class="bi bi-envelope me-2"></i>
                  Contáctanos
                </router-link>
                <a href="#productos" class="btn glass-card-dark text-white btn-lg rounded-pill px-4">
                  <i class="bi bi-arrow-down me-2"></i>
                  Ver Más
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image text-center">
              <div class="image-container glass-card p-4">
                <img src="@/assets/cafeteria.png" alt="Cafetería Luu" class="img-fluid rounded-4 glow-border">
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <a href="#productos" class="text-white glass-card-dark p-3 rounded-circle">
          <i class="bi bi-chevron-down fs-4 animate-bounce"></i>
        </a>
      </div>
    </section>

    <!-- Features Section -->
    <section id="productos" class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <div class="glass-card p-4 d-inline-block">
            <h2 class="display-5 fw-bold text-white mb-3 glow-text">¿Por qué elegir Cafetería Luu?</h2>
            <p class="lead text-white opacity-90">Descubre lo que nos hace especiales</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="feature-card glass-card h-100 p-4 text-center">
              <div class="feature-icon mb-4">
                <div class="icon-container glass-card-dark p-4 rounded-circle d-inline-flex">
                  <i class="bi bi-cup-hot fs-1 text-warning"></i>
                </div>
              </div>
              <h4 class="fw-bold mb-3 text-white">Café de Especialidad</h4>
              <p class="text-white opacity-80">
                Granos seleccionados de las mejores fincas del mundo, 
                tostados artesanalmente para garantizar el mejor sabor.
              </p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="feature-card glass-card h-100 p-4 text-center">
              <div class="feature-icon mb-4">
                <div class="icon-container glass-card-dark p-4 rounded-circle d-inline-flex">
                  <i class="bi bi-heart fs-1 text-danger"></i>
                </div>
              </div>
              <h4 class="fw-bold mb-3 text-white">Ambiente Acogedor</h4>
              <p class="text-white opacity-80">
                Un espacio diseñado para que te sientas como en casa, 
                perfecto para trabajar, estudiar o relajarte.
              </p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <div class="feature-card glass-card h-100 p-4 text-center">
              <div class="feature-icon mb-4">
                <div class="icon-container glass-card-dark p-4 rounded-circle d-inline-flex">
                  <i class="bi bi-award fs-1 text-success"></i>
                </div>
              </div>
              <h4 class="fw-bold mb-3 text-white">Calidad Premium</h4>
              <p class="text-white opacity-80">
                Ingredientes frescos y de la más alta calidad en todos 
                nuestros productos y preparaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-5">
      <div class="container">
        <div class="glass-card-dark p-5 rounded-4">
          <div class="row text-center g-4">
            <div class="col-lg-3 col-md-6">
              <div class="stat-item glass-card p-4 rounded-4 h-100">
                <i class="bi bi-people fs-1 text-warning mb-3 d-block"></i>
                <h3 class="fw-bold text-white glow-text">1000+</h3>
                <p class="text-white opacity-80 mb-0">Clientes Satisfechos</p>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
              <div class="stat-item glass-card p-4 rounded-4 h-100">
                <i class="bi bi-cup-hot fs-1 text-warning mb-3 d-block"></i>
                <h3 class="fw-bold text-white glow-text">50+</h3>
                <p class="text-white opacity-80 mb-0">Variedades de Café</p>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
              <div class="stat-item glass-card p-4 rounded-4 h-100">
                <i class="bi bi-clock fs-1 text-warning mb-3 d-block"></i>
                <h3 class="fw-bold text-white glow-text">15</h3>
                <p class="text-white opacity-80 mb-0">Horas de Servicio</p>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
              <div class="stat-item glass-card p-4 rounded-4 h-100">
                <i class="bi bi-star-fill fs-1 text-warning mb-3 d-block"></i>
                <h3 class="fw-bold text-white glow-text">5.0</h3>
                <p class="text-white opacity-80 mb-0">Calificación Promedio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5">
      <div class="container">
        <div class="glass-card p-5 rounded-4">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <h3 class="fw-bold text-white mb-3 glow-text">¿Listo para una experiencia única?</h3>
              <p class="text-white opacity-90 mb-0 fs-5">Visítanos hoy y descubre por qué somos la cafetería favorita de la ciudad.</p>
            </div>
            <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <router-link to="/catalogo" class="btn glass-button btn-lg rounded-pill px-4">
                <i class="bi bi-grid me-2"></i>
                Ver Catálogo
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    // Smooth scroll solo para enlaces internos de la página (no rutas de Vue Router)
    document.querySelectorAll('a[href^="#"]:not([href^="#/"])').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Solo procesar si es un selector CSS válido (no una ruta de Vue Router)
        if (href && href.startsWith('#') && !href.startsWith('#/')) {
          try {
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          } catch (error) {
            // Ignorar errores de selectores inválidos
            console.warn('Selector CSS inválido:', href);
          }
        }
      });
    });
  }
}
</script>

<style scoped>
.hero-section {
  padding-top: 100px;
  position: relative;
}

.image-container {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-container:hover {
  transform: translateY(-10px);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-indicator a {
  transition: all 0.3s ease;
  text-decoration: none;
}

.scroll-indicator a:hover {
  transform: translateY(-5px);
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.feature-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 40px rgba(255, 193, 7, 0.2);
}

.icon-container {
  transition: all 0.3s ease;
  width: 80px;
  height: 80px;
}

.feature-card:hover .icon-container {
  transform: scale(1.1) rotate(5deg);
}

.stat-item {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-item:hover {
  transform: translateY(-10px) scale(1.05);
}

.hero-buttons .btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-buttons .btn:hover {
  transform: translateY(-3px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    padding-top: 80px;
  }
  
  .hero-content {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .display-3 {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-buttons .btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 576px) {
  .display-3 {
    font-size: 2rem;
  }
  
  .lead {
    font-size: 1.1rem;
  }
  
  .glass-card {
    padding: 2rem !important;
  }
  
  .icon-container {
    width: 60px;
    height: 60px;
  }
  
  .icon-container i {
    font-size: 1.5rem !important;
  }
}

/* Efectos adicionales para el estilo liquid glass */
.hero-content {
  position: relative;
  overflow: hidden;
}

.hero-content::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 193, 7, 0.1), transparent);
  animation: shimmer 3s infinite;
  pointer-events: none;
}

@keyframes shimmer {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}
</style>