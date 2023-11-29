function enviarFormulario() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // Crear un objeto con la información del formulario
    const formData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    // Realizar la solicitud POST utilizando fetch
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        // Puedes realizar acciones adicionales aquí según la respuesta del servidor
    })
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
    });
}