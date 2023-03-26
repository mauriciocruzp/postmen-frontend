const SecondaryButton = ({ width, type, children }) => {
    return (<button type={type} className={`${width} h-10 bg-primary-purple text-white font-light text-sm rounded-md px-4 py-2`}>
        {children}
    </button>
    )
};

export default SecondaryButton;