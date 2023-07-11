var estado = 0;
function opcion(){
    var eleccion = document.getElementById("opciones");

    var puntos = document.getElementById("puntos");
    var diametro = document.getElementById("diametro");
    var vueltas = document.getElementById("vueltas");
    var valor5 = document.getElementById("valor5");
    var valor6 = document.getElementById("valor6");
    var valor7 = document.getElementById("valor7");

    if (eleccion.value === "opcion1"){
        console.log(estado);
        estado = 1;
        puntos.style.display = 'block';
        diametro.style.display = 'none';
        vueltas.style.display = 'none';
        valor5.style.display = 'block';
        valor6.style.display = 'none';
        valor7.style.display = 'none';
    } else if (eleccion.value === "opcion2"){
        console.log(estado);
        estado = 2;
        puntos.style.display = 'none';
        diametro.style.display = 'block';
        vueltas.style.display = 'block';
        valor5.style.display = 'none';
        valor6.style.display = 'block';
        valor7.style.display = 'block';
    } else{
        puntos.style.display = 'none';
        diametro.style.display = 'none';
        vueltas.style.display = 'none';
        valor5.style.display = 'none';
        valor6.style.display = 'none';
        valor7.style.display = 'none';
    }
}

function semb (){
    var valor1 = document.getElementById('valor1');
    var valor2 = document.getElementById('valor2');
    var valor3 = document.getElementById('valor3');
    var valor5 = document.getElementById('valor5');
    var valor6 = document.getElementById('valor6');
    var valor7 = document.getElementById('valor7');

    var v1 = valor1.value;
    var v2 = valor2.value;
    var v3 = valor3.value;
    var v5 = valor5.value;
    var v6 = valor6.value;
    var v7 = valor7.value;

    if (estado == 0) {
        if (v1 ==0 || v2== 0|| v3==0){
            divav.style.display ='flex';
            cartel3.style.display = 'flex';
            setTimeout(function() { cartel3.style.display = 'none'; divav.style.display ='none';},2500);
        }else {
            divav.style.display ='flex';
            cartel2.style.display = 'flex';
            setTimeout(function() { cartel2.style.display = 'none';divav.style.display ='none'; },2500);
        }
    } else if (estado == 1) {
        if (v1 == 0 || v2 == 0 || v3 == 0 || v5 == 0) {
            divav.style.display ='flex';
            cartel.style.display = 'flex';
            setTimeout(function() { cartel.style.display = 'none'; divav.style.display ='none'; },2500);
        } else { 
            var ancho = v1 * v2;
            var sup = ancho * v5;
            var kilos = (sup / 10000) * v3;
            var kilosur = (kilos / v1) * 1000;

            var ress1 = document.getElementById("res1");
            var ress2 = document.getElementById("res2");
            var ress3 = document.getElementById("res3");
            ress1.textContent = "Superficie de medición:  " + sup + "m^2";
            ress2.textContent = "Kilos totales: " + kilos + "kg";
            ress3.textContent = "Gramos por surco:  " + kilosur + "g";
        }
    } else if (estado == 2) {
        if (v1 == 0 || v2 == 0 || v3 == 0 || v6 == 0 || v7 == 0) {
            cartel.style.display = 'block';
            setTimeout(function() { cartel.style.display = 'none'; },2500);
        } else { 
            var ancho = v1 * v2;
            var sup = ancho * v6 * v7;
            var kilos = (sup / 10000) * v3;
            var kilosur = (kilos / v1) * 1000;
            sup = sup.toFixed(2);
            kilos = kilos.toFixed(2);
            kilosur = kilosur.toFixed(2);

            var ress1 = document.getElementById("res1");
            var ress2 = document.getElementById("res2");
            var ress3 = document.getElementById("res3");
            ress1.textContent = "Superficie de medición:  " + sup + "m^2";
            ress2.textContent = "Kilos totales: " + kilos + "kg";
            ress3.textContent = "Gramos por surco:  " + kilosur + "g";
        }
    }
}

function refresh (){
    var valor1 = document.getElementById('valor1');
    var valor2 = document.getElementById('valor2');
    var valor3 = document.getElementById('valor3');
    var valor5 = document.getElementById('valor5');
    var valor6 = document.getElementById('valor6');
    var valor7 = document.getElementById('valor7');
    var ress1 = document.getElementById("res1");
    var ress2 = document.getElementById("res2");
    var ress3 = document.getElementById("res3");

    valor1.value = "";
    valor2.value = "";
    valor3.value = "";
    valor5.value = "";
    valor6.value = "";
    valor7.value = "";
    ress1.textContent ="Superficie de medición:  --";
    ress2.textContent ="Kilos totales: --";
    ress3.textContent ="Gramos por surco:  --";
}

function info (){
    divav.style.display ='flex';
    infor.style.display = 'flex';
    setTimeout(function() {infor.style.display = 'none'; divav.style.display ='none';}, 8000);
}

function volver (){ window.location.href = "index.html";}