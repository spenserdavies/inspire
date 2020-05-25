import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import ImageController from "./controllers/image-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import ClockController from "./controllers/clock-controller.js"
// import Clock from "./models/clock.js/index.js";


//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.imageController = new ImageController();
    this.quoteController = new QuoteController();
    //this.clockController = new ClockController();
    // this.clock = new Clock();
  }
}

window["app"] = new App();

// let checkboxElem = document.getElementById("checkbox1");
// checkboxElem.removeAttribute("checked")
// checkboxElem.setAttribute("checked", "checked")