import React from "react";

const PropsEx = (props) => {
   const person_data = props.person
   const data = [];
   data.push(person_data)
    return (
        <div>
            <h2>Props Example</h2>
            <p>Title Called Dynamically : {props.title}</p>
            <div className="object-data">
                {
                    data.map((item,index)=>
                    <div key={index}>
                        <span className="props-span">{item.name}</span>
                        <span className="props-span">{item.lastname}</span>
                        <span className="props-span">{item.age}</span>
                    </div>
                    
                    )
                }
            </div>
        </div>
    )
}
export default PropsEx;