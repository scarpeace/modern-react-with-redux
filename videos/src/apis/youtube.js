import axios from 'axios'

const KEY = 'AIzaSyA3qDb2lq2ZnBT8tIyDd3-Ww1S0xBfSUOU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: `${KEY}`
  }
})