import {createContext,useContext, useEffect,useState } from "react";
import axios from "axios";
import {NotificationContext} from "./NotificationContext"
export const AuthContext = createContext(null);

export const AuthContextProvider = ({children})=>{
    const notification = useContext(NotificationContext);
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(null);



    //localstorage me check kerna hai ki value hai ki nahi


    useEffect(()=>{
    const storedToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");
        if (storedToken) setAuthToken(storedToken);
        if (storedUser) setUser(JSON.parse(storedUser));

    },[])

      // Keep localStorage in sync
  useEffect(() => {
    if (authToken) {
      localStorage.setItem("authToken", authToken);
    } else {
      localStorage.removeItem("authToken");
    }

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [authToken, user]);

   const login = async (userName, password)=>{
     try{
    const response = await axios.post('http://localhost:3000/api/notebooks/user/login',{
        userName:userName,
        password:password
   },{
        headers: { "Content-Type": "application/json" }
      });

      if(response.status==200 && response.data.userName)
           {
              localStorage.setItem("authToken", authToken);
              setAuthToken(response.data.token);
              setUser(response.data.userName);
              return true;              
           }else{
            notification("user not valid");
            return false;
           }
      
    }catch(err){
            console.log(err.response.data.message);
            notification(err.response.data.message); 
            return false
      };
  }

  const logout = ()=>{
    setAuthToken(null);
    setUser(null);
    localStorage.clear();
  }
    return(
        <AuthContext.Provider value={{user,authToken, login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}