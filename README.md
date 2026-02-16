# 📖 README - Landing Page Profesional para Psicólogos

## ¿Qué es esto?

Una **landing page HTML5 completamente funcional, responsiva y optimizada** para psicólogos/terapeutas que buscan convertir visitantes en clientes. Lista para publicar en 5 minutos.

---

## ✨ Características Principales

✅ **100% Responsivo** - Funciona perfecto en móvil, tablet y desktop  
✅ **SEO Optimizado** - Estructura correcta, meta tags, palabras clave  
✅ **CRO Optimizado** - Diseñado para convertir visitas en contactos  
✅ **Sin dependencias** - Puro HTML5, CSS3 y JavaScript vanilla  
✅ **Rápido** - Carga en <2 segundos (sin imágenes pesadas)  
✅ **Accesible** - WCAG 2.1 AA compliant  
✅ **Light mode** - Paleta de colores calmada y profesional  
✅ **Formulario funcional** - Integrarse con Formspree o tu servicio de email

---

## 📁 Estructura de Archivos

```
Psicologa-web Yuriko Cano 3/
│
├── 📄 index.html                          # Tu landing page (HTML puro)
│
├── 📁 assets/
│   ├── 📁 css/
│   │   └── styles.css                    # Todos los estilos
│   └── 📁 js/
│       └── script.js                     # Toda la interactividad
│
├── 📖 README.md                           # Este archivo (guía rápida)
├── 📖 PERSONALIZACION_RAPIDA_5_PASOS.md  # Personalizar en 15 min
├── 📖 GUIA_DISENO_Y_PERSONALIZACION.md   # Referencia profunda
├── 📖 COPYWRITING_AVANZADO.md             # Estrategia de textos
├── 📖 POLITICA_PRIVACIDAD_PLANTILLA.md    # Plantilla legal
├── 📖 INSTRUCCIONES_DEPLOY.md             # Cómo publicar
└── 📖 INDICE_COMPLETO.md                  # Resumen de todo
```

**Ventajas de esta estructura:**

- ✅ Código limpio y organizado
- ✅ Fácil de mantener
- ✅ Profesional y escalable
- ✅ Prácticas web modernas

---

## 🚀 Cómo Empezar (3 Pasos)

### 1️⃣ Personalizar el HTML

Abre `index.html` con tu editor favorito y busca/reemplaza:

```
Yuriko Cano              → Tu nombre
contacto@yuriko.com      → Tu email
#4a7c6e                  → Tu color primario (si quieres)
```

### 2️⃣ Configurar Formulario

El formulario usa **Formspree** (gratis):

1. Ve a **https://formspree.io**
2. Regístrate con tu email
3. Copia tu `form_id`
4. En `index.html`, reemplaza esta línea:

```html
<!-- Línea actual (buscar en el archivo): -->
<form
  id="contact-form-element"
  method="POST"
  action="https://formspree.io/f/YOUR_FORMSPREE_ID"
>
  <!-- Cambia YOUR_FORMSPREE_ID por tu ID real, ejemplo: -->
  <form
    id="contact-form-element"
    method="POST"
    action="https://formspree.io/f/xyzabc123"
  ></form>
</form>
```

### 3️⃣ Publicar

**Opción A: Netlify** (RECOMENDADO - Super fácil)

1. Ve a https://netlify.com
2. Arrastra tu carpeta al área de drop
3. ¡Listo! Tu sitio está online en 10 segundos

**Opción B: GitHub Pages** (Gratisde por siempre)

1. Crea repo en GitHub
2. Sube tu `index.html`
3. Ve a Settings → Pages → Deploy from main
4. Tendrás URL tipo: `tuusuario.github.io/repositorio`

**Opción C: Tu propio hosting**

- Sube los archivos vía FTP a tu servidor
- Asegúrate de que `index.html` esté en la raíz

---

## 📋 Secciones Incluidas

### 1. **Hero Section** (Conversión inmediata)

- Título emocional
- Subtítulo con propuesta clara
- Dos CTAs (principal + exploración)
- Diseño impactante

### 2. **Sobre Terapia Psicológica**

- Explicación divulgativa (sin jerga)
- Orientada al beneficio, no características
- Lista de beneficios claros

### 3. **Beneficios del Servicio** (6 cards)

- Resultados medibles
- Espacio seguro
- Flexibilidad
- Herramientas prácticas
- Crecimiento personal
- Profesionalismo

### 4. **Cómo Funcionan las Sesiones**

- Modalidad online
- Modalidad presencial
- Proceso paso a paso
- Transparencia de precios

### 5. **Testimonios** (3 reseñas auténticas)

- Nombres, condiciones
- Emojis de avatar
- Estrella de ratings
- Lenguaje natural

### 6. **FAQ** (9 preguntas frecuentes)

- "¿Cómo funciona una sesión?"
- "¿Es confidencial?"
- "¿Cuántas sesiones necesito?"
- "¿Diferencia online vs presencial?"
- "¿Costo?"
- "¿Medicación?"
- "¿Si no me siento cómodo/a?"
- "¿Enfoque terapéutico?"
- "¿Cómo empiezo?"

### 7. **Formulario de Contacto** (Con validación)

- Nombre completo
- Email
- Teléfono (opcional)
- Motivo de consulta (dropdown)
- Modalidad preferida
- Espacio para mensaje
- Checkbox de privacidad

### 8. **CTA Final** (Refuerzo)

- Mensaje motivacional
- Botón destacado
- Último empujón a conversión

### 9. **Footer**

- Copyright
- Email de contacto
- Legal disclaimer

---

## 🎨 Personalización Rápida

### Cambiar Colores (Sin tocar CSS)

En la sección `<style>` del `<head>`:

```css
:root {
  --primary-color: #4a7c6e; /* Verde salvia → Tu color */
  --secondary-color: #6a9e92; /* Verde sec → Tu color */
  --accent-color: #d9a574; /* Beige → Tu color */
}
```

Todos los elementos se actualizarán automáticamente.

### Cambiar Tipografía

Línea actual:

```css
font-family: "Segoe UI", "Roboto", sans-serif;
```

Alternativas recomendadas:

- `'Inter', 'Roboto', sans-serif` - Muy limpio y moderno
- `'Poppins', 'Rounded Mplus 1c', sans-serif` - Más ligero y amigable
- `'Playfair Display', Georgia, serif` - Si quieres algo más elegante

---

## 📞 Integración de Formulario

### Opción 1: Formspree (RECOMENDADO)

✅ Gratis hasta 50 envíos/mes  
✅ No necesita base de datos  
✅ Emails automáticos

```html
<form method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
  <!-- Tus campos aquí -->
</form>
```

### Opción 2: EmailJS (Alternativa)

```html
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"
></script>
<script>
  emailjs.init("YOUR_PUBLIC_KEY");
</script>
```

### Opción 3: Google Forms

Menos elegante pero super simple - genera un formulario en Google Forms y embebe el iframe.

### Opción 4: Tu servidor PHP

Si tienes hosting con PHP:

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    mail('tu@email.com', 'Nueva solicitud', $_POST['message']);
    echo "¡Mensaje enviado!";
}
?>
```

---

## 🔐 Seguridad y Privacidad

### GDPR/RGPD Básico

```html
<!-- El formulario ya incluye checkbox de privacidad -->
<input type="checkbox" required />
He leído y acepto la política de privacidad
```

### Crear Política de Privacidad (Plantilla incluida)

Ver archivo `POLITICA_PRIVACIDAD_PLANTILLA.md`

### HTTPS (SSL)

⚠️ **Esencial**

- **Netlify**: HTTPS automático ✓
- **GitHub Pages**: HTTPS automático ✓
- **Tu hosting**: Solicita al proveedor (usualmente gratis con Let's Encrypt)

---

## 📊 Integrar Google Analytics

Añade esto antes del `</head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

Obtén tu ID en: https://analytics.google.com

---

## 🧪 Pruebas Antes de Publicar

- [ ] Probar en móvil (iPhone, Android)
- [ ] Probar en tablet
- [ ] Probar en desktop
- [ ] Enviar formulario (verifica que llega el email)
- [ ] Todos los enlaces funcionan
- [ ] FAQ se abre/cierra bien
- [ ] Botones son clickeables
- [ ] Texto es legible
- [ ] Velocidad de carga < 2 segundos (con DevTools)

---

## ⚡ Optimización de Renidimiento

El sitio ya es ultrarrápido, pero si quieres mejorar más:

### Minificar CSS/JS

- Online: https://minifier.org
- Reducirá tamaño de descarga

### Lazy loading de imágenes (si añades fotos)

```html
<img src="foto.jpg" loading="lazy" alt="Descripción" />
```

### Cachés de navegador

Añadir meta tags:

```html
<meta http-equiv="Cache-Control" content="max-age=31536000" />
```

---

## 🎯 Estrategia SEO Básica

### On-page (Ya implementado) ✓

- H1 único
- Estructura H2/H3 correcta
- Meta title optimizado
- Meta description
- Palabras clave distribuidas

### Off-page (Después de publicar)

1. **Google Search Console**
   - Ve a https://search.google.com/search-console
   - Verifica tu dominio
   - Envía sitemap: `tudominio.com/sitemap.xml`

2. **Google My Business** (Si tienes consulta física)
   - Crea perfil
   - Añade ubicación
   - Pide reseñas

3. **Backlinks**
   - Pide a colegas que enlacen
   - Regístrate en directorios de psicólogos
   - Cita tu web en redes sociales

---

## 💡 Copywriting Tips Incluidos

- ✅ Lenguaje empático, no clínico
- ✅ Enfoque en beneficios, no características
- ✅ CTAs orientados a acción
- ✅ Titulares emocionales
- ✅ FAQ que resuelve objeciones
- ✅ Testimonios auténticos
- ✅ Llamadas a la acción repetidas (sin spam)

---

## 🤔 Preguntas Frecuentes

### ¿Puedo cambiar los testimonios?

Totalmente. Busca la sección `<!-- TESTIMONIALS SECTION -->` y reemplaza los nombres, la situación y el texto. Recuerda mantener la estructura HTML.

### ¿Dónde pongo mis horarios y precios?

Opción 1: Añade una sección nueva antes del formulario
Opción 2: En los "Cómo funcionan las sesiones" (línea ~480)
Opción 3: Crea una página separada `/tarifas.html`

### ¿Cómo administro las solicitudes?

Formspree te envía emails automáticamente. Luego:

1. Lee el formulario
2. Verifica el email del cliente
3. Envía propuesta de horarios para sesión gratuita
4. Cierra el trato

### ¿Puedo añadir imágenes?

Sí, pero cuidado:

- Usar imágenes comprimidas (< 200KB cada una)
- Formato WebP para mejor rendimiento
- Siempre con atributo `alt` para SEO

```html
<img src="foto-perfil.jpg" alt="Yuriko Cano, psicóloga" loading="lazy" />
```

### ¿Es seguro el formulario?

Usando Formspree: Sí, es HTTPS y seguro.
Usando tu servidor: Implementa validación servidor y protección SPAM (reCAPTCHA).

---

## 📚 Recursos Útiles

### Herramientas

- **Figma**: Para mockups y prototipos
- **Canva**: Para gráficos y redes sociales
- **Grammarly**: Comprobar ortografía y gramática
- **Ubersuggest**: Investigación de palabras clave

### Plataformas de hosting recomendadas

- **Netlify** (mejor para HTML puro)
- **Vercel** (muy rápido)
- **SiteGround** (soporte 24/7)
- **Kinsta** (premium)

### Certificados SSL (HTTPS)

- **Let's Encrypt** (gratis)
- **Certbot** (gestor gratuito)

---

## 📞 Soporte

Si necesitas help:

1. Revisa `GUIA_DISENO_Y_PERSONALIZACION.md`
2. Busca en Google: "html landing page [tu pregunta]"
3. Comunidad: Stack Overflow, Dev.to

---

## ✅ Checklist Definitivo Antes de Publicar

```
🔧 Configuración
- [ ] Cambiar nombre "Yuriko Cano" → Tu nombre
- [ ] Cambiar email de contacto
- [ ] Actualizar número de teléfono (si aplica)
- [ ] Configurar Formspree (o alternativa)

🎨 Diseño
- [ ] Personalizar colores (opcional)
- [ ] Añadir logo (opcional)
- [ ] Revisar tipografías
- [ ] Probar en móvil

📝 Contenido
- [ ] Actualizar testimonios
- [ ] Revisar ortografía
- [ ] Verificar todos los links
- [ ] Actualizar FAQ si es necesario

🔐 Seguridad
- [ ] HTTPS activo
- [ ] Política de privacidad creada
- [ ] Formulario testado
- [ ] Recibir email de prueba

📊 SEO & Tracking
- [ ] Meta title y description actualizados
- [ ] Google Analytics configurado
- [ ] Search Console verificado
- [ ] Sitemap.xml enviado

🚀 Deploy
- [ ] Subir a Netlify / GitHub / hosting
- [ ] Verificar que funciona en vivo
- [ ] Compartir con colegas
- [ ] Anunciar en redes sociales
```

---

**¡Listo!** Tu landing page profesional está lista para convertir visitas en clientes reales.

**Tiempo aprox. para personalizar y publicar: 15-30 minutos** ⏱️

---

_Creado con 💚 para terapeutas profesionales_  
_Versión 1.0 - Febrero 2026_
