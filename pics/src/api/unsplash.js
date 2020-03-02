import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID dGvDt4o2h-_jwtn8hRXea1QdkkOzaCtmNyoiDHCIXsI'
  }
})