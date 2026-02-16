# 🚀 INSTRUCCIONES DE DEPLOY - CÓMO PUBLICAR TU LANDING PAGE

## Resumen Rápido: 3 Formas de Publicar (Elige Una)

| Opción                     | Dificultad | Tiempo | Costo     | Mantenimiento |
| -------------------------- | ---------- | ------ | --------- | ------------- |
| **Netlify** ⭐ Recomendado | Muy fácil  | 5 min  | Gratis    | Ninguno       |
| **GitHub Pages**           | Fácil      | 10 min | Gratis    | Mínimo        |
| **Tu Hosting**             | Media      | 15 min | $3-10/mes | Moderado      |

---

# 🥇 OPCIÓN 1: NETLIFY (RECOMENDADO)

## ¿Por qué Netlify?

✅ Super fácil - Literalmente drag & drop  
✅ Gratis para siempre  
✅ HTTPS automático  
✅ Rendimiento excelente  
✅ Soporte de formularios  
✅ Deploy automático si usas Git

## Paso 1: Preparar Archivos

1. Crea una carpeta en tu PC: `landing-page-psicologia`
2. Coloca adentro:
   - `index.html` (tu landing page)
   - Cualquier imagen o asset que hayas añadido

Tu carpeta debe verse así:

```
landing-page-psicologia/
├── index.html
└── (fotos, si las tienes)
```

## Paso 2: Crear Cuenta en Netlify

1. Ve a **https://netlify.com**
2. Click "Sign up"
3. Elige "Email" (más simple que GitHub)
4. Verifica tu email

## Paso 3: Deploy (¡La magia!)

### Opción A: Drag & Drop (MÁS FÁCIL)

1. En Netlify, ve a **Deploys**
2. Arrastra tu carpeta `landing-page-psicologia` al área
3. Espera 10 segundos
4. **¡Tu sitio está live!** 🎉

Tu URL será: `random-name-12345.netlify.app`

### Opción B: Si Tienes GitHub

1. Sube tu repo a GitHub
2. En Netlify, click "Connect to Git"
3. Selecciona tu repo
4. Netlify deployará automáticamente

## Paso 4: Conseguir Dominio Personalizado (Opcional)

Tu URL inicial es fea: `amazing-site-93921.netlify.app`

Quieres: `tupsicologia.com`

### Opción A: Comprar Dominio (Recomendado)

1. Ve a **https://namecheap.com** o **https://godaddy.com**
2. Busca tu dominio (ej: `yuriko-cano.com`)
3. Compra por ~$10/año
4. Copia tus **nameservers**
5. En Netlify:
   - Sitio → Domain Management
   - Click "Add custom domain"
   - Pega tu dominio
   - Sigue instrucciones para nameservers

**Tiempo:** 24-48 horas para que funcione completamente

### Opción B: DNS Free (Si No Quieres Pagar)

Algunos dominios gratis: `.ml`, `.ga`, `.tk` (menos profesionals)

O registra con **Freenom** (gratis pero limitado)

---

## Paso 5: Configurar Formulario en Netlify

El formulario que creaste funciona, pero mejor si lo integras con Netlify:

### Sin hacer nada extra:

Tu formulario actual (con Formspree) ya funciona 100%

### Si quieres formulario nativo de Netlify:

1. Cambia el atributo del form a:

```html
<form name="contact-form" method="POST" netlify>
  <!-- Tus campos -->
</form>
```

2. En Netlify:
   - Settings → Forms
   - Verás los envíos
   - Puedes recibir notificaciones por email

---

## Paso 6: HTTPS (Ya Está Hecho)

Netlify automáticamente:

- ✅ Añade HTTPS
- ✅ Renueva certificados
- ✅ Configura SSL

**Tu URL será:** `https://tudominio.com` 🔒

---

## Actualizar tu Sitio

Si haces cambios al `index.html`:

### Opción A: Drag & Drop de Nuevo

Arrastra la carpeta nuevamente → Deploy automático

### Opción B: GitHub

Haz push a GitHub → Netlify detecta y despliega automáticamente

### Opción C: API

Usa `curl` o Zapier para deploy automático

---

---

# 🥈 OPCIÓN 2: GITHUB PAGES (Gratis Para Siempre)

## ¿Por qué GitHub Pages?

✅ Gratis indefinidamente  
✅ Hospedado en servidores de GitHub  
✅ HTTPS automático  
✅ Integrado con Git  
❌ Un poco más técnico que Netlify

## Paso 1: Crear Cuenta GitHub

1. Ve a **https://github.com**
2. Click "Sign up"
3. Crea cuenta con email
4. Verifica email

## Paso 2: Crear Repositorio

1. En GitHub, click en **+** (arriba derecha)
2. "New repository"
3. **Nombre importante:** `[tuusuario].github.io`

   Ejemplo: Si tu usuario es "yuriko2026", el repo es:

   ```
   yuriko2026.github.io
   ```

4. Click "Create repository"

## Paso 3: Subir Archivos

### Opción A: Web (Sin Terminal)

1. En tu nuevo repo, click "Add file" → "Upload files"
2. Arrastra tu `index.html`
3. Click "Commit changes"

### Opción B: Con Terminal (Git)

Si tienes Git instalado:

```bash
git clone https://github.com/[tuusuario]/[tuusuario].github.io.git
cd [tuusuario].github.io
cp /ruta/a/tu/index.html .
git add .
git commit -m "Añadir landing page"
git push
```

## Paso 4: ¡Tu Sitio Está Live!

Accede a: `https://[tuusuario].github.io`

Ejemplo: `https://yuriko2026.github.io`

## Paso 5: Dominio Personalizado (Opcional)

1. Compra dominio en **Namecheap** o similar (~$10/año)
2. En tu repo → Settings → Pages
3. "Custom domain" → Añade tu dominio
4. En tu registrador de dominio, configura nameservers a GitHub

**Documentación:** https://docs.github.com/en/pages

---

---

# 🥉 OPCIÓN 3: TU PROPIO HOSTING

## ¿Cuándo elegir esto?

- ✅ Quieres control total
- ✅ Tienes email corporativo incluido
- ✅ Necesitas base de datos (futuro)
- ❌ Más caro ($3-15/mes)
- ❌ Requiere FTP/cPanel

## Proveedores Recomendados

| Proveedor      | Precio    | Soporte | Recomendación |
| -------------- | --------- | ------- | ------------- |
| **SiteGround** | $3-7/mes  | 24/7    | ⭐ Muy bueno  |
| **Hostinger**  | $2-5/mes  | 24/7    | ⭐ Muy barato |
| **GoDaddy**    | $5-12/mes | 24/7    | ⭐ Conocido   |
| **Bluehost**   | $4-10/mes | 24/7    | ⭐ OK         |

## Paso 1: Comprar Hosting + Dominio

1. Ve a **https://siteground.com** (o tu proveedor)
2. Search dominio (ej: `yuriko-cano.com`)
3. Elige plan (Starter es suficiente: ~$3/mes)
4. Completa compra
5. Recibirás acceso FTP por email

## Paso 2: Conectar vía FTP

### Opción A: Usar Software FTP

Descarga **FileZilla** (gratis): https://filezilla-project.org

1. Abre FileZilla
2. Datos de conexión:
   - **Host:** sftp://[tu-hosting-sftp]
   - **Usuario:** [tu usuario FTP]
   - **Contraseña:** [tu contraseña]
   - **Puerto:** 22 (o 21)
3. Conecta
4. En el lado derecho, navega a:
   - `public_html/` o `/www/`
5. Arrasta tu `index.html` ahí

### Opción B: cPanel (Interfaz Web)

Tu proveedor probablemente tiene cPanel:

1. Accede a cPanel (URL en email de hosting)
2. File Manager
3. Navega a `public_html`
4. Upload tu `index.html`
5. Listo

## Paso 3: Verificar HTTPS

En cPanel:

1. Busca "Let's Encrypt" o "SSL/TLS"
2. Click para instalar certificado gratuito
3. En algunos casos es automático

## Paso 4: Email Corporativo (Bonus)

Si tienes hosting, normalmente incluye email:

```
tu@tupsicologia.com
```

En cPanel:

1. Email Accounts
2. Crea cuenta
3. Configura en Outlook/Gmail

---

---

# ✅ CHECKLIST POST-DEPLOYMENT

Después de publicar, verifica:

## Funcionalidad

- [ ] El sitio carga completamente (sin errores 404)
- [ ] Todos los links funcionan
- [ ] El formulario se envía correctamente
- [ ] Recibes el email con los datos
- [ ] Los botones son clickeables
- [ ] FAQ se abre y cierra
- [ ] Diseño se ve correcto en móvil

## Seguridad

- [ ] URL tiene HTTPS 🔒 (no HTTP)
- [ ] Certificado SSL es válido
- [ ] Formulario no muestra datos sensibles en URL
- [ ] No hay warnings de seguridad en navegador

## SEO

- [ ] Meta title aparece en pestaña del navegador
- [ ] Meta description se ve en Google
- [ ] Headings están estructurados (H1, H2, H3)
- [ ] Imágenes tienen atributo `alt`

## Rendimiento

- [ ] Sitio carga en < 2 segundos
- [ ] No hay imágenes demasiado pesadas
- [ ] Mobile es rápido también
- [ ] No hay scripts que bloquean

Usa: https://pagespeedinsights.web.dev/

## Accesibilidad

- [ ] Puedo navegar con teclado
- [ ] Contraste de colores es bueno
- [ ] Texto es legible

Usa: https://wave.webaim.org/

---

---

# 🔧 TROUBLESHOOTING COMÚN

## Problema: "Error 404 - Página no encontrada"

**Solución:**

- Verifica que `index.html` esté en la raíz (no en subcarpeta)
- Si es GitHub Pages, verifica que tu repo se llama `[usuario].github.io`

## Problema: "No recibi el email del formulario"

**Soluciones:**

1. Revisa carpeta SPAM
2. Verifica que configuraste Formspree correctamente
3. Test enviando de nuevo
4. Verifica direccion email en el form

## Problema: "HTTPS no funciona"

**Soluciones:**

- En Netlify/GitHub Pages: Automático, espera 24h max
- En hosting: Instala Let's Encrypt (es gratis)
- Si sigue sin funcionar: Contacta soporte hosting

## Problema: "El formulario ve feo en móvil"

**Soluciones:**

- Verifica viewport meta tag (ya está en index.html)
- Prueba en navegador real (chroma devtools no siempre es exacto)
- Puedo añadir media queries si es necesario

## Problema: "Mi sitio es muy lento"

**Soluciones:**

- Comprimir imágenes (https://tinypng.com)
- Remover scripts innecesarios
- Activar cachés de navegador
- Usar CDN para imágenes grandes

---

---

# 📈 ANÁLITICA Y TRACKING (POST-LAUNCH)

## Integrar Google Analytics

1. Ve a https://analytics.google.com
2. "Start measuring"
3. Crea propiedad con tu dominio
4. Obtén tu ID (formato: `G-XXXXXXXXXX`)
5. En tu `index.html`, antes de `</head>`, añade:

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

Reemplaza `G-XXXXXXXXXX` con tu ID real.

## Primeros 7 Días: Qué Observar

- Número de visitantes
- Bounce rate (% que se va sin hacer nada)
- Tiempo en página
- Clics en botones (instala eventos)
- Formularios enviados

## Google Search Console

1. https://search.google.com/search-console
2. "URL prefix" → Añade tu dominio
3. Verifica propiedad
4. Envía sitemap (auto-generado)
5. Espera a que Google indexe

Verás en 1-2 semanas si el ranking empieza a subir.

---

---

# 🎓 PRÓXIMOS PASOS DESPUÉS DE PUBLICAR

### Inmediato (Semana 1)

- [ ] Testea en dispositivos reales
- [ ] Pide feedback a amigos/colegas
- [ ] Verifica formulario funciona
- [ ] Atrapa primeros clientes

### Corto Plazo (Mes 1)

- [ ] Instala Google Analytics
- [ ] Verifica Search Console
- [ ] Haz A/B test de títulos
- [ ] Recopila primeros testimonios

### Mediano Plazo (Mes 2-3)

- [ ] Optimiza basado en datos
- [ ] Añade más contenido/FAQ si es necesario
- [ ] Mejora SEO on-page
- [ ] Crea enlaces desde otras páginas

### Largo Plazo (Mes 4+)

- [ ] Campañas de publicidad (Google Ads, Meta)
- [ ] Estrategia de redes sociales
- [ ] Colaboraciones con profesionales
- [ ] Expansión a otras ofertas

---

---

# 📱 ACTUALIZAR TU SITIO

Si necesitas hacer cambios después de publicar:

### Netlify

1. Edita local
2. Arrastra carpeta de nuevo
3. Deploy automático

### GitHub Pages

1. Edita local
2. `git add .`
3. `git commit -m "Actualización"`
4. `git push`
5. Actualiza en 1-2 minutos automáticamente

### Tu Hosting

1. Edita local
2. Sube archivos vía FTP (FileZilla)
3. Refresca navegador (Ctrl+Shift+R)

---

---

# ❓ PREGUNTAS FINALES

**¿Qué hago si mi hosting se cae?**

- Netlify/GitHub Pages = muy confiable (99.9% uptime)
- Tu hosting = depende del proveedor

**¿Puedo cambiar de hosting después?**

- ✅ Sí, copia tu `index.html` y sube a otro lugar

**¿Necesito conocimientos técnicos?**

- Netlify: NO, drag & drop
- GitHub: Un poco, pero básico
- Hosting: Poco, FTP es punto y click

**¿Cuánto cuesta mantener?**

- Netlify: GRATIS
- GitHub Pages: GRATIS
- Hosting + Dominio: $3-15/mes

**¿Puedo monetizar?**

- ✅ Este es tu sitio, puedes vender sesiones directamente
- ❌ No incluye publicidad
- ✅ Puedes añadir cursos/productos después

---

**¡Felicidades! Tu landing page está lista para cambiar vidas.** 💚

---

_Guía creada: Febrero 2026_
