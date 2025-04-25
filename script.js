"use strict";
const MensajeBienv = 'Bienvenido al sistema de cálculo de IMC';
const Menu1 ='Que desea hacer? \n\n1) registrar persona\n2) informe de cuantos hombres y mujeres hay\n3) promedio de edades por genero\n4) cuantos menores de edad se registrarón\n5) cuantas personas estan en escala de sobrepeso\n6) menor IMC\n7) salir';
const MensajePeso = 'Ingrese su peso (en kg)';
const MensajeAltura = 'Ingrese su altura (ej: 1.25)';
const MensajeResul = 'Su IMC es de:';
const MensajeNombre = 'Ingrese su nombre';
const MensajeEdad = 'Ingrese su edad';
alert(MensajeBienv);
let imcMEnor,contMujeres,contHombres,contmenores,contmujersobre,conthombresobre,id,contedadf,contedadm,contpersonas,op,age,genero = 0;
let imcr = '';
let imcmenor =99;
let mujeres,hombres,personas,person,ages = [];
let continuar = true;
const ImcMenor = function(imc){
    if (imc<imcmenor){
        imcmenor=imc;
    }else{
        imcmenor=imcmenor;
    }
    console.log(imcmenor);
    return imcmenor;
}
const datos=function(person, genero){
    let name = prompt(MensajeNombre);
    person.push(name);
    age = Number(prompt(MensajeEdad));
    person.push(age);
    ages.push(age);
    console.table(ages);
    if (genero === 1) {
        contedadm=contedadm+age;
        console.log(contedadm);
    }else if (genero === 2){
        contedadf=contedadf+age;
        console.log(contedadf);
    }
    let peso = Number(prompt(MensajePeso));
    let altura = Number(prompt(MensajeAltura));
    let imc = peso / (altura ** 2);
    imcMEnor=ImcMenor(imc);
    console.log(imcMEnor);
    person.push(imc);
    let mensajeIMC = `Su IMC es de: ${imc} `;
    if (imc < 19.8) {
        imcr = 'bajo peso';
        mensajeIMC = `${mensajeIMC}\n¡Está en bajo peso!`;
    } else if (imc >= 19.9 && imc <= 26) {
        imcr = 'peso normal';
        mensajeIMC = `${mensajeIMC}\n¡Felicidades! Su peso es normal.`;
    } else if (imc >= 26.1 && imc <= 29) {
        imcr = 'sobrepeso';
        mensajeIMC = `${mensajeIMC}\n¡Tenga precaución! Está en sobrepeso.`;
    } else if (imc >= 29.1) {
        imcr = 'obesidad';
        mensajeIMC = `${mensajeIMC}\n¡Cuidado! Está en obesidad.`;
    }
    alert(mensajeIMC);
    person.push(imcr);
    return person,imcMEnor,ages;
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
                genero = Number(prompt('Diga su genero:\n1) Hombre\n2) Mujer'));
                if (genero !== 1 && genero !== 2) {
                    alert('Opción no válida');
                    continue;
                }else if (genero === 1) {
                    datos(person,genero);
                    let gender = 'hombre';
                    person.push(gender);
                    console.table(person);
                    hombres.push(person);
                    personas.push(person);
                    contHombres=contHombres+1;
                } else if (genero === 2) {
                    datos(person,genero);
                    let gender = 'mujer';
                    person.push(gender);
                    console.table(person);
                    mujeres.push(person);
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
            //promedio de edades
            alert(`El promediode edades de las mujeres es: ${contedadf/contpersonas} \nEl promediode edades de los hombres es: ${contedadm/contpersonas}`);
            break;
        case 4:
            //menores
            for(let i of ages){   
                if (i < 18){ 
                    contmenores++;
                }else{
                    continue;
                }
            }
            alert(`hay ${contmenores} menores registrados`);
            break;
        case 5:
            //escala de sobrepeso
            for (let s = 0; s < mujeres.length; s++) {
                let a = mujeres[s].indexOf('sobrepeso');
                if (a === 4) {
                    contmujersobre+=1;
                }else{
                    continuar;
                }
            }
            for (let r = 0; r < hombres.length; r++) {
                let b = hombres[r].indexOf('sobrepeso');
                if (b === 4) {
                    conthombresobre+=1;
                }else{
                    continuar;
                }
            }
            alert(`Hay ${contmujersobre} mujeres en sobrepeso \nHay ${conthombresobre} hombres en sobrepeso`);
            break;
        case 6:
            //menor imc
            alert(`El menor IMC es de: ${imcMEnor}`);
            break;
        case 7:
            break;
        default:
            continuar
    }
} while (op!==7);