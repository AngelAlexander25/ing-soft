import { productos } from './productos.js';

function cargarDetallesProducto(idProducto) {
  const producto = productos.find((producto) => producto.id === idProducto);
  if (!producto) {
    console.error(`No se encontró ningún producto con el ID ${idProducto}`);
    return;
  }

  document.getElementById("producto-imagen").src = producto.imagen;
  document.getElementById("producto-nombre").textContent = producto.nombre;
  document.getElementById("producto-descripcion").textContent = `Descripción del producto: ${producto.descripcion}`;
  document.getElementById("producto-precio").textContent = `Precio: ${producto.precio}`;
  document.getElementById("producto-tallas").textContent = `Tallas disponibles: ${producto.tallas.join(", ")}`;
  document.getElementById("producto-disponibilidad").textContent = `Disponibilidad: ${producto.disponibilidad}`;

  document.getElementById("agregar-carrito").addEventListener("click", function () {
    agregarAlCarrito(idProducto);
  });

  document.getElementById("agregar-favoritos").addEventListener("click", function () {
    agregarAFavoritos(idProducto);
  });
}

function agregarAlCarrito(idProducto) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const producto = productos.find(p => p.id === idProducto);
  if (producto) {
    const productoEnCarrito = carrito.find(p => p.id === idProducto);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log(`Producto ${idProducto} agregado al carrito`);
  } else {
    console.error(`Producto con ID ${idProducto} no encontrado.`);
  }
}

function agregarAFavoritos(idProducto) {
  console.log(`Producto ${idProducto} agregado a favoritos`);
}

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const idProducto = parseInt(urlParams.get("id"));
  if (isNaN(idProducto)) {
    console.error(`El ID del producto no es válido: ${idProducto}`);
    return;
  }
  cargarDetallesProducto(idProducto);
};
