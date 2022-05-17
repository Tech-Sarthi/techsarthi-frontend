import axios from "axios";
import {url_header} from "../const";

export const searchQuery=async(query)=>{
    return await axios.post(`${url_header}api/search`,{query}
    // ,{
    //     headers:{
    //     authtoken:token,
    //     }
    // }
    )
}