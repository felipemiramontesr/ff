// A $( document ).ready() block.
$( document ).ready(function() {

    $('#mobile_ciberblog_menu').hide();

    $("#menu_start_button").on( "click", function() {     

        var clase = $('#region_3').attr('class');

        if(clase=="region_3_off"){
            $("#region_3").removeClass("region_3_off").addClass("region_3_on");
            $("#menu_start_button").removeClass("menu_start_button_off").addClass("menu_start_button_on");
            $('#mobile_ciberblog_menu').show();
            //$("#pagina_ciberblog").css("padding", "2%");
        }else if(clase=="region_3_on"){
            $("#region_3").removeClass("region_3_on").addClass("region_3_off");
            $("#menu_start_button").removeClass("menu_start_button_on").addClass("menu_start_button_off");
            $('#mobile_ciberblog_menu').hide();
            //$("#pagina_ciberblog").css("padding", "1%");
        }else{
            console.log("- Here is something wrong! Unknowed ERROR - " + clase)
        }
    }); 
});