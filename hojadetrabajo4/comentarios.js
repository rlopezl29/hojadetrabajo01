const comments = [
    "¡Increíble lugar! La vista es espectacular.",
    "Un destino que debe ser visitado al menos una vez en la vida.",
    "La experiencia fue maravillosa. Muy recomendado.",
    "El entorno natural es impresionante.",
    "Un paraíso escondido en Guatemala.",
    "La tranquilidad y belleza del lugar son únicas.",
    "Ideal para un descanso en contacto con la naturaleza.",
    "Las pozas son más hermosas de lo que imaginas.",
    "El personal fue muy amable y atento.",
    "Definitivamente volveré pronto."
];

const names = [
    "Ana Pérez",
    "Luis Gómez",
    "Carlos Hernández",
    "Marta Fernández",
    "Juan Martínez",
    "Sofía López",
    "Pedro Morales",
    "Laura Vargas",
    "David Rodríguez",
    "Isabel Sánchez"
];

function getRandomComments() {
    const selectedComments = [];
    const selectedNames = [];
    let usedIndexes = [];

    while (selectedComments.length < 3) {
        const randomIndex = Math.floor(Math.random() * comments.length);
        if (!usedIndexes.includes(randomIndex)) {
            selectedComments.push(comments[randomIndex]);
            usedIndexes.push(randomIndex);
        }
    }

    usedIndexes = [];
    while (selectedNames.length < 3) {
        const randomIndex = Math.floor(Math.random() * names.length);
        if (!usedIndexes.includes(randomIndex)) {
            selectedNames.push(names[randomIndex]);
            usedIndexes.push(randomIndex);
        }
    }

    return selectedComments.map((comment, index) => {
        return `<div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">${selectedNames[index]}</h5>
                        <p class="card-text">${comment}</p>
                    </div>
                </div>`;
    }).join('');
}

function displayComments() {
    document.getElementById('comment-section').innerHTML = getRandomComments();
}

document.addEventListener('DOMContentLoaded', displayComments);

document.getElementById('refreshComments').addEventListener('click', displayComments);
