
const InputFormGroup = ({children, ...props})=>{
    return(
        <div className="px-4 mb-4 flex flex-col space-y-2 max-w-[400px] w-full mx-auto ">
        <label className="text-lg md:text-2xl text-text" htmlFor={props.id}>{props.label} :</label>
        <input {...props} className="border-2 outline-0 rounded-2xl p-2 text-text bg-background" /> 
        {children}
       </div>
        )
        
}

export default InputFormGroup;