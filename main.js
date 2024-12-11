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
function changeTitle() {
    const students = ['Milton', 'Jose', 'Michael', 'Raul', 'Adriana']
    let name = students[Math.floor(Math.random() * students.length)]
    document.querySelector('h2').innerHTML = 'hola ' + name
    const colors = ['#FFF', '#F0F', '#000', 'yellow', 'purple']
    let radomIndexcolor = Math.floor(Math.random() * colors.length)
    let randomColor = colors[radomIndexcolor]
    document.querySelector('#title').style.backgroundColor = randomColor
}


// PSEUUDOCODIGO 
// lanzar dos dados por medio de un boton lanzar dados, los dados se visualizan como un cuadrado con ubn numero centrado en la mitad
function lanzarDados() {
    document.getElementById('dado1').innerText = Math.floor(Math.random() * 6) + 1
    document.getElementById('dado2').innerText = Math.floor(Math.random() * 6) + 1
}

lanzarDados()


// agregar un boton y entradas para redimensionar los dados
// PSEUUDOCODIGO 
function changeSiza(){
    let ancho = document.querySelector('#ancho').value
    document.querySelector('#dado1').style.width = ancho +'px' 
    document.querySelector('#dado2').style.width = ancho +'px' 
    document.querySelector('#dado1').style.height = document.querySelector('#alto').value +'px' 
    document.querySelector('#dado2').style.height = document.querySelector('#alto').value +'px' 
}

let btnDimensiones = document.getElementById('btn-dimensiones')
btnDimensiones.addEventListener("click", function() {
    changeSiza()
  }); 



setInterval(lanzarDados, 3000);



