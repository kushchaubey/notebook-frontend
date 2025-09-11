import { useParams } from "react-router"



const Details = ()=>{

    const note = useParams();
    return(
          <h1 className="heading">
            Details {note.id}
          </h1>
    )
}


export default Details;