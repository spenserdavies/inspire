export default class Todo{
    constructor(data){
        this.todo = data.todo
        this.completed = data.completed || false  //{ type: Boolean, required: true, default: false}
        this.id = data._id || data.id// {type: String, required: true, unique: true }
        this.user = data.user || "" // { type: String, required: true },
        this.description = data.description || "A Task To Do"// { type: String, required: true},
        
    }
    get Template(){
        return /*html*/`
        <li id="${this.id}">${this.todo}<i class="far fa-trash-alt text-white pointer" onclick="app.todoController.removeTodo('${this.id}')"></i></li>
        `
    }
}