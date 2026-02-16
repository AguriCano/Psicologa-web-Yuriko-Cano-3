# ❓ FAQ PARA DESARROLLADORES

### Preguntas Frecuentes sobre Mantenimiento y Desarrollo

---

## 🔴 PROBLEMAS COMUNES

### ¿Por qué no se ven los cambios que hice en CSS?

**A: Probablemente es un problema de caché.**

**Solución:**

1. Abre Developer Tools (F12)
2. Click derecho en ícono de refresh → "Vaciar caché y recargar"
3. O presiona Ctrl+Shift+R

**Prevenir caché:**

```html
<!-- Añade versión al CSS para forzar actualización -->
<link rel="stylesheet" href="assets/css/styles.css?v=1.0" />
```

---

### ¿Por qué el formulario no envía?

**A: Probablemente te falta configurar Formspree.**

En `index.html` busca:

```html
<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST"></form>
```

**Pasos:**

1. Ve a https://formspree.io
2. Regístrate/login
3. Crea un nuevo formulario
4. Copia tu ID (ej: `mnolnqay`)
5. Reemplaza `YOUR_FORMSPREE_ID` con tu ID real
6. **Importante:** Prueba enviando un email

**Verificación:** El email debe llegar a tu mailbox en menos de 1 minuto.

---

### ¿Por qué no funcionan mis cambios en JavaScript?

**A: Posibles causas:**

1. **Typo en el nombre de la función**

   ```javascript
   // ❌ MALO
   onclick="togglefaq(this)"  <!-- Minúscula 'f' -->

   // ✅ BIEN
   onclick="toggleFaq(this)"   <!-- 'F' mayúscula -->
   ```

2. **Elemento no existe**

   ```javascript
   // ❌ Esto falla si no existe elemento con id="contact"
   document.getElementById("contact");
   ```

3. **Consola tiene errores**
   - Abre F12 → Consola
   - Busca mensajes rojos
   - Eso te dirá qué falló

---

### ¿Cómo cambio los colores del sitio?

**A: Tienes 3 formas:**

#### Opción 1: Cambio rápido (CSS Variables)

En `assets/css/styles.css`, busca:

```css
:root {
  --primary-color: #4a7c6e; /* ← Cambia este verde */
  --secondary-color: #6a9e92;
  --accent-color: #d9a574;
}
```

Cambios:

- Botones principales
- Encabezados
- Links
- Bordes

#### Opción 2: Cambio específico

Si quieres cambiar SOLO los botones:

```css
.btn-primary {
  background-color: #tu-color-nuevo;
}
```

#### Opción 3: Combinado

Cambias variable + especifics según necesites.

**Herramientas para colores:**

- https://coolors.co (paleta completa)
- https://htmlcolorcodes.com (buscar hexadecimal)
- Chrome DevTools (F12 → color picker)

---

### ¿Puedo añadir una nueva sección?

**A: Sí, aquí están los pasos:**

#### Paso 1: Calcula el HTML

En `index.html`, copia estructura de una sección existente:

```html
<section id="nueva-seccion">
  <div class="container">
    <h2>Mi Nueva Sección</h2>
    <!-- Tu contenido -->
  </div>
</section>
```

#### Paso 2: Añade CSS

En `assets/css/styles.css`, al final:

```css
#nueva-seccion {
  padding: 60px 20px;
  background-color: #f5f5f5;
}

#nueva-seccion h2 {
  font-size: 2rem;
  color: var(--primary-color);
}
```

#### Paso 3: JavaScript (si lo necesitas)

En `assets/js/script.js`:

```javascript
// Escuchar clicks en tu nueva sección
document.getElementById("nueva-seccion").addEventListener("click", (e) => {
  console.log("New section clicked!");
});
```

#### Paso 4: Añade al menú (si existe)

En `index.html`, busca el `<nav>` o `<header>` y añade link:

```html
<a href="#nueva-seccion">Ir a Nueva Sección</a>
```

---

### ¿Cómo cambio la tipografía?

**A: En CSS variables:**

En `assets/css/styles.css`:

```css
:root {
  font-family: "Tu Fuente Nueva", sans-serif;
}
```

**Opciones gratis:**

- Google Fonts: https://fonts.google.com

**Paso a paso:**

1. Ve a https://fonts.google.com
2. Busca fuente (ej: "Roboto")
3. Click en "Select this style"
4. Copia el `<link>` en `<head>` de index.html
5. Copia el nombre en `font-family` en CSS

```html
<!-- En <head> de index.html -->
<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
/>
```

```css
/* En assets/css/styles.css */
body {
  font-family: "Roboto", sans-serif;
}
```

---

## 🟡 MEJORAS Y OPTIMIZACIÓN

### ¿Cómo hago más rápido el sitio?

**Top 5 mejoras:**

1. **Comprimir imágenes**

   ```
   1 imagen sin comprimir = 2MB
   1 imagen comprimida = 200KB
   → 10x más rápido
   ```

   Herramientas: https://tinypng.com

2. **Minificar CSS y JS**

   ```
   CSS: 980 líneas → 5KB
   JS: 60 líneas → 1KB
   ```

   Herramientas: https://minifier.org

3. **Lazy loading de imágenes**

   ```html
   <img src="photo.jpg" loading="lazy" />
   ```

4. **CDN para fuentes**
   (Google Fonts ya lo hace)

5. **Caché navegador**
   ```html
   <link rel="stylesheet" href="assets/css/styles.css?v=2.0" />
   <!-- Cuando cambies CSS, aumenta v=2.0 a v=2.1 -->
   ```

---

### ¿Cómo añado analytics para ver quién visita?

**A: Google Analytics (Gratis)**

**Paso a paso:**

1. Ve a https://analytics.google.com
2. Regístrate con Google
3. Crea propiedad (tu sitio)
4. Obtén tu ID de medición (formato: `G-XXXXXX`)
5. En `<head>` de `index.html`, antes de `</head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXX");
</script>
```

Reemplaza `G-XXXXXX` con tu ID real.

**Qué verás:**

- ✅ Cuántas personas visitan
- ✅ De dónde vienen
- ✅ Qué páginas ven
- ✅ Cuánto tiempo se quedan
- ✅ Si llenan formulario

---

### ¿Cómo mejoro el SEO?

**A: 5 cosas clave:**

1. **Meta descripción** (ya está en index.html)

   ```html
   <meta name="description" content="Psicóloga especializada en..." />
   ```

2. **Keywords en contenido**
   - Usa palabras como "psicóloga", "terapia", "ansiedad"
   - 1-2 veces por sección

3. **Headings correctos** (H1 → H2 → H3)

   ```html
   <h1>Psicóloga Profesional</h1>
   <!-- Una sola vez -->
   <h2>Sobre Mí</h2>
   <h2>Servicios</h2>
   ```

4. **Links internos**

   ```html
   <a href="#servicios">Ver mis servicios</a>
   ```

5. **Page Speed** (velocidad carga)
   - Usa herramienta: https://pagespeed.web.dev

---

## 🟢 AVANZADO

### ¿Cómo añado un blog?

**A: Créate nuevas páginas HTML**

Estructura:

```
├── index.html           ← Homepage
├── blog/
│   ├── index.html       ← Lista de posts
│   ├── post-ansiedad.html
│   └── post-depresion.html
└── assets/
```

Cada post es un `index.html` con:

- Tu CSS y JS (links a `../assets/`)
- Contenido único
- Links a otros posts

---

### ¿Cómo integro calendario para citas?

**A: Usa Calendly (Gratis)**

1. Ve a https://calendly.com
2. Regístrate
3. Configura tu disponibilidad
4. Copia el código embed
5. En `index.html`, donde quieras el calendario:

```html
<div class="calendly-container">
  <iframe src="https://calendly.com/tuusuario" width="100%"></iframe>
</div>
```

---

### ¿Cómo hago que sea PWA (funcione offline)?

**A: Añade service worker**

Crea archivo: `assets/js/service-worker.js`

```javascript
self.addEventListener("install", (event) => {
  const urlsToCache = ["/", "/assets/css/styles.css", "/assets/js/script.js"];
  event.waitUntil(caches.open("v1").then((cache) => cache.addAll(urlsToCache)));
});
```

En `index.html`, antes de `</body>`:

```html
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/assets/js/service-worker.js");
  }
</script>
```

---

### ¿Cómo conecto una base de datos?

**A: Usa un backend (Node.js, Python, etc)**

**Sin backend (más fácil):**

- Formspree (para emails) ← Ya tienes
- Firebase (para guardar datos) ← Gratis

**Con backend:**

- Node.js + Express
- Python + Flask
- PHP

**Para principiantes:** Mantén Formspree + Firebase.

---

## 🔵 DEPLOYMENT Y PUBLICACIÓN

### ¿Cuál es la forma más fácil de publicar?

**A: Netlify (100% recomendado)**

**Pasos:**

1. Ve a https://netlify.com
2. Click "Sign up with GitHub" (necesitas cuenta GitHub)
3. Autoriza GitHub
4. Click "New site from git"
5. Selecciona tu repositorio
6. Deploy automático (cada vez que hagas push)

**Ventajas:**

- ✅ Gratis
- ✅ HTTPS automático
- ✅ CDN global (rápido)
- ✅ Compilación automática
- ✅ Previews de cambios

---

### ¿Cómo añado dominio personalizado?

**A: Compra dominio + configura en Netlify**

1. Compra dominio en https://namecheap.com (~$9/año)
   - Ej: www.psicologayuriko.com

2. En Netlify, en tu sitio:
   - Dominio → Agregar dominio personalizado
   - Sigue instrucciones

3. En Namecheap:
   - Copia nameservers de Netlify
   - Pega en Namecheap

¡Listo! Tu sitio está en tu dominio.

---

### ¿Cuánto cuesta mantener el sitio?

**Costos:**

| Item        | Costo       | Nota                  |
| ----------- | ----------- | --------------------- |
| Hosting     | $0          | Netlify gratis        |
| Dominio     | $8-14/año   | Namecheap recomendado |
| Email       | $0          | Gmail funciona        |
| SSL (HTTPS) | $0          | Netlify lo da         |
| **TOTAL**   | **~$1/mes** |                       |

**Muy barato para un negocio profesional.**

---

## 🎓 RECURSOS DE APRENDIZAJE

### HTML/CSS/JavaScript

- https://developer.mozilla.org/es/ (MDN)
- https://es.javascript.info/
- https://www.freecodecamp.org

### Optimización

- https://web.dev
- https://pagespeed.web.dev
- https://lighthouse.webdev

### Herramientas

- https://github.com (control de versiones)
- https://codepen.io (experimentar código)
- https://devtools.com (más herramientas)

---

## 📞 SOPORTE

**Si necesitas ayuda:**

1. **Busca error en Google**
   - Copia el mensaje de error exacto
   - Busca en Google

2. **Stack Overflow**
   - https://stackoverflow.com
   - Pregunta específica, con código

3. **GitHub Issues**
   - Si es de una librería

4. **Comunidades**
   - Dev.to
   - Hashnode
   - Reddit (r/webdev)

---

_La mejor forma de aprender es experimentando. ¡No tengas miedo de probar cosas!_ 🚀

---

## 💾 CHEAT SHEET

```
# Conceptos clave
HTML   = Estructura (qué es)
CSS    = Presentación (cómo se ve)
JS     = Comportamiento (qué hace)

# Selectores CSS comunes
.class           # Por clase
#id              # Por ID
element          # Por elemento
element.class    # Combinación

# JavaScript común
querySelector()     # Buscar elemento
addEventListener()  # Escuchar evento
classList.toggle()  # Añadir/quitar clase
innerHTML          # Cambiar contenido

# Git básico
git add .                  # Preparar cambios
git commit -m "Mensaje"    # Guardar cambios
git push                   # Subir a GitHub
```

---

**¿Preguntas sobre desarrollo? Lee estos archivos en orden:**

1. PERSONALIZACION_RAPIDA_5_PASOS.md ← Personalizar rápido
2. ESTRUCTURA_PROYECTO.md ← Entender carpetas
3. GUIA_DISENO_Y_PERSONALIZACION.md ← Profundo
4. FAQ_DESARROLLADORES.md ← Este archivo
5. INSTRUCCIONES_DEPLOY.md ← Publicar
