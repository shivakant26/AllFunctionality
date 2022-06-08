import './App.css';
import Home from './Component/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PropsEx from './Component/propsEx';
import StateEx from './Component/stateEx';
import CommonPage from './Component/commonPage';
import PageNotFound from './Component/pageNotFound';
import HookForm from './Component/hookForm';
import ApiCall from './Component/apiCall';
import AxoisCall from './Component/axios';
import FileterExample from './Component/filterEx';
import JqueryExample from './Component/jqueryEx';
import UseMemoExample from './Component/useMemo';
import OneStateEx from './Component/oneStateEx';
function App() {
  const data = [
    {fname:"Jhon",lname:"Doe"},
    {fname:"Dull",lname:"Roy"},
    {fname:"Ellan",lname:"Doe"},
    {fname:"mark",lname:"afarat"},
    {fname:"evram",lname:"sunny"},
    {fname:"omniq",lname:"tuts"},
    {fname:"Jhon",lname:"Doe"},
  ]
  return (
    <div className="App">
      <Router>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path="/common-page" element={<CommonPage/>}>
            <Route path="propsEx" 
              element={<PropsEx title="Awesome website"
               person={
                {name:"jhon",lastname:"Doe",age:20}}/>} />
            <Route path="stateEx" element={<StateEx/>} />
            <Route path="hook-form" element={<HookForm/>} />
            <Route path="api-call" element={<ApiCall/>} />
            <Route path="axios-call" element={<AxoisCall/>} />
            <Route path="filter-ex" element={<FileterExample list={data}/>} />
            <Route path="jquery-ex" element={<JqueryExample/>} />
            <Route path="use-memo" element={<UseMemoExample/>} />
            <Route path="one-state-ex" element={<OneStateEx/>} />
           </Route>
           <Route path='*' element={<PageNotFound />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
