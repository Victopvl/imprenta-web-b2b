// src/data/productos.ts

export interface Producto {
  id: string;
  nombre: string;
  sustrato: string;
  acabado: string;
  moq: string;
  tags: string[]; // Palabras clave secundarias para mejorar la precisión de búsqueda
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
      { id: "c1", nombre: "Carpetas Corporativas", sustrato: "Couché 350g / Opaco", acabado: "Polilaminado mate + Lacado UV sectorizado", moq: "500 unds.", tags: ["carpeta", "institucional", "presentacion", "file"] },
      { id: "c2", nombre: "Hojas Membretadas", sustrato: "Hilado 90g / Láser Premium", acabado: "Impresión Offset (Pantone exacto corporativo)", moq: "1.000 unds.", tags: ["hoja", "carta", "papel", "membrete"] },
      { id: "c3", nombre: "Sobres Institucionales", sustrato: "Hilado 120g (Oficio / Americano)", acabado: "Troquelado y pegado automático con sello siliconado", moq: "1.000 unds.", tags: ["sobre", "encomienda", "carta", "oficina"] },
      { id: "c4", nombre: "Fotocopias e Impresiones Masivas", sustrato: "Papel Multipropósito 75g / 80g", acabado: "Clasificado, corcheteado o anillado automático en línea", moq: "5.000 págs.", tags: ["fotocopia", "copia", "guia", "colegio", "prueba", "documento"] }
    ]
  },
  {
    id: "regalos-corporativos",
    titulo: "Regalos Corporativos",
    descripcion: "Líneas de merchandising premium e institucional con sistemas de grabado indeleble.",
    productos: [
      { id: "r1", nombre: "Libretas Personalizadas", sustrato: "Tapa Dura PU / Eco-cuero", acabado: "Grabado bajo relieve (Gropat) o Serigrafía industrial", moq: "100 unds.", tags: ["libreta", "cuaderno", "agenda", "anotador", "merchandising"] },
      { id: "r2", nombre: "Bolígrafos Ejecutivos", sustrato: "Aluminio Anodizado / Metal pesado", acabado: "Grabado láser de alta definición por fibra óptica", moq: "200 unds.", tags: ["lapiz", "boligrafo", "pluma", "metal", "escribir"] },
      { id: "r3", nombre: "Botellas y Mugs Térmicos", sustrato: "Acero Inoxidable Doble Pared", acabado: "Grabado láser 360° o Tampografía bicapa hermética", moq: "100 unds.", tags: ["mug", "botella", "termo", "agua", "tazon", "vaso"] }
    ]
  },
  {
    id: "otros",
    titulo: "Otros Servicios",
    descripcion: "Soluciones gráficas complementarias, gran formato y soportes especiales para eventos masivos.",
    productos: [
      { id: "o1", nombre: "Pendones Roll-Up", sustrato: "Tela PVC Blockout 440g", acabado: "Estructura de aluminio reforzada con bolso de lona", moq: "5 unds.", tags: ["pendon", "banner", "roller", "evento", "expo", "stand"] },
      { id: "o2", nombre: "Lienzos y Gigantografías", sustrato: "Malla Mesh / PVC Brillante u Opaco", acabado: "Ojetillos metálicos perimetrales + dobladillo reforzado", moq: "10 m²", tags: ["lienzo", "gigantografia", "lona", "publicidad", "letrero"] },
      { id: "o3", nombre: "Vinilos Adhesivos", sustrato: "Monomérico / Polimérico / Microperforado", acabado: "Laminado de protección contra rayos UV (Mate o Brillo)", moq: "5 m²", tags: ["vinilo", "sticker", "adhesivo", "vitrina", "muro"] }
    ]
  }
];