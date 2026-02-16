# ⚡ PERSONALIZACIÓN RÁPIDA EN 5 PASOS (15 MINUTOS)

Si no tienes tiempo de leer todo, aquí está el **TL;DR** para poner tu landing page funcional en 15 minutos.

---

## PASO 1: Abre los archivos (1 minuto)

Tu landing page ahora está **organizada en carpetas profesionales**:

```
Psicologa-web Yuriko Cano 3/
├── index.html              ← HTML (contenido)
├── assets/
│   ├── css/styles.css      ← Diseño (colores, espacios)
│   └── js/script.js        ← Interacción (botones, FAQ)
```

Abre estos archivos con tu editor (VS Code, Notepad++, etc):

1. **`index.html`** - Cambiar nombre, email, teléfono, contenido
2. **`assets/css/styles.css`** - Cambiar colores (opcional)
3. **`assets/js/script.js`** - Modificar JavaScript (avanzado)

**Para esta guía rápida, solo necesitas `index.html`.**

---

## PASO 2: Busca y Reemplaza (3 minutos)

### Usa Ctrl+H (Find & Replace)

Reemplaza TODAS estas ocurrencias:

| Buscar                | Reemplazar con | # de veces |
| --------------------- | -------------- | ---------- |
| `Yuriko Cano`         | Tu nombre      | 5 veces    |
| `contacto@yuriko.com` | Tu email       | 2 veces    |
| `+34 XXX XXX XXX`     | Tu teléfono    | 1 vez      |
| `España` o ubicación  | Tu país/ciudad | 1 vez      |

**Cómo:**

1. Ctrl+H (abre Find & Replace)
2. Buscar: `Yuriko Cano`
3. Reemplazar: `Tu Nombre`
4. Click "Replace All"
5. Listo, pasa al siguiente

**Resultado:** Tú mismo en todo el sitio 😊

---

## PASO 3: Configurar Formulario (5 minutos)

### A. Crear Cuenta Formspree (2 minutos)

1. Ve a https://formspree.io
2. Click "Sign Up"
3. Usa tu email
4. Verifica tu email
5. Copia tu **form ID** (lo verás en el dashboard)
6. Ej: `xyzabc123` o similar

### B. Pegarlo en el HTML (3 minutos)

En tu `index.html`, busca esta línea:

```html
<form
  id="contact-form-element"
  method="POST"
  action="https://formspree.io/f/YOUR_FORMSPREE_ID"
></form>
```

Reemplázala con:

```html
<form
  id="contact-form-element"
  method="POST"
  action="https://formspree.io/f/TUFORMSPACEID"
></form>
```

Ejemplo listo:

```html
<form
  id="contact-form-element"
  method="POST"
  action="https://formspree.io/f/xyzabc123"
></form>
```

**¡Ahora tu formulario funciona!**

Cuando alguien lo envíe, recibirás el email automáticamente. ✅

---

## PASO 4: Personalizar Contenido (3 minutos)

### Cambiar Testimonios (Opcional pero Recomendado)

Busca esta sección en tu HTML:

```html
<!-- TESTIMONIOS SECTION -->
```

Dentro encontrarás bloques como este:

```html
<div class="testimonial-card">
  <div class="stars">★★★★★</div>
  <p class="testimonial-text">
    "Llevaba años con ansiedad sin saber cómo manejarla. Las sesiones me dieron
    herramientas reales que uso cada día. Me siento más tranquilo y en control
    de mis emociones."
  </p>
  <div class="testimonial-author">
    <div class="author-avatar">MC</div>
    <div class="author-info">
      <p class="author-name">Marcos C.</p>
      <p class="author-condition">Ansiedad, estrés laboral</p>
    </div>
  </div>
</div>
```

### Reemplazar con tu Testimonio Real

```html
<div class="testimonial-card">
  <div class="stars">★★★★★</div>
  <p class="testimonial-text">
    "Escribe aquí el testimonio de tu cliente. Una frase sobre su problema y una
    frase sobre el resultado."
  </p>
  <div class="testimonial-author">
    <div class="author-avatar">XX</div>
    <div class="author-info">
      <p class="author-name">Nombre del Cliente</p>
      <p class="author-condition">El problema que tenía</p>
    </div>
  </div>
</div>
```

**Cambios específicos:**

- Testimonio-text: El texto del feedback
- author-avatar: Iniciales (ej: "JD" para Juan Díaz)
- author-name: Nombre completo
- author-condition: Qué problema resolviste

---

## PASO 5: Guardar y Test (2 minutos)

1. **Guarda el archivo:** Ctrl+S en tu editor
2. **Abre en navegador:**
   - Haz click derecho en `index.html`
   - "Abrir con" → Tu navegador
3. **Verifica:**
   - ¿Tu nombre aparece?
   - ¿Tu email está correcto?
   - ¿El formulario se ve bien?
   - ¿El sitio se ve bien en móvil?

Para probar en móvil:

- Presiona **F12** (abre DevTools)
- Click icono móvil arriba a la iquierda
- ¡Verás cómo se ve en móvil!

---

## ✅ ¡YA ESTÁ! Ahora Publica

Tu landing page está lista. Ahora sube a internet:

### Opción A: Netlify (MÁS FÁCIL)

1. Ve a https://netlify.com
2. Sign up con email
3. Arrastra tu carpeta `Psicologa-web Yuriko Cano 3`
4. ¡Listo! Tu sitio está vivo en 30 segundos

### Opción B: GitHub Pages (Gratis)

Ver documento: `INSTRUCCIONES_DEPLOY.md`

### Opción C: Tu Hosting

Ver documento: `INSTRUCCIONES_DEPLOY.md`

---

## 🎨 BONUS: Cambiar Colores (Avanzado)

Si quieres otros colores (por defecto son verde salvia):

1. Abre: **`assets/css/styles.css`**
2. Busca (Ctrl+F) al inicio la sección `:root`:

```css
:root {
  --primary-color: #4a7c6e; /* Verde salvia → Tu color */
  --secondary-color: #6a9e92; /* Verde secundario → Tu color */
  --accent-color: #d9a574; /* Beige → Tu color */
}
```

3. Reemplaza los códigos `#4a7c6e`, `#6a9e92`, `#d9a574` con tus colores

**Herramienta para elegir colores:**

- https://coolors.co
- https://htmlcolorcodes.com
- https://material.io/resources/color

**Colores recomendados por especialidad:**

| Especialidad    | Color Primario          | Color Secundario       | Razón             |
| --------------- | ----------------------- | ---------------------- | ----------------- |
| Terapia General | `#4a7c6e` (Verde)       | `#6a9e92`              | Equilibrio, calma |
| Ansiedad        | `#5b9bd5` (Azul)        | `#70ad47` (Azul-verde) | Relajación        |
| Depresión       | `#9966cc` (Púrpura)     | `#cc99ff`              | Energía, cambio   |
| Duelo           | `#8b7777` (Gris cálido) | `#aba988`              | Calma, respeto    |

---

## 🔍 Si Algo No Funciona

### Problema: No veo mis cambios

**Solución:**

1. Guarda el archivo (Ctrl+S)
2. Actualiza el navegador (Ctrl+Shift+R o Ctrl+F5)
3. Esperael caché se limpie (5 segundos)

### Problema: El formulario no envía emails

**Solución:**

1. Verifica tu form ID de Formspree
2. Revisa sección PASO 3 de nuevo
3. Prueba enviando

### Problema: Se ve raro en móvil

**Solución:**

1. Abre DevTools (F12)
2. Click icono móvil
3. Mira qué se ve mal
4. Ya está diseñado responsivo, probablemente sea visualización

### Problema: Mi email no recibe confirmación

**Solución:**

1. Revisa carpeta SPAM
2. En Formspree, verifica que el email es correcto
3. Envía test nuevamente
4. Si sigue, crea nueva cuenta Formspree

---

## 📊 Después de Publicar

### Primeras Cosas a Hacer

1. **Prueba real:**
   - Abre tu URL en móvil
   - Llena el formulario
   - ¿Recibiste el email?

2. **Compartir:**
   - Envía a 5 colegas
   - Pide feedback
   - Ajusta pequeños detalles

3. **Google Analytics** (Opcional):
   - Ve a https://analytics.google.com
   - Crea cuenta
   - Obtén tu ID (G-XXXX...)
   - Pegalo en tu HTML antes de `</head>`

4. **SEO Básico** (Opcional):
   - Ve a https://search.google.com/search-console
   - Verifica tu dominio
   - Envía sitemap

---

## 🎯 Checklist Final (5 Minutos)

```
Personalización:
☐ Cambié "Yuriko Cano" por mi nombre
☐ Cambié emails a mi email
☐ Cambié teléfono a mi teléfono
☐ Configuré Formspree
☐ Actualicé testimonio(s)

Testeo:
☐ Abrí en navegador
☐ Probé en móvil
☐ Envié test del formulario
☐ Recibí email de confirmación

Publicación:
☐ Subi a Netlify / GitHub / Hosting
☐ Mi URL funciona
☐ HTTPS está activo (🔒)
☐ Todo se ve bien en vivo
```

---

## 💡 Tips Profresionales

### Tip 1: Foto de Perfil (Aumenta Conversión +15%)

Si tienes foto profesional:

1. Comprimela a max 200KB (https://tinypng.com)
2. En el Hero, encuentra:

```html
<div class="hero-icon">💚</div>
```

3. Antes de `</div>`, añade:

```html
<img
  src="tu-foto.jpg"
  alt="Tu nombre"
  style="width: 150px; height: 150px; border-radius: 50%; border: 4px solid white; margin-bottom: 1rem;"
/>
```

4. Sube `tu-foto.jpg` en la misma carpeta que `index.html`

### Tip 2: Botón de WhatsApp (Aumenta Conversión +20%)

Si quieres contacto directo por WhatsApp:

Busca el botón principal en Hero:

```html
<a href="#contact-form" class="btn btn-white">Solicita tu sesión gratuita</a>
```

Añade después:

```html
<a
  href="https://wa.me/+34XXXXXXXXXXX?text=Hola%2C%20me%20gustaría%20agendar%20una%20sesión"
  class="btn btn-secondary"
  target="_blank"
  >Contáctame por WhatsApp</a
>
```

Reemplaza `+34XXXXXXXXXXX` por tu número con código de país

### Tip 3: Google Reviews (Social Proof)

Después de tus primeros 5 clientes, pide reseñas en Google

1. Ve a https://google.com/business
2. Crea perfil
3. Pide a clientes que dejen reseña
4. Enlazan a Google directamente

---

## 🚀 SIGUIENTES PASOS (Después de Publicar)

### Corto Plazo (Semana 1-2)

- Manda a 5-10 personas para feedback
- Procesa primeros clientes
- Ajusta según feedback

### Mediano Plazo (Mes 1)

- Recopila 3-5 testimonios reales
- Actualiza testimonios con datos reales
- Inicia Google Ads ($5-10/día)

### Largo Plazo (Mes 2-3)

- Añade blog con artículos
- Mejora SEO
- Crea email nurturing

---

## 🎓 RECURSOS ÚTILES

### Editores (Para Editar HTML)

- **VS Code** (Recomendado): https://code.visualstudio.com - Gratis
- **Notepad++**: https://notepad-plus-plus.org - Gratis
- **Sublime**: https://sublimetext.com - $80 (pero free indefinido con popup)

### Alojamiento (Para Publicar)

- **Netlify** (Recomendado): https://netlify.com - GRATIS
- **GitHub Pages**: https://pages.github.com - GRATIS
- **Hostinger**: https://hostinger.com - $3/mes

### Herramientas Útiles

| Herramienta                       | Qué hace            | Costo  |
| --------------------------------- | ------------------- | ------ |
| https://tinypng.com               | Comprimir imágenes  | Gratis |
| https://htmlcolorcodes.com        | Elegir colores      | Gratis |
| https://coolors.co                | Paletas de color    | Gratis |
| https://pagespeedinsights.web.dev | Velocidad del sitio | Gratis |
| https://analytics.google.com      | Ver visitantes      | Gratis |

---

## ❓ FAQ Rápida

**¿Necesito saber código?**
No, solo buscar y reemplazar texto.

**¿Cuánto tiempo toma?**
15 minutos si sigues esta guía.

**¿Se ve bien en móvil?**
Sí, 100% responsivo de fábrica.

**¿Puedo cambiar cosas después?**
Claro, edita `index.html` y guarda.

**¿Es gratis para siempre?**
Sí, si publicas en Netlify o GitHub Pages. Si quieres dominio personalizado, cuesta $10/año.

**¿Está protegido mi email de spam?**
Tu formulario usa Formspree (seguro). Tu email estará un poco público en el footer (es profesional hacerlo).

**¿Puedo añadir más cosas?**
Claro, conocimiento de HTML básico ayuda. O busca en Google "cómo añadir X a HTML".

---

## 🎉 ¡LISTO!

**Que Disfrutes Publicar Tu Landing Page**

Tu herramienta está lista para convertir visitantes en clientes y cambiar vidas. 💚

---

_Última actualización: Febrero 2026_
_Versión: 1.0 - Guía Rápida_
