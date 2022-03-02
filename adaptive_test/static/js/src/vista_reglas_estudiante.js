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
                var dim1=""
                var dim2=""
                var dim3=""
                var resultado1 = document.getElementById("resultado1")
                var resultado2 = document.getElementById("resultado2")
                var resultado3 = document.getElementById("resultado3")
                                                     
                                                              
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
                    $("#cohorteasignacion").append('<b>' +cohorte+'</b>')
                    recursoLoad=cohorte;
                   
                    resultadotext = resultado.replaceAll("<br>","").split(" ")
                    console.log(resultado)                    
                    dim1=resultadotext[3]
                    dim2=resultadotext[5]
                    dim3=resultadotext[7]
                    resultado1.innerText=dim1
                    resultado2.innerText=dim2
                    resultado3.innerText=dim3
                    //console.table(resultado);

                    
                    $("#testresult").append('<p><br><b>' +resultadotext[0]+resultadotext[1]+'</p>')
                                   
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
                var recursos=""
                setTimeout(function(){                    
                    for(k=0; k<(data.length); k++){                                
                        if(data[k].tag==recursoLoad){
                            recursos=recursos+data[k].resource+'<br>';                            
                            console.log(data[k].resource)
                        }
                    }                    
                    var resources_list = document.getElementById('recursoscohorte')
                    resources_list.innerHTML = ''

                    tag_estudiante = tag.split("-")
                    
                    resources_list.innerHTML = "<b>Repositorio </b><br>"+recursos
                },100)
                
            }
        });


    });
}

document.getElementById("btnVistaMaestro").addEventListener("click",function(){
    window.location.href="/scenario/adaptive_test.0/vista_reglas_maestro/"+window.location.search;
});