
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"



const RowDataCategories = (props) => {
    const navigate = useNavigate()
    const {eachCategories, fetchData, index} = props
    const [error, setError] = useState(null)

    return (
    
        <>
        <tr key={index}>  
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap" >
            <div>
                <p className="text-sm font-normal text-black">{eachCategories.id}</p>
            </div>
        </td>
        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
            <div>
                <p className="text-sm font-normal text-black">{eachCategories.name}</p>
            </div>
        </td>
    </tr>
   </>
    )
}

export default RowDataCategories