window.addEventListener("scroll", function () {
  var bar = document.querySelector(".bar");
  var scrolled = window.scrollY;

  if (scrolled > 0) {
    // Aumenta el tamaño de la barra cuando el usuario desplaza hacia abajo
    bar.style.height = "50px"; // Puedes ajustar el valor según tus necesidades
    bar.classList.add("bar-scrolled");
  } else {
    // Restaura el tamaño original de la barra cuando el usuario está en la parte superior de la página
    bar.style.height = "30px"; // Puedes ajustar el valor según tus necesidades
    bar.classList.remove("bar-scrolled");
  }
});
