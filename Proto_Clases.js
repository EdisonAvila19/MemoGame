//////////////////////////// PROTOTYPE //////////////////////////////////
function IndivProt(nombre, apellido, estatura) {
    this.name = nombre
    this.lastname = apellido
    this.height = estatura
}

IndivProt.prototype.saludar = function() {
    console.log(`hola mi nombre es ${this.name} ${this.lastname}`)
}

IndivProt.prototype.Altibajo = function() {
    if (this.height < 1.8)
        console.log(`Yo ${this.name} soy bajito y mido ${this.height}`)
    else
        console.log(`Yo ${this.name} soy alto y mido ${this.height}`)
}


var edisonProt = new IndivProt('Edison','Avila',1.83)
var carlosProt = new IndivProt('Carlos','Avila', 1.75)


edisonProt.saludar()
edisonProt.Altibajo()
carlosProt.saludar()
carlosProt.Altibajo()

//////////////////////////// CLASES //////////////////////////////////


class Indiv{
    constructor (nombre, apellido, estatura) {
        this.name = nombre
        this.lastname = apellido
        this.height = estatura
    }
    
    saludar () {
        console.log(`hola mi nombre es ${this.name} ${this.lastname}`)
        respSaludo(this.name,this.lastname)
    }
    Altibajo () {
        if (this.height < 1.8)
            console.log(`Yo ${this.name} soy bajito y mido ${this.height}`)
        else
            console.log(`Yo ${this.name} soy alto y mido ${this.height}`)
    } 
}

class Programador extends Indiv{ //// Herencias
    constructor (nombre, apellido, estatura) {
        super (nombre, apellido, estatura)
    }
    saludar () {
        console.log(`hola mi nombre es ${this.name} ${this.lastname} y soy programador`)
        respSaludo(this.name,this.lastname)
    }
    programar(){
        console.log(`Soy ${this.name} y se programar =)`)
    }
}

class estudiante extends Programador{ ///Herencias
    constructor (nombre, apellido, estatura){
        super (nombre, apellido, estatura)
    }   
    saludar(){
        console.log(`hola mi nombre es ${this.name} ${this.lastname} y soy estudiante`)
    }
}

function respSaludo (name) {
    console.log(`Hola ${name} mucho gusto`)
}


var edison = new Indiv('Edison','Avila',1.83)
var carlos = new Programador('Carlos','Avila',1.75)
var lina = new estudiante('Lina','Avila',1.51)

edison.saludar(respSaludo)
edison.Altibajo()
carlos.saludar()
carlos.Altibajo()
 
///////////////////////////// Funcion como parametro

function padre(fn) {
    name = 'Jasinto'
    last = 'Rodrigues'
    edad = 21
    console.log(`hola ${name}`)
    if (fn)
        hijo(name,last,edad)
}

function hijo(nombre,apellido,edd) {
    console.log(`${nombre} ${apellido} ${edd}`)
}

 padre()
 padre(hijo)