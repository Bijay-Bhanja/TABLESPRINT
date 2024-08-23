import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
// import Menu from '../assets/menu.png';
import Product from "../assets/product.svg"
import axios from 'axios';
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ProductHome() {
  const [usersub, setUsersub] = useState([]);  
  const [isDelete,setIsDelete]=useState(false)
  // console.log(usersub)
  const toastOptions={
    position:"bottom-right",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
}
    // let navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:5000/products/getproduct')
            .then((res) => {
              // console.log(setUsersub(res.data));
                setIsDelete(false)
                 setUsersub(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [isDelete]);
   
    

    const deleteProduct = (id) => {
      // console.log(`Attempting to delete subcategory with ID: ${id}`);
  
      axios.delete(`http://localhost:5000/products/deleteproduct/${id}`)
          .then(() => {
              // console.log('Category deleted successfully');
              setIsDelete(true)
              // navigate('/product');
              toast.success("product deleted successfully",toastOptions)
          })
          .catch((err) => {
              console.error('Error deleting category:', err);
          });
  };
  
    
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
      
        <h1 className="text-xl font-bold flex items-center mb-4 md:mb-0">
        <img src={Product} alt="Product Icon" className="px-2 w-10 h-8 mr-2 " />
        
          Product
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg p-2 w-full md:w-1/2 mb-4 md:mb-0"
        />
        <button className="bg-purple-800 text-primary-foreground px-4 py-2 rounded-lg text-white">
          <Link to="/product/addproduct">Add product</Link>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-card border-0">
          <thead className="bg-amber-200">
            <tr className="bg-muted text-muted-foreground">
              <th className="py-2 px-4 border-b">Id</th>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">SubCategory</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Status</th>
              
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersub.map((subcategory, index) => (
              <tr key={subcategory._id} className="hover:bg-muted/50 bg-gray-100">
                <td className="py-2 px-4 border-b text-center">{index + 110}</td>
                <td className="py-2 px-4 border-b text-center">{subcategory.categoryname}</td>
                <td className="py-2 px-4 border-b text-center">{subcategory.productname}</td>
                <td className="py-2 px-4 border-b text-center">{subcategory.subcategory}</td>
                <td className="py-2 px-4 border-b text-center flex justify-center">
                  <img alt={subcategory.categoryname} src={`http://localhost:5000/images1/${subcategory.imageUrl}`} className="w-10 h-10" />

                </td>


                
                <td className={`py-2 px-4 border-b text-center ${subcategory.status?'text-green-500':'text-red-500'}`}>
                                    {/* {console.log(subcategory.status)} */}
                                    {subcategory.status === false ?  'Inactive':'Active'  }
                                </td>
                
                <td className="py-2 px-7 border-b text-center">
                  <button className="text-destructive px-2">
                    <Link to={`/product/editproduct/${subcategory._id}`}>
                      <EditIcon className="text-blue-700" />
                    </Link>
                  </button>
                  <button className="text-destructive px-2" onClick={() =>
                                        deleteProduct(subcategory._id)
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

export default ProductHome;
