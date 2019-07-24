class StatManager {
  constructor(){
    this.moods = []
  } 
  async getStatFromDB(name){
    let moodsStat = await $.get(`/usermood/${name}`)
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
    console.log(this.moods)
    return this.moods
  } 
}