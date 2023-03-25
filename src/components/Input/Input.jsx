const Input = ({type, name, placeholder}) => {
    return(
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        className='bg-gray-200 w-full rounded-md px-3 py-1 mb-2 placeholder-gray-400 focus:outline-none focus:outline-primary-blue'
        />
    )
};

export default Input;