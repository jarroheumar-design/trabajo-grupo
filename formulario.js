function guardar() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje');

    if (nombre === "" || apellido === "" || edad === "" || correo === "") {
        mensaje.style.color = "red";
        mensaje.textContent = "Por favor, completa todos los campos.";
        return;
    }

    console.log("Datos:", { nombre, apellido, edad, correo });
    
    mensaje.style.color = "green";
    mensaje.textContent = "¡Registro exitoso!";
    
    document.getElementById('miFormulario').reset();
}
