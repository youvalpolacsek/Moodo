class ApiManager{
  
  constructor(){
    this.moodSet = []
  }
  
  // userLogin(name){
  //   let data = await $.post(`/user`, username)
  //   return data
  // }

  async getMoodSet(mood){
    let moodSet
    await $.get(`/moods/${mood}`, function(data){
      console.log(data)
      moodSet = data
    })
    console.log(moodSet)
    return moodSet
  }

  getUserData(name){
    $.get(`/user/${name}`, function(data){
      return data
    })
  }

  // saveSet(){
  //   $.post(',moods', )
  // }

  // deleteSet(){
  //   $.ajax({
  //     url: `/moods/`,
  //     type: 'DELETE',
  //   })
  // }
}