import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

//creating axios instance later we can make diffrent component only for axios instance

const CreateAPI = axios.create({
    baseURL: "https://66d1dcd162816af9a4f51950.mockapi.io/",
    timeout: 1000,
   
})



// yo function bata user data liyera tala handleclick ma function call garem,
// aayeko data lai Get Users btn click garda Data haru render garne banayem  with onClick
async function getUsers() {
    const resource = "user";
    
    try {
    const response = await CreateAPI.get(resource)
    // console.log({response}) console garda data , response ani data ma aaune vayekole return response.data 
    return response.data;
    } catch(e) {
        //console.log({e}) // error handle yeha garna sakin6,  since its a outside function, and we want to
        // handle error where we want maybe in the component itself then we can do throw error and handle later on in another place
        throw(e)
    }
}

//creating component to refactor the code for better practise.
//props banayera pass gareko cha. aba Card component lai tala map ma rakhna milyo ani item.email item.username 
//Card ko component arko banako 6

// function Card({email, username}) {
//     return(
//         <div>
//             <h3>{email}</h3>
//             <p>{username}</p>
//         </div>
//     )
// }


//custom hook for timer. yo hook le search garda input non-stop lkehirahada input ma value aau6, debounced ma lekhna chodepaxi matra value aau6,
//tesko matlab api call nonstop lekhda nahune vayo ekchin pause huda or lekhna chodesi hune vayo. API load kam garna help gar6.
function useDebounce(inputVal, delay) {
    const [debounceVal, setDebounceVal] = useState("") //mostly used case for search..

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceVal(inputVal)
        }, delay)
       
        return () => {
            clearTimeout(timer)
        }
    }, [inputVal]) //input change huda certain time kurera debounceVal ma set garne ho so, dependency array ma inputVal rakhem

    return debounceVal //hook ma chaine value return garna milyo
}



function DayNine () {
    const[user, setUser] = useState([])
    const[parentCount, setParentCoount] = useState(0)
    const[inputVal, setInputVal] = useState("")
    // const [debounceVal, setDebounceVal] = useState("") //mostly used case for search..

    async function handleClick() {

        try{
        const data = await getUsers();
        setUser(data)

        console.log({data})
        }catch(e) {
            console.log(e); //like here we r handling error bcoz above we throw the error
        }
    }

    useEffect(() => {
        console.log("hellloooo")
        return () => 
            console.log("bye") //clean up function. useEffect 2nd time chalnu agadi yo chal6
        //try stricmode off and paila hello log hun6 tespasi  hello log huna agadi bye log hunxa ani hello log hun6
    }, [parentCount]) //useEffect ekchoti matra run hun6. Dependency array rakhyo vane multiple times hun6



    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setDebounceVal(inputVal)
    //     }, 1000)
       
    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [inputVal]) //input change huda certain time kurera debounceVal ma set garne ho so, dependency array ma inputVal rakhem

    const debouncedInput = useDebounce(inputVal, 1000) // custom hook banayera use garem

    function handleChange(e) {
        console.log(e.target.value)
        setInputVal(e.target.value)
    }
    return (
        <>
        <h1>Day Nine - {parentCount} -we want to render count here from child to parent component</h1>

        input: {inputVal} <br/>
        {/* debounced: {debounceVal} */}
        debounced: {debouncedInput}
        <input 
        placeholder='search...'
       
        onChange= {(e) => handleChange(e)}  value={inputVal}/>

        {/* {user?.[0]?.email} */} 

        {/* {user?.map((item)=> {
            return <h3>{item.email}</h3>
        })} */}

{/* return lekhna man nalage implicit garna sakincha , maping all the email and rendering it*/} 
        {/* {user?.map((item)=> ( 
            <div> 
                <h3>{item.email} </h3> 
                <p>{item.username}</p> 
                </div>
        )
        )} */}

        {user?.map((item)=> ( 
            <Card key={item.id} email={item.email} username={item.username}  countSetter={setParentCoount}/>
            // setParentCoount props as countSetter hamile Card ma pathaunupar6
            //Warning: Each child in a list should have a unique "key" prop. yo error solve garna data vayeko unique id or aru nai uniue kuralai
            //key = {item.id} garepaxi hat6
        )
        )}

        <button onClick={handleClick}>Get Users</button>
       
        </>
    )
}

export default DayNine
