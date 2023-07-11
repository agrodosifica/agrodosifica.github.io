function semb (){
    var valor1 = document.getElementById('valor1');
    var valor2 = document.getElementById('valor2');
    var valor3 = document.getElementById('valor3');
    var valor4 = document.getElementById('valor4');

    var v1 = valor1.value;
    var v2 = valor2.value;
    var v3 = valor3.value;
    var v4 = valor4.value;

    if (v1 == 0 || v2 == 0 || v3 == 0|| v4 == 0){
        divav.style.display ='flex';
        cartel.style.display = 'flex';

        setTimeout(function() {
          cartel.style.display = 'none';
           divav.style.display ='none';
        }, 2000); // 5000 milisegundos = 5 segundos
    }else{
        r1 = (v1/(v3/100))/(v4/100);
        rr1 = r1.toFixed(0);
        var num1 = rr1;
        var ress1 = document.getElementById("res1");
        ress1.textContent = "Semillas por hectárea:  " + num1;

        r2 = rr1/10000;
        rr2 = r2.toFixed(2);
        var num2 = rr2;
        var ress2 = document.getElementById("res2");
        ress2.textContent = "Semillas por metro cuadrado:  " + num2;

        r3 = rr2/(1/v2);
        rr3 = r3.toFixed(2);
        var num3 = rr3;
        var ress3 = document.getElementById("res3");
        ress3.textContent = "Semillas por metro lineal:  " + num3;
    }
}

function refresh (){
    var valor1 = document.getElementById('valor1');
    var valor2 = document.getElementById('valor2');
    var valor3 = document.getElementById('valor3');
    var valor4 = document.getElementById('valor4');
    var ress1 = document.getElementById("res1");
    var ress2 = document.getElementById("res2");
    var ress3 = document.getElementById("res3");

    valor1.value = "";
    valor2.value = "";
    valor3.value = "";
    valor4.value = "";
    ress1.textContent ="Semillas por hectárea:  --";
    ress2.textContent ="Semillas por metro cuadrado:  --";
    ress3.textContent ="Semillas por metro lineal:  --";
}

function info (){
    infor.style.display = 'flex';
    divav.style.display ='flex';
    setTimeout(function() {infor.style.display = 'none';divav.style.display ='none';}, 8000);
}
function volver (){ window.location.href = "index.html";}