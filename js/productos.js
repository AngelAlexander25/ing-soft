const productos = [
  {
    id: 1,
    nombre: "Nike Air Jordan ONE MID",
    descripcion: "Blanco",
    precio: "$3,199.00",
    imagen: "images/calzado-grandes-air-jordan-1-mid-HrLnlx.png",
  },
  {
    id: 2,
    nombre: "Nike Jordan Air 1 Elevate Hight",
    descripcion: "Blanco y azul",
    precio: "$3,800.00",
    imagen: "images/calzado-air-jordan-1-elevate-high-Jf29sR.jfif",
  },
  {
    id: 3,
    nombre: "Jordan Air 1 Low",
    descripcion: "Blanco y Rojo",
    precio: "$2,899.00",
    imagen: "images/calzado-air-jordan-1-low-tvFt2T.png",
  },
  {
    id: 4,
    nombre: "Jordan Air 1 Low",
    descripcion: "Blanco y Morado",
    precio: "$2,899.00",
    imagen: "images/calzado-air-jordan-1-low-KJDjGc.png",
  },
  {
    id: 5,
    nombre: "Jordan Air 1 Retro High",
    descripcion: "Beige",
    precio: "$3,399.00",
    imagen: "images/calzado-air-jordan-1-retro-high-og-t8zXZh.jfif",
  },
  {
    id: 6,
    nombre: "Jordan Air Hight Retro",
    descripcion: "Blanco y negro",
    precio: "$2,799.00",
    imagen: "images/calzado-dunk-high-retro-1PhQRw.png",
  },
  {
    id: 7,
    nombre: "Jordan Air Dunk Low Retro",
    descripcion: "Blanco y negro",
    precio: "$2,599.00",
    imagen: "images/calzado-dunk-low-retro-mhrtZC.png",
  },
  {
    id: 8,
    nombre: "Jordan Air Hight Retro OG",
    descripcion: "Blanco y negro",
    precio: "$4,499.00",
    imagen: "images/calzado-air-jordan-1-retro-high-og-black-white-BFqZfb.jfif",
  },
  {
    id: 9,
    nombre: "Jordan Air 1 High MEtod",
    descripcion: "Blanco y Rojo",
    precio: "$3,799.00",
    imagen: "images/calzado-air-jordan-1-high-method-of-make-QtsX1P.png",
  },
  {
    id: 10,
    nombre: "Nike Jordan Air Low SE",
    descripcion: "Blanco y Rojo",
    precio: "$2,649.00",
    imagen: "images/calzado-air-jordan-1-low-se-QqcWXT.png",
  },
  {
    id: 11,
    nombre: "Nike Jordan Air Mid",
    descripcion: "Blanco",
    precio: "$1,488.00",
    imagen: "images/calzado-grandes-air-jordan-1-mid-HrLnlx.png",
  },
  {
    id: 12,
    nombre: "Air Jordan Spizike Low",
    descripcion: "Blanco y rojo",
    precio: "$3,799.00",
    imagen: "images/tenis-jordan-spizike-low-LDT8cp.png",
  },
  {
    id: 13,
    nombre: "Nike Cardigan",
    descripcion: "Blanco",
    precio: "$2,499.00",
    imagen: "images/calzado-grandes-air-jordan-1-mid-se-q38njW.png",
  },
  {
    id: 14,
    nombre: "NIke Air Jordan Legacy 312 Low",
    descripcion: "Blanco y Rojo",
    precio: "$2,799.00",
    imagen: "images/tenis-air-jordan-legacy-312-low-mpV0mH.png",
  },
  {
    id: 15,
    nombre: "Nike Air Jordan XXXVII (GS)",
    descripcion: "Blanco",
    precio: "$2,549.00",
    imagen: "images/calzado-grandes-air-jordan-37-VV9KZw.png",
  },
];

export { productos };

function cargarDetallesProducto(idProducto) {
  // Buscar el producto por su ID en el array de productos
  const producto = productos.find((producto) => producto.id === idProducto);

  if (!producto) {
    console.error(`No se encontró ningún producto con el ID ${idProducto}`);
    return null;
  }

  return producto;
}
