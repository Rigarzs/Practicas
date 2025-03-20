document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.querySelector('input[name="usuario"]').value;
    const password = document.querySelector('input[name="contraseña"]').value;
    const errorMsg = document.querySelector('.error-message'); // Selecciona el contenedor para mensajes de error
    console.log('Usuario ingresado:', username);
console.log('Contraseña ingresada:', password);
    if (username === 'admin' && password === '1234') {
        alert("Login exitoso.");
        window.location.href = "menu.html";
    } else {
        errorMsg.textContent = "Usuario o contraseña incorrectos";
    }
});
