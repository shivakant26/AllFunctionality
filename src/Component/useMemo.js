import React, { useMemo, useState } from "react";

const UseMemoExample = () =>{
    const [count , setCount ] = useState(0)
    const [list , setlist ] = useState(50)

    // const multiCount = () =>{
    //     console.warn("count")
    //     return count * 20 ;
    // }

    const multiCountMemo = useMemo(function multiCount(){
        console.warn("count")
        return count * 20;
    },[count])
    return(
        <div>
            <h3>Use Memo Example</h3>
            <strong>Function of UseMemo</strong>
            <p>(*)to stop unwanted function calling</p>
            <p>(*)enchange performace of app</p>
            <h2>Count:{count}</h2>
            <h2>List:{list}</h2>
            <h2>Multiply:{multiCountMemo}</h2>
            <button onClick={()=>setCount(count + 1)}>count ++</button>
            <button onClick={()=>setlist(list * 10)}>list ++</button>
        </div>
    )
}
export default UseMemoExample;