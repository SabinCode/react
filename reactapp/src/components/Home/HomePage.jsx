import { useState } from "react";
import Button from "../Buttons/button"
import Header from "../Header/Header"
import { convertDate } from "../../../utils/date";

//useState should be inside the components.
//initial state and setter which begin with set

//strictmode in app jsx renders our browser twice

export const users = [{name: "tmg"}, {name:"ramm"}];

function HomePage () {
    console.log("render vayo")


    const [title, setTitle] = useState("old title")
    const [description, setDescription] = useState("purano description")
    const[date, setDate] = useState(new Date().toISOString())


    function handlePrimaryClick(){
        // console.log("clicked");

        if(title === "old title"){
            setTitle("naya tilte");
        }else {
            setTitle("old title")
        }
    }

    function handleSecondaryClick(){
        setDescription("naya naya description")
    }

    function handleDangerClick(){
        setDate(convertDate(date))
    }

    return(<>
    <Header />

    <p>Home page ho hai header mathi lana parcha</p>
    <h1>{title}</h1>

    <h2>{description}</h2>

    {date}

    <Button 
     title="Homebtn"
     variant="primary"
      size="lg"
    //   onClick={()=>{
    //     console.log("Clicked")}}/>

    onClick={handlePrimaryClick} />

    <Button title="pagebtn" variant="secondary" size="md" onClick={handleSecondaryClick}/>
    <Button title="Delete" variant="danger" size="sm" onClick={handleDangerClick}/>
    </>)
}

export default HomePage