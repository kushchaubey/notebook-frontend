import { FaEdit, FaTrash } from 'react-icons/fa'; // for icons
import NoteTable from '../src/components/NoteTable';
import AddNote from '../src/components/AddNote';
import SearchField from '../src/components/SearchField';
import { useState } from 'react';
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

  function filterData(event){
        setSearchTerm(event.target.value)
        const filterData =datas.filter((data)=>{
                return data.title.toLowerCase().includes(event.target.value)
            })
        setFilteredData(filterData)
  }


    return(
         <>
         <div className="box-container max-w-[1000px]" >
                  <h1 className="heading">Notes</h1>

            <div className='flex justify-between mb-4 mt-4'>
                <AddNote label="Add Note"/>
               <SearchField placeholder="Search notes" onChange={(e)=>{filterData(e)}} value={searchTerm} />
            </div>    
                
                <NoteTable filteredData={filteredData} cols={columns} paginationValid={true}/>
 
         </div>

             
        </>
        
    )
}

export default Home