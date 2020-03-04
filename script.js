// 0 1
// 2 3

//Llamado de botones
    const StartButton = document.getElementById('Button--START')
    const Button0 = document.getElementById('Button--0')
    const Button1 = document.getElementById('Button--1')
    const Button2 = document.getElementById('Button--2')
    const Button3 = document.getElementById('Button--3')
    const Level = document.getElementById('Level')
    

var buttonId
var MaxLevel = 10
var Order
var cont = false
var Lv = 0
var live = true



function endGame(Lv){
    console.log(`pierdes`)
    StartButton.style.display = 'block'
    StartButton.innerHTML = 'End Game'
    Level.innerHTML = `Lv Max: ${Lv}`

    setTimeout(() => {location.reload();}, 3000);
}

function GenLevel(MaxLv){

    Level.style.display = 'block'
    
    var sequence ={}
    for (var i = 0; i < MaxLv ; i++)
    {
        sequence[i] = Math.floor(Math.random()*4)
    }
    return sequence
}

function oscurecer(id){
    switch(id){
        case 0:
            Button0.classList.remove('Light')
            break;
        case 1:
            Button1.classList.remove('Light')
            break;
        case 2:
            Button2.classList.remove('Light')
            break;
        case 3:
            Button3.classList.remove('Light')
            break; 
    }
}

function iluminar(id,Ti,To){
    return new Promise(resolve =>{
        setTimeout(() => {
           // console.log(`id es = ${id}`)
            switch(id){
                case 0:
                    Button0.classList.add('Light')
                    break;
                case 1:
                    Button1.classList.add('Light')
                    break;
                case 2:
                    Button2.classList.add('Light')
                    break;
                case 3:
                    Button3.classList.add('Light')
                    break;
            }
            setTimeout(() => oscurecer(id), To);
            resolve(true)
        }, Ti);
    })
}

async function ShowSeq(Lv, Seq){
    Level.innerHTML = `Lv: ${Lv}`
    for(let i = 0; i < Lv ; i++){
        //console.log(i)
        let cons = Seq[i]
        await iluminar(cons,600,300)
    }
}

function ButtonAction(){
    return new Promise(resolve =>{
        var Id
        Button0.addEventListener('click', async () => {
            await iluminar(0,100,300)
            resolve(0)})
        Button1.addEventListener('click', async () => {
            await iluminar(1,100,300)
            resolve(1)})
        Button2.addEventListener('click', async () => {
            await iluminar(2,100,300)
            resolve(2)})
        Button3.addEventListener('click', async () => {
            await iluminar(3,100,300)
            resolve(3)})
    })
}

async function AskSeq(Lv, Seq){
    for(let i = 0; i < Lv ; i++){
        //console.log(i)
        let cons = Seq[i]
        const button = await ButtonAction()
        if(cons === button)
        {
            console.log('bien')
        }
        else{
            endGame(Lv)
            live = false
        }
    }
}

async function start(){
    MaxLevel = prompt(`¿Cuantos niveles deseas realizar?`)
    StartButton.style.display = 'none'
    Lev = 1
    do{
    Order = GenLevel(MaxLevel, Lev)
        //console.log(Order)
    await ShowSeq(Lev,Order)
        //console.log('Iniciar Pregunta')
    await AskSeq(Lev, Order)
        //console.log('Finalizar Pregunta')
    Lev++
    }while(Lev<=MaxLevel && live)
    
}

StartButton.addEventListener('click',start)







