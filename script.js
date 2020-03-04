// 0 1
// 2 3

//Llamado de botones
    const StartButton = document.getElementById('Button--START')
    const Button0 = document.getElementById('Button--0')
    const Button1 = document.getElementById('Button--1')
    const Button2 = document.getElementById('Button--2')
    const Button3 = document.getElementById('Button--3')
    const Level = document.getElementById('Level')
    
    Button0.addEventListener('click',()=>{

    })
    Button1.addEventListener('click',()=>{
        
    })
    Button2.addEventListener('click',()=>{
        
    })
    Button3.addEventListener('click',()=>{
        
    })


var MaxLevel = 10
var cont = false;


function GenLevel(MaxLv){

    Level.style.display = 'block'
    
    var sequence ={}
    for (var i = 0; i < MaxLv ; i++)
    {
        sequence[i] = Math.floor(Math.random()*4)
    }
    return sequence
}

function oscurecer(id,t,Lv){
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
    if (t+1==Lv)
    {
        cont = true;
        console.log(cont)
    }
}

function iluminar(id,t,Lv){
    console.log(`id es = ${id} y Time= ${t}`)
    switch(id){
        case 0:
            Button0.classList.add('Light')
            //setTimeout(() => oscurecer(id), 500); 
            break;
        case 1:
            Button1.classList.add('Light')
            //setTimeout(() => oscurecer(id), 500); 
            break;
        case 2:
            Button2.classList.add('Light')
            //setTimeout(() => oscurecer(id), 500); 
            break;
        case 3:
            Button3.classList.add('Light')
            //setTimeout(() => oscurecer(id), 500); 
            break;
    }
    
    setTimeout(() => oscurecer(id,t,Lv), 500);
}

function ShowSeq(Lv, Seq){
    Level.innerHTML = `Lv: ${Lv}`
    for(let i = 0; i < Lv ; i++){
        console.log(i)
        let cons = Seq[i]
        setTimeout(() => iluminar(cons,i,Lv), 1000*(i+1));    
    }
}

function AskSeq(Lv, Seq, live){
    alert('AskSeq')
}

async function start(){
    
    StartButton.style.display = 'none'
    
    var Level = 1
    var Order = GenLevel(MaxLevel, Level)
        console.log(Order)
    ShowSeq(Level,Order)
}


StartButton.addEventListener('click',start)




