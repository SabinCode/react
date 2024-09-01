import axios from "axios"
import { useEffect, useState } from "react";

async function getData () {
    const url = "https://66d1dcd162816af9a4f51950.mockapi.io/users";
    const response = await axios.get(url)

    // console.log({response})
    return response.data
}

function AxiosPage () {
    const [users, setUsers] = useState(null)
    const [error, setError] = useState("")
    const [email, setEmail] =  useState("")
    const[password, setPassword] = useState("")
    const [submitting, setSubmitting] = useState(false)

    // useEffect(() => {
    //     const  data = getData()
    // }, [])

    async function handleUsersFetch() {
        try{
        const users = await getData()
        setUsers(users)
    } catch(e) {
        setError(e.message)
    }
        
    }

    console.log(users) //check if the users data is there

    console.log(email) 

    async function handleSubmit(e) {
        e.preventDefault(); //submit page reload hune default behaviour roknalai 

        try {
        const payload = {
            email: email,
            password: password,
        };
        setSubmitting(true) //post process huda true tespaxi false
        const data = await axios.post("https://66d1dcd162816af9a4f51950.mockapi.io/user", 
           payload
        );
    }catch (e){ 
        console.log(e)
    }
        setSubmitting(false)

        setEmail("") //post garisakepaxi or submit btn click paxi browser ko input ko email ra ps type gareko hatauna empty value set gareko.
        setPassword("")
    }

    return(
        <>
        <h1>Axios day 8 class</h1>

        <button onClick={handleUsersFetch}>getUserData</button>

        <p>users data: {users?.[0].name}</p>
        {/* we are rendering first user's name after button getUserData is clicked  */}

        <p style={{color:"red"}}>{error}</p> 
        {/* setting error message for users if error as we learned yesterday */}

        <form style={{backgroundColor: "purple"}}>
            {/* <input type="text" placeholder="email" onChange={(e) => {
                console.log({e}) //placeholder kei lekhna sath e aaucha as syntheticbaseevent vanera ani target value ... 3 dot ma click garda lekheko kura dekhin6
            }}/> */}

           <input 
           type="text" 
           placeholder="email" 
            value={email} //this will confirm the input value is email value #two way binding 
           onChange={(e) => setEmail(e.target.value)} 
           />
            <input 
            type="text" 
            placeholder="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              />
            <button style={{backgroundColor: "purple", color:"white"}} 
            onClick={handleSubmit}>{submitting ? "Submitting..." : "submit"}</button> 
            {/* yo button click garda handleSubmit function ko post url ma post garne */}
            {/* submitting.. ternary operator , mostly know as loading...  */}
           
        </form>
        {/* yo form ma lekheko kura state ma rakhnalai , we r creating 2 states above 
        aba tyo lekhda hune change harulai hamile onChange bata e.target.value bata */}

        </>
    )
}

export default AxiosPage