export const formReducer = (state, action) => {
  switch(action.type) {
    case 'EMAIL': 
      return { ...state, email: action.payload }
    case 'USERNAME': 
      return { ...state, username: action.payload }
    case 'PASSWORD': 
      return { ...state, password: action.payload }
    case 'PASSWORD2': 
    return { ...state, password2: action.payload }
      case 'BIO': 
    return { ...state, bio: action.payload }
    case 'LINKEDIN': 
      return { ...state, linkedIn: action.payload }
    case 'GITHUB': 
      return { ...state, github: action.payload }
    case 'SKILLS': 
      return { ...state, skills: action.payload }
    default: 
      return { ...state }
  }
};