class StatManager {
  constructor(){
    this.username
    this.moods = []
  } 
  async getStatFromDB(){
    let moodsStat = await $.get(`/usermood/${this.username}`)
    let moodCount = {
        sad: 0,
        happy: 0,
        inLove: 0,
        curious:0
      }
    moodsStat.forEach(mood => {
      switch(mood.mood){
        case('sad'): moodCount.sad++
        return;
        case('happy'): moodCount.happy++
        return;
        case('inLove'): moodCount.inLove++
        return;
        case('curious'): moodCount.curious++
        return;
      }
    })
    this.moods.push(moodCount.sad, moodCount.happy, moodCount.inLove, moodCount.curious)
    return this.moods
  }

  submitUsername = (name) => this.username = name

  
}


