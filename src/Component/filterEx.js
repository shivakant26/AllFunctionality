import React, { useState } from "react";

const FileterExample = (props) =>{
    const [data , setdata ] = useState(props.list);
    const [ searchText , setSerchText ] = useState("");
    const search = (e) =>{
       const searchText = e.target.value;
       let filterdata = props.list.filter((element)=>{
        return element.fname.toLowerCase().indexOf(searchText) > -1
       })
       setdata(filterdata);
       setSerchText();
   }
    return(
        <div>
            <h1>FileterExample</h1>
            <input type="text" 
            placeholder="search" 
            value={searchText}
            onChange={(e)=>search(e)} /><br />
            {
                data.map((item,id)=>
                <ul key={id}>
                    <li>{item.fname}::{item.lname}</li>
                </ul>
                )
            }
        </div>
    )
}

export default FileterExample;