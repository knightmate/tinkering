'use client'

import { todo } from "node:test";
import React, { useTransition } from "react";
import Todo from "./Todo";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TodoList=({todos})=>{

    const router=useRouter();
    const [isPending,startTransition]=useTransition();



 const refreshPage=()=>{
    router.refresh()

 }
    const handleClearTodo = async () => {
        try {
          const response = await fetch('/api/cleartodo', {
            method: 'GET', // Adjust the HTTP method as needed
            headers: {
              'Content-Type': 'application/json',
              // Add any other headers if required
            },
            // You can include a request body if needed
            // body: JSON.stringify({/* your data here */}),
          });
    
          if (!response.ok) {
            throw new Error('Failed to clear todo list');
          }
    
          // Handle successful API response
          console.log('Todo list cleared successfully!');
          refreshPage()

        } catch (error) {
          console.error('Error clearing todo list:', error);
        }
      };
    
    
return (
    <>
    <a onClick={()=>startTransition(()=>handleClearTodo())} >
      <div className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700">
        <h3>{isPending?"Clearing.....":"Clear Todo list"}</h3>
      </div>
    </a>
     {
        todos.map((todo)=>{
            return <Todo todo={todo}/>
        })
    }
    </> 
)
}

export default TodoList