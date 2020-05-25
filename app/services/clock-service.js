import Clock from "../models/Clock.js";
import store from "../store.js";


class ClockService {
  getTime() {
  store.commit("clock", new Clock());
  }
}

const clockService = new ClockService();
export default clockService;
