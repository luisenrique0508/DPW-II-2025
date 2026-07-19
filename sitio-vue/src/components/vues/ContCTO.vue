<template>
  <div class="contacto-page">
    <!-- Hero Section -->
    <section class="hero-section position-relative min-vh-100 d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="hero-content glass-card p-5">
              <h1 class="display-2 fw-bold mb-4 text-white glow-text">
                <i class="bi bi-envelope text-warning me-3 float-animation"></i>
                Contáctanos
              </h1>
              <p class="lead fs-4 mb-0 text-white opacity-90">
                Estamos aquí para escucharte. Comparte tus ideas, sugerencias o simplemente salúdanos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-5">
      <div class="container">
        <div class="row g-5">
          <!-- Formulario de Contacto -->
          <div class="col-lg-8">
            <div class="contact-form glass-card p-5">
              <h3 class="fw-bold mb-4 text-white glow-text">
                <i class="bi bi-chat-dots text-warning me-2"></i>
                Envíanos un Mensaje
              </h3>
              
              <form @submit.prevent="submitForm" class="needs-validation" novalidate>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="nombre" class="form-label fw-semibold text-white">
                      <i class="bi bi-person me-1 text-warning"></i>Nombre Completo
                    </label>
                    <input 
                      type="text" 
                      class="form-control form-control-lg glass-input" 
                      id="nombre"
                      v-model="form.nombre"
                      placeholder="Tu nombre completo"
                      required>
                    <div class="invalid-feedback">
                      Por favor ingresa tu nombre.
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="email" class="form-label fw-semibold text-white">
                      <i class="bi bi-envelope me-1 text-warning"></i>Email
                    </label>
                    <input 
                      type="email" 
                      class="form-control form-control-lg glass-input" 
                      id="email"
                      v-model="form.email"
                      placeholder="tu@email.com"
                      required>
                    <div class="invalid-feedback">
                      Por favor ingresa un email válido.
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <label for="telefono" class="form-label fw-semibold text-white">
                      <i class="bi bi-telephone me-1 text-warning"></i>Teléfono (Opcional)
                    </label>
                    <input 
                      type="tel" 
                      class="form-control form-control-lg glass-input" 
                      id="telefono"
                      v-model="form.telefono"
                      placeholder="+1 234 567 890">
                  </div>
                  
                  <div class="col-12">
                    <label for="asunto" class="form-label fw-semibold text-white">
                      <i class="bi bi-tag me-1 text-warning"></i>Asunto
                    </label>
                    <select class="form-select form-select-lg glass-input" id="asunto" v-model="form.asunto" required>
                      <option value="">Selecciona un asunto</option>
                      <option value="consulta">Consulta General</option>
                      <option value="reserva">Reserva de Mesa</option>
                      <option value="evento">Eventos Privados</option>
                      <option value="sugerencia">Sugerencias</option>
                      <option value="queja">Quejas</option>
                      <option value="otro">Otro</option>
                    </select>
                    <div class="invalid-feedback">
                      Por favor selecciona un asunto.
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <label for="mensaje" class="form-label fw-semibold text-white">
                      <i class="bi bi-chat-text me-1 text-warning"></i>Mensaje
                    </label>
                    <textarea 
                      class="form-control glass-input" 
                      id="mensaje"
                      v-model="form.mensaje"
                      rows="5"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      required></textarea>
                    <div class="invalid-feedback">
                      Por favor escribe tu mensaje.
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <button type="submit" class="btn glass-button btn-lg rounded-pill px-5">
                      <i class="bi bi-send me-2"></i>
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- Información de Contacto -->
          <div class="col-lg-4">
            <div class="contact-info">
              <!-- Información Principal -->
              <div class="info-card glass-card p-4 mb-4">
                <h4 class="fw-bold mb-4 text-white glow-text">
                  <i class="bi bi-info-circle text-warning me-2"></i>
                  Información de Contacto
                </h4>
                
                <div class="contact-item mb-3">
                  <div class="d-flex align-items-center">
                    <div class="contact-icon glass-card-dark rounded-circle p-3 me-3">
                      <i class="bi bi-geo-alt text-warning fs-5"></i>
                    </div>
                    <div>
                      <h6 class="fw-semibold mb-1 text-white">Dirección</h6>
                      <p class="text-white opacity-80 mb-0 small">Calle Principal #123<br>Ciudad, País</p>
                    </div>
                  </div>
                </div>
                
                <div class="contact-item mb-3">
                  <div class="d-flex align-items-center">
                    <div class="contact-icon glass-card-dark rounded-circle p-3 me-3">
                      <i class="bi bi-telephone text-warning fs-5"></i>
                    </div>
                    <div>
                      <h6 class="fw-semibold mb-1 text-white">Teléfono</h6>
                      <p class="text-white opacity-80 mb-0 small">+1 234 567 890</p>
                    </div>
                  </div>
                </div>
                
                <div class="contact-item mb-3">
                  <div class="d-flex align-items-center">
                    <div class="contact-icon glass-card-dark rounded-circle p-3 me-3">
                      <i class="bi bi-envelope text-warning fs-5"></i>
                    </div>
                    <div>
                      <h6 class="fw-semibold mb-1 text-white">Email</h6>
                      <p class="text-white opacity-80 mb-0 small">info@cafeterialuu.com</p>
                    </div>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="d-flex align-items-center">
                    <div class="contact-icon glass-card-dark rounded-circle p-3 me-3">
                      <i class="bi bi-clock text-warning fs-5"></i>
                    </div>
                    <div>
                      <h6 class="fw-semibold mb-1 text-white">Horarios</h6>
                      <p class="text-white opacity-80 mb-0 small">
                        Lun - Dom<br>
                        7:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Redes Sociales -->
              <div class="info-card glass-card p-4 mb-4">
                <h5 class="fw-bold mb-3 text-white glow-text">
                  <i class="bi bi-share text-warning me-2"></i>
                  Síguenos
                </h5>
                <div class="social-links d-flex justify-content-center gap-3">
                  <a href="#" class="social-link glass-card-dark p-3 rounded-circle">
                    <i class="bi bi-facebook text-warning"></i>
                  </a>
                  <a href="#" class="social-link glass-card-dark p-3 rounded-circle">
                    <i class="bi bi-instagram text-warning"></i>
                  </a>
                  <a href="#" class="social-link glass-card-dark p-3 rounded-circle">
                    <i class="bi bi-whatsapp text-warning"></i>
                  </a>
                  <a href="#" class="social-link glass-card-dark p-3 rounded-circle">
                    <i class="bi bi-twitter text-warning"></i>
                  </a>
                </div>
              </div>

              <!-- Mapa -->
              <div class="info-card glass-card p-4">
                <h5 class="fw-bold mb-3 text-white glow-text">
                  <i class="bi bi-map text-warning me-2"></i>
                  Nuestra Ubicación
                </h5>
                <div class="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1635749885!5m2!1sen!2sau"
                    width="100%" 
                    height="200" 
                    style="border:0; border-radius: 12px;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactoPage',
  data() {
    return {
      form: {
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Validación del formulario
      const form = document.querySelector('.needs-validation');
      if (form.checkValidity()) {
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
        this.resetForm();
      } else {
        form.classList.add('was-validated');
      }
    },
    resetForm() {
      this.form = {
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      };
      document.querySelector('.needs-validation').classList.remove('was-validated');
    }
  }
}
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

.glass-input option {
  background: rgba(0, 0, 0, 0.9);
  color: white;
}

.contact-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-item {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-item:hover {
  transform: translateX(8px);
}

.contact-item:hover .contact-icon {
  transform: scale(1.1);
}

.social-link {
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
}

.map-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.map-container:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
}

.info-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(255, 193, 7, 0.2);
}

.contact-form {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-form:hover {
  transform: translateY(-5px);
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
  animation: shimmer 4s infinite;
  pointer-events: none;
}

@keyframes shimmer {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    padding-top: 80px;
  }
  
  .display-2 {
    font-size: 2.5rem;
  }
  
  .contact-form {
    margin-bottom: 2rem;
  }
  
  .glass-card {
    padding: 2rem !important;
  }
}

@media (max-width: 576px) {
  .display-2 {
    font-size: 2rem;
  }
  
  .glass-card {
    padding: 1.5rem !important;
  }
  
  .contact-icon {
    width: 40px;
    height: 40px;
  }
  
  .contact-icon i {
    font-size: 1rem !important;
  }
}

/* Animaciones flotantes */
.float-animation {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
</style>