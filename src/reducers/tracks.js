const initialState = {
  tracks: [
  ]
}

export default function tracks(state = initialState, action) {
  switch (action.type) {
    case  "ADD_TRACK":
      return {
        ...state,
        tracks: [...state.tracks, action.payload]
      };
    case "DELETE_ITEM":
      const id = action.payload
      return {
        ...state,
        tracks: [...state.tracks.filter(a => a.id != id)]
      }
    default:
      return state;
  }
};