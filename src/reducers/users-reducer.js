const INITIAL_STATE = {
  data: {}
};

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case 'USERS_LOADING_FULFILLED':
      return {
        ...state,
        data: action.payload.reduce( (result, currentUser) => ({
            ...result,
            [currentUser.id]: {
                ...currentUser
            }
        }), {})
      } 
      
     default:
       return state;
  }
}
