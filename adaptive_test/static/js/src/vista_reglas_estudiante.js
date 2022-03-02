/* Javascript for ReglasXBlock. */
function ReglasEstudiante(runtime, element) {
    var handlerUrl = runtime.handlerUrl(element, 'show_resources');
    var handlerUrlLoad = runtime.handlerUrl(element, 'load_test');

    $(function ($) {          

        var tag = ""
        var recursoLoad= ""
        
        $.ajax({
            type: "POST",
            url: handlerUrlLoad,
            data: "null",
            success: function (data) {
                window.test = data.test;
                
                if (data.test_result) {
                    
                    var resultado = data.test_result.result
                    if(resultado.includes("Dominante Auditivo")){
                        var cohorte= "Auditivo";
                        console.log(cohorte)
                    }
                    if(resultado.includes("Dominante Visual")){
                        var cohorte= "Visual";
                        console.log(cohorte)
                    }
                    if(resultado.includes("Dominante Kinestésico")){
                        var cohorte= "Kinestetico";
                        console.log(cohorte)
                    }
                    recursoLoad=cohorte;
                   
                    //resultado = resultado.replaceAll("<br>"," ").split(" ")
                    
                    
                    //console.table(resultado);

                    
                    $("#test").append('<p> Tu test ha revelado que eres: <br><b>' +data.test_result.result+'</p>')
                                   
                    var options = {
                        responsive: false,
                        maintainAspectRatio: true,
                        scale: {
                            max: 3,
                            min: 0,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    };

                }
            }
        });

        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: "null",
            dataType: 'json',
            success: function(data){
                window.test = data.test;
                console.table(data)
                setTimeout(function(){
                    //console.log(tagcohorte[14])
                    for(k=0; k<(data.length); k++){
                        //console.log(data[k].tag)
                        //console.log(recursoLoad)         
                        if(data[k].tag==recursoLoad){
                            var recursos=data[k].resource;                            
                            console.log(data[k].resource)
                        }
                    }
                    
                    var resources_list = document.getElementById('resources_allowed')
                    resources_list.innerHTML = ''

                    tag_estudiante = tag.split("-")
                    
                    //console.table(data)
                    
                    //console.log(resources_allowed);
                    //var recursos=resources_allowed.map(item => "<br>"+item.resource)

                    resources_list.innerHTML = "Tus recursos están disponibles en: "+recursos
                },100)
                
            }
        });


    });
}

document.getElementById("btnVistaMaestro").addEventListener("click",function(){
    window.location.href="/scenario/adaptive_test.0/vista_reglas_maestro/"+window.location.search;
});