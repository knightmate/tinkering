import TodoService  from "@/TodoSchema";
import { NextResponse } from "next/server"


export const GET=async(req)=>{

    const id = req.nextUrl.searchParams.get("id");

    console.log("Get API called!",id);

    TodoService.refreshTodo();
    
    console.log("Deleted!",TodoService.getTodos()[0]);

    return NextResponse.json({message:"Done",data:TodoService.getTodos()});

}