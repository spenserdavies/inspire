import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function _drawQuote(){
  let quote = store.State.quote.body;
  let author = store.State.quote.author;
  document.getElementById("quote").innerText = "'" + quote + "'";
  document.getElementById("author").innerText = author;
}



export default class QuoteController {
  constructor(){
    //console.log("quote controller");
        store.subscribe("quote", _drawQuote)
    QuoteService.getQuote();
  }
}
