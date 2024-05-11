import { productos } from "/js/productos.js";

function cargarDetallesProducto(idProducto) {
  // Buscar el producto por su ID en el array de productos (ya está definido globalmente)
  const producto = productos.find((producto) => producto.id === idProducto);

  // Actualizar la información del producto en la página
  document.getElementById("producto-imagen").src = producto.imagen;
  document.getElementById("producto-nombre").textContent = producto.nombre;
  document.getElementById(
    "producto-descripcion"
  ).textContent = `Descripción del producto: ${producto.descripcion}`;
  document.getElementById(
    "producto-precio"
  ).textContent = `Precio: ${producto.precio}`;
  document.getElementById(
    "producto-tallas"
  ).textContent = `Tallas disponibles: ${producto.tallas.join(", ")}`;
  document.getElementById(
    "producto-disponibilidad"
  ).textContent = `Disponibilidad: ${producto.disponibilidad}`;

  // Configurar el evento click para el botón "Agregar al carrito"
  document
    .getElementById("agregar-carrito")
    .addEventListener("click", function () {
      agregarAlCarrito(idProducto);
    });

  // Configurar el evento click para el botón "Agregar a favoritos"
  document
    .getElementById("agregar-favoritos")
    .addEventListener("click", function () {
      agregarAFavoritos(idProducto);
    });
}

// Función para agregar el producto al carrito (por implementar)
function agregarAlCarrito(idProducto) {
  // Aquí puedes agregar el producto al carrito
  console.log(`Producto ${idProducto} agregado al carrito`);
}

// Función para agregar el producto a favoritos (por implementar)
function agregarAFavoritos(idProducto) {
  // Aquí puedes agregar el producto a la lista de favoritos
  console.log(`Producto ${idProducto} agregado a favoritos`);
}

window.onload = function () {
  // Obtener el ID del producto de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const idProducto = parseInt(urlParams.get("id"));

  // Cargar los detalles del producto
  cargarDetallesProducto(idProducto);
};
