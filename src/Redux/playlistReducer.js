const initialState = {
    playLists: [],
  };
  
  export const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_PLAYLIST": {
        return {
          ...state,
          playLists: [...state.playLists, action.payload],
        };
      }
      case "DELETE_FROM_PLAYLIST": {
        return {
          ...state,
          playLists: state.playLists.filter(
            (obj) => obj.id !== action.payload.id
          ),
        };
      }
      default:
        return state;
    }
  };
  