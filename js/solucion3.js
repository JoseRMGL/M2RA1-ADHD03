$(document).ready(function(){
    let numero1 = parseFloat($("#numero1").val());
    let numero2 = parseFloat($("#numero2").val());
    
    $("#largoDeAmbosTextos").click(function(){
        let texto1 = $("#texto1").val();
        let texto2 = $("#texto2").val();
        let concatenacion = texto1 + texto2;
        $("#resultado").html((concatenacion).length);
    });
});