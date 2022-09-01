import React from "react";

const List=({relavtive})=>{
    return(
       <li> {relavtive.id}:{relavtive.name}:{relavtive.place}</li>
    )
}

export default List