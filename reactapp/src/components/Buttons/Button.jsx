// function Button (props){
//     const title = props.title
//     const height = props.height
//     return(
//         <>
//         <button style ={{height}}>{title}</button>
//         </>
//     )
// };


import './Button.css'

// function Button({title, variant, size, onClick}) //1.aproach
function Button({title, variant, size, ...rest}) {
    return (
        // <div className={`button bg-${variant} btn-${size}`} onClick={onClick}>
        <div className={`button bg-${variant} btn-${size}`} {...rest}>
            {title}
        </div>
    )
}

export default Button
