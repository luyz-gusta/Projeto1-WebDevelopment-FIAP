'use strict'

// const mudar = () => {
//     const inputNome = document.getElementById('idNome').value
//     const h1Titulo = document.getElementById('idTitulo')
//     h1Titulo.innerHTML = inputNome
// }

const mudar = () => document.getElementById('idTitulo').innerHTML = document.getElementById('idNome').value

const calcular = () => {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    document.getElementById('resultado').innerHTML = num1 + num2
}
