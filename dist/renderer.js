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
    
    renderStats = function (moodsData){
        console.log(moodsData)
        // var ctx = document.getElementById('#monthChart').getContext('2d');
   let ctx = $("#monthChart")
   var myDoughnutChart = new Chart(ctx, {
   type: 'doughnut',
   data: {
       labels: ["Happy","Sad","inLove","Curious"],
       datasets: [{
           label: 'My First dataset',
           backgroundColor: [
                              'rgb(255, 99, 132)',
                              'rgba(255, 99, 1)',
                              'rgba(54, 162, 235)',
                              'rgba(255, 206, 86)'
           ],
           data: moodsData
       }]
   },

 //   // Configuration options go here
   options: {
     responsive: false
 }
})

    }
}






$(document).ready(function () {
    $('.carousel').carousel({ padding: 400 })
  })

