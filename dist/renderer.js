class Renderer {
    constructor(){}
 
    renderMood = function(res){
        $(".mood-set").empty();
        const source = $(`#mood-template`).html();
        const template = Handlebars.compile(source);
        const newHTML = template(res);
        $(".mood-set").append(newHTML)
    }
}
                $(document).ready(function(){
                  $('#mood').modal();
                 })
            
                 $(document).ready(function(){
                    $('.carousel').carousel({shift:400})})