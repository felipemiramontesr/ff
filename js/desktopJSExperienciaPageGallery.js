/****************************************************************************************************
Efecto de neón (box-shadow) según la dirección del scroll en los menús ******************************
header y footer de la pagína 'experiencia' '/nodo/25' en su versión movil ***************************
ff**************************************************************************************************/

// A $( document ).ready() block.
$( document ).ready(function() {

    $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(0)").show();
    $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(1)").hide();
    $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(2)").hide();
    $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(3)").hide();
    $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(4)").hide();
    $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(5)").hide();

 
     $(".r1").hover(function(){
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(0)").show();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(1)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(2)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(3)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(4)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(5)").hide();
    });

    $(".r2").hover(function(){
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(0)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(1)").show();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(2)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(3)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(4)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(5)").hide();
    });

    $(".r3").hover(function(){
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(0)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(1)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(2)").show();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(3)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(4)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(5)").hide();
    });

    $(".r4").hover(function(){
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(0)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(1)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(2)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(3)").show();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(4)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(5)").hide();
    });

    $(".r5").hover(function(){
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(0)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(1)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(2)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(3)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(4)").show();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(5)").hide();
    });

    $(".r6").hover(function(){
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(0)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(1)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(2)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(3)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(4)").hide();
        $("#block-views-block-galeria-experiencia-block-1 > div > div > div > ul > li:eq(5)").show();
    });


});
