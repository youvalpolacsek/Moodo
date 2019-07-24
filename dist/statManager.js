class StatManager {
  constructor(){
    this.username
    this.moods = []
    this.timeInDayMoods = {}
  } 

  moodCounter = function(array, objectForCounting){
    array.forEach(mood => {
      switch(mood){
        case('sad'): objectForCounting.sad++
        return;
        case('happy'): objectForCounting.happy++
        return;
        case('inLove'): objectForCounting.inLove++
        return;
        case('curious'): objectForCounting.curious++
        return;
      }
    })
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
    
    this.moods = [moodCount.sad, moodCount.happy, moodCount.inLove, moodCount.curious]
    return this.moods
  }

  async getStatsByTime(){
    let moodsStat = await $.get(`/usermood/${this.username}`)
    let tempObj = {
      morning: [],
      noon: [],
      evening: []
    }
    
    let moodsByTime = {
      morning: {sad: 0, happy: 0 , inLove: 0, curious: 0},
      noon: {sad: 0, happy: 0 , inLove: 0, curious: 0},
      evening: {sad: 0, happy: 0 , inLove: 0, curious: 0}
    }

    moodsStat.forEach(m => {
      let date = new Date(m.date)
      let time = date.getHours()
      if(time >= 6 && time < 12){
        tempObj.morning.push(m.mood)
      }
      else if(time >= 12  && time < 18){
        tempObj.noon.push(m.mood)
      }
      else if(time >= 18 || time < 6){
        tempObj.evening.push(m.mood)
      }
    })


    this.moodCounter(tempObj.noon, moodsByTime.noon)
    this.moodCounter(tempObj.evening, moodsByTime.evening)
    this.moodCounter(tempObj.morning, moodsByTime.morning)

    this.timeInDayMoods = moodsByTime
  }
  
  submitUsername = (name) => this.username = name

  
}


