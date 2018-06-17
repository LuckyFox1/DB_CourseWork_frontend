// ------------------------------------
// Constants
// ------------------------------------
// export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
// export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
const LOGIN_USER = 'LOGIN_USER'
// ------------------------------------
// Actions
// ------------------------------------

export function loginUser (login, loggedIn) {
  return {
    type: LOGIN_USER,
    login,
    loggedIn
  }
}

export const actions = {
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_USER]: (state, action) => {
    return {
      ...state,
      login: action.login.user_login,
      userId: action.login.id_user,
      loggedIn: action.loggedIn
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loggedIn: false
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
