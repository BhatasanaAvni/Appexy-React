
import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = ({ name, label, type = 'text', placeholder, required }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                type={type}
                className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
                id={name}
                placeholder={placeholder}
                {...register(name, { required })}
            />
            {errors[name] && <div className="invalid-feedback">{errors[name].message}</div>}
        </div>
    );
};

export default InputField;
