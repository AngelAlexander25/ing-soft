window.addEventListener('scroll', function() {
    var bar = document.querySelector('.bar');
    var scrolled = window.scrollY;
  
    if (scrolled > 0) {
      bar.classList.add('bar-scrolled');
    } else {
      bar.classList.remove('bar-scrolled');
    }
  });
  