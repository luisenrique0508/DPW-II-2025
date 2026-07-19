<template>
  <footer class="glass-footer py-5 mt-auto">
    <div class="container">
      <div class="glass-card-dark p-5">
        <div class="row g-4">
          <!-- Logo y descripción -->
          <div class="col-lg-4 col-md-6">
            <div class="d-flex align-items-center mb-3">
              <div class="logo-container me-3">
                <img
                  src="@/assets/logo.png"
                  alt="Cafetería Luu"
                  class="footer-logo"
                />
              </div>
              <h5 class="mb-0 text-warning glow-text">Cafetería Luu</h5>
            </div>
            <p class="text-white opacity-80 mb-4">
              Disfruta de los mejores cafés de especialidad en un ambiente
              acogedor. Cada taza cuenta una historia única.
            </p>
            <div class="social-links d-flex gap-3">
              <a
                href="#"
                class="social-link glass-card p-3 rounded-circle"
                aria-label="Facebook"
              >
                <i class="bi bi-facebook text-warning"></i>
              </a>
              <a
                href="#"
                class="social-link glass-card p-3 rounded-circle"
                aria-label="Instagram"
              >
                <i class="bi bi-instagram text-warning"></i>
              </a>
              <a
                href="#"
                class="social-link glass-card p-3 rounded-circle"
                aria-label="WhatsApp"
              >
                <i class="bi bi-whatsapp text-warning"></i>
              </a>
            </div>
          </div>

          <!-- Enlaces rápidos -->
          <div class="col-lg-2 col-md-6">
            <h6 class="text-warning mb-3 glow-text">Enlaces</h6>
            <ul class="list-unstyled">
              <li class="mb-2">
                <router-link to="/" class="footer-link text-decoration-none">
                  <i class="bi bi-house me-2 text-warning"></i>
                  <span class="text-white opacity-80">Inicio</span>
                </router-link>
              </li>
              <li class="mb-2">
                <router-link to="/catalogo" class="footer-link text-decoration-none">
                  <i class="bi bi-grid me-2 text-warning"></i>
                  <span class="text-white opacity-80">Catálogo</span>
                </router-link>
              </li>
              <li class="mb-2">
                <router-link
                  to="/nosotros"
                  class="footer-link text-decoration-none"
                >
                  <i class="bi bi-people me-2 text-warning"></i>
                  <span class="text-white opacity-80">Nosotros</span>
                </router-link>
              </li>
              <li class="mb-2">
                <router-link
                  to="/contacto"
                  class="footer-link text-decoration-none"
                >
                  <i class="bi bi-envelope me-2 text-warning"></i>
                  <span class="text-white opacity-80">Contacto</span>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Información de contacto -->
          <div class="col-lg-3 col-md-6">
            <h6 class="text-warning mb-3 glow-text">Contacto</h6>
            <div class="contact-info">
              <p class="mb-2 d-flex align-items-center">
                <i class="bi bi-geo-alt text-warning me-2"></i>
                <span class="text-white opacity-80"
                  >Dirección de la cafetería</span
                >
              </p>
              <p class="mb-2 d-flex align-items-center">
                <i class="bi bi-telephone text-warning me-2"></i>
                <span class="text-white opacity-80">+1 234 567 890</span>
              </p>
              <p class="mb-2 d-flex align-items-center">
                <i class="bi bi-envelope text-warning me-2"></i>
                <span class="text-white opacity-80">info@cafeterialuu.com</span>
              </p>
              <p class="mb-0 d-flex align-items-center">
                <i class="bi bi-clock text-warning me-2"></i>
                <span class="text-white opacity-80"
                  >Lun - Dom: 7:00 AM - 10:00 PM</span
                >
              </p>
            </div>
          </div>

          <!-- Mapa -->
          <div class="col-lg-3 col-md-6">
            <h6 class="text-warning mb-3 glow-text">Ubicación</h6>
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1635749885!5m2!1sen!2sau"
                width="100%"
                height="150"
                style="border: 0; border-radius: 12px"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </div>

        <div class="glass-divider my-4"></div>

        <!-- Copyright -->
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="mb-0 text-white opacity-70">
              &copy; 2025 Cafetería Luu. Todos los derechos reservados.
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="mb-0 text-white opacity-70">
              Hecho con <i class="bi bi-heart-fill text-danger"></i> para los
              amantes del café
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.glass-footer {
  position: relative;
}

.footer-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 50%;
  border: 2px solid rgba(255, 193, 7, 0.6);
  box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
  transition: all 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(255, 193, 7, 0.5);
}

.social-link {
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
}

.footer-link {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
}

.footer-link:hover {
  transform: translateX(8px);
}

.footer-link:hover span {
  color: #ffc107 !important;
}

.contact-info i {
  width: 20px;
  transition: all 0.3s ease;
}

.contact-info p:hover i {
  transform: scale(1.2);
}

.map-container {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.map-container:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
}

.glass-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 193, 7, 0.3),
    rgba(255, 193, 7, 0.6),
    rgba(255, 193, 7, 0.3),
    transparent
  );
  border: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-logo {
    width: 50px;
    height: 50px;
  }

  .social-links {
    justify-content: center;
    margin-top: 1rem;
  }

  .text-md-end {
    text-align: center !important;
    margin-top: 1rem;
  }
}

@media (max-width: 576px) {
  .glass-card-dark {
    padding: 2rem !important;
  }

  .footer-link {
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .contact-info p {
    justify-content: center;
    text-align: center;
  }
}
</style>
