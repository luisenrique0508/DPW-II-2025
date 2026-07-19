<template>
  <nav class="navbar navbar-expand-lg fixed-top glass-navbar">
    <div class="container">
      <!-- Logo -->
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <div class="logo-container">
          <img src="@/assets/logo.png" alt="Cafetería Luu" class="navbar-logo">
        </div>
        <span class="brand-text glow-text">Cafetería Luu</span>
      </router-link>

      <!-- Toggler para móvil -->
      <button 
        class="navbar-toggler glass-toggler border-0" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <i class="bi bi-list fs-2"></i>
      </button>

      <!-- Menu items -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link glass-nav-link" to="/">
              <i class="bi bi-house me-2"></i>
              <span>Inicio</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link glass-nav-link menu-destacado" to="/catalogo">
              <i class="bi bi-cup-hot me-2"></i>
              <span>Menú</span>
              <small class="badge bg-warning text-dark ms-1 rounded-pill">Google Sheets</small>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link glass-nav-link" to="/nosotros">
              <i class="bi bi-people me-2"></i>
              <span>Nosotros</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link glass-nav-link" to="/contacto">
              <i class="bi bi-envelope me-2"></i>
              <span>Contacto</span>
            </router-link>
          </li>
        </ul>
        
        <!-- Botón de llamada a la acción -->
        <div class="d-flex ms-lg-3 mt-2 mt-lg-0">
          <a href="tel:+1234567890" class="btn glass-button rounded-pill px-4 py-2 fw-semibold">
            <i class="bi bi-telephone me-2"></i>
            Llamar
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMenu',
  mounted() {
    // Efecto de scroll para la navbar
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = document.querySelector('.glass-navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }
}
</script>

<style scoped>
.glass-navbar {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1rem 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-navbar.scrolled {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  padding: 0.7rem 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.logo-container {
  position: relative;
  margin-right: 12px;
}

.navbar-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
  border: 2px solid rgba(255, 193, 7, 0.6);
  box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
  transition: all 0.3s ease;
}

.navbar-logo:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(255, 193, 7, 0.5);
}

.brand-text {
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff !important;
  text-shadow: 0 0 20px rgba(255, 193, 7, 0.6);
  letter-spacing: -0.5px;
}

.glass-nav-link {
  font-weight: 500;
  padding: 0.7rem 1.2rem !important;
  margin: 0 0.3rem;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  color: rgba(255, 255, 255, 0.9) !important;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
}

.glass-nav-link:hover {
  background: rgba(255, 193, 7, 0.2);
  color: #fff !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
  border-color: rgba(255, 193, 7, 0.4);
}

.glass-nav-link.router-link-active {
  background: rgba(255, 193, 7, 0.25);
  color: #fff !important;
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
  border-color: rgba(255, 193, 7, 0.5);
}

.menu-destacado {
  position: relative;
  background: rgba(255, 193, 7, 0.15) !important;
  border-color: rgba(255, 193, 7, 0.3) !important;
}

.menu-destacado .badge {
  font-size: 0.6rem;
  padding: 0.2rem 0.4rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

.glass-toggler {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 0.5rem;
  color: #fff;
  transition: all 0.3s ease;
}

.glass-toggler:hover {
  background: rgba(255, 193, 7, 0.2);
  transform: scale(1.05);
}

.glass-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
}

.glass-button {
  background: rgba(255, 193, 7, 0.8) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 193, 7, 0.4) !important;
  color: #000 !important;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
}

.glass-button:hover {
  background: rgba(255, 193, 7, 0.95) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
  color: #000 !important;
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
  .navbar-collapse {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    margin-top: 1rem;
    padding: 1.5rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
  
  .glass-nav-link {
    margin: 0.3rem 0;
    text-align: center;
    justify-content: center;
  }
  
  .glass-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .brand-text {
    font-size: 1.3rem;
  }
  
  .navbar-logo {
    width: 45px;
    height: 45px;
  }
}

/* Animaciones adicionales */
.glass-nav-link i {
  transition: all 0.3s ease;
}

.glass-nav-link:hover i {
  transform: scale(1.1);
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}
</style>