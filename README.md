# Imprenta Web B2B

> Sistema web B2B para digitalizar el catálogo de productos y la recepción de solicitudes de cotización de una empresa de impresión.

[🌐 Ver demo](https://victopvl.github.io/imprenta-web-b2b/)

---

## 🎯 Contexto

Las empresas de impresión B2B suelen gestionar consultas y solicitudes comerciales mediante canales dispersos como WhatsApp, correo electrónico y llamadas telefónicas.

Este proyecto propone una interfaz web centralizada que facilita el descubrimiento de productos y permite a clientes empresariales enviar solicitudes de cotización de forma estructurada.

El foco del proyecto está en digitalizar el **punto de entrada del proceso comercial**, reduciendo la fricción entre el descubrimiento de un producto y el inicio de una conversación de negocio.

---

## 💡 Solución

Se desarrolló una plataforma web orientada a clientes B2B que centraliza:

- Catálogo digital de productos.
- Información y especificaciones técnicas.
- Navegación por categorías.
- Búsqueda y filtrado.
- Solicitud estructurada de cotizaciones.
- Integración con canales de contacto comerciales.

La solución prioriza una experiencia simple y orientada a conversión, permitiendo que un potencial cliente pueda:

```text
Descubrir
    ↓
Explorar productos
    ↓
Revisar especificaciones
    ↓
Seleccionar una solución
    ↓
Solicitar cotización
    ↓
Iniciar contacto comercial
```

---

## 🚀 Funcionalidades

### Catálogo

- Catálogo estructurado por categorías.
- Fichas de productos.
- Especificaciones técnicas.
- Información de cantidades mínimas.
- Búsqueda y filtrado.
- Presentación orientada a clientes B2B.

### Cotizaciones

- Formulario estructurado de solicitud.
- Captura de información del cliente.
- Captura del detalle del requerimiento.
- Envío de solicitudes mediante Web3Forms.
- Integración con canales de contacto comerciales.
- Estados de envío y respuesta del formulario.

### Experiencia de usuario

- Diseño responsive.
- Navegación orientada a conversión.
- Call-to-actions comerciales.
- Componentes reutilizables.
- Interfaz adaptada al contexto B2B.
- Jerarquía visual enfocada en productos y solicitudes.

---

## 🏗️ Arquitectura

El proyecto utiliza una arquitectura frontend estática basada en Astro.

```text
                         Usuario B2B
                              │
                              ▼
                       Web Application
                              │
                 ┌────────────┴────────────┐
                 │                         │
             Catálogo                  Cotización
                 │                         │
                 ▼                         ▼
          Datos estructurados         Formulario
                                           │
                                           ▼
                                      Web3Forms
                                           │
                                           ▼
                                   Canal de recepción
```

La aplicación separa la presentación, componentes reutilizables, datos y configuración del proyecto.

### Estructura principal

```text
src/
├── components/
├── data/
├── layouts/
├── pages/
├── styles/
└── constants.ts

public/
```

---

## 🛠️ Tech Stack

### Frontend

- Astro
- TypeScript
- Tailwind CSS

### Integraciones

- Web3Forms
- GitHub Pages

### Development

- Git
- GitHub
- Node.js

---

## 📐 Diseño de la solución

La solución fue diseñada bajo un principio de **complejidad progresiva**.

En lugar de comenzar construyendo un sistema administrativo completo, se priorizó primero el punto de mayor impacto para el usuario:

> **descubrimiento del producto → solicitud comercial.**

Esto permite validar el flujo comercial antes de incorporar componentes de mayor complejidad como bases de datos, autenticación, CRM o gestión interna de pedidos.

---

## 📋 Alcance actual

### MVP

El alcance actual se concentra en:

- Catálogo digital.
- Descubrimiento de productos.
- Información técnica.
- Búsqueda y filtrado.
- Solicitud de cotizaciones.
- Captura estructurada de requerimientos.
- Derivación hacia canales comerciales.

### Fuera del alcance actual

El MVP no pretende reemplazar:

- ERP.
- CRM.
- Sistema de inventario.
- Sistema de producción.
- Sistema contable.
- Plataforma completa de gestión de pedidos.

Estas funcionalidades forman parte de posibles etapas futuras y no son necesarias para validar el flujo comercial inicial.

---

## 🧩 Arquitectura evolutiva

La solución puede evolucionar progresivamente hacia una plataforma de gestión B2B más completa.

```text
                    MVP
                     │
        ┌────────────┴────────────┐
        │                         │
     Catálogo                Cotización
        │                         │
        └────────────┬────────────┘
                     │
                     ▼
              Persistencia
                     │
                     ▼
            Gestión de clientes
                     │
                     ▼
             Gestión de pedidos
                     │
          ┌──────────┴──────────┐
          │                     │
         CRM                   ERP
          │                     │
          └──────────┬──────────┘
                     │
                     ▼
             Procesos internos
```

La arquitectura propuesta permite aumentar progresivamente la capacidad del sistema sin obligar a implementar toda la infraestructura desde el inicio.

---

## 🔮 Roadmap

### Fase 1 — MVP

- [x] Catálogo digital
- [x] Navegación por categorías
- [x] Información técnica
- [x] Búsqueda y filtrado
- [x] Formulario de cotización
- [x] Integración de recepción de formularios
- [x] Responsive design

### Fase 2 — Gestión de solicitudes

- [ ] Persistencia de solicitudes
- [ ] Base de datos
- [ ] Identificación de clientes
- [ ] Estados de solicitudes
- [ ] Historial de solicitudes

### Fase 3 — Administración

- [ ] Panel administrativo
- [ ] Gestión de productos
- [ ] Gestión de clientes
- [ ] Gestión de solicitudes
- [ ] Gestión de estados de pedidos

### Fase 4 — Integraciones

- [ ] CRM
- [ ] Automatizaciones comerciales
- [ ] Integración con procesos internos
- [ ] Integración con sistemas ERP
- [ ] Analítica y métricas comerciales

---

## 🧪 Estado del proyecto

**MVP funcional — Portfolio Project**

El proyecto se encuentra desplegado y cuenta con un flujo funcional de catálogo y recepción de solicitudes de cotización.

Las funcionalidades de gestión interna, persistencia de datos y administración forman parte del roadmap y no del alcance actual.

---

## 🔐 Seguridad y configuración

Las integraciones externas se gestionan mediante configuración separada del contenido funcional de la aplicación.

Durante el proceso de desarrollo se realizó una revisión de las credenciales e integraciones utilizadas por el formulario de contacto.

No se deben almacenar contraseñas, tokens privados u otras credenciales sensibles directamente en el repositorio.

---

## 🧠 Decisiones técnicas

### ¿Por qué Astro?

Astro permite construir una experiencia web rápida y orientada al contenido, manteniendo una arquitectura sencilla para un proyecto cuyo foco principal es el catálogo y la conversión comercial.

### ¿Por qué una arquitectura estática para el MVP?

El flujo inicial no requiere todavía persistencia compleja ni procesamiento intensivo en servidor.

Una arquitectura estática reduce:

- Complejidad operacional.
- Costos de infraestructura.
- Superficie de mantenimiento.
- Tiempo de desarrollo.

Esto permite concentrar el esfuerzo en validar primero la experiencia y el proceso comercial.

### ¿Por qué Web3Forms?

El proyecto requiere recibir solicitudes desde un formulario web sin implementar inicialmente un backend propio.

Web3Forms permite resolver esta necesidad durante la etapa MVP y deja abierta la posibilidad de reemplazar posteriormente esta integración por una API o backend propio cuando aumenten los requerimientos.

---

## 📊 Flujo principal

```text
Cliente B2B
    │
    ▼
Landing Page
    │
    ▼
Catálogo
    │
    ├── Buscar
    ├── Filtrar
    └── Revisar producto
             │
             ▼
       Solicitar cotización
             │
             ▼
       Completar formulario
             │
             ▼
          Web3Forms
             │
             ▼
       Recepción comercial
```

---

## ⚙️ Instalación local

### Requisitos

- Node.js
- npm

### Clonar repositorio

```bash
git clone https://github.com/Victopvl/imprenta-web-b2b.git
cd imprenta-web-b2b
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar entorno de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en la dirección local indicada por Astro.

### Build de producción

```bash
npm run build
```

---

## 🧪 Testing

Las pruebas del MVP se concentran principalmente en los flujos críticos:

### Catálogo

- Navegación entre categorías.
- Visualización de productos.
- Búsqueda.
- Filtrado.
- Visualización de información técnica.

### Cotización

- Validación de campos.
- Envío del formulario.
- Confirmación de envío.
- Manejo de errores.
- Recepción de la solicitud.

### Responsive

- Desktop.
- Tablet.
- Mobile.

---

## ⚠️ Limitaciones actuales

El MVP presenta algunas limitaciones deliberadas:

- No existe persistencia propia de solicitudes.
- No existe panel administrativo.
- No existe autenticación.
- No existe gestión interna de pedidos.
- No existe integración con un ERP.
- No existe CRM propio.
- La recepción de solicitudes depende de un servicio externo.

Estas limitaciones corresponden al alcance actual del MVP y no representan necesariamente problemas de arquitectura.

---

## 📚 Aprendizajes

Este proyecto permitió trabajar sobre:

- Análisis y digitalización de procesos comerciales.
- Diseño de soluciones digitales B2B.
- Arquitectura frontend.
- Modelado de información para catálogos.
- Diseño de flujos orientados a conversión.
- Diseño responsive.
- Formularios y captura estructurada de información.
- Integración con servicios externos.
- Organización de proyectos web.
- Definición progresiva de alcance.
- Documentación técnica.

---

## 🎯 Capacidades demostradas

Este proyecto busca demostrar principalmente las siguientes capacidades:

**Business Analysis**
- Identificación de fricciones en procesos comerciales.
- Traducción de necesidades de negocio a funcionalidades digitales.

**Solution Design**
- Diseño de una solución incremental.
- Definición de alcance MVP.
- Diseño de arquitectura evolutiva.

**Frontend Development**
- Desarrollo con Astro y TypeScript.
- Componentización.
- Diseño responsive.

**Process Digitalization**
- Transformación de un flujo comercial manual en una experiencia digital estructurada.

**Technical Project Management**
- Definición de alcance.
- Priorización.
- Roadmap.
- Gestión de evolución del producto.

---

## 👩🏻‍💻 Autora

**Victoria Vallejos**

Consultora TI & Workspaces Architect

Estudiante de Ingeniería Civil Informática — Universidad Andrés Bello

Áreas de especialización:

- Digitalización de procesos.
- Arquitectura de workspaces.
- Gestión de proyectos TI.
- Diseño de soluciones digitales.
- Optimización operativa para PyMEs.

### Links

- [Portfolio](https://victopvl.github.io/)
- [GitHub](https://github.com/Victopvl)

---

## 📄 Licencia

Proyecto desarrollado con fines de demostración profesional y portfolio.
