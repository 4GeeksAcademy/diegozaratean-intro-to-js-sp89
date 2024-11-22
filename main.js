console.log('desde main')


// let nombre = 'diego'
// console.log('antes de la funcion', nombre)
// function saludar(nombre){
//     console.log('dentro de la funcion', nombre)
//     console.log('Hola ', nombre)
// }
// console.log('despes de la funcion', nombre)
// saludar('jose')

function sumar(a,b){
    return a + b
}

console.log(sumar(2,2))
console.log(sumar(1,5))
console.log(sumar(0,7))
console.log(sumar(10,8))




// saludar('flavia')
// saludar('antonio')

// function transportar(origen,destino, trayecto){
//     console.log('saliendo de ' + origen)
//     console.log(trayecto)
//     console.log( `llegando a ${destino} `)
// }

// transportar('casa','oficina','caminando')
// transportar('oficina','gym','bus')
// transportar('gym','casa','uuber')

// transportar()
// transportar()
// transportar()

// adminitido que valide si puedo entrar a un bar
// edad 15  Tienes que esperar
// edad 22 Puedes entrar

// console.log('flag 1')
// function adminitido(edad){
//     if(edad >= 18){
//         console.log('flag 2')
//         return 'Puedes entrar'
//         console.log('flag 3')
//     }else{
//         console.log('flag 4')
//         return 'Tienes que esperar'
//         console.log('flag 5')
//     }
// }

// console.log(adminitido(15))
// console.log(adminitido(22))


// function calculateTax(income){
//     return income * 0.1
// }

// document.querySelector('#monto').innerHTML = calculateTax(10000)


// console.log('ANTES se ejecuto window onload');
// window.onload = function() {

//     console.log('se ejecuto window onload');

// }
// // duemra 2 segundos
// console.log('DESPUES se ejecuto window onload');


// funciones declarativas
saludoDeclarativo()
function saludoDeclarativo(){
    console.log('Hola Declarativa')
}

// funcciones de expresión
const saludoExpresion = function(){
    console.log('Hola expresión')
}
saludoExpresion()

// funciones de flecha // Arrow
const saludoFlecha = ()=>{
    console.log('Hola arrow')
}
saludoFlecha()

// PSEUDO CODIGO 
// desarrollar un generador de excusas de who,what,when,action
// 1. definir variables
// 2. modificar html desde js
// 3. tomar el arrary de who y obtener un elemento aleatorio
// 4. tomar el arrary de what y obtener un elemento aleatorio
// 5. tomar el arrary de when y obtener un elemento aleatorio
// 6. tomar el arrary de action y obtener un elemento aleatorio
// 7. unir o concaternar el reusltado de 3 a 6 para armar una frase
// 8. asiganr la frase de js a html
// 9. unir todo