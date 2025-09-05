import { useState } from "react";
import InputFormGroup from "./formsComponent/InputFormGroup";
import FormButton from "./formsComponent/formButton";

const Login = ()=>{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handlerUserName(e){
        setUserName(e.target.value);
    }

     function handlerPassword(e){
        setPassword(e.target.value);
    }
    return(
        <>
         <div className="box-container max-w-[600px]" >
                  <h1 className="heading">Login</h1>
 
                   <form action="">
                     <InputFormGroup label="UserName" id="userName" name="userName" type="text" value={userName} onChange={handlerUserName}/>
                     <InputFormGroup label="password" id="password" name="password" type="password" value={password} onChange={handlerPassword}/>
                     <FormButton buttonname="Login"/>
                   </form>

         </div>
        </>
     
      
    )
    

}

export default Login;

