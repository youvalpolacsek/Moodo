const renderer = new Renderer()

const apiManager = new ApiManager()



const aba = async function(){
  let currentID = this.id
  let moodSet = {
    "name": "happy",
    "gifUrl": "https://giphy.com/embed/3in5HNB71gZvq",
    "youtubeUrl": "h9nE2spOw_o",
    "quote": "True happiness is not attained through self-gratification, but through fidelity to a worthy purpose. Helen Keller"
}
  //let moodSet = await apiManager.getMoodSet(currentID)
   renderer.renderMood(moodSet)
}

let userDataTransfer = async function(){
  let userData = await apiManager.getUserData()
  renderer.renderSavedMoods(userData)
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

$('#savedMoods').on("click", userDataTransfer)

$(document).ready(function(){
  $('#userModal').modal();
});

window.onload = function() {
  $(document).empty()
  myModal.style.display = "block";
}

$("#submit-button").on("click", function(){
   let userName = $(this).siblings("#username").val()
   console.log(userName)
   apiManager.userLogin(userName)
   myModal.style.display = "none";
})
// const submitUserName = () => {
 
// }


// $('.mood-set').on("click", 'save', function(){
//   apiManager.saveSet()
// })



// $('.mood-set').on("click", 'back', function(){
//   apiManager.deleteSet()
// })