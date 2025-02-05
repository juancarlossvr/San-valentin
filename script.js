const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const frases = [
    "¿Segura?",
    "¿De verdad?",
    "No seas fría 🥺",
    "Piensa en los chocolates 🍫",
    "Me romperás el corazón 💔",
    "Dame una oportunidad 😢",
    "Voy a llorar 😭",
    "El destino dice que sí...",
    "Te arrepentirás...",
    "Tu mamá aprobaría esto 🤨"
];

noBtn.addEventListener("mouseover", () => {
    // Cambia el texto aleatoriamente
    noBtn.innerText = frases[Math.floor(Math.random() * frases.length)];

    // Reduce el tamaño del botón, con un límite para que no se vuelva ilegible
    let currentSize = parseInt(window.getComputedStyle(noBtn).fontSize);
    if (currentSize > 10) {  // Limitar el tamaño mínimo del texto
        noBtn.style.fontSize = (currentSize - 2) + "px";
    }

    // Mueve el botón aleatoriamente dentro de la ventana
    setTimeout(() => {  // Retraso para un movimiento más suave
        let newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        let newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = "absolute";
        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";
    }, 100);  // Retraso de 100 ms
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = "<h1 style='text-align: center; color: #FF0000;'>¡Sabía que dirías que sí! ❤️</h1><h2 style='text-align: center; color: #FF6347;'>Nos vemos el 14 </h2>";
});
