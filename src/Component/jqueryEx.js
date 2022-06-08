import React from "react";
import $ from 'jquery';
const JqueryExample = () =>{

    const hide = () =>{
        $("h3").hide(3000);
    }
    const show = () =>{
        $("h3").show(3000);
    }

    return(
        <div>
            <h1>Jquery Example</h1>
            <h3>Simple Text Show</h3>
            <button onClick={hide}>Hide Text</button>
            <button onClick={show}>Show Text</button>
        </div>
    )
}

export default JqueryExample;