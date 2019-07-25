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
    
    renderStats = function (moodsData, byTimeData){
    $("#monthChart").remove(); 
    $('.monthBody').append('<canvas id="monthChart" width="400" height="250"></canvas>');
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
   options: {
     responsive: false
 }
})

$("#dayChart").remove(); 
$('.dailyBody').append('<canvas id="dayChart" width="400" height="250"></canvas>');
let ctx2 = $("#dayChart")
var myDoughnutChart = new Chart(ctx2, {
type: 'bar',
data: {
   labels: ["Morning","Noon","Evening"],
   datasets: [
    {
      label: "Happy",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: "black",
      borderWidth: 1,
      data: [byTimeData.morning.happy, byTimeData.noon.happy , byTimeData.evening.happy]
    },
    {
      label: "Sad",
      backgroundColor: 'rgba(255, 99, 1)',
      borderColor: "black",
      borderWidth: 1,
      data: [byTimeData.morning.sad, byTimeData.noon.sad, byTimeData.evening.sad]
    },
    {
      label: "InLove",
      backgroundColor: 'rgba(54, 162, 235)',
      borderColor: "black",
      borderWidth: 1,
      data: [byTimeData.morning.inLove, byTimeData.noon.inLove, byTimeData.evening.inLove]
    },
    {
      label: "Curious",
      backgroundColor: 'rgba(255, 206, 86)',
      borderColor: "black",
      borderWidth: 1,
      data: [byTimeData.morning.curious, byTimeData.noon.curious, byTimeData.evening.curious]
    }
  ]
},
options: {
 responsive: false
}
})
}

renderWeekStats(moodsData){
    
}

}


$(document).ready(function () {
    $('.carousel').carousel({ padding: 400 })
  })

