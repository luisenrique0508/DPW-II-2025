<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-grow-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/vues/Navbar.vue'
import Footer from './components/vues/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
  background: url('@/assets/fondocafe.jpg') fixed center/cover;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(139, 69, 19, 0.1) 0%,
    rgba(160, 82, 45, 0.05) 25%,
    rgba(210, 180, 140, 0.1) 50%,
    rgba(139, 69, 19, 0.08) 75%,
    rgba(101, 67, 33, 0.12) 100%
  );
  z-index: -1;
  pointer-events: none;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1d1d1f;
  position: relative;
}

/* Liquid Glass Global Styles */
.glass-card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.glass-card-dark {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.glass-button {
  background: rgba(255, 193, 7, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 193, 7, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-button:hover {
  background: rgba(255, 193, 7, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 193, 7, 0.3);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar with glass effect */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 193, 7, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 193, 7, 0.8);
}

/* Floating animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}

/* Glow effects */
.glow-text {
  text-shadow: 0 0 20px rgba(255, 193, 7, 0.5);
}

.glow-border {
  box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
}

/* Responsive glass effects */
@media (max-width: 768px) {
  .glass-card, .glass-card-dark {
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }
}
</style>