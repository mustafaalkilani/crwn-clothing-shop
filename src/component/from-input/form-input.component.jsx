import { useContext } from 'react';

import { WebsiteThemeContext } from '../context/theme-color.context';

import {Group, FormInputLabel, Input} from'./form-input.style';

const FormInput = ({label, value, name, type, handelChange, len}) => {
    const {theme} = useContext(WebsiteThemeContext);
    return (
        <Group>
            <Input required value={value} name={name} type={type} onChange={handelChange} minLength={len}/>
            {
                label && (
                    <FormInputLabel shrink={value.length} style={{'color': `${value.length && theme === 'dark' ? 'rgb(255, 255, 255)': 'rgb(51, 51, 51)'}`}}>{label}</FormInputLabel>
                )
            }
        </Group>
    )
}

export default FormInput;