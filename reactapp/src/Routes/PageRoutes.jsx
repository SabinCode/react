import { BrowserRouter, Route , Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import AboutPage from "../components/About/About";
import UnsereTeppichePage from "../components/UnsereTeppiche/UnsereTeppiche";
function PageRoutes (){

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/About" element={<AboutPage/>}/>
            <Route path="/UnsereTeppiche" element={<UnsereTeppichePage/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default PageRoutes