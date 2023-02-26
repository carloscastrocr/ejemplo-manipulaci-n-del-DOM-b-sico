//manipulación del DOM

const h1 = document.querySelector('h1')
const input1= document.querySelector('#calculo')
const input2= document.querySelector('#calculo2')
const btn= document.querySelector('#btnCalcular')
const p= document.querySelector('#result')
const form= document.querySelector('#form')

form.addEventListener('submit', btnOnClick);

function btnOnClick(event){
    event.preventDefault()
    console.log(input1.value+input2.value)
    p.innerText = "Resultado: " + input1.value+input2.value
} 




