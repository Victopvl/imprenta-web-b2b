// src/constants.ts

export const CONTACT_INFO = {
  companyName: "Imprenta Corporativa B2B",
  phone: "+56912345678",
  email: "ejecutivo@tuimprenta.com",
  whatsappUrl: "https://wa.me/56912345678?text=Hola,%20vengo%20de%20la%20página%20web%20y%20me%20gustaría%20cotizar%20un%20proyecto%20corporativo.",
  address: "Santiago, Chile",
};

export const DESIGN_SYSTEM = {
  colors: {
    heroBg: "bg-[#0a2540]",            // Azul profundo institucional
    contentBg: "bg-slate-950",         // Fondo ultra oscuro premium
    bgSlate900: "bg-slate-900",        // Gris oscuro de contraste
    accent: "bg-[#00D4B2]",            // Turquesa corporativo principal
    accentHover: "hover:bg-[#00bda0]",
    accentText: "text-[#00D4B2]",
    whiteCard: "bg-slate-900/40",      // Tarjetas adaptadas al modo oscuro
    lightBg: "bg-slate-900/20"
  },
  
  layouts: {
    // Estructura de rejilla idéntica a la del Navbar de Layout.astro
    mainGrid: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    sectionPadding: "py-20 md:py-24",
    cardBorder: "border border-slate-800/60 rounded-xl shadow-sm transition-all duration-200"
  },
  
  typography: {
    tagline: "text-[#00D4B2] font-bold tracking-widest text-xs uppercase block mb-3",
    h1: "text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]",
    heroParagraph: "text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8",
    sectionHeading: "text-2xl md:text-3xl font-bold text-white tracking-tight mb-4"
  }
};