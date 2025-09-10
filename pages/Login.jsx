import InputFormGroup from "../src/components/formsComponent/InputFormGroup";
import FormButton from "../src/components/formsComponent/formButton";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../src/context/AuthContext";
import { useNavigate } from "react-router";
const Login = ()=>{
  const {register, formState: { errors }, handleSubmit,reset}=  useForm();
  const useAuth = useContext(AuthContext);
  const navigate = useNavigate();
  const {user, authToken, login} = useAuth;
    async function onsubmit(data){
        const success = await login(data.userName, data.password);
        console.log(success);
         if(success){
          navigate("/");
         console.log("login")
         }

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

