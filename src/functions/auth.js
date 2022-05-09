import axios from "axios";
import {url_header} from "../const";


export const getCurrentUser=async(token)=>{
    return await axios.post(`${url_header}api/current-user`,{},{
        headers:{
        authtoken:token,
        }
    })
}

export const createOrUpdateUser=async(token,user_data)=>{
    return await axios.post(`${url_header}api/create-or-update-user`,user_data,{
      headers:{
        authtoken:token
      }
    })
  }