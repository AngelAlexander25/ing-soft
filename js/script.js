// Función para iniciar sesión
function login(username, password) {
    let user = usuarios.find(u => u.username === username);
  
    if (user && user.password === password) {
      isLoggedIn = true;
      currentUser = user;
      loginStatusElement.textContent = `Bienvenido, ${user.username}`;
      loginModal.style.display = 'none';
    } else {
      // Crear un nuevo usuario si no existe
      if (!user) {
        user = { username, password };
        usuarios.push(user);
        isLoggedIn = true;
        currentUser = user;
        loginStatusElement.textContent = `Bienvenido, ${user.username}`;
        loginModal.style.display = 'none';
        alert('Se ha creado un nuevo usuario');
      } else {
        alert('Contraseña incorrecta');
      }
    }
  }