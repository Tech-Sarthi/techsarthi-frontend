
import React, { useState } from "react";
import { createProject } from "../../functions/projects";

const Form = () => {
  const initialState = {
    name_of_industry: "",
    website: "",
    industry_logo:"",
    type_of_industry: " ",
    name_of_contact_person: "",
    designation_of_contact_person: "",
    email_of_contact_person: "",
    problem_faced: "",
    problem_details:"",
    likeCount: 0,
    other_details: "",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    //console.log(e.target.name,"---------",e.target.value);
  };

  const handleFile =(e)=>{
    setValues({ ...values, [e.target.name]: e.target.files[0] });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    createProject(values);
    console.log("submit")
  };

  return (
    <form className="form" encType="multipart/form-data">
      <label classname="label">Name of Industry:
        <input type="text" name="name_of_industry"
          value={values.name_of_industry}
          onChange={handleChange} />
      </label>
      <label classname="label"> website:

        <input type="text" name="website" value={values.website} onChange={handleChange} />
        </label>

        <label classname="label"> Logo of Industry:

        <input type="file" 
                accept=".png, .jpg, .jpeg" name="industry_logo" value={values.industry_logo} onChange={handleFile} />
        </label>

      <label classname="label"> Type Of industry
        <input type="text" name="type_of_industry" value={values.type_of_industry} onChange={handleChange} />
        </label>

      <label classname="label">Name of Contact person
        <input type="text" name="name_of_contact_person" onChange={handleChange} value={values.name_of_contact_person} />
        </label>
      <label classname="label">Designation of contact person
        <input type="text" name="designation_of_contact_person" onChange={handleChange} value={values.designation_of_contact_person} />
        </label>

      <label classname="label">Email of contact person
        <input type="text" name="email_of_contact_person" onChange={handleChange} value={values.email_of_contact_person} />
        </label>

      <label classname="label">Problems:
        <input type="text" name="problem_faced" onChange={handleChange} value={values.problem_faced} />
        </label>
        <label classname="label">Any document:
        <input type="file" accept=".png, .jpg, .jpeg, .pdf" name="problem_details" onChange={handleFile} value={values.problem_details} />
        </label>

      <label classname="label">Anything else?
        <input type="text" name="other_details" onChange={handleChange} value={values.other_details} />
        </label>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}
export default Form;