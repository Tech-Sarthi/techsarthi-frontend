import React,{useEffect,useState} from "react";
import {useLocation} from "react-router-dom";
import Search from "../../components/Search_box/Search"
import {searchQuery} from "../../functions/projects";

function Projects(){
    const { search } = useLocation();

    useEffect(()=>{
        let query=new URLSearchParams(search);
        searchQuery(query.get("search"))
        .then(res=>{
            console.log(res.data);
        })
    },[search])
    // const [query,setQuery]=useState()
    return (
        <div>
            <h1>Projects</h1>
            <Search />
        </div>
    );
}

export default Projects;