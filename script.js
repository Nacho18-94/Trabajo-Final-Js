// Constantes de los elementos
const input = document.getElementById("name");
const mensaje = document.getElementById("name-error");
const input2 = document.getElementById("email");
const mensaje2 = document.getElementById("email-error");
const input3 = document.getElementById("message");
const mensaje3 = document.getElementById("message-error");
const submitButton = document.getElementById("submit-button");

// Validar nombre
input.addEventListener("input", () => {
    if (input.value.trim() === "") {
        mensaje.textContent = "El campo no puede estar vacío.";
        input.style.borderColor = "red";
    } else {
        mensaje.textContent = "";
        input.style.borderColor = "green";
    }
});

// Validar email
input2.addEventListener("input", () => {
    if (!input2.value.includes("@")) {
        mensaje2.textContent = "El campo debe contener un @.";
        input2.style.borderColor = "red";
    } else {
        mensaje2.textContent = "";
        input2.style.borderColor = "green";
    }
});

// Validar mensaje
input3.addEventListener("input", () => {
    if (input3.value.trim().length < 10) {
        mensaje3.textContent = "El mensaje debe tener al menos 10 caracteres.";
        input3.style.borderColor = "red";
    } else {
        mensaje3.textContent = "";
        input3.style.borderColor = "green";
    }
});

// Función para limpiar los campos
function limpiarCampos() {
    input.value = "";
    input.style.borderColor = "";
    mensaje.textContent = "";

    input2.value = "";
    input2.style.borderColor = "";
    mensaje2.textContent = "";

    input3.value = "";
    input3.style.borderColor = "";
    mensaje3.textContent = "";
}

// Validar todo el formulario al enviar
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let valido = true;

    if (input.value.trim() === "") {
        mensaje.textContent = "El campo no puede estar vacío.";
        input.style.borderColor = "red";
        valido = false;
    }

    if (!input2.value.includes("@")) {
        mensaje2.textContent = "El campo debe contener un @.";
        input2.style.borderColor = "red";
        valido = false;
    }

    if (input3.value.trim().length < 10) {
        mensaje3.textContent = "El mensaje debe tener al menos 10 caracteres.";
        input3.style.borderColor = "red";
        valido = false;
    }

    if (valido) {
        alert("Formulario enviado correctamente");
        limpiarCampos();
    } else {
        alert("Por favor, corrige los errores antes de enviar.");
    }
});
//Consumo de API
const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("btn-cargar");

const obtenerVariasImagenesDePerros = async () => {
    try {
        const respuesta = await fetch("https://dog.ceo/api/breeds/image/random/6");
        if (!respuesta.ok) {
            throw new Error("No se pudieron obtener las imágenes");
        }
        const datos = await respuesta.json();
        console.log("Imágenes de perros:", datos.message);

        contenedor.innerHTML = "";

        datos.message.forEach((url) => {
            const imagen = document.createElement("img");
            imagen.src = url;
            imagen.alt = "Un perro adorable";
            contenedor.appendChild(imagen);
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
};

boton.addEventListener("click", obtenerVariasImagenesDePerros);


// Evento de scroll
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});