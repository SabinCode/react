import { useState } from 'react'
import './Card.css'


//props drillling parent to inner child sammma communication garem
function EmailWrapper({email}) {
    return <>
    <h3>{email} </h3> </>
}

//card ma  yeuta matra object ma recieve hun6 props
//countSetter parent ko props hamile recieve garem
//parent ko use-state ko setter function lai child component pathayepaxi access payo
function Card({email, username, countSetter}) {
    const [count, setCount] = useState(0) // get user btn click garepaxi render data render hun6 teha count aau6, sabai count ko aa-aafnai state/count hun6

    function handleClick() {
        // setCount(count + 1)
        // countSetter(count + 1)
        const counted = count + 1
        setCount(counted)
        countSetter(counted) // logic yeha
    }

    return(
        <div className="card">
            {/* <h3>{email}</h3> */}
            <EmailWrapper email={email} />
            <p>{username}</p>
            {count}
            <button onClick={handleClick}>Count Increase</button>
        </div>
    )
}

export default Card