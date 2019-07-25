const renderer = new Renderer()
const statManager = new StatManager()
const apiManager = new ApiManager()

const moodSetGetter = async function(){
  $('.mood-set').empty()
  let currentID = this._openingTrigger.id
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

  $(".aboutButton").on("click",function(){
  $('#about').modal();
})


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
  let moodName = itBe.closest(".collapsible-body").siblings(".collapsible-header").text()
  let moodNameLowerCase = moodName[0].toLowerCase() + moodName.slice(1)
  let moodToDel = {mood: moodNameLowerCase, date: date}
  await apiManager.deleteSet(moodToDel)
  userDataTransfer()
})


$(".statButton").on("click" , async function(){
  let moodData = await statManager.getStatFromDB()
  let byTimeData = await statManager.getStatsByTime()
  renderer.renderStats(moodData,byTimeData)
})


