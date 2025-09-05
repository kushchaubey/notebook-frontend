import { useState,useEffect } from "react";

const ToggleMode = (props)=>{
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

    return(

        <button  onClick={() => setDark(!dark)} className="fixed right-0 bottom-4" {...props}> {dark ? "Light Mode" : "Dark Mode"}
</button>
    )


}

export default ToggleMode