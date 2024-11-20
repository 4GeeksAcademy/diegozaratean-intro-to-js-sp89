console.log('desde main')


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// //for(inicialización;condicion;actuuaalización)
// for(let i =1;i <= 50;i++){
//     console.log(i)
// }

// // i = 5
// // 4



// for(let i=20; i >= 15;i--){
//     console.log(i)
// }
// // i = 14
// // 15

// for(i=0; i <= 20 ;i+=5){
//     console.log(i +  30)
// }


// length.       1.      2.      3
let nombres = ['jose','flavia','raul']
// position.      0.     1.      2
console.log(nombres)
nombres.push('diego')
console.log(nombres)
console.log(nombres[1])


const alumnos = ['milton','jesus','jhosep']
console.log(alumnos)
alumnos.push('diego')
alumnos.push(true)
alumnos.push(1)
console.log(alumnos)

const frutas = ['pera','cereza','mango']
console.log(frutas)
// frutas.unshift('uva')
// console.log(frutas)

console.log('OPCIÓN 1')
console.log(frutas[0] + 's')
console.log(frutas[1] + 's')
console.log(frutas[2] + 's')
console.log(frutas[3] + 's')

console.log('OPCIÓN 2')
// for 0 - 3 imprima pularl el elmento
for(i= 0; i < frutas.length ;i++){
    console.log(frutas[i] + 's')
}

