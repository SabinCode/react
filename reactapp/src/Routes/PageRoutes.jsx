import { BrowserRouter, Route , Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import AboutPage from "../components/About/About";

function PageRoutes (){

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/About" element={<AboutPage/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default PageRoutes