// Configuración para Google Sheets
export const GOOGLE_SHEETS_CONFIG = {
  // Tu URL específica de OpenSheet (ya configurada)
  FULL_URL: 'https://opensheet.elk.sh/2PACX-1vTI_ygTn6zCBUwH35tzP-fhVt5n36q0QXic9BnmRG_3XhjhdVlUcFlaf-gmf1su-6WSIbDuB6lxIWRt/Hoja1',
  
  // Configuración de columnas esperadas (solo las que tienes configuradas)
  COLUMNS: {
    REQUIRED: ['nombre', 'precio', 'categoria', 'imagen', 'descripcion'],
    OPTIONAL: [] // Sin columnas opcionales por ahora
  },
  
  // Categorías válidas
  CATEGORIES: {
    CAFES: 'cafes',
    POSTRES: 'postres', 
    BEBIDAS: 'bebidas',
    SNACKS: 'snacks'
  },
  
  // Configuración de cache (en minutos)
  CACHE_DURATION: 5
};

// Función para validar la estructura de datos
export function validateProductData(item) {
  const errors = [];
  
  if (!item.nombre || item.nombre.trim() === '') {
    errors.push('Nombre es requerido');
  }
  
  if (!item.precio || isNaN(parseFloat(item.precio))) {
    errors.push('Precio debe ser un número válido');
  }
  
  if (!item.categoria || !Object.values(GOOGLE_SHEETS_CONFIG.CATEGORIES).includes(item.categoria.toLowerCase())) {
    errors.push(`Categoría debe ser una de: ${Object.values(GOOGLE_SHEETS_CONFIG.CATEGORIES).join(', ')}`);
  }
  
  return errors;
}

// Función para transformar datos de Google Sheets (simplificada para 5 columnas)
export function transformSheetData(rawData) {
  return rawData.map((item, index) => {
    // Validar datos básicos
    const errors = validateProductData(item);
    if (errors.length > 0) {
      console.warn(`Producto en fila ${index + 2} tiene errores:`, errors);
    }
    
    return {
      id: index + 1,
      nombre: item.nombre?.trim() || 'Producto sin nombre',
      precio: parseFloat(item.precio) || 0,
      categoria: item.categoria?.toLowerCase().trim() || 'otros',
      imagen: item.imagen?.trim() || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
      descripcion: item.descripcion?.trim() || 'Sin descripción disponible',
      // Valores por defecto para campos no incluidos en tu hoja
      descripcionCompleta: item.descripcion?.trim() || 'Sin descripción disponible',
      ingredientes: [], // Vacío por ahora
      rating: 5, // Valor por defecto
      reviews: Math.floor(Math.random() * 100) + 10, // Número aleatorio entre 10-110
      nuevo: Math.random() > 0.7, // 30% de probabilidad de ser nuevo
      popular: Math.random() > 0.6, // 40% de probabilidad de ser popular
      favorito: false,
      // Metadatos
      _errors: errors,
      _lastUpdated: new Date().toISOString()
    };
  });
}

// Productos de respaldo en caso de error
export const FALLBACK_PRODUCTS = [
  {
    id: 1,
    nombre: 'Espresso Clásico',
    precio: 25.00,
    categoria: 'cafes',
    imagen: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop',
    descripcion: 'Café espresso tradicional con granos 100% arábica',
    descripcionCompleta: 'Nuestro espresso clásico está preparado con granos de café 100% arábica, cuidadosamente seleccionados y tostados a la perfección. Una experiencia intensa y aromática que despertará todos tus sentidos.',
    ingredientes: ['Café Arábica', 'Agua filtrada'],
    rating: 5,
    reviews: 124,
    nuevo: false,
    popular: true,
    favorito: false
  },
  {
    id: 2,
    nombre: 'Cappuccino Artesanal',
    precio: 30.00,
    categoria: 'cafes',
    imagen: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    descripcion: 'Espresso con leche vaporizada y espuma cremosa',
    descripcionCompleta: 'Cappuccino preparado artesanalmente con espresso doble, leche vaporizada a la temperatura perfecta y una espuma cremosa que crea el equilibrio ideal entre café y lácteo.',
    ingredientes: ['Espresso doble', 'Leche entera', 'Espuma de leche'],
    rating: 5,
    reviews: 89,
    nuevo: false,
    popular: true,
    favorito: false
  },
  {
    id: 3,
    nombre: 'Cheesecake de Frutos Rojos',
    precio: 35.00,
    categoria: 'postres',
    imagen: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop',
    descripcion: 'Cremoso cheesecake con salsa de frutos rojos',
    descripcionCompleta: 'Exquisito cheesecake artesanal con base de galleta, relleno cremoso de queso y una deliciosa salsa de frutos rojos frescos que complementa perfectamente la textura suave.',
    ingredientes: ['Queso crema', 'Galletas', 'Frutos rojos', 'Azúcar', 'Huevos'],
    rating: 5,
    reviews: 156,
    nuevo: true,
    popular: false,
    favorito: false
  },
  {
    id: 4,
    nombre: 'Frappé de Caramelo',
    precio: 28.00,
    categoria: 'bebidas',
    imagen: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop',
    descripcion: 'Bebida helada con café, caramelo y crema',
    descripcionCompleta: 'Refrescante frappé preparado con café frío, jarabe de caramelo casero, hielo y coronado con crema batida y un toque extra de caramelo.',
    ingredientes: ['Café frío', 'Jarabe de caramelo', 'Leche', 'Hielo', 'Crema batida'],
    rating: 4,
    reviews: 91,
    nuevo: true,
    popular: false,
    favorito: false
  }
];