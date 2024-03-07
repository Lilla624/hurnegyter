/*
* File: app.js
* Author: Varga Lilla
* Copyright: 2024, Varga Lilla
* Date: 2024-03-07
* Github: https://github.com/Lilla624/
* Licenc: GNU GPL
*/

const sideAInput = document.querySelector("#sideA")
const sideBInput = document.querySelector("#sideB")
const sideCInput = document.querySelector("#sideC")
const sideDInput = document.querySelector("#sideD")
const areaInput = document.querySelector("#area")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener('click', () => {
    startCalc();
})

function startCalc() {
    const sideA = Number(sideAInput.value)
    const sideB = Number(sideBInput.value)
    const sideC = Number(sideCInput.value)
    const sideD = Number(sideDInput.value)
    const area = calcArea(sideA, sideB, sideC, sideD)
    console.log('Terület', area)
    areaInput.value = area
}

function calcArea(sideA, sideB, sideC, sideD) {
    s = (sideA + sideB + sideC + sideD) / 2
    Terulet = Math.pow[(s - sideA)*(s - sideB)*(s - sideC)*(s - sideD)]
    return Terulet
}

