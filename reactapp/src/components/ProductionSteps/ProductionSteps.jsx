import { useCallback, useEffect, useState } from "react"
import { useMemo } from "react"
function ProductionSteps () {

    const[name, setName] = useState("sabin")
    const[users, setUsers] = useState([
        {
            id: 1,
            name: "sabin",
        },
        {
            id: 2,
            name: "ram",
        },
        {
            id: 3,
            name: "hari",
        },
       
    ])

    // const id2User = users.find((item) =>{
    //     console.log("find chalyo") //state change huda sabai re-render hunehuda yo log hune vayo 2 choti with strictmode
    //     //sometimes we need to stop re-render for api load optimization.
    //     // same input aauda same value dine , calculate nagarne - tyo process lai Memoization van6, value lai cacheing
    //     return item.id === 2    
    // })

    //Memoization ko lai we use useMemo
    //find chalena log ma, jabasamma  user change hudaina tabasamma kei gardaiana pailakoi value use garne vayo. value cache bata liyera din6
    //user change vaye matra value change garne vayo. (browser lag huda use garne )
    // pailako user n new user ko value check gar6 , value yeutai vaye calculate use nagari value dine vayo. everytime check garda memory space lincha.
    //So we are doing trade here, speed ko lagi space ko trade
    const id2User = useMemo(() => {
        const user = users.find((item) => {
            console.log("find chalyo")
            return item.id === 2
        })
        return user
    }, [users])

    const nickName = name + "o" //derive state. kunai pani state bata yeuta value nikalna paryo vane naya state nabanaune yesari directly assign garni

    //sabino
    // const [nickName, setNickName] = useState("")

    // useEffect(() => {
    //     setNickName(name + "o")
    // }, [name])

    //component re-render huda yo function always re-define hun6
    //re-define nagarna purai function lai cache gari rakhnalai , useCallback use garna par6
    // function add(name, b) {
    //     const result = name + b
    //     return result
    // }

    const add = useCallback(() => {
        const result = name + b
        return result 
    }, [name]) //name change huda matra yo function re-define garna paryo natra parena (function ko whole body nai cache garera rakhna help gar6)

    return(<>

    <h1>DayTen</h1>

    
    <p>{name}</p>
    <p>Nickname: {nickName}</p>
    <p>{id2User.name}</p>
    <button onClick={() => setName("ram")}>change name</button> 
    
    

    </>)
}
[]
export default ProductionSteps

//individually file  export garnalai 
//name export eg. export {ProductionSteps, App2} we can make many function and export like this

//component or page khulne bitikai kei kura garna 6 vane tyo useEffect vayo
//kunai value  depedent change vayera kei kura execute garna 6 ra khulne bitikai run garna 6 vane pani useEffect use garne [dependecy array]