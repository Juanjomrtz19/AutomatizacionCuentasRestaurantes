const Button = ({bgColor = 'bg-white', colorText = 'text-black', msg, logic}) => {
    return(
        <button className={`${bgColor} ${colorText} px-4 py-2 rounded-md mt-4 w-2/6`}>{msg}</button>
    )
}

export default Button;