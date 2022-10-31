export const REQUEST_LIST = 'REQUEST_LIST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const CHAMPION_SELECTED = 'CHAMPION_SELECTED';

export const REQUEST_VIDEO = 'REQUEST_VIDEO';
export const REQUEST_VIDEO_SUCCESS = 'REQUEST_VIDEO_SUCCESS';
export const REQUEST_VIDEO_ERROR = 'REQUEST_VIDEO_ERROR';

export const requestList = () => ({
  type: REQUEST_LIST,
})

export const requestSuccess = (championsList) => ({
  type: REQUEST_SUCCESS,
  championsList,
})

export const requestError = (error) => ({
    type: REQUEST_ERROR,
    error,
})

export const championSelected = (inputChampion) => ({
  type: CHAMPION_SELECTED,
  inputChampion,
})

// API YOUTUBE 

export const requestVideo = () => ({
  type: REQUEST_VIDEO,
})


export const requestYoutubeSuccess = (videoID) => ({
  type: REQUEST_VIDEO_SUCCESS,
  videoID,
})

export const requestVideoError = (error) => ({
  type: REQUEST_VIDEO_ERROR,
  error,
})


export function thunkChampionList(){
  return async(dispatch) => {
    try{
      dispatch(requestList());
      const response = await fetch('http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json');
      const data = await response.json();
      dispatch(requestSuccess(data.data));
    }
    catch(error){
      dispatch(requestError(error));
    }
  };
};

export function thunkVideoList(name){
  return async(dispatch) => {
    try{
      dispatch(requestVideo());
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCrzKZgc4VJSIyXrSMTMoI6VwbkAOVUJZ4&type=video&q=${name}`);
      const data = await response.json();
      dispatch(requestYoutubeSuccess(data.items));
    }
    catch(error){
      dispatch(requestVideoError(error));
    }
  };
};
