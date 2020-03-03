const URLAPI = 'https://swapi.co/api/' //para accede a los request de https://swapi.co/
const CHARACTER_URL = 'people/:id'

//$.get //Metodo para realizar requests
// https://api.jquery.com/ Documentation of jQuery


//var dir = `https://api.jquery.com/jQuery.get/`
var opt ={crossDomain: true}  //Indicar que es en otra pagina 'CROSSDOMAIN'

var onResponse = function () { // Ejecuta en cuanto se de respuesta del request
    //console.log(arguments) 
    console.log(`Hola soy ${arguments[0].name}`)
}

function InvCharacter(id) {
    const URL_CHAR = `${URLAPI}${CHARACTER_URL.replace(':id',id)}` //Objeto del request
    $.get(URL_CHAR , opt , onResponse)
}


InvCharacter(1)
InvCharacter(2)
InvCharacter(3)

