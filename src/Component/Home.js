import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div >
            <div className="header-heading">
                <h1>Home Component</h1>
            </div>
            <div className="Menu-group">
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/common-page/propsEx">PropsEx</Link>
                        </li>
                        <li>
                            <Link to="/common-page/stateEx">StateEx</Link>
                        </li>
                        <li>
                            <Link to="/common-page/stateEx">StateEx</Link>
                        </li>
                        <li>
                            <Link to="/common-page/hook-form">HookFormExample</Link>
                        </li>
                        <li>
                            <Link to="/common-page/api-call">Fetch-Method</Link>
                        </li>
                        <li>
                            <Link to="/common-page/axios-call">Axios Call</Link>
                        </li>
                        <li>
                            <Link to="/common-page/filter-ex">FilterExample</Link>
                        </li>
                        <li>
                            <Link to="/common-page/jquery-ex">Jquery Example</Link>
                        </li>
                        <li>
                            <Link to="/common-page/use-memo">useMemo</Link>
                        </li>
                        <li>
                            <Link to="/common-page/one-state-ex">One State Example</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home;