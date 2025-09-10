const FormButton = (props)=>{
    return(
        <div className="px-4 mb-4 mt-8 flex space-y-2 max-w-[400px] w-full mx-auto justify-center ">
           <button  {...props} className="w-full">{props.buttonname}</button>   
       </div>
        )
        
}

export default FormButton;