const render = new Renderer()
const apiManager = new ApiManager()


const pageLoad = function(){
  
}

$('.container').on("click", 'i', function(){
  let currentID = this.id


  render.renderMood()

  // console.log(currentID)
  // render.renderMood(apiManager.getMoodSet(currentID))
})

// $('.mood-set').on("click", 'save', function(){
//   apiManager.saveSet()
// })



// $('.mood-set').on("click", 'back', function(){
//   apiManager.deleteSet()
// })
