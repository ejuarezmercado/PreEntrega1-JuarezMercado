alert ("Bienvenido a EJ TRAINING")

let consulta = confirm("¿Realizas crossfit?")

if(consulta == true){
    let ejercicio = prompt("¿De qué ejercicio quieres calcular tu % de RM?\n(Opciones: Back Squat, Squat Clean, Peso Muerto, Squat Clean)");

    switch(ejercicio){
        case "Back Squat":
        case "Squat Snatch":
        case "Squat Clean":
        case "Peso muerto":
    let rm = parseFloat(prompt( "Ingresa tu RM en " + ejercicio + ":"));
    let porcentaje = parseFloat(prompt("¿Qué porcentaje de RM desea calcular? (ej 80%)"));

    if(porcentaje > 0 && porcentaje<=100){
        let pesoRM = calcularRM (rm, porcentaje)
        alert("Tu peso para el " + porcentaje + "% de RM en " + ejercicio + " es: " + pesoRM + " kg");
    } else{
        alert ("Porcentaje invalido, debe estar entre 1 y 100");
    }
    break;
    default:
        alert("Ejercicio no reconocido.")
    } 
    } else {
        alert("Gracias por visitar EJ TRAINING")
    }

function calcularRM (rmMaxima, porcentaje){
    return rmMaxima * (porcentaje/100);

}