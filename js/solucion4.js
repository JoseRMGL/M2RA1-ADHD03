$(document).ready(function(){
    $("#sumaMayorOMenor").click(function(){
        const num1 = parseFloat($("#num1").val());
        const num2 = parseFloat($("#num2").val());
        const num3 = parseFloat($("#num3").val());
        const num4 = parseFloat($("#num4").val());
        const suma = num1 + num2;
        const multiplicacion = num3 * num4;
        let resultado = "";

        if (suma > multiplicacion) {
            resultado = "La suma es mayor a la multiplicación"
        } else if (suma < multiplicacion) {
            resultado = "La suma es menor a la multiplicación"
        } else if (suma == multiplicacion) {
            resultado = "La suma es igual a la multiplicacíon"
        };

        $("#resultado").html(resultado);
    });
    $("#valoresIgualesODistintos").click(function(){
        const num1 = parseFloat($("#num1").val());
        const num2 = parseFloat($("#num2").val());
        const num3 = parseFloat($("#num3").val());
        const num4 = parseFloat($("#num4").val());
        let respuesta = ""
        if (num1 == num2 && num3 == num4) {
            respuesta = "Los numeros son iguales"
        } else {
            respuesta = "Los numeros son distintos"
        };
        $("#resultado").html(respuesta);
    });
    $("#numerosPares").click(function(){
        const num1 = parseFloat($("#num1").val());
        const num2 = parseFloat($("#num2").val());
        const num3 = parseFloat($("#num3").val());
        const num4 = parseFloat($("#num4").val());
        const promedio = (num1 + num2 + num3 + num4) / 4;
        var par = "";
    
        for (let i = 2; i <= promedio; i += 2) {
            par += i + ", ";
        }
        $("#resultado").html(par.slice(0, -2));
    });
});