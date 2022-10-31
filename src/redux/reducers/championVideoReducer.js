import { REQUEST_VIDEO, REQUEST_VIDEO_ERROR, REQUEST_VIDEO_SUCCESS } from "../actions";

const INITIAL_STATE = {
videoID: '',
isLoading: false,
errorMessage: '',
};


const championVideoReducer = (state= INITIAL_STATE, action) => {
  switch(action.type) {

    case REQUEST_VIDEO:
      return {
        ...state,
        isLoading: true,
      }

    case REQUEST_VIDEO_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      }
    
    case REQUEST_VIDEO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        videoID: action.videoID,
      }
    
      default :
      return state;
    }
  };

export default championVideoReducer;
