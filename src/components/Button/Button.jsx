const Button = ({ width, type, children, onClick, isDisabled }) => {
    return (<button type={type} disabled={isDisabled}  onClick={onClick} className={`${width} ${isDisabled ? 'bg-gray-400' : 'bg-primary-blue'} h-10 text-white font-light text-sm rounded-md px-4 py-2` }>
        {children}
    </button>
    )
};

export default Button;