import { useEffect, useState } from "react";

async function getData() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        // fetch le catch (error) bata response ok ko case handle nagarne hunale hamile manually handle garna parcha.
        //api ma data line, dine vaneko json ma ho (response aako readable hudaina tesaile we need it in json )

        const json = await response.json();
        console.log(json);
        return json
    } catch (error) {
        // console.error(error.message);
        throw error // yeha throw error gareko tala try catch garekoma catch le error  samat6
    }
}

function AboutPage () {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState(null)
    const [error, setError] = useState("") //user lai error aako bela error browser ma dekhaunalai

    // console.log("render vayo")

    // useEffect(() => {
    //     async function getDataAsync () {
    //         try {
    //             const data = await getData();
    //             // console.log(data)
    //             setTodos(data) //aayeko data lai todos ma set gareko
    //         } catch (e) {
    //             console.log(e)
    //         }
    //     }
    //     console.log("use effect chalyo")
    //     getDataAsync()
    // }, [count])          //page khulda api call vaisakeko hun6

    console.log(todos)

    async function handleGetTodos(){        //useEffect navako le sidai async function lekhna payo 
                                           //click get todos buton click garda data tanne vayo
                try {
                    const data = await getData();
                    // console.log(data)
                    setTodos(data) //aayeko data lai todos ma set gareko
                } catch (e) {
                    setError(e.message)
                }
            }
         
    

    // [dependecy array] khali cha vane ekchoti matra chalcha useEffect tespaxi chaldaina.
    //dependency array rakhda useeffect ekchoti chal6, everytime count change huda vane mathilo render vayo 2 choti aau6 strictmode ma.

    return(<>
    <h1> this is about page day 7</h1>
    {/* jsx power to render count */}
    <div>{count}</div> 
{/* jsx power to render error while trying to Get todos with button. If it fails we want to show our user error message */}
    <p style={{color: "red"}}>{error}</p>

    {/* {error ?
    ( <p style={{color: "red"}}> 
    {error == "404" ? "there was an error fetching data" : " error occured"} </p>) : null } */}

    {/* yo error aako condition ma color red dekhaunu hoina vane null.
    ani 404 error aako condition ma "there was.." tyo bahek  aru error aakoma "error occured" vanne condition  */}

    {/* <h2>First todos title : {todos?.[0]?.title}</h2> */}
{/* 
    conditionally rendering todos title. No todos(if no todos) then Get todos button click , if todos , we will render first todo title. if not error we will render error message form above {error} */}
    <h2>{todos?.[0]?.title ? `First todo title: ${todos?.[0]?.title}`: "No Todos"}</h2> 

    <button onClick={() =>setCount(count +1)}>
        Count ++
    </button>

    <button onClick={handleGetTodos}> Get todos </button> 

    </>)
}

export default AboutPage