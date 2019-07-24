class StatManager {
  constructor(){
    this.moods = {
      happy: 0,
      sad: 0,
      inLove: 0,
      curious: 0
    }
  } 
  updateStat(mood){
        switch(mood){
          case("happy"):
          this.moods.happy++
          break;
          case("sad"):
          this.moods.sad++
          break;
          case("inLove"):
          this.moods.inLove++
          break;
          case("curious"):
          this.moods.curious++
          break;
        }
  }
  

}