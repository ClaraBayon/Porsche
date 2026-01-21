const coches = {
    "berlina": {
        "nombre": "Taycan",
        "precio": "Desde EUR 106.252,00 PVP Recomendado1",
        "descripcion": "Consumo eléctrico combinado - WLTP* (intervalo modelo): 19,4 - 16,7 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 16,6 - 14,4 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 16,6 – 13,8 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 17,6 - 14,2 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 22,8 - 18,2 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 593 - 824 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 521 - 680 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 - 0 g/km. P.V.P. recomendado para península y Baleares. Incluye transporte, I.V.A. e impuesto de matriculación (IEDMT) calculado al tipo estatal aplicable según las emisiones de CO2 del vehículo. El IEDMT puede variar en función de la Comunidad Autónoma donde se ubique su domicilio. Los precios aquí reflejados pueden sufrir modificaciones, y por tanto no son vinculantes.",
        "imagen": "./assets/cars/models/taycan-berlina.avif",
        "imagenFrontal": "./assets/cars/front/frente-taycan-berlina.avif"
    },
    "sport": {
        "nombre": "Taycan Sport Turismo",
        "precio": "Desde EUR 107.539,00 PVP Recomendado1",
        "descripcion": "Consumo eléctrico combinado - WLTP* (intervalo modelo): 20,2 - 17,5 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 16,9 - 14,6 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 17,0 - 14,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 18,3 - 14,8 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 24,2 - 19,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 579 - 811 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 496 - 652 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 - 0 g/km.",
        "imagen": "./assets/cars/models/taycan-sport.avif",
        "imagenFrontal": "./assets/cars/front/frente-taycan-sport.avif"
    },
    "cross": {
        "nombre": "Taycan 4 Cross Turismo",
        "precio": "Desde EUR 119.013,00 PVP Recomendado1",
        "descripcion": "Consumo eléctrico combinado - WLTP* (intervalo modelo): 21,4 - 18,7 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 18,8 - 16,7 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 18,4 - 16,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 19,6 - 17,1 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 25,8 - 22,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 611 - 696 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 532 - 614 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 - 0 g/km",
        "imagen": "./assets/cars/models/taycan-cross.avif",
        "imagenFrontal": "./assets/cars/front/frente-taycan-cross.avif"
    }

}

function botonCoches(coche) {
    let nombre = document.getElementById("nombre");
    let precio = document.getElementById("precio");
    let descripcion = document.getElementById("descripcion");
    let imagen = document.getElementById("imagen");
    let imagenFrontal = document.getElementById("imagenFrontal");


    switch (coche) {
        case "berlina":
            nombre.textContent = coches.berlina.nombre;
            precio.textContent = coches.berlina.precio;
            descripcion.textContent = coches.berlina.descripcion;
            imagen.src = coches.berlina.imagen;
            imagenFrontal.src = coches.berlina.imagenFrontal;
            break;
        case "sport":
            nombre.textContent = coches.sport.nombre;
            precio.textContent = coches.sport.precio;
            descripcion.textContent = coches.sport.descripcion;
            imagen.src = coches.sport.imagen;
            imagenFrontal.src = coches.sport.imagenFrontal;
            break;
        case "cross":
            nombre.textContent = coches.cross.nombre;
            precio.textContent = coches.cross.precio;
            descripcion.textContent = coches.cross.descripcion;
            imagen.src = coches.cross.imagen;
            imagenFrontal.src = coches.cross.imagenFrontal;



        // default:
        //  console.error("Error", error)
        // break;
    }
}

document.getElementById("boton1").addEventListener("click", function () {

    document.getElementById("boton1").classList.add("boton--active");
    document.getElementById("boton2").classList.remove("boton--active");
    document.getElementById("boton3").classList.remove("boton--active");


})

document.getElementById("boton2").addEventListener("click", function () {

    document.getElementById("boton1").classList.remove("boton--active");
    document.getElementById("boton2").classList.add("boton--active");
    document.getElementById("boton3").classList.remove("boton--active");


})

document.getElementById("boton3").addEventListener("click", function () {

    document.getElementById("boton1").classList.remove("boton--active");
    document.getElementById("boton2").classList.remove("boton--active");
    document.getElementById("boton3").classList.add("boton--active");


})