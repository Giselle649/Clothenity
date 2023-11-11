
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"





const RowData = (props) => {
    const navigate = useNavigate()
    const {eachProduct, fetchData, index} = props
    const [error, setError] = useState(null)



    const deleteProductButtonOnClickHandler = async (id) => {
        try {
            const token = localStorage.getItem('access_token');
            await axios.delete(`http://localhost:3000/products/detail/${id}`, {headers: {
                Authorization: `Bearer ${token}`,
              }})
              
              fetchData()
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
      };


    
      const editProductButtonOnClickHandler = (id) => {
    
      
        navigate(`/editproduct/${id}`);
        
      };
    
    
      const changeProductImageButtonOnClickHandler =  (id) => {

    
        navigate(`/changeproductimage/${id}`);
      };

      if(error) return <p>Error fetching, please try again</p>


    return (
    
        <>
        <tr key={index}>  
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap" >
            <div>
                <p className="text-sm font-normal text-black">{eachProduct.id}</p>
            </div>
        </td>
        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
            <div>
                <p className="text-sm font-normal text-black">{eachProduct.name}</p>
            </div>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div>
                <p className="text-black">{eachProduct.description}</p>
            </div>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center">
                <p className="text-black">{eachProduct.price}</p>
            </div>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center">
                <p className="text-black">{eachProduct.stock}</p>
            </div>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center">
                <p className="text-black">{eachProduct.imgUrl}</p>
            </div>
        </td>
        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
            <div>
                <p className="text-sm font-normal text-black">{eachProduct.Category.name}</p>
            </div>
        </td>
        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
            <div>
                <p className="text-sm font-normal text-black">{eachProduct.User.username}</p>
            </div>
        </td>
        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
            <div 
            className="inline px-3 py-1 text-sm font-normal rounded-full text-white gap-x-2 bg-black">
            <button onClick={() => {
                deleteProductButtonOnClickHandler(eachProduct.id)
            }}>   
                Delete
            </button>
            </div>
            <div 
            className="inline px-3 py-1 text-sm font-normal rounded-full text-white gap-x-2 bg-black">
            <button onClick={() => {editProductButtonOnClickHandler(eachProduct.id)}}>Edit
            </button>
            </div>
            <div className="inline px-3 py-1 text-sm font-normal rounded-full text-white gap-x-2 bg-black">
                <button onClick={()=>{changeProductImageButtonOnClickHandler(eachProduct.id)}}>
                    Change Image Url
            </button>
            </div>
        </td>
    </tr>
   </>
    )
}

export default RowData