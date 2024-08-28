import {NavLink} from "react-router-dom";
function Header (){
    return(
        
        <header>
            <nav>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Unsere-Teppiche">Unsere Teppiche</NavLink>
        <NavLink to="/ProductionSteps">ProductionSteps</NavLink>
        <NavLink to="/QUALITÄT">QUALITÄT</NavLink>
        {/* <NavLink to="/REINIGUNG-PFLEGE">REINIGUNG & PFLEGE</NavLink>
        <NavLink to="/KONTAKT">KONTAKT</NavLink> */}
            </nav>
        </header>
       
    );
}

export default Header
