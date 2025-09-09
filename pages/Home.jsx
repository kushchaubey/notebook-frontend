import { FaEdit, FaTrash } from 'react-icons/fa'; // for icons
import NoteTable from '../src/components/NoteTable';
import AddNote from '../src/components/AddNote';
import SearchField from '../src/components/SearchField';
import { useState } from 'react';
import Model from '../src/components/Model';
import InputFormGroup from "../src/components/formsComponent/InputFormGroup";
import FormButton from "../src/components/formsComponent/formButton";
import { useForm } from 'react-hook-form';


 
const datas = [
  	{
		id: 1,
		title: 'Beetlejuice',
        date:'dddd',
		
	},
	{
		id: 2,
        date:'dddd',
		title: 'Ghostbusters',
		
	},
];


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
     const [filteredData, setFilteredData]   = useState(datas);
     const [searchTerm, setSearchTerm]   = useState('')
     const [isModelOpen, setIsModelOpen]  = useState(false);
     const [isEditForm, setIsEditForm]   = useState(false);

  function filterData(event){
        setSearchTerm(event.target.value)
        const filterData =datas.filter((data)=>{
                return data.title.toLowerCase().includes(event.target.value.toLowerCase())
            })
        setFilteredData(filterData)
  }


  const {register,   formState: { errors }, handleSubmit}=  useForm();

  function editFunction(row){
    console.log(row);
    setIsEditForm(true);
    setIsModelOpen(true);
  }
  function onSubmit(data){
      console.log(errors)
      console.log(data)
  }
    return(
         <>
         <div className="box-container max-w-[1000px]" >
           
                  <h1 className="heading">Notes</h1>

            <div className='flex justify-between mb-4 mt-4'>
                <AddNote label="Add Note" className="cursor-pointer" onClick={()=>{setIsEditForm(false); setIsModelOpen(true)}}/>
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