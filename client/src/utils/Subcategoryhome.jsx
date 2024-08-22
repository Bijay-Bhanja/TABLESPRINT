import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../assets/menu.png';
import axios from 'axios';
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Subcategoryhome() {
  const [usersub, setUsersub] = useState([]);  
  const [isDelete,setIsDelete]=useState(false)
    
    let navigate = useNavigate()
    const toastOptions={
      position:"bottom-right",
      autoClose:8000,
      pauseOnHover:true,
      draggable:true,
      theme:"dark"
  }
    useEffect(() => {
        axios.get('http://localhost:5000/subcategorys/subaddcategory')
            .then((res) => {
              // console.log(setUsersub(res.data));
              setIsDelete(false)
                 setUsersub(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [isDelete]);
   
    

    const deleteCategory = (id) => {
      // console.log(`Attempting to delete subcategory with ID: ${id}`);
  
      axios.delete(`http://localhost:5000/subcategorys/deletesubcategorys/${id}`)
          .then(() => {
              toast.success("data deleted successfully",toastOptions)
            setIsDelete(true)

              // alert("Category Deleted Successfully");
          })
          .catch((err) => {
              console.error('Error deleting category:', err);
          });
  };
  
    
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
      
        <h1 className="text-xl font-bold flex items-center mb-4 md:mb-0">
          <img src={Menu} alt="Menu Icon" className="px-2 w-10 h-6 mr-2" />
          Sub Category
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg p-2 w-full md:w-1/2 mb-4 md:mb-0"
        />
        <button className="bg-purple-800 text-primary-foreground px-4 py-2 rounded-lg text-white">
          <Link to="/subcategorys/addsubcategory">Add Subcategory</Link>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-card border-0">
          <thead className="bg-amber-200">
            <tr className="bg-muted text-muted-foreground">
              <th className="py-2 px-4 border-b">Id</th>
              <th className="py-2 px-4 border-b">Category Name</th>
              <th className="py-2 px-4 border-b">SubCategory Name</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Sequence</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersub.map((subcategory, index) => (
              <tr key={subcategory._id} className="hover:bg-muted/50 bg-gray-100">
                <td className="py-2 px-4 border-b text-center">{index + 110}</td>
                <td className="py-2 px-4 border-b text-center">{subcategory.category}</td>
                <td className="py-2 px-4 border-b text-center">{subcategory.subCategoryName}</td>
                <td className="py-2 px-4 border-b text-center">
                  <img alt={subcategory.subCategoryName} src={subcategory.imageUrl} className="w-10 h-10" />
                </td> 
                <td className="py-2 px-4 border-b">
                                    {/* {console.log(subcategory.status)} */}
                                    {subcategory.status == false ?  'Inactive':'Active'  }
                                </td>
                <td className="py-2 px-4 border-b text-center">{subcategory.subCategorySequence}</td>
                <td className="py-2 px-7 border-b text-center">
                  <button className="text-destructive px-2">
                    <Link to={`/subcategorys/subedit/${subcategory._id}`}>
                      <EditIcon className="text-blue-700" />
                    </Link>
                  </button>
                  <button className="text-destructive px-2" onClick={() =>
                                        deleteCategory(subcategory._id)
                                    } >
                    <DeleteIcon className="text-red-800" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Subcategoryhome;
