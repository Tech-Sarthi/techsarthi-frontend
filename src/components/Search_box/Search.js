import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons";

const Search=()=>{
    const navigate = useNavigate();
    const [text,setText]=useState("");
    const handleChange=(e)=>{
        setText(e.target.value);
        navigate(`/projects/?search=${e.target.value}`);
    }
    const handleSubmit=(e)=>{
        navigate(`/projects/?search=${text}`);
    }
    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <input 
                onChange={handleChange}
                type="search"
                value={text}
                placeholder="Search"
            />
            <SearchOutlined onClick={handleSubmit} style={{cursor:"pointer"}}/>
        </form>
    )
}

export default Search;