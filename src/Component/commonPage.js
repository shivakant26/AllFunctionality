import React from "react";
import { Outlet } from "react-router-dom";

const CommonPage = () =>{
    return(
        <div>
            <Outlet />
        </div>
    )
}

export default CommonPage;