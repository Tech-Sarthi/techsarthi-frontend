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
export const getProjects = () => async (dispatch) => {
   return await axios.get(`${url_header}/projects`);
  };

  export const createProject = (newProject) => async (dispatch) => {

      return await axios.post(`${url_header}/form`, newProject);
  };