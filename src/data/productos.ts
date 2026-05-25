// src/data/productos.ts

export interface Producto {
  id: string;
  nombre: string;
  sustrato: string;
  acabado: string;
  moq: string;
  tags: string[]; // Palabras clave secundarias para mejorar la precisión de búsqueda
  imagen: string;  // <-- Agregamos la propiedad para la foto referencial
}

export interface CategoriaCatalogo {
  id: string;
  titulo: string;
  descripcion: string;
  productos: Producto[];
}

export const catalogData: CategoriaCatalogo[] = [
  {
    id: "copiado-impresion",
    titulo: "Copiado e Impresión",
    descripcion: "Soluciones de alta fidelidad, offset y digital optimizadas para altos volúmenes corporativos, instituciones y colegios.",
    productos: [
      { id: "c1", nombre: "Carpetas Corporativas", sustrato: "Couché 350g / Opaco", acabado: "Polilaminado mate + Lacado UV sectorizado", moq: "500 unds.", tags: ["carpeta", "institucional", "presentacion", "file"], imagen: "https://images.unsplash.com/photo-1624915546452-f117c7689947?w=600&auto=format&fit=crop&q=60" },
      { id: "c2", nombre: "Hojas Membretadas", sustrato: "Hilado 90g / Láser Premium", acabado: "Impresión Offset (Pantone exacto corporativo)", moq: "1.000 unds.", tags: ["hoja", "carta", "papel", "membrete"], imagen: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&auto=format&fit=crop&q=60" },
      { id: "c3", nombre: "Sobres Institucionales", sustrato: "Hilado 120g (Oficio / Americano)", acabado: "Troquelado y pegado automático con sello siliconado", moq: "1.000 unds.", tags: ["sobre", "encomienda", "carta", "oficina"], imagen: "https://images.unsplash.com/photo-1595115243862-23c4cf7e7cf6?w=600&auto=format&fit=crop&q=60" },
      { id: "c4", nombre: "Fotocopias e Impresiones Masivas", sustrato: "Papel Multipropósito 75g / 80g", acabado: "Clasificado, corcheteado o anillado automático en línea", moq: "5.000 págs.", tags: ["fotocopia", "copia", "guia", "colegio", "prueba", "documento"], imagen: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=600&auto=format&fit=crop&q=60" }
    ]
  },
  {
    id: "regalos-corporativos",
    titulo: "Regalos Corporativos",
    descripcion: "Líneas de merchandising premium e institucional con sistemas de grabado indeleble.",
    productos: [
      { id: "r1", nombre: "Libretas Personalizadas", sustrato: "Tapa Dura PU / Eco-cuero", acabado: "Grabado bajo relieve (Gropat) o Serigrafía industrial", moq: "100 unds.", tags: ["libreta", "cuaderno", "agenda", "anotador", "merchandising"], imagen: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&auto=format&fit=crop&q=60" },
      { id: "r2", nombre: "Bolígrafos Ejecutivos", sustrato: "Aluminio Anodizado / Metal pesado", acabado: "Grabado láser de alta definición por fibra óptica", moq: "200 unds.", tags: ["lapiz", "boligrafo", "pluma", "metal", "escribir"], imagen: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=60" },
      { id: "r3", nombre: "Botellas y Mugs Térmicos", sustrato: "Acero Inoxidable Doble Pared", acabado: "Grabado láser 360° o Tampografía bicapa hermética", moq: "100 unds.", tags: ["mug", "botella", "termo", "agua", "tazon", "vaso"], imagen: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=60" }
    ]
  },
  {
    id: "otros",
    titulo: "Otros Servicios",
    descripcion: "Soluciones gráficas complementarias, gran formato y soportes especiales para eventos masivos.",
    productos: [
      { id: "o1", nombre: "Pendones Roll-Up", sustrato: "Tela PVC Blockout 440g", acabado: "Estructura de aluminio reforzada con bolso de lona", moq: "5 unds.", tags: ["pendon", "banner", "roller", "evento", "expo", "stand"], imagen: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=60" },
      { id: "o2", nombre: "Lienzos y Gigantografías", sustrato: "Malla Mesh / PVC Brillante u Opaco", acabado: "Ojetillos metálicos perimetrales + dobladillo reforzado", moq: "10 m²", tags: ["lienzo", "gigantografia", "lona", "publicidad", "letrero"], imagen: "https://images.unsplash.com/photo-1533158388470-9a56699990c6?w=600&auto=format&fit=crop&q=60" },
      { id: "o3", nombre: "Vinilos Adhesivos", sustrato: "Monomérico / Polimérico / Microperforado", acabado: "Laminado de protección contra rayos UV (Mate o Brillo)", moq: "5 m²", tags: ["vinilo", "sticker", "adhesivo", "vitrina", "muro"], imagen: "https://images.unsplash.com/photo-1626266019315-c26027376c7c?w=600&auto=format&fit=crop&q=60" }
    ]
  }
];