$(document).ready(function(){
        $("#btn1").click(function(){
                var texto1 = $("#texto1").val();
                var texto2 = $("#texto2").val();
                var texto3 = $("#texto3").val();
                var texto4 = $("#texto4").val();
                var texto5 = $("#texto5").val();
                var concatenar = texto1 + texto2 + texto3 + texto4 + texto5;
                $("#resultado").html((concatenar).length);
        });
        
});
