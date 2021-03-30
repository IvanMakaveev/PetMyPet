import './InputError.css';

const InputError = ({
    children
}) => {
    return (
        children
            ? (<div className='input-error'>{children}</div>)
            : null
    )
}

export default InputError;