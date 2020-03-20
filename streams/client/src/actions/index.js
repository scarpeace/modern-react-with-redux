import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types'
import axios from 'axios'
import history from '../history'

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
  return async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await axios.post('http://localhost:3001/streams', {...formValues, userId})
    dispatch({ type: CREATE_STREAM, payload: response.data })
    history.push('/')
  }
}

export const fetchStreams = () =>{
  return async dispatch =>{
    const response = await axios.get('http://localhost:3001/streams')
    dispatch({type: FETCH_STREAMS, payload: response.data})
  }
}

export const fetchStream = (id) =>{
  return async dispatch =>{
    const response =  await axios.get(`http://localhost:3001/streams/${id}`)

    dispatch({type: FETCH_STREAM, payload: response.data})
  }
}

export const editStream = (id, formValues) =>{
  return async dispatch =>{
    const response = await axios.patch(`http://localhost:3001/streams/${id}`, formValues)

    dispatch({type: EDIT_STREAM, payload: response.data})
    history.push('/')
  }
}

export const deleteStream = (id) =>{
  return async dispatch =>{
    await axios.delete(`http://localhost:3001/streams/${id}`)
    dispatch({type:DELETE_STREAM, payload: id})
    console.log('DELETED')
    history.push('/')
  }
}