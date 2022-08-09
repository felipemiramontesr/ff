/**************************************************************************
Efecto de neón (box-shadow) según la dirección del scroll en los menús ****
header y footer de la pagína 'experiencia' '/nodo/25' en su versión movil *  
**************************************************************************/

// A $( document ).ready() block.
$( document ).ready(function() {

    //Inicialización en 0 de la variable que guarda el ultimo valor de la posición 'Y' del scroll
    let lastScrollTop = 0;

    //Se inicializa la escucha del scroll dentro de la página  
    window.addEventListener("scroll", function(){

        //Se asigna a una nueva variable (st) el valor actual de 'Y' al mover el scroll.
        let st = window.pageYOffset || document.documentElement.scrollTop; 

        //Condicional comparativo entre el valor actual (st) y el ultimo valor guardado (lastScrollTop)
        if (st > lastScrollTop){

            //Si 'st' contiene algún valor, tal que: 'st > lastScrollTop' : cambiar la clase al elemento DOM (on/off)
           
            //Neón naranja: on (JQuery)
            $("#menu_header_experiencia").removeClass("menu_header_experiencia")
            $("#menu_header_experiencia").addClass("menu_header_experiencia_naranja");

            //Neón azul: off (JQuery)
            $("#menu_footer_experiencia").removeClass("menu_footer_experiencia_azul")
            $("#menu_footer_experiencia").addClass("menu_footer_experiencia");

            //Neón azul: off (Vanilla)
            /*
            let footer = document.getElementById('menu_footer_experiencia');
            footer.className ='menu_footer_experiencia';
            */
            
            //Neón naranja: on (Vanilla)
            /*
            let header = document.getElementById('menu_header_experiencia');
            header.className ='menu_header_experiencia_naranja';
            */

        //Si 'st' contiene cualquier otro valor, tal que: 'st > lastScrollTop' : cambiar clase al elemento DOM (on/off)
        }else{
                    
            //Neón azul: on (JQuery)
            $("#menu_footer_experiencia").removeClass("menu_footer_experiencia");
            $("#menu_footer_experiencia").addClass("menu_footer_experiencia_azul");

            //Neón naranja: off (JQuery)
            $("#menu_header_experiencia").removeClass("menu_header_experiencia_naranja");
            $("#menu_header_experiencia").addClass("menu_header_experiencia");
  

            //Neón azul: on (Vanilla)
            /*
            let footer = document.getElementById('menu_footer_experiencia');
            footer.className ='menu_footer_experiencia_azul';
            */

            //Neón naranja: off (Vanilla)
            /*
            let footer = document.getElementById('menu_header_experiencia');
            footer.className ='menu_header_experiencia';
            */           
        }

        //Se asigna el valor actual de 'Y' (st) como ultimo valor del scroll (lastScrollTop)
        lastScrollTop = st;

    }, false);
});
