import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', {
                            required: 'Name is required',
                            minLength: { value: 2, message: 'Name must be at least 2 characters long' }
                        })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>

                <div>
                    <label htmlFor="option">Select an option:</label>
                    <select
                        id="option"
                        {...register('option', { required: 'Please select an option' })}
                    >
                        <option value="">Select...</option>
                        <option value="admin">admin</option>
                        <option value="chef">chef</option>
                        <option value="reception">reception</option>
                        <option value="waiter">waiter</option>
                    </select>
                    {errors.option && <span>{errors.option.message}</span>}
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 8, message: 'Password must be at least 8 characters long' },
                        })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login


