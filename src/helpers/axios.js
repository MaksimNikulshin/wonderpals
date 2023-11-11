//Import components
import axios from 'axios'

//Configuration for requests
export const headers = {
  'Content-Type': 'application/json',
}
export const url = 'url'

export const request = axios.create({
  baseURL: url,
  headers: headers,
})
