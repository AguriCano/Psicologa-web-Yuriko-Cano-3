# ⚙️ JavaScript - Funcionalidad

Archivo principal: `script.js`

## 📋 Funciones Implementadas

### 1️⃣ FAQ Toggle

```javascript
function toggleFaq(button) {
  // Abre/cierra preguntas frecuentes
}
```

**Qué hace:**

- Click en pregunta = se abre y muestra respuesta
- Click de nuevo = se cierra
- Solo una puede estar abierta al mismo tiempo

**Cómo se activa:**

```html
<button onclick="toggleFaq(this)">¿Cómo funciona el proceso?</button>
```

### 2️⃣ Cerrar FAQ al Hacer Click Afuera

```javascript
document.addEventListener("click", (e) => {
  // Cierra FAQ si haces click fuera
});
```

**Qué hace:**

- Si abres una FAQ y clickeas en otro lado
- La FAQ se cierra automáticamente

### 3️⃣ Validación de Formulario

```javascript
function validateForm(event) {
  // Valida antes de enviar
}
```

**Qué valida:**

- ✅ Todos los campos completos
- ✅ Email en formato correcto
- ✅ Teléfono solo números

**Si hay error:**

- Muestra mensaje de error
- NO envía el formulario

### 4️⃣ Smooth Scroll (Desplazamiento Suave)

```javascript
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  // Desplazamiento suave a secciones
});
```

**Qué hace:**

- Click en "Ir a FAQ" = desplazamiento suave
- NO salta inmediatamente
- Se ve más profesional

**Cómo funciona:**

```html
<a href="#faq">Ir a Preguntas</a>
<!-- Desplazará suavemente a <section id="faq"> -->
```

### 5️⃣ Intersection Observer (Animaciones en Scroll)

```javascript
const observer = new IntersectionObserver((entries) => {
  // Anima elementos cuando entran en vista
});
```

**Qué hace:**

- Elementos se desvanecen cuando entran en pantalla
- Efecto profesional de "fade-in-up"
- Solo se anima una sola vez

**Cuál es el selector:**

```html
<div class="fade-in-up">
  <!-- Se animará al scrollear hasta verlo -->
</div>
```

## 🔧 Cómo Modificar

### Añadir Nueva Validación al Formulario

Busca `function validateForm(event)` y añade:

```javascript
// Validar que teléfono tiene 10 dígitos
if (phone.length !== 10) {
  alert("Teléfono debe tener 10 dígitos");
  return false;
}
```

### Cambiar Velocidad de Animaciones

Busca `duration: 600` y cambia el número (en milisegundos):

```javascript
duration: 1000; // 1 segundo en lugar de 0.6 segundos
```

### Cambiar Mensaje de Validación

Busca `alert('Por favor, completa todos los campos');` y cambia el texto.

### Añadir Nueva Función

Ejemplo: Contador de caracteres en textarea:

```javascript
const textarea = document.querySelector("textarea");
textarea.addEventListener("input", (e) => {
  const count = e.target.value.length;
  console.log(`${count} caracteres escritos`);
});
```

## 🎯 Selectores Usados

```javascript
// Seleccionar elementos
document.querySelector(".class"); // Primer elemento con esa clase
document.querySelectorAll(".class"); // Todos los elementos
document
  .getElementById("id") // Por ID

  // Escuchar eventos
  .addEventListener("click", handler)
  .addEventListener("input", handler)
  .addEventListener("scroll", handler)

  // Modificar clases
  .classList.add("class")
  .classList.remove("class")
  .classList.toggle("class");
```

## 📊 Estado del Formulario

### Antes de Enviar

```javascript
// Script valida
// Si error = bloquea y muestra alerta
// Si OK = envía a Formspree
```

### ID de Formspree

En `index.html` busca:

```html
<form action="https://formspree.io/f/YOUR_FORMSPREE_ID">
  <!-- Debes reemplazar YOUR_FORMSPREE_ID con tu ID real -->
</form>
```

**Sin ID correcto:**

- ❌ Formulario no envía nada

**Con ID correcto:**

- ✅ Emails llegan a tu bandeja

## 🐛 Debugging

### Ver console.log para debug

Abre Developer Tools (F12) → Consola y verás:

```javascript
console.log("FAQ opened");
console.log("Form submitted");
```

### Errores comunes

- ❌ Typos en nombres de funciones
- ❌ Selectores que no existen
- ❌ Event listeners en elementos inexistentes

## ⚡ Rendimiento

- ✅ Solo 60 líneas de código
- ✅ Sin librerías externas
- ✅ Ejecución rápida
- ✅ Bajo consumo de memoria

## 🚀 Próximos Pasos

**Para escalar:**

1. Divide en módulos (faq.js, forms.js)
2. Sistema de eventos personalizado
3. Manejo de errores mejorado
4. Analytics (Google Tag Manager)

## 📚 Recursos de Aprendizaje

- [MDN Web Docs](https://developer.mozilla.org/es/)
- [JavaScript.info](https://es.javascript.info/)
- [Vanilla JS](http://vanilla-js.com/)

---

_JavaScript vanilla puro, sin dependencias, fácil de mantener y escalar_
