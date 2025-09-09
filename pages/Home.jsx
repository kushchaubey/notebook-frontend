import { FaEdit, FaTrash } from 'react-icons/fa'; // for icons
import NoteTable from '../src/components/NoteTable';
import AddNote from '../src/components/AddNote';
import SearchField from '../src/components/SearchField';
import { useState } from 'react';
import Model from '../src/components/Model';
import InputFormGroup from "../src/components/formsComponent/InputFormGroup";
import FormButton from "../src/components/formsComponent/formButton";
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
                <button onClick={()=>console.log(row.id)} className=' bg-cyan-700 '><FaEdit/></button>
                <button className=' bg-red-500 '><FaTrash/></button>
            </div> 
		)
}


];

 
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
     
     const [filteredData, setFilteredData]   = useState(datas);
     const [searchTerm, setSearchTerm]   = useState('')
    const [isModelOpen, setIsModelOpen]  = useState(false);


  function filterData(event){
        setSearchTerm(event.target.value)
        const filterData =datas.filter((data)=>{
                return data.title.toLowerCase().includes(event.target.value.toLowerCase())
            })
        setFilteredData(filterData)
  }


    return(
         <>
         <div className="box-container max-w-[1000px]" >
           
                  <h1 className="heading">Notes</h1>

            <div className='flex justify-between mb-4 mt-4'>
                <AddNote label="Add Note" className="cursor-pointer" onClick={()=>{setIsModelOpen(true)}}/>
               <SearchField placeholder="Search notes" onChange={(e)=>{filterData(e)}} value={searchTerm} />
            </div>    
                
                <NoteTable filteredData={filteredData} cols={columns} paginationValid={true}/>

                 <Model heading="Form 16" openModel={isModelOpen} closeModel={setIsModelOpen}> <form action="">
                     <InputFormGroup label="UserName" id="userName" name="userName" type="text" value=''/>
                     <InputFormGroup label="password" id="password" name="password" type="password" value=''/>
                     <FormButton buttonname="Login"/>
                   </form>

            </Model >
 
         </div>

             
        </>
        
    )
}

export default Home