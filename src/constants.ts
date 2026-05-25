// src/constants.ts

// 1. Datos de Contacto Comercial Centralizados
export const CONTACT_INFO = {
  companyName: "Imprenta Corporativa B2B",
  phone: "+56912345678", // Reemplaza con el número real del vendedor
  email: "ejecutivo@tuimprenta.com",
  whatsappUrl: "https://wa.me/56912345678?text=Hola,%20vengo%20de%20la%20página%20web%20y%20me%20gustaría%20cotizar%20un%20proyecto%20corporativo.",
  address: "Santiago, Chile",
};

// 2. Sistema de Diseño Predictivo (Colores y Estructuras)
export const DESIGN_SYSTEM = {
  // Paleta de colores ejecutiva (Azul Marino Corporativo y Blanco)
  colors: {
    primaryBg: "bg-[#0A2540]",     // Fondo azul profundo institucional para el Hero/Navbar
    primaryText: "text-[#0A2540]", // Texto principal
    accent: "bg-[#00D4B2]",        // Color de acento de alta conversión para CTAs (Verde turquesa/Cyan brillante)
    accentHover: "hover:bg-[#00bda0]",
    lightBg: "bg-[#F8FAFC]",       // Fondos alternos grisáceos muy limpios
    whiteCard: "bg-white",
  },
  
  // Estructura de bloques rígidos tradicionales
  layouts: {
    sectionPadding: "py-24 px-6 max-w-7xl mx-auto",
    cardBorder: "border border-slate-200/80 rounded-sm shadow-sm hover:shadow-md transition-all duration-200",
    title: "text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-sans",
    subtitle: "text-slate-500 text-lg mt-3 max-w-2xl font-light",
  }
};