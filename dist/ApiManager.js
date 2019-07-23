class ApiManager{
  
  async userLogin(username){
    let data = await $.post(`/user`, username)
    return data
  }

  async getMoodSet(mood){
    let data = $.get(`/moods/:${mood}`)
    return data
  }

  getUserData(){
    $.get('/user')
  }

  saveSet(){
    $.post(',moods', )
  }

  deleteSet(){
    $.ajax({
      url: `/moods/`,
      type: 'DELETE',
    })
  }
}