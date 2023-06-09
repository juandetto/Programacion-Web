// let a = 9;
// let b = 5;

// console.log(a+b);

// // function sumarUno(){
//     caca = caca + 1;
// }

function agregarValores(){
    montoInversion = document.getElementById("monto-inversion")
    montoInversion = montoInversion.value/1

    valores.push(montoInversion)

    tna = document.getElementById("tna")
    tna = tna.value/100

    valores.push(tna)

    plazoInversion = document.getElementById("plazo-inversion")
    plazoInversion = plazoInversion.value/1
    
    seleccionPlazo = document.getElementById("seleccion-plazo")
    seleccionPlazo = seleccionPlazo.value

    periodoCapitalizacion = document.getElementById("periodo-capitalizacion")
    periodoCapitalizacion = periodoCapitalizacion.value

    if (seleccionPlazo === "dias" && periodoCapitalizacion === "diario"){
        valores.push(365)
        valores.push(plazoInversion*1)   
    }
    else if (seleccionPlazo === "dias" && periodoCapitalizacion === "semanal"){
        valores.push(52.14)
        valores.push(plazoInversion/7)
    }
    else if (seleccionPlazo === "dias" && periodoCapitalizacion === "mensual"){
        valores.push(12)
        valores.push(plazoInversion/30.42)
    }
    else if (seleccionPlazo === "dias" && periodoCapitalizacion === "trimestral"){
        valores.push(4)
        valores.push(plazoInversion/(30.42*3))
    }
    else if (seleccionPlazo === "dias" && periodoCapitalizacion === "semestral"){
        valores.push(2)
        valores.push(plazoInversion/(30.42*6))
    }
    else if (seleccionPlazo === "dias" && periodoCapitalizacion === "anual"){
        valores.push(1)
        valores.push(plazoInversion/(30.42*12))
    }
    else if (seleccionPlazo === "semanas" && periodoCapitalizacion === "diario"){
        valores.push(365)
        valores.push(plazoInversion*7)
    }
    else if (seleccionPlazo === "semanas" && periodoCapitalizacion === "semanal"){
        valores.push(52.14)
        valores.push(plazoInversion*1)
    }
    else if (seleccionPlazo === "semanas" && periodoCapitalizacion === "mensual"){
        valores.push(12)
        valores.push(plazoInversion/4.34)
    }
    else if (seleccionPlazo === "semanas" && periodoCapitalizacion === "trimestral"){
        valores.push(4)
        valores.push(plazoInversion/(4.34*3))
    }
    else if (seleccionPlazo === "semanas" && periodoCapitalizacion === "semestral"){
        valores.push(2)
        valores.push(plazoInversion/(4.34*6))
    }
    else if (seleccionPlazo === "semanas" && periodoCapitalizacion === "anual"){
        valores.push(1)
        valores.push(plazoInversion/(4.34*12))
    }
    else if (seleccionPlazo === "meses" && periodoCapitalizacion === "diario"){
        valores.push(365)
        valores.push(plazoInversion*30.42)
    }
    else if (seleccionPlazo === "meses" && periodoCapitalizacion === "semanal"){
        valores.push(52.14)
        valores.push(plazoInversion*4.34)
    }
    else if (seleccionPlazo === "meses" && periodoCapitalizacion === "mensual"){
        valores.push(12)
        valores.push(plazoInversion*1)
    }
    else if (seleccionPlazo === "meses" && periodoCapitalizacion === "trimestral"){
        valores.push(4)
        valores.push(plazoInversion/3)
    }
    else if (seleccionPlazo === "meses" && periodoCapitalizacion === "semestral"){
        valores.push(2)
        valores.push(plazoInversion/6)
    }
    else if (seleccionPlazo === "meses" && periodoCapitalizacion === "anual"){
        valores.push(1)
        valores.push(plazoInversion/12)
    }
    else if (seleccionPlazo === "anios" && periodoCapitalizacion === "diario"){
        valores.push(365)
        valores.push(plazoInversion*365)
    }
    else if (seleccionPlazo === "anios" && periodoCapitalizacion === "semanal"){
        valores.push(52.14)
        valores.push(plazoInversion*52.14)
    }
    else if (seleccionPlazo === "anios" && periodoCapitalizacion === "mensual"){
        valores.push(12)
        valores.push(plazoInversion*12)
    }
    else if (seleccionPlazo === "anios" && periodoCapitalizacion === "trimestral"){
        valores.push(4)
        valores.push(plazoInversion*4)
    }
    else if (seleccionPlazo === "anios" && periodoCapitalizacion === "semestral"){
        valores.push(2)
        valores.push(plazoInversion*2)
    }
    else if (seleccionPlazo === "anios" && periodoCapitalizacion === "anual"){
        valores.push(1)
        valores.push(plazoInversion*1)
    }
    else {
        valores = [];
        alert("Elija un periodo valido para su inversion.")
    }

    console.log(valores)

    let gananciaFinPlazo = valores[0]*((1+(valores[1]/parseFloat(valores[2])))**valores[3])

    console.log(gananciaFinPlazo)

    let gananciaFinal = document.getElementById("ganancia-final")

    gananciaFinal.textContent = gananciaFinPlazo.toFixed(2)
}


let valores = []

let botonCalcular = document.getElementById("boton-calcular");

let montoInversion = 0

let tna = 0

botonCalcular.addEventListener("click", agregarValores);

let gananciaFinPlazo = 0

 




