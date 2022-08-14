/* eslint-disable default-case */
const initialState = { name: null, age: null }

const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATEFIRSTNAME': {
      return { ...state, firstName: action.payload }
    }

    case 'UPDATELASTNAME': {
      return { ...state, lastName: action.payload }
    }

    case 'UPDATEZIPCODE': {
      return { ...state, zipcode: action.payload }
    }
  }
}

export default addUserReducer
