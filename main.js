console.log('desde main')


// Objeto => propiedades(careacateristicas) . metodo(accione o funciones)
let persona = {
    nombre: "flavia",
    apellido: "pala",
    edad: 36,
    habilidades: ['js','python','react'],
    comer: function(){
        console.log('estoy comiendo')
    }
}

const arrayEjemplo = ["flavia","pala"]


const perro = {
    nombre: 'magie',
    raza: 'beagle',
    edad: 3,
    ladrar: function(){
        console.log('wow')
    }
}






// PSEUUDOCODIGO 
// DONE crear el boton
// DONEcuando de click al boton haga una acción (función)
// DONEcrear la función que cambie el titulo
function changeTitle(){
    console.log('changeTitle')
    // DONE modificar el titulo con 'nuevo titulo'
    document.querySelector('h2').innerHTML = 'nuevo titulo' 
    // DONE modificar el color del titulo a azul
    document.querySelector('#title').style.backgroundColor = 'blue' 
}
// changeTitle()
