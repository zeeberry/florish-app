const reducer = (state, action) => {
  switch (action.type) {
    case 'user/setName': {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload
        }
      };
    }
    case 'user/setEmail': {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload
        }
      };
    }
    case 'application/setCompany': {
      return {
        ...state,
        application: {
          ...state.application,
          company: action.payload
        }
      };
    }
    case 'application/setRole': {
      return {
        ...state,
        application: {
          ...state.application,
          role: action.payload
        }
      };
    }
    case 'application/setExcitement': {
      return {
        ...state,
        application: {
          ...state.application,
          initialExcitement: action.payload,
          currentExcitement: action.payload
        }
      };
    }
    case 'interview/setDate': {
      return {
        ...state,
        interview: {
          ...state.interview,
          date: action.payload
        }
      };
    }
    case 'interview/setType': {
      return {
        ...state,
        interview: {
          ...state.interview,
          type: action.payload
        }
      };
    }
    case 'interview/setNerves': {
      return {
        ...state,
        interview: {
          ...state.interview,
          nerves: action.payload
        }
      };
    }
    default: 
      return state;
  }
};

export default reducer;
