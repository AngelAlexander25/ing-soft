import { productos } from './productos.js';

function cargarDetallesProducto(idProducto) {
  // Buscar el producto por su ID en el array de productos
  const producto = productos.find((producto) => producto.id === idProducto);
  if (!producto) {
    console.error(`No se encontró ningún producto con el ID ${idProducto}`);
    return;
  }

  // Actualizar la información del producto en la página
  document.getElementById("producto-imagen").src = producto.imagen;
  document.getElementById("producto-nombre").textContent = producto.nombre;
  document.getElementById("producto-descripcion").textContent = `Descripción del producto: ${producto.descripcion}`;
  document.getElementById("producto-precio").textContent = `Precio: ${producto.precio}`;
  document.getElementById("producto-tallas").textContent = `Tallas disponibles: ${producto.tallas.join(", ")}`;
  document.getElementById("producto-disponibilidad").textContent = `Disponibilidad: ${producto.disponibilidad}`;

  // Configurar el evento click para el botón "Agregar al carrito"
  document.getElementById("agregar-carrito").addEventListener("click", function () {
    agregarAlCarrito(idProducto);
  });

  // Configurar el evento click para el botón "Agregar a favoritos"
  document.getElementById("agregar-favoritos").addEventListener("click", function () {
    agregarAFavoritos(idProducto);
  });
}

function agregarAlCarrito(idProducto) {
  console.log(`Producto ${idProducto} agregado al carrito`);
}

function agregarAFavoritos(idProducto) {
  console.log(`Producto ${idProducto} agregado a favoritos`);
}

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const idProductoStr = urlParams.get("id");

  if (!idProductoStr) {
      console.error("No se proporcionó ningún ID de producto en la URL.");
      return;
  }

  const idProducto = parseInt(idProductoStr);
  
  if (isNaN(idProducto)) {
      console.error(`El ID del producto no es válido: ${idProductoStr}`);
      return;
  }

  cargarDetallesProducto(idProducto);
};