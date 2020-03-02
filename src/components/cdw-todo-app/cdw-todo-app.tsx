import { Component, h, State, Listen } from "@stencil/core";

@Component({
  tag: "cdw-todo-app"
})
export class CdwTodoApp {
  @State() todos: Array<string> = [];
  @State() todo: string = "";

  @Listen("keydown")
  addTodoOnKeyEnter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.addTodo();
    }
  }

  handleChange(event) {
    this.todo = event.target.value;
  }

  addTodo() {
    event.preventDefault();
    this.todos = [...this.todos, this.todo];
    this.todo = "";
  }

  removeTodo(todo: string) {
    this.todos = this.todos.filter(item => item !== todo);
  }

  render() {
    return (
      <div class="col-12" id="cdw-todo-app">
        <h2 class="text-center text-muted">Lista de tareas</h2>
        <form class="form-inline">
          <div class="form-group mb-2 col-10">
            <input
              autoComplete="off"
              type="text"
              id="todo"
              class="form-control col-12"
              value={this.todo}
              onInput={event => this.handleChange(event)}
            />
          </div>
          <button
            class="btn btn-primary mb-2"
            onClick={this.addTodo.bind(this)}
          >
            Crear tarea
          </button>
        </form>
        <ul class="list-group">
          {this.todos.length
            ? this.todos.map((item) =>
              <li class="list-group-item">
                {item}
                <button
                  type="button"
                  class="btn btn-danger float-right"
                  onClick={() => this.removeTodo(item)}>
                  Eliminar tarea
                </button>
              </li>
            )
            : <div class="alert alert-danger text-center">No hay tareas disponibles!</div>
          }
        </ul>
      </div>
    );
  }
}
