import axios from 'axios';

import { url_header } from '../const';

export const fetchProjects = () => axios.get(`${url_header}/projects`);
export const createProject = (newProject) => axios.post(`${url}/form`, newProject);
export const likeProject = (id) => axios.patch(`${url}/projects/${id}/likeProject`);
export const searchProject = (id) => axios.post(`${url}/search`);  