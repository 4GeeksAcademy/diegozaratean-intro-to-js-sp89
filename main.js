console.log('desde main')


// Objeto => propiedades(careacateristicas) . metodo(accione o funciones)
let persona = {
    nombre: "flavia",
    apellido: "pala",
    edad: 36,
    habilidades: ['js', 'python', 'react'],
    comer: function() {
        console.log('estoy comiendo')
    }
}

const arrayEjemplo = ["flavia", "pala"]


const perro = {
    nombre: 'magie',
    raza: 'beagle',
    edad: 3,
    ladrar: function() {
        console.log('wow')
    }
}






// PSEUUDOCODIGO 
// DONE crear el boton
// DONEcuando de click al boton haga una acción (función)
// DONEcrear la función que cambie el titulo
function changeTitle() {
    console.log('changeTitle')
    // DONE modificar el titulo con 'nuevo titulo'
    // definir lista de estudiantes
    const students = ['Milton', 'Jose', 'Michael', 'Raul', 'Adriana']
    // obtener un estudiante aleatorio
    console.log(students[Math.floor(Math.random() * 4)])
    // DONE modificar el titulo con 'nuevo titulo'
    let name = students[Math.floor(Math.random() * students.length)]
    // DONE al h2 asignarle el saludo con el nombre aletorio
    document.querySelector('h2').innerHTML = 'hola ' + name
    // DONE modificar el color del titulo a azul
    // modifciar el color por medio del estilo
    // definir una lista de colores
    const colors = ['#FFF', '#F0F', '#000', 'yellow', 'purple']
    // obtener un color aleatorio
    let radomIndexcolor = Math.floor(Math.random() * colors.length)
    let randomColor = colors[radomIndexcolor]

    console.log('randomColor', randomColor)
    document.querySelector('#title').style.backgroundColor = randomColor
}
// changeTitle()


// PSEUUDOCODIGO 
// lanzar dos dados por medio de un boton lanzar dados, los dados se visualizan como un cuadrado con ubn numero centrado en la mitad
// DONE crear dados(js)

function lanzarDados() {
    document.getElementById('dado1').innerText = Math.floor(Math.random() * 6) + 1
    document.getElementById('dado2').innerText = Math.floor(Math.random() * 6) + 1
}

lanzarDados()