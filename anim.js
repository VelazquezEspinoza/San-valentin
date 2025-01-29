// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Al fin llegamos", time: 17 },
  { text: "A la sima del cielo por amarnos", time: 5 },
  { text: "Al mundo desafiamos", time: 3 },
  { text: "Seguimos unidos y enamorados", time: 5 },
  { text: "Yo se…… que nadie…..", time: 4 },
  { text: "Pensó que nuestro amor duraria", time: 6 },
  { text: "Pero hooy………", time: 3 },
  { text: "Aquí estamos amándonos", time: 6 },
  { text: "Tu y yo", time: 4 },
  { text: "Sigues siendo tu miii", time: 5 },
  { text: "Amor eterno yo te amo cada día más", time: 8 },
  { text: "Tu y yo", time: 4 },
  { text: "Sigues siendo tu miii", time: 5 },
  { text: "Sueño eterno y yo el dueño de tu corazón", time: 8 },
  { text: "Tan solo por mirarte", time: 5 },
  { text: "Se estremecen los hilos de mi alma", time: 6 },
  { text: "Tan solo por amarte", time: 5 },
  { text: "Daria mi vida en un instante", time: 6 },
  { text: "Yo se…… que nadie…..", time: 5 },
  { text: "Pensó que nuestro amor duraria", time: 6 },
  { text: "Pero hooy………", time: 3 },
  { text: "Aquí estamos amándonos", time: 6 },
  { text: "Tu y yo", time: 4 },
  { text: "Sigues siendo tu miii", time: 5 },
  { text: "Amor eterno yo te amo cada día más", time: 8 },
  { text: "Tu y yo", time: 4 },
  { text: "Sigues siendo tu miii", time: 5 },
  { text: "Sueño eterno y yo el dueño de tu corazón", time: 8 },
  { text: "Al fin llegamos", time: 4 },
  { text: "A la sima del cielo por amarnos.", time: 7 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);