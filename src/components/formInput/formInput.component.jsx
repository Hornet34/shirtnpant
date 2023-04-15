import './formInput.styles.scss';

const FormInput = (props) => {
    const { label, alertMessage, ...inputOptions } = props;
    return (
        <div className="group">
            <input className="form-input" {...inputOptions} />
            {label && (<label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
            <p className='alert'>{alertMessage}</p>
        </div>
    );

}

export default FormInput;