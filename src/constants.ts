// src/constants.ts

export const CONTACT_INFO = {
  companyName: "Imprenta Corporativa B2B",
  phone: "+56912345678",
  email: "ejecutivo@tuimprenta.com",
  whatsappUrl: "https://wa.me/56912345678?text=Hola,%20vengo%20de%20la%20página%20web...",
  address: "Santiago, Chile",
};

export const DESIGN_SYSTEM = {
  // PALETA BLUE STUDIO EMBAJADORA (#009EE0 manda en áreas grandes)
  colors: {
    // Fondos de gran impacto con predominancia del azul de marca
    heroBg: "bg-gradient-to-br from-[#009EE0] via-[#007BB3] to-[#00456F]",
    navBg: "bg-[#00456F]",
    footerBg: "bg-[#00456F]",
    
    // Alternancia de fondos limpios para el cuerpo de la página
    bgLight: "bg-[#F7FAFD]", 
    bgWhite: "bg-white",
    
    // Componentes de interacción y llamados a la acción
    brandPrimary: "bg-[#009EE0]",
    brandHover: "hover:bg-[#1CB1E1]",
    brandText: "text-[#009EE0]",
    
    // Separadores estéticos
    borderDivider: "border-[#91DAEE]/30",
  },
  
  // GARANTÍA DE CONTRASTE (Para que nunca más se pierda un texto)
  textOnLight: {
    title: "text-[#00456F] font-black tracking-tight",       // Azul profundo y legible
    paragraph: "text-slate-600 font-normal leading-relaxed", // Gris corporativo oscuro
    subtitle: "text-[#009EE0] font-bold uppercase tracking-wider text-sm", 
  },
  
  textOnDark: {
    title: "text-white font-black tracking-tight",
    paragraph: "text-blue-50/90 font-light leading-relaxed",
    subtitle: "text-[#91DAEE] font-bold uppercase tracking-widest text-xs",
  },

  layouts: {
    mainGrid: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    sectionPadding: "py-20 md:py-28",
  }
};