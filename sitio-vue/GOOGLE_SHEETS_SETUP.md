# Configuración de Google Sheets para el Catálogo

## Estructura de la Hoja de Cálculo

Para que el catálogo funcione correctamente, tu hoja de Google Sheets debe tener las siguientes columnas:

### Columnas Requeridas:

| Columna | Tipo | Descripción | Ejemplo |
|---------|------|-------------|---------|
| `nombre` | Texto | Nombre del producto | "Espresso Clásico" |
| `precio` | Número | Precio en Bolivianos | 25.50 |
| `categoria` | Texto | Categoría del producto | "cafes", "postres", "bebidas", "snacks" |
| `imagen` | URL | URL de la imagen del producto | "https://images.unsplash.com/photo-..." |
| `descripcion` | Texto | Descripción corta | "Café espresso tradicional con granos 100% arábica" |

### Columnas Opcionales:

| Columna | Tipo | Descripción | Ejemplo |
|---------|------|-------------|---------|
| `descripcionCompleta` | Texto | Descripción detallada | "Nuestro espresso clásico está preparado..." |
| `ingredientes` | Texto | Lista separada por comas | "Café Arábica, Agua filtrada" |
| `rating` | Número | Calificación de 1-5 | 5 |
| `reviews` | Número | Número de reseñas | 124 |
| `nuevo` | Texto | "true" o "false" | "true" |
| `popular` | Texto | "true" o "false" | "true" |

## Categorías Disponibles:

- `cafes` - Para cafés calientes
- `postres` - Para postres y dulces
- `bebidas` - Para bebidas frías
- `snacks` - Para snacks y comida ligera

## Configuración de Google Sheets:

1. **Crear la hoja de cálculo:**
   - Ve a [Google Sheets](https://sheets.google.com)
   - Crea una nueva hoja de cálculo
   - Nombra la primera pestaña como "menu"

2. **Configurar las columnas:**
   - En la primera fila, agrega los nombres de las columnas exactamente como se muestran arriba
   - Completa los datos de tus productos en las filas siguientes

3. **Hacer la hoja pública:**
   - Haz clic en "Compartir" en la esquina superior derecha
   - Cambia el acceso a "Cualquier persona con el enlace puede ver"
   - Copia el ID de la hoja de cálculo desde la URL

4. **Obtener el ID de la hoja:**
   - La URL se ve así: `https://docs.google.com/spreadsheets/d/[ID_DE_LA_HOJA]/edit`
   - Copia solo la parte del `[ID_DE_LA_HOJA]`

5. **Actualizar el código:**
   - En el archivo `Catalogo.vue`, busca la línea:
   ```javascript
   const response = await fetch("https://opensheet.elk.sh/1TUejEM3EjemploReal123456/menu");
   ```
   - Reemplaza `1TUejEM3EjemploReal123456` con tu ID real de Google Sheets

## Ejemplo de Datos:

| nombre | precio | categoria | imagen | descripcion | rating | reviews | nuevo | popular |
|--------|--------|-----------|--------|-------------|--------|---------|-------|---------|
| Espresso Clásico | 25.50 | cafes | https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop | Café espresso tradicional | 5 | 124 | false | true |
| Cappuccino | 30.00 | cafes | https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop | Espresso con leche vaporizada | 5 | 89 | false | true |
| Cheesecake | 35.00 | postres | https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop | Cremoso cheesecake casero | 5 | 156 | true | false |

## Notas Importantes:

- Los cambios en Google Sheets pueden tardar unos minutos en reflejarse
- Usa el botón de refrescar en el catálogo para actualizar los datos manualmente
- Las imágenes deben ser URLs públicas (recomendamos Unsplash para imágenes de alta calidad)
- Los precios se mostrarán automáticamente en Bolivianos (Bs)

## URLs de Imágenes Recomendadas (Unsplash):

### Cafés:
- Espresso: `https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop`
- Cappuccino: `https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop`
- Latte: `https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop`

### Postres:
- Cheesecake: `https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop`
- Brownie: `https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop`

### Bebidas:
- Frappé: `https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop`
- Smoothie: `https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop`

### Snacks:
- Croissant: `https://images.unsplash.com/photo-1555507036-ab794f4afe5e?w=400&h=300&fit=crop`