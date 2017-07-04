const INITIAL_STATE = {
  messages: []
};

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case 'MESSAGES_LOADING_FULFILLED':
      return {
        ...state,
        messages: action.payload
      } 
      
     default:
       return state;
  }
}