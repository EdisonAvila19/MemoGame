
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
        .get(URL_CHAR , opt , (arg,process,status) => resolve(arg,process,status))
        .fail(() => reject(id))
    })
}

/////////////ASYNC - AWAIT

async function Consulta(){
    var ids = [1,2,5,35,8] // ID's de consulta
    var prom = ids.map(id => InvCharacter(id)) // Crea array de promesas
    try{ //.then
        prom = await Promise.all(prom) 
        //console.log(prom)
        var i
        for (i = 0 ; i < prom.length ; i++)
        {
            console.log(`Hola soy ${prom[i].name}`)
        }
    } 
    catch (id){ //.catch
        onError(id)
    }
}

Consulta()





// var onResponse = (arg) => {
//     prom = arg
//     var i
//     for (i = 0 ; i < prom.length ; i++)
//     {
//         console.log(`Hola soy ${prom[i].name}`)
//     }
// }

var onError = function (id) {
    console.log(`Solicitud fallida ${id}`)
}

