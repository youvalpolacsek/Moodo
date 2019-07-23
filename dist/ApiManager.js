class ApiManager{
  
  constructor(){
    this.moodSet = []
  }
  
  // userLogin(name){
  //   let data = await $.post(`/user`, username)
  //   return data
  // }

  getMoodSet(mood){
    $.get(`/moods/${mood}`, function(data){
      return data
    })
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