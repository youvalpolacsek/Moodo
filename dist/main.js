const renderer = new Renderer()
const apiManager = new ApiManager()

const aba = async function(){
  let currentID = this.id
  console.log(currentID)
  let moodSet = {
    "name": "happy",
    "gifUrl": "https://giphy.com/embed/3in5HNB71gZvq",
    "youtubeUrl": "h9nE2spOw_o",
    "quote": "True happiness is not attained through self-gratification, but through fidelity to a worthy purpose. Helen Keller"
}
console.log(moodSet)
  //let moodSet = await apiManager.getMoodSet(currentID)
   renderer.renderMood(moodSet)
}


$(document).ready(function () {
  $('#mood').modal({onOpenStart: aba});
})

$(document).ready(function(){
  $('.sidenav').sidenav();
});

$(document).ready(function(){
  $('#savedModal').modal();
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});

// $('.mood-set').on("click", 'save', function(){
//   apiManager.saveSet()
// })



// $('.mood-set').on("click", 'back', function(){
//   apiManager.deleteSet()
// })