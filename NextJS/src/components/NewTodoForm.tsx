'use client'

import { defaultMaxListeners } from "events";
import React from "react";
import TodoList from "./TodoList";

const NewtodoList=()=>{

    const [todos,settodo]=React.useState();

    const onSubmit=(event:any)=>{
       // event.preventDefault();

         console.log('form',event.get("inputboxvalue"))

 

    }

return (
     <form  onSubmit={()=>{}} action={onSubmit}>
     <input name="inputboxvalue" type="text"></input>
     <input type="submit" ></input>
 
      </form>  
)
}

export default NewtodoList