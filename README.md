# 🍰 Pastelería 1000 Sabores

Tienda online de repostería desarrollada como proyecto de la asignatura **Desarrollo Fullstack (DSY1104)** – Duoc UC.
Frontend estático con HTML5, CSS3, JavaScript y Bootstrap 5. **No usa backend**: los datos se guardan en `localStorage`.

## 👥 Equipo

- **Equipo:** BJTech
- **Integrantes:** [Integrante 1] y [Integrante 2]
- **Repositorio:** [URL del repositorio GitHub]

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 (hojas de estilo externas)
- Bootstrap 5.3 y Bootstrap Icons (CDN)
- JavaScript (ES6)
- localStorage
- Git / GitHub

## ✨ Funcionalidades

**Cliente**
- Inicio con video promocional, beneficios y productos destacados.
- Catálogo de 16 productos en 8 categorías, con modal de detalle.
- Carrito: agregar, cambiar cantidad, eliminar, vaciar y total en CLP (persiste en `localStorage`).
- Pago simulado con número de orden.
- Registro e inicio de sesión con validaciones.
- Páginas Sobre nosotros, Blog (historias en modal) y Contacto (mapa + formulario validado).

**Administrador**
- Dashboard de administración.
- Catálogo: listar, buscar, filtrar por categoría, agregar, editar y eliminar productos.
- Usuarios: listar, buscar, crear, cambiar tipo (cliente/admin) y eliminar.

## 📁 Estructura del proyecto

```
├── index.html
├── pages/
│   ├── nosotros.html
│   ├── catalogo.html
│   ├── blog.html
│   ├── contacto.html
│   ├── carrito.html
│   ├── login.html
│   ├── registro.html
│   ├── admin.html
│   ├── catalogo_admin.html
│   └── usuario_admin.html
├── css/
├── js/
│   ├── components.js
│   ├── registro.js
│   ├── login.js
│   ├── contacto.js
│   ├── catalogo_admin.js
│   ├── render_catalogo.js
│   ├── carrito.js
│   ├── usuarios_admin.js
│   ├── blog.js
│   └── nosotros.js
├── images/
│   ├── picture/
│   └── logo/
└── videos/
```

## ▶️ Cómo ejecutar

1. Clonar el repositorio:
   ```bash
   git clone [URL del repositorio GitHub]
   ```
2. Abrir `index.html` en el navegador (Chrome, Firefox o Edge), o usar la extensión **Live Server** de VS Code.
3. Se requiere internet para cargar Bootstrap y el mapa de Google Maps.

## 📋 Módulos JavaScript

| Archivo | Función |
|---|---|
| `components.js` | Inyecta header, footer y menú admin; marca la página activa |
| `registro.js` | Región/comuna dinámicas, validación de registro y guardado de usuario |
| `login.js` | Validación de login contra los usuarios guardados |
| `contacto.js` | Validación del formulario de contacto |
| `catalogo_admin.js` | Productos iniciales y CRUD de productos |
| `render_catalogo.js` | Tarjetas de producto y modal de detalle |
| `carrito.js` | Carrito, panel lateral y pago simulado |
| `usuarios_admin.js` | Gestión de usuarios |
| `blog.js` | Historias del blog en modal |
| `nosotros.js` | Contenido dinámico de Sobre nosotros |

## ✅ Validaciones de formularios

**Registro / creación de usuario**

| Campo | Regla |
|---|---|
| RUN | Obligatorio, 7 a 9 caracteres, números y K, dígito verificador válido |
| Contraseña | 4 a 10 caracteres |
| Nombre | Obligatorio, máx. 50 |
| Apellidos | Obligatorios, máx. 100 |
| Correo | Obligatorio, máx. 100, dominios `@duoc.cl`, `@profesor.duoc.cl` o `@gmail.com`, no repetido |
| Región / Comuna | Obligatorias (comuna depende de la región) |
| Dirección | Obligatoria, máx. 300 |

**Login:** correo y contraseña obligatorios y correctos.
**Contacto:** nombre, asunto y mensaje obligatorios; correo con formato válido.
**Productos (admin):** campos obligatorios, precio no negativo y código único.

## 💾 Datos en localStorage

| Clave | Contenido |
|---|---|
| `usuarios` | Usuarios registrados |
| `carritoMilSabores` | Productos del carrito |
| `productos` | Productos del catálogo |

## 🔮 Próximas mejoras

- Backend y base de datos.
- Sesión de usuario y acceso por rol.
- Descuentos, boleta y seguimiento de pedidos.
- Pasarela de pago real.

## 🤝 Trabajo colaborativo

- Commits con mensajes descriptivos.
- Tareas repartidas entre los integrantes: [completar].

## 📄 Documentación

- ERS v2.0 (IEEE 830): `ERS_Pasteleria_1000_Sabores_v1.docx`
- Informe del proyecto: `Informe_Pasteleria_1000_Sabores.docx`