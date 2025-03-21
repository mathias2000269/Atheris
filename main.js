function calcularMateriales() {
    // Generar un número aleatorio entre 0 y 1
    const randomNumber = Math.random();

    // Comprobar si el número aleatorio es menor que 0.05 (0.1% de probabilidad)
    if (randomNumber < 0.001) {
        // Si es así, reproducir el audio
        document.getElementById('audio').play();
    }
    // Definir los materiales necesarios para cada arma
    const materiales = {
        "NavajaMariposa": { aceroInox: 20, hierro: 15, madera: 10, muelle: 1, precio: 5000 },
        "BotellaRota": { fibraVidrio: 15, precio: 1000 },
        "PaloGolf": { goma: 11, madera: 11, precio:1000 },
        "Machete": { aceroInox: 10, madera: 20, precio:1000 },
        "PunoAmericano": { aluminio: 15, fibraVidrio: 7, precio:1000},
        "Daga": { hierro: 20, madera: 10, precio:1000 },
        "HachaBatalla": { aceroInox: 10, hierro: 15, madera: 20, precio:1000 },
        "Cuchillo": { aceroInox: 17, madera: 5, precio:1000 },
        "Bate": { madera: 11, plastico: 11, precio:1000 },
        "LlaveInglesa": { hierro: 22, precio:1000 },

        // Pistolas (10k)
        "PistolaSNS": { beneficio: 10000, cuerpoPistola: 1, hierro: 5, muelle: 1, plastico: 8, tuberias: 1 },
        "PistolaSNSmk2": { beneficio: 10000, aceiteArmas: 1, cuerpoPistola: 1, hierro: 4, muelle: 1, plastico: 13, tuberias: 1 },
        "PistolaCeramica": { beneficio: 10000, aceiteArmas: 2, cuerpoPistola: 1, hierro: 7, muelle: 1, plastico: 13, tuberias: 1 },
        "PistolaVintage": { beneficio: 10000, aceiteArmas: 4, cuerpoPistola: 1, hierro: 7, muelle: 2, plastico: 25, tuberias: 2 },

        // Pistolas (15k)
        "PistolaWM29": { beneficio: 15000, aceiteArmas: 4, cuerpoPistola: 2, hierro: 9, muelle: 4, plastico: 31, tuberias: 4 },
        "PistolaPesada": { beneficio: 15000, aceiteArmas: 4, aceroInox: 51, aluminio: 24, cuerpoPistola: 4, muelle: 4, tuberias: 4 },
        "Pistola50": { beneficio: 15000, aceiteArmas: 5, acero: 51, aluminio: 31, cuerpoPistola: 4, muelle: 5, tuberias: 5 },
        "PistolaAP": { beneficio: 15000, aceiteArmas: 5, acero: 66, aluminio: 41, cuerpoPistola: 5, muelle: 5, tuberias: 5 },

        // Revolvers (10k)
        "PistolaMarksman": { beneficio: 10000, aceiteArmas: 5, acero: 19, cuerpoRevolver: 1, madera: 39, muelle: 4, tuberias: 5 },
        "Revolver": { beneficio: 10000, aceiteArmas: 5, aceroInox: 48, cuerpoRevolver: 1, madera: 25, muelle: 5, tuberias: 5 },
        "RevolverMk2": { beneficio: 10000, aceiteArmas: 5, acero: 31, cuerpoRevolver: 4, madera: 51, muelle: 8, tuberias: 8 },
        "RevolverDoble": { beneficio: 10000, aceiteArmas: 5, acero: 2, cuerpoRevolver: 1, madera: 41, muelle: 4, tuberias: 4 },
        "RevolverNavy": { beneficio: 10000, aceiteArmas: 7, acero: 24, cuerpoRevolver: 1, madera: 49, muelle: 5, tuberias: 5 },

        // Subfusiles (30k)
        "MicroSMG": { beneficio: 30000, aceiteArmas: 1, acero: 105, cuerpoSMG: 3, hierro: 75, muelle: 1, tuberias: 1 },
        "MiniSMG": { beneficio: 30000, aceiteArmas: 3, acero: 135, cuerpoSMG: 3, hierro: 75, muelle: 1, tuberias: 1 },
        "Tec9": { beneficio: 30000, aceiteArmas: 4, aceroInox: 142, cuerpoSMG: 3, hierro: 83, muelle: 2, tuberias: 1 },
        "SMGAsalto": { beneficio: 30000, aceiteArmas: 6, acero: 157, cuerpoSMG: 5, hierro: 83, muelle: 3, tuberias: 3 },
        "SMG": { beneficio: 30000, aceiteArmas: 7, acero: 171, cuerpoSMG: 5, hierro: 87, muelle: 3, tuberias: 3 },
        "SMGMk2": { beneficio: 30000, aceiteArmas: 7, acero: 188, cuerpoSMG: 6, hierro: 103, muelle: 4, tuberias: 4 },

        // Escopetas (20k)
        "EscopetaDoble": { beneficio: 20000, aceiteArmas: 1, cuerpoEscopeta: 3, hierro: 47, madera: 14, muelle: 1, tuberias: 1 },
        "EscopetaBullpup": { beneficio: 20000, aceiteArmas: 3, aluminio: 71, cuerpoEscopeta: 4, muelle: 3, plastico: 35, tuberias: 3 },
        "EscopetaCombate": { beneficio: 20000, aceiteArmas: 4, acero: 63, cuerpoEscopeta: 5, hierro: 99, muelle: 3, tuberias: 4 },
        "EscopetaAutomatica": { beneficio: 20000, aceiteArmas: 4, aluminio: 83, cuerpoEscopeta: 4, muelle: 4, plastico: 41, tuberias: 4 },
        "EscopetaAsalto": { beneficio: 20000, aceiteArmas: 5, aluminio: 78, cuerpoEscopeta: 5, hierro: 117, muelle: 5, tuberias: 6 },
        "EscopetaPesada": { beneficio: 20000, aceiteArmas: 5, aluminio: 91, cuerpoEscopeta: 6, hierro: 131, muelle: 3, tuberias: 6 },
        "Mosquete": { beneficio: 20000, aceiteArmas: 8, cuerpoEscopeta: 8, hierro: 174, madera: 81, muelle: 5, tuberias: 6 },

        // Rifles (60k)
        "RifleAsalto": { beneficio: 60000, aceiteArmas: 5, acero: 248, cuerpoRifle: 5, hierro: 124, muelle: 6, tuberias: 5 },
        "RifleBullpup": { beneficio: 60000, aceiteArmas: 6, acero: 298, aluminio: 133, cuerpoRifle: 5, muelle: 9, tuberias: 6 },
        "RifleAsaltoMk2": { beneficio: 60000, aceiteArmas: 6, acero: 298, cuerpoRifle: 5, hierro: 133, muelle: 8, tuberias: 7 },
        "RifleCompacto": { beneficio: 60000, aceiteArmas: 6, acero: 298, aluminio: 133, cuerpoRifle: 5, muelle: 7, tuberias: 8 },
        "RifleAvanzado": { beneficio: 60000, aceiteArmas: 7, aluminio: 154, cuerpoRifle: 5, hierro: 343, muelle: 10, tuberias: 10 },
        "BullpupRifleMk2": { beneficio: 60000, aceiteArmas: 7, acero: 374, aluminio: 172, cuerpoRifle: 6, muelle: 4, tuberias: 4 },
        "HeavyRifle": { beneficio: 60000, aceiteArmas: 7, acero: 490, cuerpoRifle: 6, hierro: 274, muelle: 10, tuberias: 9 },
        "TacticalRifle": { beneficio: 60000, aceiteArmas: 9, acero: 458, cuerpoRifle: 6, hierro: 237, muelle: 7, tuberias: 6 },
        "MilitaryRifle": { beneficio: 60000, aceiteArmas: 10, acero: 546, cuerpoRifle: 6, hierro: 327, muelle: 13, tuberias: 12 },
        "SilenciadorPistola": { precio: 5000 },
        "CargadorAmpliadoPistola": { precio: 8000 },
        "Cargador": { precio: 500 },
        "ChalecoReforzado": { precio: 5000 },
        "CargadorSMG": { precio: 1000 },
        "CargadorEscopeta": { precio: 750 },
        "CargadorRifle": { precio: 1300 }
    };

    let totalAceroInox = 0;
    let totalGoma = 0;
    let totalMadera = 0;
    let totalHierro = 0;
    let totalAcero = 0;
    let totalAluminio = 0;
    let totalFibraVidrio = 0;
    let totalPlastico = 0;
    let totalAceiteParaArmas = 0;
    let totalCuerpoDePistola = 0;
    let totalCuerpoDeRevolver = 0;
    let totalCuerpoDeSMG = 0;
    let totalCuerpoDeEscopeta = 0;
    let totalCuerpoDeRifle = 0;
    let totalTuberias = 0;
    let totalMuelles = 0;
    let precioInicial = 0;

    // Calcular los materiales para cada arma seleccionada
    for (const arma in materiales) {
        const cantidad = parseInt(document.getElementById(arma).value);
        if (cantidad > 0) {
            totalAceroInox += (materiales[arma].aceroInox || 0) * cantidad;
            totalGoma += (materiales[arma].goma || 0) * cantidad;
            totalAcero += (materiales[arma].acero || 0) * cantidad;
            totalMadera += (materiales[arma].madera || 0) * cantidad;
            totalHierro += (materiales[arma].hierro || 0) * cantidad;
            totalAluminio += (materiales[arma].aluminio || 0) * cantidad;
            totalFibraVidrio += (materiales[arma].fibraVidrio || 0) * cantidad;
            totalPlastico += (materiales[arma].plastico || 0) * cantidad;
            totalAceiteParaArmas += (materiales[arma].aceiteArmas || 0) * cantidad;
            totalCuerpoDePistola += (materiales[arma].cuerpoPistola || 0) * cantidad;
            totalCuerpoDeRevolver += (materiales[arma].cuerpoRevolver || 0) * cantidad;
            totalCuerpoDeSMG += (materiales[arma].cuerpoSMG || 0) * cantidad;
            totalCuerpoDeEscopeta += (materiales[arma].cuerpoEscopeta || 0) * cantidad;
            totalCuerpoDeRifle += (materiales[arma].cuerpoRifle || 0) * cantidad;
            totalTuberias += (materiales[arma].tuberias || 0) * cantidad;
            totalMuelles += (materiales[arma].muelle || 0) * cantidad;
            
            if (!document.getElementById('esAtheris').checked) {
                precioInicial += (materiales[arma].precio || 0) * cantidad;
                if (materiales[arma].beneficio && materiales[arma].beneficio > 0) {
                    precioInicial += materiales[arma].beneficio * cantidad
                }
                else{
                    precioInicial += 1000 * cantidad
                }
                if (materiales[arma].tuberias || 0 > 0) {
                    totalTuberias += cantidad;
                }
                if (materiales[arma].muelle || 0 > 0) {
                    totalMuelles += cantidad;

                }

            }
        }
    }
    // Sumar precios adicionales según la cantidad de cada material especial
    let precios = {
        'Cuerpos de Pistola': totalCuerpoDePistola * 10000,
        'Cuerpos de Revolver': totalCuerpoDeRevolver * 10000,
        'Cuerpos de Escopeta': totalCuerpoDeEscopeta * 20000,
        'Cuerpos de SMG': totalCuerpoDeSMG * 40000,
        'Cuerpos de Rifle': totalCuerpoDeRifle * 60000,
        'Tuberías': totalTuberias * 4000,
        'Aceite para Armas': totalAceiteParaArmas * 2000,
        'Muelles': totalMuelles * 4000
    };

    let precio = Object.values(precios).reduce((acc, val) => acc + val, 0);
    precio += precioInicial;

    // Crear una tabla para mostrar los resultados
    let resultadoHTML = '<div id="result-container"> <table id="result"><tr><th>Material</th><th>Cantidad</th></tr>';

    if (totalAceroInox > 0) resultadoHTML += `<tr data-precio="0"><td>Acero Inoxidable</td><td>${totalAceroInox} </td></tr>`;
    if (totalGoma > 0) resultadoHTML += `<tr data-precio="0"><td>Goma</td><td>${totalGoma} </td></tr>`;
    if (totalAcero > 0) resultadoHTML += `<tr data-precio="0"><td>Acero</td><td>${totalAcero} </td></tr>`;
    if (totalMadera > 0) resultadoHTML += `<tr data-precio="0"><td>Madera</td><td>${totalMadera} </td></tr>`;
    if (totalHierro > 0) resultadoHTML += `<tr data-precio="0"><td>Hierro</td><td>${totalHierro} </td></tr>`;
    if (totalAluminio > 0) resultadoHTML += `<tr data-precio="0"><td>Aluminio</td><td>${totalAluminio} </td></tr>`;
    if (totalFibraVidrio > 0) resultadoHTML += `<tr data-precio="0"><td>Fibra de Vidrio</td><td>${totalFibraVidrio} </td></tr>`;
    if (totalPlastico > 0) resultadoHTML += `<tr data-precio="0"><td>Plástico</td><td>${totalPlastico} </td></tr>`;
    if (totalAceiteParaArmas > 0) resultadoHTML += `<tr data-precio="${precios['Aceite para Armas']}"><td>Aceite para Armas</td><td>${totalAceiteParaArmas} </td></tr>`;
    if (totalCuerpoDePistola > 0) resultadoHTML += `<tr data-precio="${precios['Cuerpos de Pistola']}"><td>Cuerpos de Pistola</td><td>${totalCuerpoDePistola} </td></tr>`;
    if (totalCuerpoDeRevolver > 0) resultadoHTML += `<tr data-precio="${precios['Cuerpos de Revolver']}"><td>Cuerpos de Revolver</td><td>${totalCuerpoDeRevolver} </td></tr>`;
    if (totalCuerpoDeSMG > 0) resultadoHTML += `<tr data-precio="${precios['Cuerpos de SMG']}"><td>Cuerpos de SMG</td><td>${totalCuerpoDeSMG} </td></tr>`;
    if (totalCuerpoDeEscopeta > 0) resultadoHTML += `<tr data-precio="${precios['Cuerpos de Escopeta']}"><td>Cuerpos de Escopeta</td><td>${totalCuerpoDeEscopeta} </td></tr>`;
    if (totalCuerpoDeRifle > 0) resultadoHTML += `<tr data-precio="${precios['Cuerpos de Rifle']}"><td>Cuerpos de Rifle</td><td>${totalCuerpoDeRifle}</td></tr>`;
    if (totalTuberias > 0) resultadoHTML += `<tr data-precio="${precios['Tuberías']}"><td>Tuberías</td><td>${totalTuberias}</td></tr>`;
    if (totalMuelles > 0) resultadoHTML += `<tr data-precio="${precios['Muelles']}"><td>Muelles</td><td>${totalMuelles}</td></tr>`;
    if (precio > 0) resultadoHTML += `<tr id="precio-total"><td>Precio</td><td>${precio}$</td></tr>`;

    resultadoHTML += '</table></div>';

    // Asignar el resultado final al contenedor
    document.getElementById("resultado").innerHTML = resultadoHTML;

    // Añadir evento click a cada fila de la tabla
    document.querySelectorAll('#result tr').forEach(row => {
        // si es la ultima fila no hacer nada
        if (row.id === 'precio-total') return;
        // Si la fila no tiene precio, no hacer nada
        if (!row.hasAttribute('data-precio') || row.getAttribute('data-precio') == 0) return;
        row.addEventListener('click', function () {
            let rowPrecio = parseInt(this.getAttribute('data-precio'));
            if (this.style.textDecoration === 'line-through') {
                this.style.color = 'white';
                this.style.textDecoration = 'none';
                precio += rowPrecio;
            } else {
                this.style.textDecoration = 'line-through';
                this.style.color = 'red';
                precio -= rowPrecio;
            }
            // Actualizar el precio en la tabla
            document.querySelector('#precio-total td:last-child').innerText = `${precio}$`;
        });
    });
}
