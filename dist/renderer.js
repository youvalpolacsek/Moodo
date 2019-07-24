class Renderer {
    constructor() { }

     //Helper function that empties the html that we will render to and render to it using hendelbars
     renderHandlebar(templateId, objToTemplate, appendToPlace) {
        $(appendToPlace).empty();
        const source = $(templateId).html();
        const template = Handlebars.compile(source)
        const newHTML = template(objToTemplate);
        $(appendToPlace).append(newHTML);
    }


    renderMood = function (res) {
        this.renderHandlebar(`#mood-template`,res,".mood-set")
    }

    renderSavedMoods = function (res){
        this.renderHandlebar(`#savedSad-template`, res, ".sadBody")
        this.renderHandlebar(`#savedHappy-template`, res, ".happyBody")
        this.renderHandlebar(`#savedInLove-template`, res, ".inLoveBody")
        this.renderHandlebar(`#savedCurious-template`, res, ".curiousBody")
    }
    
}

$(document).ready(function () {
    $('.carousel').carousel({ padding: 400 })
  })

