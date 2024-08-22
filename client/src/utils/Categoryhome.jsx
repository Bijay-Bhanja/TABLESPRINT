import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import logo0 from '../assets/category.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Data() {
    const [userCategory, setUserCategory] = useState([]); 
    const [isDelete, setIsDelete]=useState(false) 
    const toastOptions={
        position:"bottom-right",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
    }
    let navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:5000/categorys/addcategorys')
            .then((res) => {
                // console.log(res)
                 setUserCategory(res.data);
                 setIsDelete(false)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [isDelete]);
   
    

    const deleteCategory = (id) => {
        
        
        axios.delete(`http://localhost:5000/categorys/deletecategorys/${id}`)
            .then(() => {
                setIsDelete(true)
                toast.success("Category deleted",toastOptions)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    

    return (
        <div>
            <div className="p-4 text-center w-auto">
                <div className="flex justify-between items-center text-center mb-4">
                    <h1 className="text-xl font-bold flex">
                        <img src={logo0} alt="" className="px-2" />
                        Category
                    </h1>
                    <input type="text" placeholder="Search..." className="border rounded-lg p-2 w-2/4" />
                    <button className="bg-purple-800 text-primary-foreground px-4 py-2 rounded-lg text-white">
                        <Link to="/categorys/addcategorys">Add Category</Link>
                    </button>
                </div>
                <table className="min-w-full bg-card border-0">
                    <thead className="bg-amber-200">
                        <tr className="bg-muted text-muted-foreground">
                            <th className="py-2 px-4 border-b">Id</th>
                            <th className="py-2 px-4 border-b">Category name</th>
                            <th className="py-2 px-4 border-b">Image</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Sequence</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCategory.map((category, index) => (
                            
                            <tr key={category._id} className="hover:bg-muted/50 bg-gray-100">
                                <td className="py-2 px-4 border-b">{index + 110}</td>
                                <td className="py-2 px-4 border-b">{category.categoryname}</td>
                                <td className="py-2 px-4 border-b">
                                    <img alt={category.categoryname} src={category.imageUrl} className="w-10 h-10" />
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {/* {console.log(category.status)} */}
                                    {category.status === true ?  'Inactive':'Active'  }
                                </td>
                                <td className="py-2 px-4 border-b">{category.number}</td>
                                <td className="py-2 px-7 border-b">
                                    <button className="text-destructive px-2">
                                    <Link to={`/categorys/editcategory/${category._id}`}> <EditIcon className="text-blue-700" /></Link>
                                    </button>
                                    <button className="text-destructive px-2" onClick={() =>
                                        deleteCategory(category._id)
                                    }>
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

export default Data;