/****************************************************************************************************
Image gallery: RESTFUL API, async(), fetch(), await() |**********************************************
ff**************************************************************************************************/

// A $( document ).ready() block.
$(document).ready(function() {

    $("#r1").on( "click", function() {
        $("#r1").removeClass("r1-off").addClass("r1-on");
        $("#r2").removeClass("r2-on").addClass("r2-off");
        $("#r3").removeClass("r3-on").addClass("r3-off");
        $("#r4").removeClass("r4-on").addClass("r4-off");
        $("#r5").removeClass("r5-on").addClass("r5-off");
        $("#r6").removeClass("r6-on").addClass("r6-off");
        $("#r7").removeClass("r7-on").addClass("r7-off");
        
        const chargeDataR1 = async () => {

            try{
                const response_r1 = await fetch("https://felipemiramontesr.net/node/16?_format=json");
                const data_r1 = await response_r1.json();
                console.log(data_r1);

                //"<img src= " + data_r1.field_image[0].url + "></img>";
                document.getElementById("image").innerHTML = "<img src= " + data_r1.field_image[0].url + "></img>";
                document.getElementById("title").innerHTML = data_r1.title[0].value;
                document.getElementById("localizacion").innerHTML = data_r1.field_localizacion[0].value;
                document.getElementById("fechas").innerHTML = data_r1.field_fechas[0].value + " / " + data_r1.field_fechas[0].end_value;
                document.getElementById("tipo_de_empleo").innerHTML = data_r1.field_ti[0].value;
                document.getElementById("body").innerHTML = data_r1.body[0].value;

                let stringCode = "";

                /*tecnologias_empleadas | Array walkthrow*/
                for(i=0; i<data_r1.field_tecnologias_empleadas.length; i++){
                    stringCode = stringCode + "<div>" + data_r1.field_tecnologias_empleadas[i].value + "</div>";
                }

                var tecnologiasGridStatus = $('#tecnologias_empleadas').attr('class');

                if(tecnologiasGridStatus == "tecnologias_empleadas_start"){
                    $("#tecnologias_empleadas").removeClass("tecnologias_empleadas_start").addClass("tecnologias_empleadas");
                }
        
                document.getElementById("tecnologias_empleadas").innerHTML = stringCode;

            }catch(error){
                console.log(error);
            }
        }
        chargeDataR1(); 
    }); 

    $("#r2").on( "click", function() {
       
        var r1Status = $('#r1').attr('class');

        if(r1Status == "r1-on"){
            $("#r1").removeClass("r1-on").addClass("r1-off");
        }

        $("#r2").removeClass("r2-off").addClass("r2-on");
        $("#r3").removeClass("r3-on").addClass("r3-off");
        $("#r4").removeClass("r4-on").addClass("r4-off");
        $("#r5").removeClass("r5-on").addClass("r5-off");
        $("#r6").removeClass("r6-on").addClass("r6-off");
        $("#r7").removeClass("r7-on").addClass("r7-off");

        const chargeDataR2 = async () => {

            try{
                const response_r2 = await fetch("https://felipemiramontesr.net/node/12?_format=json");
                const data_r2 = await response_r2.json();
                console.log(data_r2);

                document.getElementById("image").innerHTML = "<img src= " + data_r2.field_image[0].url + "></img>";
                document.getElementById("title").innerHTML = data_r2.title[0].value;
                document.getElementById("localizacion").innerHTML = data_r2.field_localizacion[0].value;
                document.getElementById("fechas").innerHTML = data_r2.field_fechas[0].value + " / " + data_r2.field_fechas[0].end_value;
                document.getElementById("tipo_de_empleo").innerHTML = data_r2.field_ti[0].value;
                document.getElementById("body").innerHTML = data_r2.body[0].value;
                document.getElementById("tecnologias_empleadas").innerHTML = data_r2.field_tecnologias_empleadas[0].value;

                
                let stringCode = "";

                /*tecnologias_empleadas | Array walkthrow*/
                for(i=0; i<data_r2.field_tecnologias_empleadas.length; i++){
                    stringCode = stringCode + "<div>" + data_r2.field_tecnologias_empleadas[i].value + "</div>";
                }

                var tecnologiasGridStatus = $('#tecnologias_empleadas').attr('class');

                if(tecnologiasGridStatus == "tecnologias_empleadas_start"){
                    $("#tecnologias_empleadas").removeClass("tecnologias_empleadas_start").addClass("tecnologias_empleadas");
                }

                document.getElementById("tecnologias_empleadas").innerHTML = stringCode;
            }
                catch(error){
                        console.log(error);
                }
        }
        chargeDataR2();
    }); 

    $("#r3").on( "click", function() {

        var r1Status = $('#r1').attr('class');
        
        if(r1Status == "r1-on"){
            $("#r1").removeClass("r1-on").addClass("r1-off");
        }

        $("#r3").removeClass("r3-off").addClass("r3-on");
        $("#r2").removeClass("r2-on").addClass("r2-off");
        $("#r4").removeClass("r4-on").addClass("r4-off");
        $("#r5").removeClass("r5-on").addClass("r5-off");
        $("#r6").removeClass("r6-on").addClass("r6-off");
        $("#r7").removeClass("r7-on").addClass("r7-off");

        const chargeDataR3 = async () => {

            try{
                const response_r3 = await fetch("https://felipemiramontesr.net/node/14?_format=json");
                const data_r3 = await response_r3.json();
                console.log(data_r3);

                document.getElementById("image").innerHTML = "<img src= " + data_r3.field_image[0].url + "></img>";
                document.getElementById("title").innerHTML = data_r3.title[0].value;
                document.getElementById("localizacion").innerHTML = data_r3.field_localizacion[0].value;
                document.getElementById("fechas").innerHTML = data_r3.field_fechas[0].value + " / " + data_r3.field_fechas[0].end_value;
                document.getElementById("tipo_de_empleo").innerHTML = data_r3.field_ti[0].value;
                document.getElementById("body").innerHTML = data_r3.body[0].value;
                document.getElementById("tecnologias_empleadas").innerHTML = data_r3.field_tecnologias_empleadas[0].value;

                
                let stringCode = "";

                /*tecnologias_empleadas | Array walkthrow*/
                for(i=0; i<data_r3.field_tecnologias_empleadas.length; i++){
                    stringCode = stringCode + "<div>" + data_r3.field_tecnologias_empleadas[i].value + "</div>";
                }

                var tecnologiasGridStatus = $('#tecnologias_empleadas').attr('class');

                if(tecnologiasGridStatus == "tecnologias_empleadas_start"){
                    $("#tecnologias_empleadas").removeClass("tecnologias_empleadas_start").addClass("tecnologias_empleadas");
                }

                document.getElementById("tecnologias_empleadas").innerHTML = stringCode;
            }
                catch(error){
                        console.log(error);
                }
        }
        chargeDataR3();
       
    }); 

    $("#r4").on( "click", function() {

        var r1Status = $('#r1').attr('class');
        
        if(r1Status == "r1-on"){
            $("#r1").removeClass("r1-on").addClass("r1-off");
        }

        $("#r4").removeClass("r4-off").addClass("r4-on");
        $("#r2").removeClass("r2-on").addClass("r2-off");
        $("#r3").removeClass("r3-on").addClass("r3-off");
        $("#r5").removeClass("r5-on").addClass("r5-off");
        $("#r6").removeClass("r6-on").addClass("r6-off");
        $("#r7").removeClass("r7-on").addClass("r7-off");

        const chargeDataR4 = async () => {

            try{
                const response_r4 = await fetch("https://felipemiramontesr.net/node/13?_format=json");
                const data_r4 = await response_r4.json();
                console.log(data_r4);

                document.getElementById("image").innerHTML = "<img src= " + data_r4.field_image[0].url + "></img>";
                document.getElementById("title").innerHTML = data_r4.title[0].value;
                document.getElementById("localizacion").innerHTML = data_r4.field_localizacion[0].value;
                document.getElementById("fechas").innerHTML = data_r4.field_fechas[0].value + " / " + data_r4.field_fechas[0].end_value;
                document.getElementById("tipo_de_empleo").innerHTML = data_r4.field_ti[0].value;
                document.getElementById("body").innerHTML = data_r4.body[0].value;
                document.getElementById("tecnologias_empleadas").innerHTML = data_r4.field_tecnologias_empleadas[0].value;

                
                let stringCode = "";

                /*tecnologias_empleadas | Array walkthrow*/
                for(i=0; i<data_r4.field_tecnologias_empleadas.length; i++){
                    stringCode = stringCode + "<div>" + data_r4.field_tecnologias_empleadas[i].value + "</div>";
                }

                var tecnologiasGridStatus = $('#tecnologias_empleadas').attr('class');

                if(tecnologiasGridStatus == "tecnologias_empleadas_start"){
                    $("#tecnologias_empleadas").removeClass("tecnologias_empleadas_start").addClass("tecnologias_empleadas");
                }

                document.getElementById("tecnologias_empleadas").innerHTML = stringCode;
            }
                catch(error){
                        console.log(error);
                }
        }
        chargeDataR4();
       
    }); 

    $("#r5").on( "click", function() {

        var r1Status = $('#r1').attr('class');
        
        if(r1Status == "r1-on"){
            $("#r1").removeClass("r1-on").addClass("r1-off");
        }

        $("#r5").removeClass("r5-off").addClass("r5-on");
        $("#r2").removeClass("r2-on").addClass("r2-off");
        $("#r3").removeClass("r3-on").addClass("r3-off");
        $("#r4").removeClass("r4-on").addClass("r4-off");
        $("#r6").removeClass("r6-on").addClass("r6-off");
        $("#r7").removeClass("r7-on").addClass("r7-off");

        const chargeDataR5 = async () => {

            try{
                const response_r5 = await fetch("https://felipemiramontesr.net/node/15?_format=json");
                const data_r5 = await response_r5.json();
                console.log(data_r5);

                document.getElementById("image").innerHTML = "<img src= " + data_r5.field_image[0].url + "></img>";
                document.getElementById("title").innerHTML = data_r5.title[0].value;
                document.getElementById("localizacion").innerHTML = data_r5.field_localizacion[0].value;
                document.getElementById("fechas").innerHTML = data_r5.field_fechas[0].value + " / " + data_r5.field_fechas[0].end_value;
                document.getElementById("tipo_de_empleo").innerHTML = data_r5.field_ti[0].value;
                document.getElementById("body").innerHTML = data_r5.body[0].value;
                document.getElementById("tecnologias_empleadas").innerHTML = data_r5.field_tecnologias_empleadas[0].value;
        
                let stringCode = "";

                /*tecnologias_empleadas | Array walkthrow*/
                for(i=0; i<data_r5.field_tecnologias_empleadas.length; i++){
                    stringCode = stringCode + "<div>" + data_r5.field_tecnologias_empleadas[i].value + "</div>";
                }

                var tecnologiasGridStatus = $('#tecnologias_empleadas').attr('class');

                if(tecnologiasGridStatus == "tecnologias_empleadas_start"){
                    $("#tecnologias_empleadas").removeClass("tecnologias_empleadas_start").addClass("tecnologias_empleadas");
                }

                document.getElementById("tecnologias_empleadas").innerHTML = stringCode;
            }
                catch(error){
                        console.log(error);
                }
        }
        chargeDataR5();
       
    }); 

    $("#r6").on( "click", function() {

        var r1Status = $('#r1').attr('class');
        
        if(r1Status == "r1-on"){
            $("#r1").removeClass("r1-on").addClass("r1-off");
        }

        $("#r6").removeClass("r6-off").addClass("r6-on");
        $("#r2").removeClass("r2-on").addClass("r2-off");
        $("#r3").removeClass("r3-on").addClass("r3-off");
        $("#r4").removeClass("r4-on").addClass("r4-off");
        $("#r5").removeClass("r5-on").addClass("r5-off");
        $("#r7").removeClass("r7-on").addClass("r7-off");
       
        const chargeDataR6 = async () => {

            try{
                const response_r6 = await fetch("https://felipemiramontesr.net/node/11?_format=json");
                const data_r6 = await response_r6.json();
                console.log(data_r6);

                document.getElementById("image").innerHTML = "<img src= " + data_r6.field_image[0].url + "></img>";
                document.getElementById("title").innerHTML = data_r6.title[0].value;
                document.getElementById("localizacion").innerHTML = data_r6.field_localizacion[0].value;
                document.getElementById("fechas").innerHTML = data_r6.field_fechas[0].value + " / " + data_r6.field_fechas[0].end_value;
                document.getElementById("tipo_de_empleo").innerHTML = data_r6.field_ti[0].value;
                document.getElementById("body").innerHTML = data_r6.body[0].value;
                document.getElementById("tecnologias_empleadas").innerHTML = data_r6.field_tecnologias_empleadas[0].value;

                
                let stringCode = "";

                /*tecnologias_empleadas | Array walkthrow*/
                for(i=0; i<data_r6.field_tecnologias_empleadas.length; i++){
                    stringCode = stringCode + "<div>" + data_r6.field_tecnologias_empleadas[i].value + "</div>";
                }

                var tecnologiasGridStatus = $('#tecnologias_empleadas').attr('class');

                if(tecnologiasGridStatus == "tecnologias_empleadas_start"){
                    $("#tecnologias_empleadas").removeClass("tecnologias_empleadas_start").addClass("tecnologias_empleadas");
                }

                document.getElementById("tecnologias_empleadas").innerHTML = stringCode;
            }
                catch(error){
                        console.log(error);
                }
        }
        chargeDataR6();


    }); 

    $("#r7").on( "click", function() {

        var r1Status = $('#r1').attr('class');
        
        if(r1Status == "r1-on"){
            $("#r1").removeClass("r1-on").addClass("r1-off");
        }

        $("#r7").removeClass("r7-off").addClass("r7-on");
        $("#r2").removeClass("r2-on").addClass("r2-off");
        $("#r3").removeClass("r3-on").addClass("r3-off");
        $("#r4").removeClass("r4-on").addClass("r4-off");
        $("#r5").removeClass("r5-on").addClass("r5-off");
        $("#r6").removeClass("r6-on").addClass("r6-off");
       
        const chargeDataR7 = async () => {

            try{
                const response_r7 = await fetch("https://felipemiramontesr.net/node/14?_format=json");
                const data_r7 = await response_r7.json();
                console.log(data_r7);

                document.getElementById("image").innerHTML = "<img src= " + data_r7.field_image[0].url + "></img>";
                document.getElementById("title").innerHTML = data_r7.title[0].value;
                document.getElementById("localizacion").innerHTML = data_r7.field_localizacion[0].value;
                document.getElementById("fechas").innerHTML = data_r7.field_fechas[0].value + " / " + data_r7.field_fechas[0].end_value;
                document.getElementById("tipo_de_empleo").innerHTML = data_r7.field_ti[0].value;
                document.getElementById("body").innerHTML = data_r7.body[0].value;
                document.getElementById("tecnologias_empleadas").innerHTML = data_r7.field_tecnologias_empleadas[0].value;

                
                let stringCode = "";

                /*tecnologias_empleadas | Array walkthrow*/
                for(i=0; i<data_r7.field_tecnologias_empleadas.length; i++){
                    stringCode = stringCode + "<div>" + data_r7.field_tecnologias_empleadas[i].value + "</div>";
                }

                var tecnologiasGridStatus = $('#tecnologias_empleadas').attr('class');

                if(tecnologiasGridStatus == "tecnologias_empleadas_start"){
                    $("#tecnologias_empleadas").removeClass("tecnologias_empleadas_start").addClass("tecnologias_empleadas");
                }

                document.getElementById("tecnologias_empleadas").innerHTML = stringCode;
            }
                catch(error){
                        console.log(error);
                }
        }
        chargeDataR7();
    }); 
});
