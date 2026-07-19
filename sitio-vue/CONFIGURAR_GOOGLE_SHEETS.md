# 📊 Configuración de Google Sheets para Cafetería Luu

## 🚀 Pasos para configurar tu menú dinámico

### 1. Crear tu Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nombra la primera pestaña como **"menu"** (importante: exactamente así)

### 2. Configurar las columnas

En la **primera fila**, agrega exactamente estas columnas:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| nombre | precio | categoria | imagen | descripcion | descripcionCompleta | ingredientes | rating | reviews | nuevo | popular |

### 3. Llenar con tus productos

**Ejemplo de datos:**

| nombre | precio | categoria | imagen | descripcion | rating | nuevo | popular |
|--------|--------|-----------|--------|-------------|--------|-------|---------|
| Espresso Clásico | 25.50 | cafes | https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400 | Café espresso tradicional | 5 | false | true |
| Cappuccino | 30.00 | cafes | https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400 | Espresso con leche vaporizada | 5 | false | true |
| Cheesecake | 35.00 | postres | https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400 | Cremoso cheesecake casero | 5 | true | false |

### 4. Categorías válidas

Usa exactamente una de estas categorías:
- `cafes` - Para cafés calientes
- `postres` - Para postres y dulces  
- `bebidas` - Para bebidas frías
- `snacks` - Para snacks y comida ligera

### 5. Hacer la hoja pública

1. Haz clic en **"Compartir"** (botón azul arriba a la derecha)
2. Cambia el acceso a **"Cualquier persona con el enlace puede ver"**
3. Copia la URL de tu hoja

### 6. Obtener el ID de tu hoja

De esta URL:
```
https://docs.google.com/spreadsheets/d/1ABC123DEF456GHI789JKL/edit#gid=0
```

El ID es: `1ABC123DEF456GHI789JKL`

### 7. Configurar en el código

Abre el archivo `src/config/googleSheets.js` y cambia:

```javascript
SHEET_ID: 'TU_ID_AQUI', // Reemplaza con tu ID real
```

### 8. ¡Listo! 🎉

Tu menú ahora se actualizará automáticamente desde Google Sheets.

## 📝 Consejos importantes

### Imágenes
- Usa URLs públicas (recomendamos Unsplash)
- Formato: `https://images.unsplash.com/photo-XXXXX?w=400&h=300&fit=crop`

### Precios
- Solo números (ejemplo: `25.50`, no `25.50 Bs`)
- El sistema agregará "Bs" automáticamente

### Ingredientes
- Separa con comas: `Café, Leche, Azúcar`

### Valores booleanos
- Para `nuevo` y `popular` usa: `true`, `false`, `1`, `0`, `si`, `no`

### Rating
- Números del 1 al 5
- Si no especificas, será 5 por defecto

## 🔧 URLs de imágenes recomendadas

### Cafés
```
Espresso: https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop
Cappuccino: https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop
Latte: https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop
```

### Postres
```
Cheesecake: https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop
Brownie: https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop
Tiramisu: https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop
```

### Bebidas Frías
```
Frappé: https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop
Smoothie: https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop
Té Helado: https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop
```

### Snacks
```
Croissant: https://images.unsplash.com/photo-1555507036-ab794f4afe5e?w=400&h=300&fit=crop
Sandwich: https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop
Muffin: https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop
```

## 🚨 Solución de problemas

### "Error al cargar el menú"
1. Verifica que la hoja sea pública
2. Confirma que el ID sea correcto
3. Asegúrate de que la pestaña se llame "menu"

### "No se encontraron datos"
1. Verifica que tengas datos en la hoja
2. La primera fila debe tener los nombres de columnas
3. Debe haber al menos una fila con datos

### Los productos no se ven bien
1. Revisa que las categorías sean exactas: `cafes`, `postres`, `bebidas`, `snacks`
2. Los precios deben ser números válidos
3. Las URLs de imágenes deben ser públicas

## 🔄 Actualización automática

- Los cambios en Google Sheets pueden tardar 1-2 minutos en aparecer
- Usa el botón de refrescar (🔄) en el catálogo para actualizar manualmente
- El sistema tiene productos de respaldo si hay errores

## 📞 ¿Necesitas ayuda?

Si tienes problemas:
1. Revisa la consola del navegador (F12) para ver errores específicos
2. Verifica que todos los pasos se hayan seguido correctamente
3. Prueba con datos de ejemplo primero