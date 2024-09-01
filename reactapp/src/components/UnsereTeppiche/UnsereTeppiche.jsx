import { useEffect, useState, useRef } from "react"


function UnsereTeppichePage () {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("hello")
    }, [count])

    // console.log(count)

    const exampleRef = useRef(0) //dom ma connect garauna mil6
    //exampleRef ma value hudaina aru kura hun6 tesko value access garnalai .current garna par6 
    const inputRef = useRef();

    console.log(exampleRef.current) // 0
    exampleRef.current = 1 // 1 value ta change huncha tara useState ko jasto set hudaina feri render huda initial value 0 nai basdincha.
    //ref ko value jsx ma kaile pani use nagarne


    return(
    <>
    {/* <h1 onClick={() => setCount(count + 1)}>Unsere Teppiche</h1> */}

    <h1 ref={exampleRef} onClick={() => setCount(count + 1)}>hello Teppiche</h1>
    <h1>
        <input ref={inputRef} type="text"
        placeholder="Hello type here..." />
    </h1>

    <button onClick={() =>inputRef.current.focus()}>focus</button>

    </>)
}

export default UnsereTeppichePage