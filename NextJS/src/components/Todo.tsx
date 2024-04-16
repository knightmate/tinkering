'use client'

import Link from "next/link";
 import React, { useTransition } from "react";
 import { useRouter } from 'next/navigation'
 
 
const Todo=({todo})=>{
   
    const router = useRouter();
    const [isPending,startTransition]=useTransition();

     const onClikc=(targetid:string)=>{
        
        const fetchData = async () => {
            try {
              const response = await fetch(`/api/todo?id=${targetid}`);
              
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
      
              const result = await response.json();
              
              console.log(result.message);
              if(result.message=="Done"){
                router.refresh()

              }

            } catch (error) {
               
            } finally {
               
            }
          };
      
          startTransition(()=>fetchData());
      

     }
    
     const line=todo.done?"line-through":"";
return (
    <>
     <div onClick={()=>{
        onClikc(todo.id)
    }} className={`${line}  cursor-pointer`}>
    {
    todo.text
    }
    <h3>{isPending && "Updating...."}</h3>
    </div>
     </> 
)
}

export default Todo