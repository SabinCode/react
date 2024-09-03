import { BrowserRouter, Route , Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import AboutPage from "../components/About/About";
import UnsereTeppichePage from "../components/UnsereTeppiche/UnsereTeppiche";
import AxiosPage from "../components/Axios/Axios";
import DayNine from "../components/DayNine/DayNine";
function PageRoutes (){

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/About" element={<AboutPage/>}/>
            <Route path="/UnsereTeppiche" element={<UnsereTeppichePage/>}/>
            <Route path="/Axios" element={<AxiosPage/>}/>
            <Route path="/DayNine" element={<DayNine/>}/>
            
        </Routes>
    </BrowserRouter>
    )
}

export default PageRoutes