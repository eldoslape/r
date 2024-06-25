var messages = [
/*    "Me pasé los colores que me dijiste por el culo, pero recién cuando estaba subiendo todo me di cuenta. Perdón.",
"Cuidate mucho, por favor.",
"Te voy a decir todo con detalle, pero no entra todo en un solo código. 1/2",
"2/2 Pero programé un algoritmo que te va a decir todo con detalle si entras a la página todos los días.",
"buendia rro cmo estas? t acordas el cartelito q me regalaste del falcon? bueno vos pensa que hace 8 meses lo veo casi todos los dias ;)",
"no t das una idea la fuerza de voluntad que le pongo para q esto ande bien",
"cuando vamos a tomar cafe?",
"yo cuando pienso q nuestra primera cita fue una charla en el tren me pongo feliz d q no sea algo promedio",
"No te preocupes, hoy no puse ningun mensaje relevante",
"vos pensa q tuve que escribir como 60 mensajes mas que este, ya me quede sin ideas",
"bueno espero q este no sean mis ultimas palabras",
"t quiero srita graciosa",
"abrigate el cuello q te vas a enfermar",
"la proxima ves q revuelva los fideos me matas",
"A veces, solo tenemos que",
"hot",
"¡Estoy emocionado por el futuro! Generado por IA hasta q se me ocurran mas mensajes <3",
"La vida es corta, disfruta cada momento. Generado por IA hasta q se me ocurran mas mensajes <3",
"¿Necesitas ayuda con algo? Generado por IA hasta q se me ocurran mas mensajes <3",
"Siempre hay una solución, solo debes encontrarla. Generado por IA hasta q se me ocurran mas mensajes <3",
"El aprendizaje es un proceso continuo. Generado por IA hasta q se me ocurran mas mensajes <3",
"Mantén la calma y sigue adelante. Generado por IA hasta q se me ocurran mas mensajes <3",
"Hoy es un buen día para empezar algo nuevo. Generado por IA hasta q se me ocurran mas mensajes <3",
"No dejes para mañana lo que puedas hacer hoy. Generado por IA hasta q se me ocurran mas mensajes <3",
"La perseverancia es la clave del éxito. Generado por IA hasta q se me ocurran mas mensajes <3",
"Nunca subestimes el poder de una sonrisa. Generado por IA hasta q se me ocurran mas mensajes <3",
"La creatividad es contagiosa, pásala. Generado por IA hasta q se me ocurran mas mensajes <3","Te voy a decir todo con detalle, pero no entra todo en un solo código. 1/2",
"2/2 Pero programé un algoritmo que te va a decir todo con detalle si entras a la página todos los días.",
"El cambio es la única constante en la vida. Generado por IA hasta q se me ocurran mas mensajes <3",
"Recuerda siempre expresar tu gratitud. Generado por IA hasta q se me ocurran mas mensajes <3",
"El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora. Generado por IA hasta q se me ocurran mas mensajes <3"
*/
"desde que estoy con vos me siento vivo "

];


function displayMessage() {
    var today = new Date().toDateString();

    if (localStorage.getItem("currentDay") !== today) {
        var index = Math.floor(Math.random() * messages.length);
        localStorage.setItem("currentDay", today);
        localStorage.setItem("messageIndex", index);
    }

    var messageIndex = localStorage.getItem("messageIndex");
    document.getElementById("dailyMessage").innerText = messages[messageIndex];
}

document.addEventListener("DOMContentLoaded", displayMessage);
