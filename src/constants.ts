// src/constants.ts

export const CONTACT_INFO = {
  companyName: "Imprenta Corporativa B2B",
  phone: "+56912345678",
  email: "ejecutivo@tuimprenta.com",
  whatsappUrl: "https://wa.me/56912345678?text=Hola,%20vengo%20de%20la%20página%20web...",
  address: "Santiago, Chile",
};

export const DESIGN_SYSTEM = {
  // PALETA BLUE STUDIO (Exacta de la imagen)
  colors: {
    heroBg: "bg-[#00456F]",            // Deep Navy (Primer color)
    contentBg: "bg-[#F7FAFD]",         // Off-white Blue (Quinto color - Fondo principal)
    navBg: "bg-[#00456F]/95",          // Navbar
    accent: "bg-[#009EE0]",            // Primary Blue (Segundo color - Botones)
    accentHover: "hover:bg-[#1CB1E1]", // Sky Blue (Tercer color)
    accentText: "text-[#009EE0]",
    cardBg: "bg-white",                // Tarjetas blancas sobre fondo celeste claro
    border: "border-[#91DAEE]/30",     // Bordes en celeste suave (Cuarto color)
    footerBg: "bg-[#00456F]",
    textMain: "text-[#00456F]",        // Texto principal en azul profundo
    textMuted: "text-[#009EE0]",       // Texto secundario
  },
  
  layouts: {
    mainGrid: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    sectionPadding: "py-20 md:py-24",
    cardBorder: "border border-[#91DAEE]/40 rounded-xl shadow-sm transition-all duration-200"
  },
  
  typography: {
    tagline: "text-[#009EE0] font-bold tracking-widest text-xs uppercase block mb-3",
    h1: "text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]",
    heroParagraph: "text-blue-50/90 text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8",
    sectionHeading: "text-2xl md:text-3xl font-bold text-[#00456F] tracking-tight mb-4"
  }
};