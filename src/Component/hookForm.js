import React from "react";
import { useForm } from "react-hook-form";
const HookForm = () => {
    const { register, handleSubmit ,formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2>HookForm Example</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field">
                    <input {...register("firstName",{
                        required: true,
                    })}
                     placeholder="enter_name" 
                     />
                     <div className="error-field">
                        {errors?.firstName?.type === "required" && <p>Required !</p>}
                     </div>
                </div>
                <div className="form-field">
                    <select {...register("gender",{required:true})}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <div className="error-field">
                        {errors?.firstName?.type === "required" && <p>please Select One</p>}
                     </div>
                </div>
                <div className="form-field">
                    <input type="submit" />
                </div>

            </form>
        </div>
    )
}

export default HookForm;