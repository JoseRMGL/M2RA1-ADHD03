$(document).ready(function () {
        $("#btn1").click(function () {
                var texto1 = $("#texto1").val();
                var texto2 = $("#texto2").val();
                var texto3 = $("#texto3").val();
                var texto4 = $("#texto4").val();
                var texto5 = $("#texto5").val();
                var concatenar = texto1 + texto2 + texto3 + texto4 + texto5;
                $("#resultado").html(concatenar);
        });
        $("#btn2").click(function () {
                var textos = [
                        $("#texto1").val(),
                        $("#texto2").val(),
                        $("#texto3").val(),
                        $("#texto4").val(),
                        $("#texto5").val()
                ];
                var textoMasLargo = "";
                var longitudMasLarga = 0;
                for (var i = 0; i < textos.length; i++) {
                        var longitudTexto = textos[i].length;
                        if (longitudTexto > longitudMasLarga) {
                                textoMasLargo = textos[i];
                                longitudMasLarga = longitudTexto;
                        }
                }
                if (textoMasLargo === "") {
                        $("#resultado").text("No se ingresó el Texto");
                } else {
                        $("#resultado").text("El Tetxo largo es : " + textoMasLargo);
                }

        });
        $("#btn3").click(function () {
                var texto1 = $("#texto1").val();
                var texto2 = $("#texto2").val();
                var texto3 = $("#texto3").val();
                var texto4 = $("#texto4").val();
                var texto5 = $("#texto5").val();
                var palabraNueva = texto1.slice(-1) + texto2.slice(-1) + texto3.slice(-1) + texto4.slice(-1) + texto5.slice(-1);
                $("#resultado").html(palabraNueva);
        });

});
