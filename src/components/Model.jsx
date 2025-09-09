
const Model = ({children, heading, openModel,closeModel})=>{

           
    return(
     <div className={`w-full h-full fixed bg-black/60 z-50 top-0 left-0 flex justify-center items-center ${openModel ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={()=>{
                        closeModel(false);}}>
          <div className={`max-w-[700px] min-h-[200px] min-w-[200px] sm:w-[400px] md:w-[700px]   px-6 py-7 bg-background rounded-2xl m-auto relative transition-transform duration-200 ease-in 
          ${openModel ? "translate-y-0" : "-translate-y-full"} ` }    onClick={(e) => e.stopPropagation()}>
                    <div className="absolute right-3 top-3 font-bold text-text text-2xl cursor-pointer" onClick={()=>{
                        closeModel(false);
                    }}>X</div>
                     <h1 className="text-text text-2xl font-bold text-center mb-4">{heading}</h1>
                    <div className="">
                        {children}
                    </div>
       </div>
     </div>
     
    )
}

export default Model;