import axios from "axios";
import { useEffect,useContext,useState } from "react";
import { useParams } from "react-router"
import { AuthContext } from "../context/AuthContext";

const Details = ()=>{

  const useAuth = useContext(AuthContext);
  const {authToken} = useAuth;
  const note = useParams();
   const [title, setTitle] = useState("");
   const [noteText, setNoteText] = useState("");
  useEffect(()=>{
    if (authToken) getNote();
  },[authToken]);

  async function getNote() {
   
    try{
      const noteRes = await axios.get(`http://localhost:3000/api/notebooks/${note.id}`,{headers:{
        "Content-Type": "application/json",
         "Authorization": `Bearer ${authToken}`,
       }});
         console.log(noteRes)
      if(noteRes.status==200){
        setTitle(noteRes.data.data.title);
        setNoteText(noteRes.data.data.note);
      }

      }catch(e){
          console.log(e);
      }
  }

    return(
         <>
         <div className="box-container max-w-[600px]" >
                  <h1 className="heading">Details</h1>
                  <h3 className="text-text text-xl font-bold">{title}</h3>
                  <p className="text-text font-light">{noteText}</p>
                 

             
         </div>
        </>
    )
}


export default Details;