import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";

const ApiCall = () =>{
    const [list , setlist ] = useState([]);
    const apicall = () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(list => setlist(list))
    }
    useEffect(()=>{
        apicall();
    },[])
    return(
        <div>
            <h2>ApiCall Example</h2>
            <button onClick={apicall}>Click me!</button>
            <br/>
            {
                list.map((item,id)=>
                <div key={id}>
                    <div className="row">
                            <span className="api-span"><strong>Id:</strong>{item.id}</span>
                            <span className="api-span"><strong>Name:</strong>{item.name}</span>
                            <span className="api-span"><strong>Street:</strong>{item.address.street}</span>
                            <span className="api-span"><strong>city:</strong>{item.address.city}</span>
                    </div>
                    
                    
                </div>
                )
            }
        </div>
    )
}

export default ApiCall;