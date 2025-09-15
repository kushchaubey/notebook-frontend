import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router';
const NoteTable = ({filteredData,cols, paginationValid})=>{

 const navigate = useNavigate();

    function rowClicked(row){
      console.log(row._id);
      navigate(`/details/${row._id}`);
    }


    return (
        <DataTable
			     columns={cols}
			     data={filteredData}
                 pagination={paginationValid}
                 onRowClicked={(row) => rowClicked(row)}
                 pointerOnHover

		        />
    )
}

export default NoteTable