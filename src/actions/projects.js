import { FETCH_ALL, CREATE, SEARCH, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProject = (project) => async (dispatch) => {
  try {
    const { data } = await api.createPost(project);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeProject = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeProject(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
