// Evento de desplazamiento de la ventana
window.addEventListener("scroll", function () {
  var bar = document.querySelector(".bar");
  var scrolled = window.scrollY;
  var links = document.querySelectorAll(".nav-link");

  if (scrolled > 0) {
    // Aumenta el tamaño de la barra cuando el usuario desplaza hacia abajo
    bar.style.height = "50px"; // Puedes ajustar el valor según tus necesidades
    bar.classList.add("bar-scrolled");

    // Cambia el color de los enlaces
    links.forEach(function (link) {
      link.classList.add("scrolled");
    });
  } else {
    // Restaura el tamaño original de la barra cuando el usuario está en la parte superior de la página
    bar.style.height = "30px"; // Puedes ajustar el valor según tus necesidades
    bar.classList.remove("bar-scrolled");

    // Restaura el color original de los enlaces
    links.forEach(function (link) {
      link.classList.remove("scrolled");
    });
  }
});
