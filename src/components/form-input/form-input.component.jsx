import { Group, Input, FormInputLabel, Alert } from './form-input.styles.jsx';

const FormInput = (props) => {
    const { label, alertMessage, ...inputOptions } = props;
    return (
        <Group>
            <Input {...inputOptions} />
            {label && (<FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>)}
            <Alert>{alertMessage}</Alert>
        </Group>
    );

}

export default FormInput;