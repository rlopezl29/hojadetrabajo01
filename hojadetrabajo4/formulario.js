document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && dob && email && message) {
        console.log(`Nombre: ${name}, Fecha de Nacimiento: ${dob}, Correo: ${email}, Mensaje: ${message}`);

        const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.show();

        document.getElementById('confirmationModal').addEventListener('hidden.bs.modal', function () {
            document.getElementById('contactForm').reset();
        });
    } else {
        alert("Por favor, llena todos los campos correctamente.");
    }
});
