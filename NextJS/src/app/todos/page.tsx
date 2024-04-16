import TodoService  from "@/TodoSchema";
import NewtodoList from "@/components/NewTodoForm";
import TodoList from "@/components/TodoList";
import React from "react";


const getData=async()=>{

 const todolist=  TodoService.getTodos();
 const waiting=await new Promise((resolve)=>{
  setTimeout(()=>resolve("done"),2000);
});
 
  return todolist;
 
  }
   
  

const TodosPage=async()=>{

  const todos=await getData();
 
  console.log("TodosPage",todos[0],"not Cache",TodoService.getTodos()[0]);

  return (
    < div>
    Todos
    <div  ></div>
    <TodoList   todos={todos}/>
     </div>
  )


};

export default TodosPage;
