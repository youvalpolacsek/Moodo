const renderer = new Renderer()
const statManager = new StatManager()
const apiManager = new ApiManager()

const moodSetGetter = async function(){
  $('.mood-set').empty()
  let currentID = this._openingTrigger.id
//   let moodSet = {
//     "name": "happy",
//     "gifUrl": "https://giphy.com/embed/3in5HNB71gZvq",
//     "youtubeUrl": "h9nE2spOw_o",
//     "quote": "True happiness is not attained through self-gratification, but through fidelity to a worthy purpose. Helen Keller"
// }

  let moodSet = await apiManager.getMoodSet(currentID)
  renderer.renderMood(moodSet)

}

let userDataTransfer = async function(){
  let userData = await apiManager.getUserData()
  renderer.renderSavedMoods(userData)
}

$(document).ready(function () {
  $('#mood').modal({onOpenStart: moodSetGetter});
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

$(document).ready(function(){
  $('#statModal').modal();
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
   if (userName){
   $(".side-bar-name").text(userName) 
   statManager.submitUsername(userName)
   apiManager.userLogin(userName)
   myModal.style.display = "none";
  }
})


$(".mood-set").on("click", ".save", function(){
  let container = $(this).closest(".buttons")
  container.empty()
  apiManager.saveSet()
})

$(".collapsible").on("click", ".delete", async function(){
  let itBe = $(this).closest(".savedMood")
  let date = itBe.find(".date").text()
  let moodName = itBe.find(".mood-name").text()
  let moodToDel = {mood: moodName, date: date}
  await apiManager.deleteSet(moodToDel)
  userDataTransfer()
})


$(".statButton").on("click" , async function(){
  let moodData = await statManager.getStatFromDB()
  let byTimeData = await statManager.getStatsByTime()
  console.log(byTimeData)
  renderer.renderStats(moodData,byTimeData)
})


