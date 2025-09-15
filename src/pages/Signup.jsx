import { useForm } from "react-hook-form";
import InputFormGroup from "../components/formsComponent/InputFormGroup";
import FormButton from "../components/formsComponent/formButton";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const Signup = ()=>{

const {register, formState: { errors }, handleSubmit, reset, trigger} = useForm()

 const useAuth = useContext(AuthContext);

 const navigate = useNavigate();

 const {login} = useAuth;
    async function onsubmit(data){

    try{
    const registerUser =  await axios.post("http://localhost:3000/api/notebooks/user/signup", {userName:data.userName, password:data.password},{
        headers: { "Content-Type": "application/json" }
      })
       if(registerUser.status==201 && registerUser.data.message == "User created"){
          
          const isLogedIn =  await login(data.userName, data.password);
          if(isLogedIn){
            navigate("/");
            
             reset();
          }
             
       }
    
    }catch(e){
        
        console.log(e.response.message);
    }
    }
    return(
        <>
         <div className="box-container max-w-[600px]" >
                  <h1 className="heading">Signup</h1>
 
                   <form onSubmit={handleSubmit(onsubmit)}>
                     <InputFormGroup label="UserName" id="userName" {...register("userName",{required:"Username is required", validate: async (value)=>{
                        try{
                            const userExisted = await axios.post("http://localhost:3000/api/notebooks/user/checkuserName", {userName:value},{headers: { "Content-Type": "application/json" }});
                                if(userExisted.status == 200){
                                  return true
                                }
                              }
                        catch(e){
                             
                           if( e.response.status ==400 && e.response.data.message == "User already exists"){
                               return "User already Exists"
                           }
                              return "Something went wrong, try again";

                        }
                             
                     }}) }onBlur={(e) => {
    // Manually trigger validation only when user leaves the field
    trigger("userName");  
  }} type="text"  >
                       {errors.userName && (<p className="text-red-400">{errors.userName?.message}</p>)}
                     </InputFormGroup>
                     <InputFormGroup label="password" id="password"  {...register("password",{required:"Password is required"})} type="password"  >
                      {errors.password && (<p className="text-red-400">{errors.password?.message}</p>)}
                     </InputFormGroup>
                     <InputFormGroup label="conform password" id="conformPassword"  {...register("password2",{required:"conform password is required", validate:(value,formVal)=>{
                        return value === formVal.password || 'Password not matched'
                     }})} type="password"  >
                      {
                      errors.password2 && (<p className="text-red-400">{errors.password2?.message}</p>) }
                    
                     </InputFormGroup>
                     <FormButton buttonname="SignUp"/>
                   </form>

             
         </div>
        </>
    )
}

export default Signup;