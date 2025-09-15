import { FaEdit, FaTrash } from 'react-icons/fa'; // for icons
import NoteTable from '../components/NoteTable';
import AddNote from '../components/AddNote';
import SearchField from '../components/SearchField';
import { useContext, useEffect, useState } from 'react';
import Model from '../components/Model';
import InputFormGroup from "../components/formsComponent/InputFormGroup";
import FormButton from "../components/formsComponent/formButton";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { NotificationContext } from '../context/NotificationContext';
import { useNavigate } from 'react-router';



const Home = ()=>{
 const columns = [
	{
		name: 'Title',
		selector: row => row.title,
        sortable: true,

	},
    {
		name: 'Date',
		selector: row => row.date,
        sortable: true,

	},
	{
		name: 'Actions',
		cell: row => (
			
            <div className='flex gap-2.5'> 
                <button onClick={()=>editFunction(row)} className=' bg-cyan-700 '><FaEdit/></button>
                <button className=' bg-red-500 '><FaTrash/></button>
            </div> 
		)
}


];    
     const useAuth = useContext(AuthContext);
     const {authToken,logout} = useAuth;
     const useNotification = useContext(NotificationContext);
     const notification = useNotification;
     const [notes, setNotes] = useState([]);
     const [filteredData, setFilteredData] = useState([])
     const [searchTerm, setSearchTerm]   = useState('')
     const [isModelOpen, setIsModelOpen]  = useState(false);
     const [isEditForm, setIsEditForm]   = useState(false);
     const navigate = useNavigate();

 


  const {register,   formState: { errors }, handleSubmit,reset}=  useForm();

  useEffect(()=>{
    
  if (authToken) getNotes(); 

  },[authToken]);

  async function getNotes() {
    
    try{
  
      const allNotes = await axios.get("http://localhost:3000/api/notebooks",{headers:{
        "Content-Type": "application/json",
         "Authorization": `Bearer ${authToken}`,
       }});
     
       if(allNotes.status==200){      
       
        const filteredDateData = allNotes.data.data.map(note=>{
            const d = new Date(note.date);
            return {
                ...note,
                date: new Intl.DateTimeFormat('en-GB').format(d) // "15/09/2025"
            }

        })  
          setNotes(filteredDateData);
          setFilteredData(filteredDateData);
          return;
       }
   
    }catch(e){
        console.log(e)
        if(e.response.data.message=="Invalid token"){
            notification(e.response.data.message);
             logout();
             navigate('/login');
                     
            return
        }
        notification("something went wrong");
    }
    
  }

   function filterData(event){
        setSearchTerm(event.target.value)
        const filterData =notes.filter((note)=>{
                return note.title.toLowerCase().includes(event.target.value.toLowerCase())
            })
        setFilteredData(filterData)
  }



  function editFunction(row){
    console.log(row);
    setIsEditForm(true);
    setIsModelOpen(true);
    reset({ title: "", note: "" });

  }
  async function onSubmit(data){
       if(isEditForm){
        return;
       }
      try{
      const response =  await axios.post("http://localhost:3000/api/notebooks",{title:data.title, note:data.note},{headers:{
        "Content-Type": "application/json",
         "Authorization": `Bearer ${authToken}`,
       }})

       if(response.status==201 && response.data.message=="note saved"){
        notification(response.data.message);
        reset();
        setIsModelOpen(false);
       await getNotes();
        return;
       }
       
      }catch(e){
         notification("something went wrong");
      }
  }
    return(
         <>
         <div className="box-container max-w-[1000px]" >
           
                  <h1 className="heading">Notes</h1>

            <div className='flex justify-between mb-4 mt-4'>
                <AddNote label="Add Note" className="cursor-pointer" onClick={()=>{
                    setIsEditForm(false); 
                    setIsModelOpen(true);
                    reset({ title: "", note: "" });

                    
                    }}/>
               <SearchField placeholder="Search notes" onChange={(e)=>{filterData(e)}} value={searchTerm} />
            </div>    
                
                <NoteTable filteredData={filteredData} cols={columns} paginationValid={true}/>

                 <Model heading={isEditForm?"Edit Note":"Add Note"} openModel={isModelOpen} closeModel={setIsModelOpen}> 
                    <form onSubmit={handleSubmit(onSubmit)}>
                     <InputFormGroup label="Title" id="title" {...register("title",{required:"Note Title is required"})} type="text" >
                          {errors.title && (<p className="text-red-400">{errors.title?.message}</p>)}
                     </InputFormGroup>
                     <InputFormGroup label="Note" id="note" {...register("note",{required:"Note is required"})} type="text" >
                      {errors.note && (<p className="text-red-400">{errors.note?.message}</p>)}

                     </InputFormGroup>
                     <FormButton buttonname={isEditForm?"Update Note":"Add Note"} type="submit"/>
                   </form>

            </Model >
 
         </div>

             
        </>
        
    )
}

export default Home