// src/constants.ts

export const CONTACT_INFO = {
  companyName: "Imprenta Corporativa B2B",
  phone: "+56912345678",
  email: "ejecutivo@tuimprenta.com",
  whatsappUrl: "https://wa.me/56912345678?text=Hola,%20vengo%20de%20la%20página%20web...",
  address: "Santiago, Chile",
};

export const DESIGN_SYSTEM = {
  colors: {
    heroBg: "bg-[#0a2540]",
    contentBg: "bg-slate-950",
    accent: "bg-[#00D4B2]",
    accentHover: "hover:bg-[#00bda0]",
    accentText: "text-[#00D4B2]",
  },
  
  layouts: {
    // AÑADE ESTO: Esto es lo que causaba el error de "undefined" en index.astro
    sectionPadding: "py-24 px-6 max-w-7xl mx-auto", 
    mainGrid: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    heroPadding: "py-20 md:py-28",
  },
  
  typography: {
    tagline: "text-[#00D4B2] font-bold tracking-widest text-xs uppercase block mb-4",
    h1: "text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight",
    heroParagraph: "text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-2xl",
    sectionHeading: "text-xl font-bold text-white tracking-tight"
  }
};