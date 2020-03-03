var edison = {         ///Objeto
    nombre : 'Edison',
    apellido : 'Avila',
    edad : 30
}

var andres = [1,2,3,4]   /////Array
andres = [...andres,23, 41]
// andres = {
//     ...andres,
//     nombre : 'Carlos',
//     apellido : 'Avila',
//     edad : 31
// }

const TrueFalse = (person) => {  //Creación de una Arrow Function
    return false
}
console.log(`Arrow Function TrueFalse es ${TrueFalse()}`)


function NameAndYears(person){  /// Uso de un objeto
    var {nombre} = person
    var {edad} = person
    console.log('Hola mi nombre es ' + nombre+ ' y tengo ' + edad + ' años.')
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`)
}

NameAndYears(edison)

/////////////////////////////////////////////////////////////////////////////////////////////

var edison = {
    nombre : 'Edison',
    apellido : 'Avila',
    edad : 10
}

function ImprimirMayorONo(persona){
    if (DudaMayorDeEdad(persona)){
        console.log(`${edison.nombre} es mayor de edad`)
    }
    else
    {
        console.log(`${edison.nombre} No es mayor de edad`)
    }
}

var DudaMayorDeEdad = ({edad}) =>   edad >= 18

//////////////////////////////////////////////////////////////////////////////////////////


var edison = {
    nombre : 'Edison',
    apellido : 'Avila',
    edad : 30,
    altura : 1.80,
    libros : 5
}
var andres = {
    nombre : 'Andres',
    apellido : 'Avila',
    edad : 31,
    libros : 10,
    altura : 1.73
}
var lina = {
    nombre : 'Lina',
    apellido : 'Avila',
    edad : 21,
    libros : 1,
    altura : 1.51
}
var ana = {
    nombre : 'Ana',
    apellido : 'Reyes',
    edad : 52,
    libros : 3,
    altura : 1.48
}
var garu = {
    nombre : 'Garu',
    apellido : 'Pandoso',
    edad : 7,
    libros : 23,
    altura : 0.30
}


var Individuos = [edison, andres, lina, ana, garu, aki = {
         nombre : 'Aki',
         apellido : 'Cachorra',
         edad : 2,
         altura : 0.35
     }]

//////////////////////////////USO DE FILTER
var FiltroAlturaAltos = Individuos.filter(({altura}) => altura>1.6)


//////////////////////////////USO DE MAP

// var Individuos = Individuos.map((Individuos) =>{ 
//     return {
//         ...Individuos,
//         altura: Individuos.altura *100
//     }
// })

// var Individuos2 = Individuos.map((Individuos) =>{ 
//     Individuos.altura = Individuos.altura * 100
//     return Individuos
// })


//////////////////////////////USO DE REDUCE
var Individu = [edison, andres, lina, ana, garu]

//const cont = (acum, {libros}) => acum + libros

var cantidad = Individu.reduce((acum, {libros}) => acum + libros , 0)



