import Search from "./pages/search/Search";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import { Routes,Route, Navigate } from "react-router-dom";
function App() {
 
    return (<div>
    <Routes>
    <Route path="/"  element ={<Navigate to ={'/home'}/>}/>
  <Route path="/home" element={<Home/>} />
  <Route path="/search" element={<Search/>} />
  <Route path="/detail" element={<Detail/>} />
</Routes>
    </div>
     

        )
}

export default App;
