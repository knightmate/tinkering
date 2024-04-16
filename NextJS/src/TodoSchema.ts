// Todo.ts
import  data from '../data.js';

type Todo = {
    id: string;
    text: string;
    done: boolean;
  };
   
  class TodoService {
    private todos: Todo[];
  
    constructor(initialTodos: Todo[] = []) {
      this.todos = data.getData();
      ;
    }
  
    // Method to get all todos
    getTodos(): Todo[] {
      return this.todos;
    }
  
    // Method to mark a todo as done by its id
    markDone(todoId: string): boolean {
      const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
  
      if (todoIndex !== -1) {
        // Toggle the 'done' status
        this.todos[todoIndex].done = !this.todos[todoIndex].done;
        return true; // Successfully marked as done
      }
  
      return false; // Todo with given id not found
    }

    refreshTodo(){
      data.refreshData()
      console.log("refreshTodo",data.getData()[0])
      this.todos = data.getData();

     }
  }
  
export default new TodoService();  