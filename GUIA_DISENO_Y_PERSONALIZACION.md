# Guía de Diseño y Personalización - Landing Page Psicóloga

## 📋 Contenido de este documento

- Paleta de colores
- Tipografías recomendadas
- Mejores prácticas SEO
- Instrucciones de personalización
- Cómo optimizar conversaciónes

---

## 🎨 PALETA DE COLORES RECOMENDADA

La paleta utilizada transmite **calma, confianza, empatía y profesionalismo**:

### Colores Principales

| Color                          | Código HEX | RGB           | Uso                     | Por qué                                                    |
| ------------------------------ | ---------- | ------------- | ----------------------- | ---------------------------------------------------------- |
| **Verde Salvia (Primario)**    | `#4a7c6e`  | 74, 124, 110  | Hero, botones, acentos  | Transmite tranquilidad, crecimiento y equilibrio emocional |
| **Verde Azulado (Secundario)** | `#6a9e92`  | 106, 158, 146 | Degradados, énfasis     | Refuerza confianza profesional sin ser frío                |
| **Beige Cálido (Acento)**      | `#d9a574`  | 217, 165, 116 | Separadores, iconos     | Humaniza el diseño, evita frialdad                         |
| **Blanco Roto**                | `#f9f7f4`  | 249, 247, 244 | Fondos alternativos     | Reduce estrés retiniano, mantiene calidez                  |
| **Gris Oscuro (Texto)**        | `#2c3e3d`  | 44, 62, 61    | Textos principales      | Alto contraste, fácil lectura                              |
| **Gris Medio (Subtextos)**     | `#5a6b6a`  | 90, 107, 106  | Subtítulos, segundarios | Jerarquía clara sin abrumar                                |

### Psicología del Color en Psicología

- **Verde Salvia**: Símbolo de sanación, esperanza y renacimiento emocional
- **Beige/Cálido**: Humaniza el servicio, reduce la percepción de "clínica fría"
- **Blanco/Luz**: Claridad, transparencia en el proceso terapéutico

---

## 🔤 TIPOGRAFÍAS RECOMENDADAS

### Fuentes Utilizadas (compatible con web)

| Elemento                | Fuente Recomendada  | Alternativa     | Por qué                            |
| ----------------------- | ------------------- | --------------- | ---------------------------------- |
| **Encabezados (H1-H3)** | Roboto, Segoe UI    | Poppins, Inter  | Moderno, accesible, legible        |
| **Cuerpo de Texto**     | Segoe UI, Roboto    | Open Sans, Lato | Clara en pantalla, buena jerarquía |
| **CTA y Botones**       | Segoe UI Bold (600) | Roboto Medium   | Destaca, invita a clicar           |

### Jerarquía de Tamaños

```
H1 (Hero):     2.5rem - 3.5rem (escalable móvil)
H2 (Títulos):  1.75rem - 2.5rem
H3 (Subtítulos): 1.25rem - 1.75rem
Párrafos:      0.95rem - 1.1rem (fluido)
Pequeño:       0.85rem - 0.9rem
```

### Line Height (Interlineado) Recomendado

- **Encabezados**: 1.3 (más compactos, visualmente impactantes)
- **Párrafos**: 1.6 - 1.8 (aumenta legibilidad y reduce ansiedad del lector)
- **Formularios**: 1.5

---

## 📱 MOBILE-FIRST: Breakpoints Utilizados

```css
/* Mobile (por defecto) */
- Ancho máximo de columnas: 1 col
- Padding lateral: 1rem a 1.5rem

/* Tablet (min-width: 768px) */
- Grid: 2-3 columnas
- Padding: 2rem

/* Desktop (min-width: 1200px) */
- Max-width container: 1200px
- Grid: 3-4 columnas
- Padding: aumentado
```

---

## 🔍 SEO ON-PAGE OPTIMIZADO

### Meta Información

```html
<title>Terapia Psicológica Online | Yuriko Cano | Primera Sesión Gratis</title>
<!-- 
✓ 48 caracteres
✓ Incluye palabra clave: "Terapia Psicológica Online"
✓ Incluye CTA: "Primera Sesión Gratis"
✓ Marca: "Yuriko Cano"
-->

<meta
  name="description"
  content="Terapia psicológica online y presencial para ansiedad, estrés y depresión. Primera sesión gratuita. Psicóloga especializada con enfoque humanista."
/>
<!-- 
✓ 155 caracteres
✓ Palabras clave naturales
✓ CTA visible
✓ Propuesta clara
-->
```

### Palabras Clave Principales (SEO)

**Corta cola (High Intent):**

- Psicólogo online
- Terapia psicológica
- Terapeuta online

**Larga cola (Mayor intención de compra):**

- Terapeuta para ansiedad online
- Terapia psicológica primera sesión gratis
- Psicólogo especializado en ansiedad
- Sesión de terapia gratuita

### Estructura de Encabezados (H1-H3)

```
H1: "Tu bienestar emocional es mi prioridad"
    └─ H2: "¿Qué es la terapia psicológica y por qué es importante?"
    └─ H2: "Beneficios que obtendrás"
        └─ H3: "Resultados medibles" (en cards)
        └─ H3: "Espacio seguro y confidencial"
        etc.
    └─ H2: "Cómo funcionan nuestras sesiones"
    └─ H2: "Lo que dicen nuestros clientes"
    └─ H2: "Preguntas frecuentes"
        └─ H3: "¿Cómo funciona una sesión de terapia?"
        etc.
```

### Densidad de Palabras Clave

- **"terapia psicológica"**: 4-6 veces (distribuidas naturalmente)
- **"psicólogo/a online"**: 3-4 veces
- **"sesión gratuita/gratis"**: 2-3 veces
- **"ansiedad", "estrés", "depresión"**: 1-2 veces cada una

---

## 📝 MICROCOPY PARA FORMULARIOS

### Etiquetas de Campos

```
Nombre completo *
→ Placeholder: "Tu nombre"
→ Hint: "Como prefieres que te llame"

Correo electrónico *
→ Placeholder: "tu@correo.com"
→ Hint: "Te contactaré por aquí"

Teléfono (opcional)
→ Placeholder: "+34 XXX XXX XXX"
→ Hint: "Si lo prefieres, también puedo llamar"

¿Qué te trae aquí? *
→ Opción por defecto: "-- Selecciona una opción --"
→ Opciones: Ansiedad, Estrés, Depresión, Relaciones, etc.

¿Qué modalidad prefieres? *
→ Opción flexible
→ Label: "Sin importar (Flexible)" - esto aumenta conversión

Cuéntame brevemente tu situación (opcional)
→ Placeholder: "Comparte lo que te parezca relevante..."
→ Min-height: 120px (invita a escribir)
```

### Mensajes de Validación

```
❌ Email inválido: "Por favor ingresa un correo válido (ejemplo: nombre@correo.com)"
❌ Campo requerido: "Este campo es obligatorio"
✓ Envío exitoso: "¡Perfecto! Recibirás una respuesta en máximo 24 horas. Gracias por confiar en mí."
```

### Copy del Botón

```
Texto principal: "Solicita tu sesión gratuita"
→ Beneficio directo, no es frío "Submit"

Texto secundario: "Empieza hoy a sentirte mejor"
→ Emocional, aspiracional

Hover state: Cambio sutil de color + pequeña animación hacia arriba
→ Señala interactividad sin alarmar
```

---

## 🎯 OPTIMIZACIÓN DE CONVERSIÓN (CRO)

### Estrategia de Colores para CTAs

```css
Hero primary CTA: Botón blanco sobre verde
→ Máximo contraste, fácil de ver

Secondary CTA (sobre verde): Transparente con borde
→ Opción clara pero no invasiva

CTA en secciones blancas: Verde sólido
→ Destaca sobre fondo claro

CTA final (before footer): Blanco sobre verde
→ Refuerza mensaje e importancia
```

### Ubicación de CTAs (Estrategia)

1. **Hero**: CTA primario + secundario (above the fold)
2. **Beneficios**: Implícito ("¿Listo para reservar?")
3. **Formulario**: CTA principal visible
4. **Final**: CTA final de refuerzo

### Copy Orientado a Beneficios

```
❌ Evitar:           ✅ Usar:
"Contactar"    →    "Reserva tu sesión gratuita"
"Enviar"       →    "Empieza hoy a sentirte mejor"
"Submit"       →    "Solicita tu primera sesión"
"Ir al form"   →    "Cura tu ansiedad ahora"
```

---

## 🛠️ CÓMO PERSONALIZAR

### Cambiar Psicóloga

1. **Nombre**: Busca y reemplaza "Yuriko Cano" por tu nombre
2. **Contacto Footer**: Cambia email en `<footer>`
3. **Meta Tags**: Actualiza title y description
4. **Foto**: Añade URL de foto en hero (si lo deseas)

### Cambiar Colores Principales

En la sección `:root` del `<style>`:

```css
:root {
  --primary-color: #4a7c6e; /* Cambia este */
  --secondary-color: #6a9e92; /* Este */
  --accent-color: #d9a574; /* Y este */
  /* Los demás se ajustan automáticamente */
}
```

### Añadir Formulario Real

El formulario actual usa Formspree (gratis hasta 50 envíos/mes):

1. Ve a https://formspree.io
2. Crea cuenta con tu email
3. Copia el `form_id`
4. Reemplaza en el `action` del formulario:

```html
<form method="POST" action="https://formspree.io/f/YOUR_FORMSPREE_ID"></form>
```

---

## 📊 CÓMO MEDIR EL ÉXITO

### KPIs Principales

| Métrica                      | Objetivo    | Cómo Medir                        |
| ---------------------------- | ----------- | --------------------------------- |
| **Tasa de Conversión**       | 3-5% mínimo | Envíos de formulario / Visitantes |
| **Tiempo en Página**         | 2+ minutos  | Google Analytics                  |
| **Bounce Rate**              | < 40%       | Google Analytics                  |
| **CTR (Click Through Rate)** | 2%+         | Clics en CTA / Vistas             |

### Tracking con Google Analytics

```html
<!-- Añade antes de </head> -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "YOUR_GA_ID");

  // Track form submission
  document
    .getElementById("contact-form-element")
    .addEventListener("submit", function () {
      gtag("event", "form_submission", {
        form_name: "free_session_request",
      });
    });
</script>
```

---

## 🚀 TEST A/B RECOMENDADOS

### Prueba 1: Titulares

**Versión A:** "Tu bienestar emocional es mi prioridad"
**Versión B:** "Recupérate de la ansiedad en pocas sesiones"

→ Ejecutar 2 semanas, medir conversión

### Prueba 2: Color de Botón

**Versión A:** Verde (actual)
**Versión B:** Naranja/Coral

### Prueba 3: Posición de Formulario

**Versión A:** Abajo en sección separada
**Versión B:** Flotante (sticky) en lateral móvil

---

## 🔐 SEGURIDAD Y PRIVACIDAD

### Implementar SSL

- Propio dominio: Usar Let's Encrypt (gratis)
- Shared hosting: Solicitar al proveedor

### RGPD / GDPR

```html
<!-- Checkbox obligatorio en formulario -->
<input type="checkbox" required />
He leído y acepto la <a href="/privacidad.html">política de privacidad</a>
```

### Crear Política de Privacidad

Crear archivo `privacidad.html` con:

- Cómo se usan los datos
- Protección GDPR
- Derecho a eliminación
- Contacto de privacidad

---

## 📞 INTEGRACIONES ÚTILES

### Email Marketing (para seguimiento)

Integrar con:

- **Mailchimp** (gratuito hasta 500 contactos)
- **Brevo** (ex Sendinblue)
- **GetResponse**

Esto permite:

- Autorespuestador: "Recibirás confirmación en 24h"
- Nurturing: Enviar contenido de valor antes de primera sesión

### CRM Simple (seguimiento de clientes)

- **Typeform** (formularios más avanzados)
- **HubSpot** (CRM gratuito)
- **Calendly** (agendamiento automático)

---

## ✅ CHECKLIST DE LANZAMIENTO

- [ ] Cambiar nombre "Yuriko Cano" por tu nombre
- [ ] Actualizar email de contacto
- [ ] Configurar formulario con Formspree/alternativa
- [ ] Añadir foto profesional (opcional pero recomendado)
- [ ] Personalizar colores si lo deseas
- [ ] Probar en móvil, tablet, desktop
- [ ] Implementar Google Analytics
- [ ] Crear política de privacidad
- [ ] Subir a hosting (Netlify, Vercel o tu propio servidor)
- [ ] Comprar dominio personalizado
- [ ] Implementar SSL (HTTPS)
- [ ] Enviar sitemap a Google Search Console
- [ ] Solicitar reseñas a primeros clientes

---

## 📚 REFERENCIAS Y RECURSOS

### Herramientas Gratuitas

- **Google Trends**: Buscar palabras clave
- **Google Search Console**: Monitorear SEO
- **Google Analytics**: Medir tráfico
- **Lighthouse (Chrome)**: Audit de rendimiento
- **Mobile-Friendly Test**: Probar responsive

### Plataformas de Hosting

- **Netlify** (muy fácil, ideal para HTML/CSS/JS)
- **Vercel** (optimizado para web)
- **GitHub Pages** (gratis, con dominio personalizado)
- **SiteGround, Namecheap** (hosting tradicional)

---

_Última actualización: Febrero 2026_
_Versión: 1.0_
