export default class Quote {
  constructor(data){
    this.body = data.quote.body
    this.author = data.quote.author
  }
  // get Template(){
  //   return `
  //   <ul>"${this.body}"</ul> <!--look at the w3 schools css hover options -->
  //   <li>${this.author}</li>
  //   `
  // }
}