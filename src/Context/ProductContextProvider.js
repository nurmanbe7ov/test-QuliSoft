import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import { ACTIONS, API } from "../Helpers/helpers";

export const productContext = createContext();
export const useProductContext = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  photos: [],
  forOnePhoto: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_PHOTOS:
      return {
        ...state,
        photos: action.payload.data,
      };
    case ACTIONS.GET_ONE_PHOTO:
      return {
        ...state,
        forOnePhoto: action.payload.data,
      };

    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getPhotos = async () => {
    try {
      let data = await axios.get(API);
      console.log(data);
      dispatch({
        type: ACTIONS.GET_PHOTOS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getOnePhoto = async (id) => {
    try {
      let { data } = await axios(`${API}/${id}`);
      dispatch({
        type: ACTIONS.GET_ONE_PHOTO,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <productContext.Provider
      value={{
        photos: state.photos,
        forOnePhoto: state.forOnePhoto,
        getPhotos,
        getOnePhoto,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
