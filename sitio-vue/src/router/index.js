import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../components/vues/Index.vue'
import ContCTO from '../components/vues/ContCTO.vue'
import Nosotros from '../components/vues/Nosotros.vue'
import Catalogo from '../components/vues/Catalogo.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: 'Inicio - Cafetería Luu',
      description: 'Bienvenidos a Cafetería Luu, disfruta de los mejores cafés de especialidad'
    }
  },
  {
    path: '/inicio',
    redirect: '/'
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: Catalogo,
    meta: {
      title: 'Catálogo - Cafetería Luu',
      description: 'Descubre nuestra selección de cafés premium, postres artesanales y bebidas especiales'
    }
  },
  {
    path: '/menu',
    redirect: '/catalogo'
  },
  {
    path: '/productos',
    redirect: '/catalogo'
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: ContCTO,
    meta: {
      title: 'Contacto - Cafetería Luu',
      description: 'Contáctanos para reservas, consultas o simplemente para saludarnos'
    }
  },
  {
    path: '/contact',
    redirect: '/contacto'
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros,
    meta: {
      title: 'Nosotros - Cafetería Luu',
      description: 'Conoce la historia detrás de cada taza y la pasión que nos impulsa cada día'
    }
  },
  {
    path: '/about',
    redirect: '/nosotros'
  },
  {
    path: '/acerca',
    redirect: '/nosotros'
  },
  // Ruta 404 - debe ir al final
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll suave al cambiar de página
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Guard de navegación para actualizar el título de la página
router.beforeEach((to, from, next) => {
  // Actualizar el título de la página
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Cafetería Luu - Café de Especialidad'
  }
  
  // Actualizar meta description
  if (to.meta && to.meta.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = to.meta.description
      document.getElementsByTagName('head')[0].appendChild(metaDescription)
    }
  }
  
  next()
})

export default router