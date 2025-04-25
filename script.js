"use strict";
const MensajeBienv = 'Bienvenido al sistema de cálculo de IMC';
const MensajePeso = 'Ingrese su peso (en kg)';
const MensajeAltura = 'Ingrese su altura (ej: 1.25)';
const MensajeResul = 'Su IMC es de:';
const MensajeNombre = 'Ingrese su nombre';
const MensajeEdad = 'Ingrese su edad';
alert(MensajeBienv);
let imcr = '';
let contMujeres = 0;
let contHombres = 0;
let personas = [];
let person =[];
let continuar = true;
let counter = 0;
do {
    person = [];
    counter++;
    person.push(counter);
    let name = prompt(MensajeNombre);
    person.push(name);
    let age = prompt(MensajeEdad);
    person.push(age)
    let sexo = Number(prompt('Diga su sexo:\n1) Hombre\n2) Mujer'));
    if (sexo !== 1 && sexo !== 2) {
        alert('Opción no válida');
        continue;
    }
    let peso = Number(prompt(MensajePeso));
    let altura = Number(prompt(MensajeAltura));
    let imc = peso / (altura ** 2);
    let mensajeIMC = `${MensajeResul} ${imc}. `;
    if (imc < 19.8) {
        imcr = 'bajo peso';
        mensajeIMC += '¡Está en bajo peso!';
    } else if (imc >= 19.9 && imc <= 26) {
        imcr = 'peso normal';
        mensajeIMC += '¡Felicidades! Su peso es normal.';
    } else if (imc >= 26.1 && imc <= 29) {
        imcr = 'sobrepeso';
        mensajeIMC += '¡Tenga precaución! Está en sobrepeso.';
    } else if (imc >= 29.1 && imc <= 39) {
        imcr = 'obesidad';
        mensajeIMC += '¡Cuidado! Está en obesidad.';
    }
    person.push(imcr);
    alert(mensajeIMC);
    if (sexo === 1) {
        let sex = 'hombre';
        person.push(sex);
        contHombres++;
    } else if (sexo === 2) {
        let sex = 'mujer';
        person.push(sex);
        contMujeres++;
    }
    console.table(person)
    personas.push(person);
    continuar = confirm('¿Desea ingresar otra persona?');
} while (continuar);
console.table(personas)
alert(`Cantidad de mujeres ingresadas: ${contMujeres}\nCantidad de hombres ingresados: ${contHombres}`);
