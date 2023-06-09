// let a = 9;
// let b = 5;

// console.log(a+b);

// // function sumarUno(){
//     caca = caca + 1;
// }

function agregarValores(){

    valores = []
    
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

    // console.log(valores)

    let gananciaFinPlazo = valores[0]*((1+(valores[1]/parseFloat(valores[2])))**valores[3])

    let gananciaNeta = (gananciaFinPlazo - montoInversion).toFixed(2)

    // console.log(gananciaFinPlazo)

    let gananciaFinal = document.getElementById("ganancia-final")

    gananciaFinal.textContent = gananciaFinPlazo.toFixed(2)

    let gananciaTotal = document.getElementById("ganancia-total")

    gananciaTotal.textContent = (gananciaFinPlazo - montoInversion).toFixed(2)

    let gananciaDiariaPromedio = document.getElementById("ganancia-diaria-promedio")

    let gananciaMensualPromedio = document.getElementById("ganancia-mensual-promedio")

    let gananciaAnualPromedio = document.getElementById("ganancia-anual-promedio")

    console.log((((gananciaFinPlazo-montoInversion)/plazoInversion)*30.42))

    console.log(gananciaNeta)

    if (seleccionPlazo === "dias"){
        gananciaDiariaPromedio.textContent = (gananciaNeta/plazoInversion).toFixed(2)
        
        if (((gananciaNeta/plazoInversion)*30.42) > gananciaNeta){
            gananciaMensualPromedio.textContent = gananciaNeta
        }
        else{
        gananciaMensualPromedio.textContent = ((gananciaNeta/plazoInversion)*30.42).toFixed(2)
        }

        if (((gananciaNeta/plazoInversion)*365).toFixed(2) > gananciaNeta){
            gananciaAnualPromedio.textContent = gananciaNeta
        }
        else{
        gananciaAnualPromedio.textContent = ((gananciaNeta/plazoInversion)*365).toFixed(2)
        }
    }

    else if (seleccionPlazo === "semanas"){
        gananciaDiariaPromedio.textContent = ((gananciaNeta/plazoInversion)/7).toFixed(2)
        
        if (((gananciaNeta/plazoInversion)*4.34) > gananciaNeta){
            gananciaMensualPromedio.textContent = gananciaNeta
        }
        else{
            gananciaMensualPromedio.textContent = ((gananciaNeta/plazoInversion)*4.34).toFixed(2)
        }

        if (((gananciaNeta/plazoInversion)*52.14) > gananciaNeta){
            gananciaAnualPromedio.textContent = gananciaNeta
        }
        else{
            gananciaAnualPromedio.textContent = ((gananciaNeta/plazoInversion)*52.14).toFixed(2)
        } 
    }

    else if (seleccionPlazo === "meses"){
        gananciaDiariaPromedio.textContent = ((gananciaNeta/plazoInversion)/30.42).toFixed(2)
        
        if ((gananciaNeta/plazoInversion) > gananciaNeta){
            gananciaMensualPromedio.textContent = gananciaNeta
        }
        else{
            gananciaMensualPromedio.textContent = (gananciaNeta/plazoInversion).toFixed(2)
        }

        if (((gananciaNeta/plazoInversion)*12) > gananciaNeta){
            gananciaAnualPromedio.textContent = gananciaNeta
        }
        else{
            gananciaAnualPromedio.textContent = ((gananciaNeta/plazoInversion)*12).toFixed(2)
        } 
    }

    else if (seleccionPlazo === "anios"){
        gananciaDiariaPromedio.textContent = ((gananciaNeta/plazoInversion)/365).toFixed(2)
        
        if ((gananciaNeta/plazoInversion)/12 > gananciaNeta){
            gananciaMensualPromedio.textContent = gananciaNeta
        }
        else{
            gananciaMensualPromedio.textContent = ((gananciaNeta/plazoInversion)/12).toFixed(2)
        }

        if ((gananciaNeta/plazoInversion) > gananciaNeta){
            gananciaAnualPromedio.textContent = gananciaNeta
        }
        else{
            gananciaAnualPromedio.textContent = (gananciaNeta/plazoInversion).toFixed(2)
        } 
    }   
}


let valores = []

let botonCalcular = document.getElementById("boton-calcular");

let montoInversion = 0

let tna = 0

botonCalcular.addEventListener("click", agregarValores);

let gananciaFinPlazo = 0

 




