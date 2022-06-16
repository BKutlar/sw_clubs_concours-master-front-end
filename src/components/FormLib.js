import {useState} from 'react';
import { Field, useField } from "formik";
import {
    StyledTextInput,
    StyledLabel,
    StyledIcon,
    ErrorMag,
} from './../components/Styles'

import {FiEyeOff, FiEye} from 'react-icons/fi';

export const TextInput = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);

    return(
        <div style={{position: "relative"}}>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            {props.type !== 'password' && <StyledTextInput
            invalid={meta.touched && meta.error}
                {...field}
                {...props}
            />}

            {props.type === 'password' && (
                <StyledTextInput
                invalid={meta.touched && meta.error}
                    {...field}
                    {...props}
                    type={show ? 'text' : 'password'}
                />
            )}

            <StyledIcon>
                {icon}
            </StyledIcon>

            {
                props.type === 'password' && (
                    <StyledIcon onClick={() => setShow(!show)} right>
                        {show && <FiEye />}
                        {!show && <FiEyeOff />}
                    </StyledIcon>
            )}

        {meta.touched && meta.error ? (
            <ErrorMag>{meta.error}</ErrorMag>
        ): (
            <ErrorMag style={{visibility: "hidden"}}>.</ErrorMag>
        )}    
        </div>
    );
};