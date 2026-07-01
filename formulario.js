function guardar(){

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;

    if(nombre=="" || apellido=="" || edad=="" || correo==""){
        alert("Complete todos los campos");
        return;
    }

    document.getElementById("mensaje").innerHTML =
    "Registro exitoso de " + nombre + " " + apellido;

}