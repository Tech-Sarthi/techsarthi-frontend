import React, { useState } from "react";
import { createProject } from "../../functions/projects";
import "./form.scss";
import { toast } from "react-toastify";
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
  const handleFile = (e) => {
    setProblem_details(e.target.files[0]);
  };
  const handleImage = (e) => {
    setIndustry_logo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    for (const value in values) {
      form_data.append(value, values[value]);
    }

    form_data.append("industry_logo", industry_logo);
    form_data.append("problem_details", problem_details);
    createProject(values);
    toast.success("Form Submitted");
    window.location.reload();
  };

  return (
    <form className="form" encType="multipart/form-data" id="form">
      <div className="form-header">Contact form</div>
      <div className="field" id="field-1">
        <div>Name of Industry</div>
        <input
          type="text"
          name="name_of_industry"
          value={values.name_of_industry}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <div> Official Website</div>
        <input
          type="text"
          name="website"
          value={values.website}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <div> Type Of Industry</div>
        <input
          type="text"
          name="type_of_industry"
          value={values.type_of_industry}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <div>Name of contact person</div>
        <input
          type="text"
          name="name_of_contact_person"
          onChange={handleChange}
          value={values.name_of_contact_person}
        />
      </div>
      <div className="field">
        <div>Designation of contact person</div>
        <input
          type="text"
          name="designation_of_contact_person"
          onChange={handleChange}
          value={values.designation_of_contact_person}
        />
      </div>

      <div className="field">
        <div>Email of contact person</div>
        <input
          type="text"
          name="email_of_contact_person"
          onChange={handleChange}
          value={values.email_of_contact_person}
        />
      </div>

      <div className="field">
        <div>Technical problems faced by the industry</div>
        <textarea
          type="text"
          name="problem_faced"
          onChange={handleChange}
          value={values.problem_faced}
        />
      </div>
      <div className="field">
        <div>Other details, if any?</div>
        <textarea
          type="text"
          name="other_details"
          onChange={handleChange}
          value={values.other_details}
        />
      </div>
      <div className="submit-file">
        <div>Upload file providing details of technical problem</div>
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .pdf"
          name="problem_details"
          onChange={handleFile}
        />
      </div>
      <div className="submit-file">
        <div> Logo of Industry</div>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          name="industry_logo"
          value={values.industry_logo}
          onChange={handleImage}
        />
      </div>
      <button onClick={handleSubmit}>SUBMIT FORM</button>
    </form>
  );
};
export default Form;
