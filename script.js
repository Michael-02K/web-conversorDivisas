const ItemImporte=document.getElementById('valor')
const selectDe=document.getElementById('select1')
const selectA=document.getElementById('select2')
const boton=document.getElementById('submit')
const columnaData=document.querySelector('.columnaData')
const fotoBoton=document.querySelector('.foto')


const MONEDAS=[
    dolar={
        euro:5,
        real:4.99,
        peso:219.09
    }, 
    euro={
        dolar:1.11,
        real:5.55,
        peso:243.79 
    },
    real={
        euro:0.18,
        dolar:0.20,
        peso:43.93 
    }, 
    peso={
        euro:0.0041,
        real:0.022 ,
        dolar:0.0046 
    } 
]


boton.addEventListener('click',(e)=>{
    columnaData.innerHTML=''

    e.preventDefault()

    const importe=parseInt(ItemImporte.value)
    if (selectDe.value==selectA.value) {
        alert("no podes convertir dos tipos iguales. down")
    }else if(isNaN(importe)){
        alert("pone un valor bro")
    }else{
        let data=hacerConversion(importe)
    
        let loquemuestro1=document.createElement('P')
        let loquemuestro2=document.createElement('P')
        loquemuestro1.classList.add('dataN')
        loquemuestro2.classList.add('dataN')
    
        loquemuestro1.innerHTML=`${importe} ${selectDe.value} =`
        loquemuestro2.innerHTML=`${data} ${selectA.value}`
    
        columnaData.appendChild(loquemuestro1)
        columnaData.appendChild(loquemuestro2)
    }

})


fotoBoton.addEventListener('click',()=>{
    let apoyo=selectDe.value
    selectDe.value=selectA.value
    selectA.value=apoyo
})


function hacerConversion(num){
    switch (selectA.value) {
        case 'pesos':
            console.log(`queres convertir ${num} ${selectDe.value} a pesos`)
            if (selectDe.value=='dolares') {
                return (num*MONEDAS[0].peso).toFixed(3)
            }else if (selectDe.value=='euros') {
                return (num*MONEDAS[1].peso).toFixed(3)
            }else if (selectDe.value=='reales') {
                return (num*MONEDAS[2].peso).toFixed(3)
            }
            break;
    


        case 'euros':
            console.log(`queres convertir ${num} ${selectDe.value} a euros`)
            if (selectDe.value=='dolares') {
                return (num*MONEDAS[0].euro).toFixed(3)
            }else if (selectDe.value=='reales') {
                return (num*MONEDAS[2].euro).toFixed(3)
            }else if (selectDe.value=='pesos') {
                return (num*MONEDAS[3].euro).toFixed(3)
            }
            break;



        case 'dolares':
            console.log(`queres convertir ${num} ${selectDe.value} a dolares`)
            if (selectDe.value=='euros') {
                return (num*MONEDAS[1].dolar).toFixed(3)
            }else if (selectDe.value=='reales') {
                return (num*MONEDAS[2].dolar).toFixed(3)
            }else if (selectDe.value=='pesos') {
                return (num*MONEDAS[3].dolar).toFixed(3)
            }
            break;
    


        case 'reales':
            console.log(`queres convertir ${num} ${selectDe.value} a reales`)
            if (selectDe.value=='dolares') {
                return (num*MONEDAS[0].real).toFixed(3)
            }else if (selectDe.value=='euros') {
                return (num*MONEDAS[1].real).toFixed(3)
            }else if (selectDe.value=='pesos') {
                return (num*MONEDAS[3].real).toFixed(3)
            }
            break;

            

        default:
            break;
    } 
}

