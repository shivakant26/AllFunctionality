import axios from "axios";
import React, { useEffect, useState } from "react";

const AxoisCall = () =>{
    const [post , setPost ] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(post=>setPost(post.data))

    },[])
    return(
        <div>
            <h1>Axios Call Example</h1>
            {
                post.map((item,index)=>
                <div key={index}>
                    <span>{item.title}</span>
                    <span>{item.body}</span>
                </div>
                )
            }
        </div>
    )
}

export default AxoisCall;