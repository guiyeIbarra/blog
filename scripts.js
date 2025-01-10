
let btn1 = document.getElementById("btn1");
let estilos = document.getElementById("estilos"); 

let btn2 = document.getElementById("btn2");
let mantenimiento = document.getElementById("mantenimiento"); 

let btn3 = document.getElementById("btn3");
let lenguaje = document.getElementById("lenguaje"); 

let btn4 = document.getElementById("btn4");
let idolos = document.getElementById("idolos"); 

let btn5 = document.getElementById("btn5");
let valor = document.getElementById("valor");

let btn6 = document.getElementById("btn6");
let estudio = document.getElementById("estudio");

btn1.addEventListener("click", function () {
    estilos.textContent = "Desde mis comienzos en la música, con solo 14 años, he participado en grupos y proyectos de variados estilos; rock, pop, folclore, tango, fusión, cumbia, cuarteto; es decir, mucha mezcla, con gente diferente, por diversión, por trabajo, y en cada vuelta aprendía algo nuevo."; 
});
estilos.addEventListener("click", function () {
    estilos.textContent = ""; 
});

btn2.addEventListener("click", function () {
    mantenimiento.textContent = "Siempre recuerdo cuando compré mi primer bajo, lo llevé a casa y lo desarmé, le separé el mango del cuerpo sacándole los cuatro tornillos que lo afirman, y ¿por qué? Por fortuna, al volver a armarlo todavía afinaba (creo)."; 
});
mantenimiento.addEventListener("click", function () {
    mantenimiento.textContent = ""; 
});

btn3.addEventListener("click", function () {
    lenguaje.textContent = 'Siempre escuchamos historias de grandes músicos famosos que no sabián leer ni una nota en el pentagrama, es probable que no sean del todo ciertas, pero aún así, en mi caso, que no nací "sabiendo", aprendí mucho cuando me acercaba al lenguaje escrito de la música.'; 
});
lenguaje.addEventListener("click", function () {
    lenguaje.textContent = ""; 
});

btn4.addEventListener("click", function () {
    idolos.textContent = "Desde el principio en que uno elige una disciplina o un oficio, siempre nos aparece un maestro o un ídolo a quien queremos imitar; esto no solo es normal, sino que creo que es necesario para acercarnos al ideal de lo que queremos alcanzar algun día."; 
});
idolos.addEventListener("click", function () {
    idolos.textContent = ""; 
});

btn5.addEventListener("click", function () {
    valor.textContent = "El bajo es considerado como un instrumento innecesario, siempre en broma se dice que al bajo nadie lo escucha y si en algun momento falta nadie lo notaría. En realidad, el sonido del bajo puede pasar desapercibido para el oído no preparado, pero si falta enseguida el resultado del sonido general se vería empobrecido."; 
});
valor.addEventListener("click", function () {
    valor.textContent = ""; 
});

btn6.addEventListener("click", function () {
    estudio.textContent = "Creo que el estudio de la música, como de tantas otras disciplinas, no se debe separar de la sociedad, del momento histórico, de las corrientes locales, regionales, mundiales; y de todo tipo de conocimientos científicos, tecnológicos, o de la índole que sea necesario para enriquecer nuestro vocabulario de sonidos y sentimientos"; 
});
estudio.addEventListener("click", function () {
    estudio.textContent = ""; 
});

