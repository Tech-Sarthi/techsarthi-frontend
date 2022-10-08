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
export const getProjects = () => {
   return  axios.get(`${url_header}/projects`);
  };

  export const createProject = async(newProject) => {
    return await axios.post(`${url_header}api/form`, newProject, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
  };