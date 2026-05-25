// src/constants.ts

// 1. Datos de Contacto Comercial Centralizados
export const CONTACT_INFO = {
  companyName: "Imprenta Corporativa B2B",
  phone: "+56912345678", 
  email: "ejecutivo@tuimprenta.com",
  whatsappUrl: "https://wa.me/56912345678?text=Hola,%20vengo%20de%20la%20página%20web%20y%20me%20gustaría%20cotizar%20un%20proyecto%20corporativo.",
  address: "Santiago, Chile",
};

// 2. Sistema de Diseño Centralizado y Homologado (Alíneado al píxel)
export const DESIGN_SYSTEM = {
  // Colores corporativos estrictos extraídos de tus vistas activas
  colors: {
    heroBg: "bg-[#0a2540]",          // El azul profundo institucional de tus cabeceras
    contentBg: "bg-slate-950",       // El fondo oscuro premium del cuerpo de las páginas
    accent: "bg-[#00D4B2]",          // El turquesa de alta conversión (Botones)
    accentHover: "hover:bg-[#00bda0]",
    accentText: "text-[#00D4B2]",
  },
  
  // Contenedores globales rígidos para evitar desbordes o asimetrías
  containers: {
    // Grilla horizontal que comparte el Navbar, Hero, Catálogo y Nosotros
    mainGrid: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    // Respiración uniforme para todas las secciones de encabezado (Hero)
    heroPadding: "py-20 md:py-28",
  },
  
  // Tipografía idéntica en tamaños, interlineados y grosores
  typography: {
    // El texto pequeño verde arriba de los títulos principales
    tagline: "text-[#00D4B2] font-bold tracking-widest text-xs uppercase block mb-4",
    // Título principal gigante de cada página
    h1: "text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight",
    // Párrafo descriptivo del Hero
    heroParagraph: "text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-2xl",
    // Títulos de secciones secundarias o categorías dentro del contenido
    sectionHeading: "text-xl font-bold text-white tracking-tight"
  }
};