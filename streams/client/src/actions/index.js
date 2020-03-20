import { SIGN_IN, SIGN_OUT } from './types'
import axios from 'axios'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: {
      userId
    }
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createStream = (formValues) => {
  return async dispatch => {
    axios.post('http://localhost:3001/streams', formValues)
  }
}