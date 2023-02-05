
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/resgister";


function App() {
    return (
        
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate replace to={"/login"}/>}/>
            </Routes>
        </div>
    );
}

export default App;
