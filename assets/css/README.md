# 🎨 Estilos CSS

Archivo principal: `styles.css`

## 📋 Secciones del Archivo

### 1️⃣ Variables CSS (Líneas 1-30)

```css
:root {
  --primary-color: #4a7c6e;
  --secondary-color: #6a9e92;
  --accent-color: #d9a574;
  /* ... más colores ... */
}
```

**Uso:** Define colores reutilizables en todo el sitio. Cambiar aquí = cambiar en todo el sitio.

### 2️⃣ Reset Global (Líneas 31-50)

- Elimina márgenes/paddings por defecto
- Box-sizing global
- Estilos base para todos los elementos

### 3️⃣ Tipografía (Líneas 51-100)

- Tamaños de encabezados (h1-h6)
- Párrafos con tamaño fluido
- Familia de fuentes

### 4️⃣ Componentes (Líneas 101-500)

#### Botones

```css
.btn-primary   /* Botón verde principal */
.btn-secondary /* Botón verde secundario */
.btn-white     /* Botón blanco */
```

#### Hero Section

```css
.hero {
  background: linear-gradient(...);
  /* Sección principal con fondo degradado */
}
```

#### Cards

```css
.feature-card    /* Tarjetas de beneficios */
.testimonial-card /* Tarjetas de testimonios */
```

#### FAQ

```css
.faq-item {
  /* Base de pregunta */
}
.faq-item.active {
  /* Estado expandido */
}
```

#### Formulario

```css
.form-group  /* Contenedor de campo */
input, textarea {
  /* Estilos de inputs */
}
.btn-submit {
  /* Botón de envío */
}
```

### 5️⃣ Responsive Design (Líneas 500-980)

**Breakpoints:**

- 📱 Móvil: 480px y menores
- 📱 Tablet: 481px a 768px
- 🖥️ Desktop: 769px y mayores

```css
@media (max-width: 768px) {
  /* Estilos para tablets y móviles */
}

@media (max-width: 480px) {
  /* Estilos solo para móviles */
}
```

### 6️⃣ Animaciones (Líneas 950-980)

```css
@keyframes fadeInUp {
  /* Animación de entrada suave */
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

## 🎯 Cómo Personalizar

### Cambiar Colores

Busca `:root {` y modifica las variables:

```css
--primary-color: #4a7c6e; /* ← Cambia este color */
```

### Cambiar Tipografía

Busca `body {` y modifica `font-family`:

```css
font-family: "Segoe UI", sans-serif; /* ← Cambia aquí */
```

### Cambiar Espacios

Busca valores como `padding: 2rem;` o `margin: 1rem;` y ajusta.

### Cambiar Tamaños

Busca `font-size:` y modifica los píxeles o em.

## 🔍 Estructura de Selectores

```
Tipo            Selector              Uso
─────────────────────────────────────────────────
Elemento        body, h1, p           Estilos generales
Clase           .hero, .btn-primary   Reutilizable
ID              #contact              Único, una sola vez
Pseudo-clase    :hover, :focus        Estados
Pseudo-elemento ::before, ::after     Decoración
```

## ⚡ Rendimiento

- ✅ Sin librerías externas
- ✅ Comprimible (minify)
- ✅ Carga rápida (~15KB)
- ✅ Compatible con todos los navegadores modernos

## 🚀 Próximos Pasos

**Para escalar:**

1. Divide en múltiples archivos (components.css, responsive.css)
2. Sistema de grid personalizado
3. Preprocesador (SCSS/LESS) para variables avanzadas
4. Minificación automática

---

_Todos los estilos en un archivo para máxima velocidad y facilidad de mantenimiento_
