# 📁 Carpeta Assets - Recursos del Sitio

Esta carpeta contiene los archivos estáticos (CSS y JavaScript) de tu landing page.

## Estructura

```
assets/
├── css/
│   └── styles.css        # Todos los estilos y diseño
└── js/
    └── script.js         # Toda la funcionalidad JavaScript
```

## 📄 CSS - `assets/css/styles.css`

Contiene:

- ✅ Variables CSS (colores, espaciados)
- ✅ Estilos de componentes (botones, cards, etc)
- ✅ Responsive design (media queries)
- ✅ Animaciones
- ✅ Accesibilidad

**Cuándo editarlo:**

- Cambiar colores
- Ajustar espacios/márgenes
- Modificar tipografías
- Cambiar tamaños de elementos
- Añadir nuevos estilos

## 🔧 JavaScript - `assets/js/script.js`

Contiene:

- ✅ Toggle de FAQ (abrir/cerrar)
- ✅ Validación de formulario
- ✅ Smooth scroll
- ✅ Animaciones de fade-in
- ✅ Intersection Observer

**Cuándo editarlo:**

- Cambiar comportamiento de botones
- Añadir validaciones adicionales
- Modificar animaciones
- Añadir nuevas funciones interactivas

## 🔗 Cómo se conectan

En `index.html`:

```html
<!-- Importar CSS -->
<link rel="stylesheet" href="assets/css/styles.css" />

<!-- Importar JavaScript -->
<script src="assets/js/script.js"></script>
```

## 💡 Tips de Organización

**Si quieres escalar a múltiples CSS:**

```
assets/
├── css/
│   ├── main.css          # Estilos generales
│   ├── components.css    # Estilos de componentes
│   └── responsive.css    # Media queries
```

**Si quieres escalar a múltiples JS:**

```
assets/
├── js/
│   ├── main.js           # Inicialización
│   ├── faq.js            # Lógica FAQ
│   └── forms.js          # Lógica formularios
```

## 📦 Sin Dependencias

La carpeta assets usa:

- ❌ No jQuery
- ❌ No Bootstrap
- ❌ No librerías externas
- ✅ JavaScript vanilla puro

Esto significa:

- Sitio muy rápido
- Sin confictosde versiones
- Código fácil de entender
- Bajo mantenimiento

---

_Estructura profesional lista para scaling y maintenance_
