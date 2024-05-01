function calculodesconto (preco,desconto){
    const result = (preco * desconto) / 100
  return result
}


const val = [10 ,244 ,2 ,20,33,99,250]
let finalvalue =0

val.forEach ((value)=> {

    finalvalue= finalvalue + value
  
});



 const cart = [10 ,244 ,2 ,20,33,99,250]
let finalvaluecomdescont =0


cart.forEach ((value)=> {


    if ( value > 30 ){

const descont = calculodesconto ( value, 10)
finalvaluecomdescont= finalvaluecomdescont + (value - descont)

 
    }

    else{
        finalvaluecomdescont= finalvaluecomdescont + value
}
})
;

    let valordescontado = finalvalue - finalvaluecomdescont

    let valordescontadoarr = valordescontado.toFixed(2)
    





console.log( `valor da compra= R$ ${finalvalue} ,valor com desconto R$ ${finalvaluecomdescont},desconto= R$ ${valordescontadoarr}`)