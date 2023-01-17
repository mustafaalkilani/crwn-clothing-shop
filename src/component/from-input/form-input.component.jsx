import './form-input.style.scss';

const FormInput = ({label, value, name, type, handelChange, len}) => {
    return (
        <div className="group">
            <input required value={value} name={name} type={type} onChange={handelChange} minLength={len} className='form-input'/>
            {
                label && (
                    <label className={`${value.length ? 'shrink': ''} form-input-label`}>{label}</label>
                )
            }
        </div>
    )
}

export default FormInput;