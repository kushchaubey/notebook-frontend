import { useState } from "react";
import InputFormGroup from "../src/components/formsComponent/InputFormGroup";
import FormButton from "../src/components/formsComponent/formButton";
import { useForm } from "react-hook-form";
import axios from "axios";
const Login = ()=>{
  const {register,   formState: { errors }, handleSubmit,reset}=  useForm();


    function onsubmit(data){
      console.log(data); 
    }
    return(
        <>
         <div className="box-container max-w-[600px]" >
                  <h1 className="heading">Login</h1>
 
                   <form onSubmit={handleSubmit(onsubmit)}>
                     <InputFormGroup label="UserName" id="userName" {...register("userName",{required:"Username is required"})} type="text"  >
                       {errors.userName && (<p className="text-red-400">{errors.userName?.message}</p>)}
                     </InputFormGroup>
                     <InputFormGroup label="password" id="password"  {...register("password",{required:"Password is required"})} type="password"  >
                      {errors.password && (<p className="text-red-400">{errors.password?.message}</p>)}
                     </InputFormGroup>
                     <FormButton buttonname="Login"/>
                   </form>

             
         </div>
        </>
     
      
    )
    

}

export default Login;

