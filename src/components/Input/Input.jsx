const Input = ({ type, name, placeholder, value, handleBlur, handleChange }) => {
    return (<>
        <label htmlFor={name} className="font-semibold">{placeholder}</label>
        <input
            value={value}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            className='bg-gray-200 w-full h-10 rounded-md px-3 py-1 mb-2 placeholder-gray-400 focus:outline-none focus:outline-primary-blue'
        />
    </>
    )
};

export default Input;