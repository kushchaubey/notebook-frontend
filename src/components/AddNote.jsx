const AddNote = ({label,  className="", ...props})=>{
  
    return(
           <button  {...props} className={`bg-cyan-700 dark:bg-blue-700 ${className}`}>{label}</button>
    )
}

export default AddNote;