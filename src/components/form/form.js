
import React, { useState } from "react";
import { createProject } from "../../functions/projects";

const Form=()=>{
    const initialState = {
        name_of_industry: "",
        website: "",
        type_of_industry: "",
        name_of_contact_person: "",
        designation_of_contact_person: "",
        email_of_contact_person: "",
        problem_faced: "",
        likeCount: 0,
        other_details:"",
      };
      const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

      
        // const handleSubmit =  (e) => {
        //     e.preventDefault();
        //      createProject(values);
        //     };

      return(
        <div >
            <form  >
                <label >Name of Industry
                <input type= "text" name= "Name of Industry" onChange={handleChange} value={values.name_of_industry} />
                </label>
                <input type= "text" name= "Website" onChange={handleChange} value={values.website} />
                <input type= "text" name= "Type of Industry" onChange={handleChange} value={values.type_of_industry} />
                <input type= "text" name= "Name of Contact person" onChange={handleChange} value={values.name_of_contact_person} />
                <input type= "text" name= "Designation of Contact person" onChange={handleChange} value={values.designation_of_contact_person} />
                <input type= "text" name= "email of Contact person" onChange={handleChange} value={values.email_of_contact_person} />
                <input type= "text" name= "Problems Faced" onChange={handleChange} value={values.problem_faced} />
                <input type= "text" name= "Other Details" onChange={handleChange} value={values.other_details} />
                {/* <button type="submit">Submit</button> */}
            </form>
        </div>
      )
}
export default Form;