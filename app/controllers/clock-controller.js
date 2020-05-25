import ClockService from "../services/clock-service.js";
import store from "../store.js";
import Clock from "../models/clock.js"

function _drawClock(){

  console.log(store.State.clock);
  let clock = store.State.clock;
  let hours = store.State.clock.hours;
  let minutes = store.State.clock.minutes;
  let template = ""
  template += clock.Template

//   let amPm = ""
// if(hours<12){
//   amPm = "AM"
// } else {
//   amPm = "PM"
// }
  
  document.getElementById("clock").innerText = template
  let timeout = setInterval(this.getTime, 100);
}



export default class ClockController {
  constructor(){
    //console.log("quote controller");
    store.subscribe("clock", _drawClock)
    store.subscribe("clock", this.getTime)
    this.getTime();
  }

  getTime(){
    // console.log("getting time");
    
    // let clock = new Date();
    // let hoursX = clock.getHours();
    // let minutesX = clock.getMinutes();
    // let secondsX = clock.getSeconds();
    // let time ={hours: hoursX, minutes: minutesX, seconds: secondsX}
     ClockService.getTime()
  }
}






// let amPm = ""
// if(hours<12){
//   amPm = "AM"
// } else {
//   amPm = "PM"
// }

// if(hours > 12){
//   hours -= 12;
// } else{
//   hours = hours;
// }

// let hoursStr = ("0"+ hours).slice(-2);
// let minutesStr = ("0" + minutes).slice(-2)
// let secondsStr = ("0" + seconds).slice(-2)