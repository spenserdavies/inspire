export default class Clock{
  constructor(data){
    this.date = new Date()
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes()
    this.seconds = this.date.getSeconds();
    this.amPm = ""
    if(this.hours<12){
      this.amPm = "AM"
    } else {
      this.amPm = "PM"
    }

    if(this.hours > 12){
      this.hours -= 12;
    } 

    this.hours = ("0" + this.hours).slice(-2);
    this.minutes = ("0" + this.minutes).slice(-2);
    this.seconds = ("0" + this.seconds).slice(-2);

    console.log(this.hours)
    console.log(this.minutes)
    console.log(this.seconds);
    this.timeout = setInterval(this.newClock, 500)

  }
  newClock() {
    return new Clock();
  }
    
  get Template(){
    return `${this.hours} : ${this.minutes} : ${this.seconds} ${this.amPm}`
  }
  update(){
    // var clock = new Date();
    // var hours = clock.getHours();
    // var minutes = clock.getMinutes();
    // var seconds = clock.getSeconds();
    
    
    // let hoursStr = ("0"+ hours).slice(-2);
    // let minutesStr = ("0" + minutes).slice(-2)
    // let secondsStr = ("0" + seconds).slice(-2)
    
    // document.getElementById("clock").innerHTML = hoursStr + " : " + minutesStr + " : " + secondsStr + " " + amPm;
    // let timeout = setTimeout(this.update, 100);
  }
}

