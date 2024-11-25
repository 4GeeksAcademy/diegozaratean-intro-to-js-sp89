console.log('desde main')


// Array
// Mario Luigi Bowser Toad Peach

let personajesMario = ['Mario','Luigi','Bowser','Toad','Peach','star','Bowser','Bowser']

console.log(personajesMario)

// PSEDOCODIGO
// crear el array nueuvo
let personajesBuenosMario = []
// iterar sobre el arrary original
for(i=0;i<personajesMario.length;i++){
    console.log(personajesMario[i])
    // comparar lo que quiero quitar
    if(personajesMario[i] != 'Bowser'){
        // copio
        // copiar el elemento
        personajesBuenosMario.push(personajesMario[i])
    }
}


// imprimir el resultado
console.log(personajesBuenosMario)

console.log(personajesMario)
// let goodMariosCharacters = personajesMario.filter( (elemnto)=> elemnto != 'Bowser' )
console.log(personajesMario.filter( (personaje)=> personaje != 'Bowser' ))
console.log(personajesMario)
// i = 0. 0 < 5 'Mario' 5000


// for(i=0;i < personajesMario.length;i++){
//     console.log(personajesMario[i])
// }

// for(i=personajesMario.length -1 ; i >=0;i--){
//     console.log(personajesMario[i])
// }

let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(i=0;i<numbers.length;i= i + 3){
    console.log(numbers[i])
}

console.log( numbers.filter( (numero)=> numero > 7 ))
console.log( numbers.filter( (numero)=> numero != 7 ))
console.log( numbers.filter( (numero)=> numero%3 == 0 ))
console.log( numbers.filter( (numero)=> numero > 9 ))
console.log( numbers.filter( (numero)=> numero < 16 ))
console.log( numbers.filter( (numero)=> numero >= 10 && numero <= 15 ))


let newNumbers = []
for(i=0;i < numbers.length;i++){
    console.log(numbers[i] * 4)
    newNumbers.push(numbers[i] * 4)
}

console.log(newNumbers)

let mapNumbers = numbers.map( (numero)=> numero *4 )
console.log(mapNumbers)


console.log( personajesMario.map( (personaje)=> personaje + 's' ) )
console.log(personajesMario)

console.log( numbers.filter( (numero)=> numero > 7 ) )
console.log( numbers.filter( (numero)=> numero > 7 ).map( (num)=> num *2) )


personajesMario.forEach( (item)=> {
    console.log(item)
} )


console.log('Do while')
/// j = 2.  2
/// j = 3.  3



let j = 20
do{
    console.log(j)
    j++
} while( j < 10)