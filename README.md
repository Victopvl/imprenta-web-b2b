# Imprenta Web B2B

> Sistema web B2B para digitalizar el catálogo de productos y la recepción de solicitudes de cotización de una empresa de impresión.

[🌐 Ver demo](https://victopvl.github.io/imprenta-web-b2b/)

---

## 🎯 Contexto

Las empresas de impresión B2B suelen gestionar consultas y solicitudes comerciales mediante canales dispersos como WhatsApp, correo electrónico y llamadas telefónicas.

Este proyecto propone una interfaz web centralizada que facilita el descubrimiento de productos y permite a clientes empresariales enviar solicitudes de cotización de forma estructurada.

---

## 💡 Solución

Se desarrolló una plataforma web orientada a clientes B2B que centraliza:

- Catálogo digital de productos.
- Información y especificaciones técnicas.
- Navegación por categorías.
- Búsqueda y filtrado.
- Solicitud de cotizaciones.
- Integración con canales de contacto comerciales.

El objetivo es reducir la fricción entre el descubrimiento de un producto y el inicio del proceso comercial.

---

## 🚀 Funcionalidades

### Catálogo

- Catálogo estructurado por categorías.
- Fichas de productos.
- Especificaciones técnicas.
- Información de cantidades mínimas.
- Búsqueda y filtrado.

### Cotizaciones

- Formulario estructurado de solicitud.
- Captura de información del cliente.
- Detalle del requerimiento.
- Envío de solicitudes mediante Web3Forms.
- Integración con canales de contacto.

### Experiencia

- Diseño responsive.
- Navegación orientada a conversión.
- CTA comerciales.
- Arquitectura de páginas reutilizable.
- Interfaz adaptada al contexto B2B.

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
