const miBoton = document.querySelector('#miBoton')

/* Método con on , No recomendada
miBoton.onclick = function () {
  document.body.style.backgroundColor = 'lightcoral'
}
miBoton.onclick = () => window.alert('Hola desde JS')
 */

// Método con addEventListener

miBoton.addEventListener('click', function () {
  document.body.style.backgroundColor = 'lightcoral'
})

miBoton.addEventListener('click', () => window.alert('Hola desde JS'))

window.onload = () => console.log('se cargo el documento')

const enlaceGoogle = document.querySelector("a[href='http://www.google.com']")
enlaceGoogle.addEventListener('click', (event) => {
  console.log(event)
  event.preventDefault()
  const resp = window.confirm('Seguro deseas ir a google?')
  if (resp) {
    window.open('http://www.google.com', '_blank')
  }
})

// Seguimiento del cursor con un corazón

const imgCorazon = document.querySelector('#imgCorazon')
document.addEventListener('mousemove', (e) => {
  imgCorazon.style.transform = `translate(${e.clientX - 250}px,${
    e.clientY - 25
  }px)`
})

// Creación de cajas dinamicas

const boxMaker = document.getElementById('boxMaker')
const cajasCreadas = document.getElementById('cajasCreadas')
boxMaker.addEventListener('dblclick', () => {
  const box = document.createElement('div')
  box.classList.add('cajaDinamica')
  cajasCreadas.appendChild(box)
})

// Contador

const incrementar = document.querySelector('#incrementar')
const decrementar = document.querySelector('#decrementar')
const resetear = document.querySelector('#resetear')

let contador = parseInt(document.getElementById('contador').textContent)

incrementar.addEventListener('click', () => {
  document.getElementById('contador').textContent = ++contador
})
decrementar.addEventListener('click', () => {
  document.getElementById('contador').textContent = --contador
})
resetear.addEventListener('click', () => {
  document.getElementById('contador').textContent = contador = 0
})
