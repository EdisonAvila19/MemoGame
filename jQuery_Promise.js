
const URLAPI = 'https://swapi.co/api/' //para accede a los request de https://swapi.co/
const CHARACTER_URL = 'people/:id'

//$.get //Metodo para realizar requests
// https://api.jquery.com/ Documentation of jQuery


//var dir = `https://api.jquery.com/jQuery.get/`
var opt ={crossDomain: true}  //Indicar que es en otra pagina 'CROSSDOMAIN'


function InvCharacter(id) {
    return new Promise((resolve, reject)=>{
        const URL_CHAR = `${URLAPI}${CHARACTER_URL.replace(':id',id)}` //Objeto del request
        $
        .get(URL_CHAR , opt , (arg,process,status) => resolve(arg))
        .fail(() => reject(id))
    })
}


var onError = function () {
    console.log(`Solicitud fallida`)
}

InvCharacter(1)
    .then((arg)=>{
        console.log(`Hola soy ${arg.name}`)
        return InvCharacter(2)     
    })
    .then((arg)=>{
        console.log(`Hola soy ${arg.name}`)
        return InvCharacter(3)     
    })
    .then((arg)=>{
        console.log(`Hola soy ${arg.name}`)
    })
    .catch(onError)

