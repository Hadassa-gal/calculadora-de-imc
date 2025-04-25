"use strict";
const MensajeBienv = 'Bienvenido al sistema de cálculo de IMC';
const Menu1 ='Que desea hacer? \n\n1) registrar persona\n2) informe de cuantos hombres y mujeres hay\n3) promedio de edades por genero\n4) cuantos menores de edad se registrarón\n5) cuantas personas estan en escala de sobrepeso\n6) menor IMC\n7) salir';
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
let id = 0;
let ages = [];
let contedadf = 0;
let contedadm = 0;
let contpersonas = 0;
let op =0;
let age = 0;
const datos=function(person, sexo){
    let name = prompt(MensajeNombre);
    person.push(name);
    age = Number(prompt(MensajeEdad));
    person.push(age);
    ages.push(age);
    console.table(ages)
    if (sexo === 1) {
        contedadm=contedadm+age;
        console.log(contedadm)
    }else if (sexo === 2){
        contedadf=contedadf+age;
        console.log(contedadf)
    }
    let peso = Number(prompt(MensajePeso));
    let altura = Number(prompt(MensajeAltura));
    let imc = peso / (altura ** 2);
    person.push(imc);
    let mensajeIMC = `Su IMC es de: . `;
    if (imc < 19.8) {
        imcr = 'bajo peso';
        mensajeIMC = '¡Está en bajo peso!';
    } else if (imc >= 19.9 && imc <= 26) {
        imcr = 'peso normal';
        mensajeIMC = '¡Felicidades! Su peso es normal.';
    } else if (imc >= 26.1 && imc <= 29) {
        imcr = 'sobrepeso';
        mensajeIMC = '¡Tenga precaución! Está en sobrepeso.';
    } else if (imc >= 29.1) {
        imcr = 'obesidad';
        mensajeIMC = '¡Cuidado! Está en obesidad.';
    }
    alert(mensajeIMC);
    person.push(imcr);
    return person;
}
do{
    person =[];
    op = Number(prompt(Menu1));
    switch(op){
        case 1:
            //registro
            do{
                person = [];
                id = Number(prompt('Ingrese su ID (numero de identificación:)'));
                person.push(id);
                let sexo = Number(prompt('Diga su sexo:\n1) Hombre\n2) Mujer'));
                if (sexo !== 1 && sexo !== 2) {
                    alert('Opción no válida');
                    continue;
                }else if (sexo === 1) {
                    datos(person,sexo,age);
                    let sex = 'hombre';
                    person.push(sex);
                    console.table(person);
                    personas.push(person);
                    contHombres=contHombres+1;
                } else if (sexo === 2) {
                    datos(person,sexo,age);
                    let sex = 'mujer';
                    person.push(sex);
                    console.table(person);
                    personas.push(person);
                    contMujeres=contMujeres+1;
                }
                contpersonas++;
                continuar = confirm('¿Desea ingresar otra persona?');
            } while (continuar);
            console.table(personas);
            break;
        case 2:
            //contadorde hmbres y mjeres
            alert(`Cantidad de mujeres ingresadas: ${contMujeres}\nCantidad de hombres ingresados: ${contHombres}`);
            break;
        case 3:
            //promediode edades
            alert(`El promediode edades de las mujeres es: ${contedadf/contpersonas} \nEl promediode edades de los hombres es: ${contedadm/contpersonas}`);
            break;
        case 4:
            //menores
            break;
        case 5:
            //escala de sobrepeso
            break;
        case 6:
            //menor imc
            break;
        case 7:
            break;
        default:
            continuar
    }
} while (op!==7);
// const datos = function(person){
    // let name = prompt(MensajeNombre);
    // person.push(name);
    // let age = prompt(MensajeEdad);
    // person.push(age)
    // let peso = Number(prompt(MensajePeso));
    // let altura = Number(prompt(MensajeAltura));
    // let imc = peso / (altura ** 2);
    // let mensajeIMC = `Su IMC es de: . `;
    // if (imc < 19.8) {
    //     imcr = 'bajo peso';
    //     mensajeIMC = '¡Está en bajo peso!';
    // } else if (imc >= 19.9 && imc <= 26) {
    //     imcr = 'peso normal';
    //     mensajeIMC = '¡Felicidades! Su peso es normal.';
    // } else if (imc >= 26.1 && imc <= 29) {
    //     imcr = 'sobrepeso';
    //     mensajeIMC = '¡Tenga precaución! Está en sobrepeso.';
    // } else if (imc >= 29.1) {
    //     imcr = 'obesidad';
    //     mensajeIMC = '¡Cuidado! Está en obesidad.';
    // }
    // alert(mensajeIMC);
    // person.push(imcr);
    // console.table(person);
    // return age,person;
// }
// do {
//     person = [];
//     counter++;
//     person.push(counter);
//     let sexo = Number(prompt('Diga su sexo:\n1) Hombre\n2) Mujer'));
//     if (sexo !== 1 && sexo !== 2) {
//         alert('Opción no válida');
//         continue;
//     }
    
    // if (sexo === 1) {
    //     datos(person);
    //     console.log(age);
    //     contedadm=contedadm+age;
    //     let sex = 'hombre';
    //     person.push(sex);
    //     contHombres++;
    // } else if (sexo === 2) {
    //     datos(person);
    //     contedadf=contedadf+age;
    //     let sex = 'mujer';
    //     person.push(sex);
    //     contMujeres++;
    // }
//     contepersonas++;
//     console.log(contedadf,contedadm,contpersonas)
//     personas.push(person);
//     continuar = confirm('¿Desea ingresar otra persona?');
// } while (continuar);
// console.table(personas)
// alert(`${personas}`);
// alert(`Cantidad de mujeres ingresadas: ${contMujeres}\nCantidad de hombres ingresados: ${contHombres}`);
// alert(`El promediode edades de las mujeres es: ${contedadf/contpersonas}`);
// alert(`El promediode edades de los hombres es: ${contedadm/contpersonas}`);