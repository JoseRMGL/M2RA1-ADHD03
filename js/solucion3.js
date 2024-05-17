$(document).ready(function(){
    $("#largoDeAmbosTextos").click(function(){
        const texto1 = $("#texto1").val();
        const texto2 = $("#texto2").val();
        const concatenacion = texto1 + texto2;
        $("#resultado").html((concatenacion).length);
    });
    $("#largoTextosMayorOMenor").click(function(){
        const texto1 = $("#texto1").val();
        const texto2 = $("#texto2").val();
        const concatenacion = texto1 + texto2;
        const numero1 = parseFloat($("#numero1").val());
        const numero2 = parseFloat($("#numero2").val());
        const promedio = (numero1 + numero2) / 2;
        let mensaje = "El texto es mayor que el promedio"

        if (concatenacion.length > promedio) {
            mensaje = "El largo del texto es mayor que el promedio de los numeros"
        } else if (concatenacion.length < promedio) {
            mensaje = "El largo del texto es menor que el promeido de los numeros"
        } else {
            mensaje = "El largo del texto y el promedio de los numeros son iguales"
        }
        ;
        $("#resultado").html(mensaje)
    });
    $("#formarTextoNuevo").click(function(){
        const texto1 = $("#texto1").val();
        const texto2 = $("#texto2").val();
        const numero1 = parseFloat($("#numero1").val());
        const numero2 = parseFloat($("#numero2").val());
        const palabraNueva = (texto1.slice(-1) + texto1[0] + texto2.slice(-1) + texto2[0]) + (numero1 + numero2)
        $("#resultado").html(palabraNueva)
    });
});