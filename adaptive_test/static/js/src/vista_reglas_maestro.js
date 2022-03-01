/* Javascript for ReglasXBlock. */
function ReglasMaestro(runtime, element) {

    var handlerUrl = runtime.handlerUrl(element, 'tag_resource');

    $('#send', element).click(function(eventObject) {

        var filepdf = document.getElementById("myfilepdf").value
        var fileaudio = document.getElementById("myfileaudio").value
        var filevideo = document.getElementById("myfilevideo").value

        var selector1 = document.getElementById("selector1")
        var selector2 = document.getElementById("selector2")
        var selector3 = document.getElementById("selector3")
              

        var tag = "" 
        
        for(var i=0; i< selector1.length;i++){

            if (selector1[i].selected===true){
                var tag = tag + selector1[i].value + "-"
                console.log('btn clicked',tag);
            }
        }


        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify({
                "tag": tag,
                "resource":filepdf
        }),
        
            success: function(data){
                console.log("hola");
                var showInfoResource1 = document.getElementById('info-resource')
                showInfoResource1.innerHTML = ''
                showInfoResource1.innerHTML =JSON.stringify(data.tag)

            }
        });
        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify({
                "tag": tag,
                "resource":fileaudio
        }),
        
            success: function(data){
                console.log(data);
                var showInfoResource2 = document.getElementById('info-resource')
                showInfoResource2.innerHTML = ''
                showInfoResource2.innerHTML =JSON.stringify(data.tag)

            }
        });
        
        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify({
                "tag": tag,
                "resource":filevideo
        }),
        
            success: function(data){
                console.log(data);
                var showInfoResource3 = document.getElementById('info-resource')
                showInfoResource3.innerHTML = ''
                showInfoResource3.innerHTML =JSON.stringify(data.tag)

            }
        });


    });
    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}

function agregarcontenido(a){
    tipoagregacion = a;
    var btn = document.getElementById("send")
    btn.removeAttribute("disabled") 
     
    if(tipoagregacion=="pdf"){
        document.getElementById("tipo_contenido").innerHTML = "<h6 class='card-title mb-0' > Seleccionaste subir un archivo PDF </h6>";
        codigo=''+        
    '<form class="d-flex mt-3 flex-wrap" id="estilo_aprendizaje" action=">'+
        '<label class="formFile mt-3 mb-1" for="myfile"> Archivo PDF: </label>'+
        '<input class="form-control mb-3" type="file" id="myfilepdf" name="myfile">'+
                    
        '<div class="card me-3">'+
            '<div class="card-header text-white bg-primary">'+
                '<b class="m-0">La cohorte recomendada es "Visual", puedes cambiarla a continuación:</b>'+
            '</div>'+
            '<div class="card-body border border-primary">'+
                '<select class="form-select" name="select_aprendizaje" id="selector1" >'+
                    '<option value="verbal">Auditivo</option>'+
                    '<option value="visual" selected>Visual</option>'+
                    '<option value="visual">Kinestético</option>'+
                '</select>'+
            '</div>'+
                       
        '</form>'+
        '<p class="bd-callout bd-callout-warning mt-4 mb-1" id="nota-importante"><span>Nota:</span> Recuerda que debes escoger una cohorte.</p>';
        
        console.log(codigo)
        document.getElementById("agregarcontenido").innerHTML = codigo;
    }

    if(tipoagregacion=="audio"){
        document.getElementById("tipo_contenido").innerHTML = "<h6 class='card-title mb-0' > Seleccionaste subir un audio </h6>";
        codigo=''+        
    '<form class="d-flex mt-3 flex-wrap" id="estilo_aprendizaje" action=">'+
        '<label class="formFile mt-3 mb-1" for="myfile"> Audio mp3: </label>'+
        '<input class="form-control mb-3" type="file" id="myfileaudio" name="myfile">'+
                    
        '<div class="card me-3">'+
            '<div class="card-header text-white bg-primary">'+
                '<b class="m-0">La cohorte recomendada es "Auditiva", puedes cambiarla a continuación:</b>'+
            '</div>'+
            '<div class="card-body border border-primary">'+
                '<select class="form-select" name="select_aprendizaje" id="selector1" >'+
                    '<option value="verbal" selected>Auditivo</option>'+
                    '<option value="visual">Visual</option>'+
                    '<option value="visual">Kinestético</option>'+
                '</select>'+
            '</div>'+
                       
        '</form>'+
        '<p class="bd-callout bd-callout-warning mt-4 mb-1" id="nota-importante"><span>Nota:</span> Recuerda que debes escoger una cohorte.</p>';
        
        console.log(codigo)
        document.getElementById("agregarcontenido").innerHTML = codigo;
    }

    if(tipoagregacion=="video"){
        document.getElementById("tipo_contenido").innerHTML = "<h6 class='card-title mb-0' > Seleccionaste subir un video </h6>";
        codigo=''+        
    '<form class="d-flex mt-3 flex-wrap" id="estilo_aprendizaje" action=">'+
        '<label class="formFile mt-3 mb-1" for="myfile"> Video: </label>'+
        '<input class="form-control mb-3" type="file" id="myfilevideo" name="myfile">'+
                    
        '<div class="card me-3">'+
            '<div class="card-header text-white bg-primary">'+
                '<b class="m-0">La cohorte recomendada es "kinestética", puedes cambiarla a continuación:</b>'+
            '</div>'+
            '<div class="card-body border border-primary">'+
                '<select class="form-select" name="select_aprendizaje" id="selector1" >'+
                    '<option value="verbal">Auditivo</option>'+
                    '<option value="visual">Visual</option>'+
                    '<option value="visual" selected>Kinestético</option>'+
                '</select>'+
            '</div>'+
                       
        '</form>'+
        '<p class="bd-callout bd-callout-warning mt-4 mb-1" id="nota-importante"><span>Nota:</span> Recuerda que debes escoger una cohorte.</p>';
        
        console.log(codigo)
        document.getElementById("agregarcontenido").innerHTML = codigo;
    }

}

document.getElementById("btnVistaEstudiante").addEventListener("click",function(){
    window.location.href="/scenario/adaptive_test.0/vista_reglas_estudiante/"+window.location.search;
});