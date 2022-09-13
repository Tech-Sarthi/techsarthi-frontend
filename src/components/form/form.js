import React, { useState } from "react";
import { createProject } from "../../functions/projects";
import "./form.scss";

const Form = () => {
  const initialState = {
    name_of_industry: "",
    website: "",
    type_of_industry: " ",
    name_of_contact_person: "",
    designation_of_contact_person: "",
    email_of_contact_person: "",
    problem_faced: "",
    likeCount: 0,
    other_details: "",
  };
  const [values, setValues] = useState(initialState);
  const [industry_logo, setIndustry_logo] = useState();
  const [problem_details, setProblem_details] = useState();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    //console.log(e.target.name,"---------",e.target.value);
  };
  // const handleFile = (e) => {
  //   setProblem_details(e.target.files[2]);
  // };
  // const handleImage = (e) => {
  //   setIndustry_logo(e.target.files[1]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    for (const value in values) {
      console.log(value, values[value]);
      form_data.append(value, values[value]);
    }

    // form_data.append('industry_logo', industry_logo);
    // form_data.append('problem_details', problem_details);
    createProject(values)
  };

  return (
    <form className="form" encType="multipart/form-data">
      <label classname="label">
        Name of Industry:
        <input
          type="text"
          name="name_of_industry"
          value={values.name_of_industry}
          onChange={handleChange}
        />
      </label>
      <label classname="label">
        {" "}
        website:
        <input
          type="text"
          name="website"
          value={values.website}
          onChange={handleChange}
        />
      </label>

      {/* <label classname="label">
        {" "}
        Logo of Industry:
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          name="industry_logo"
          value={values.industry_logo}
          onChange={handleImage}
        />
      </label> */}

      <label classname="label">
        {" "}
        Type Of industry
        <input
          type="text"
          name="type_of_industry"
          value={values.type_of_industry}
          onChange={handleChange}
        />
      </label>

      <label classname="label">
        Name of Contact person
        <input
          type="text"
          name="name_of_contact_person"
          onChange={handleChange}
          value={values.name_of_contact_person}
        />
      </label>
      <label classname="label">
        Designation of contact person
        <input
          type="text"
          name="designation_of_contact_person"
          onChange={handleChange}
          value={values.designation_of_contact_person}
        />
      </label>

      <label classname="label">
        Email of contact person
        <input
          type="text"
          name="email_of_contact_person"
          onChange={handleChange}
          value={values.email_of_contact_person}
        />
      </label>

      <label classname="label">
        Problems:
        <input
          type="text"
          name="problem_faced"
          onChange={handleChange}
          value={values.problem_faced}
        />
      </label>
      {/* <label classname="label">
        Any document:
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .pdf"
          name="problem_details"
          onChange={handleFile}
        />
      </label> */}

      <label classname="label">
        Anything else?
        <input
          type="text"
          name="other_details"
          onChange={handleChange}
          value={values.other_details}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};
export default Form;
