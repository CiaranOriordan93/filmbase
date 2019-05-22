import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default {
  getPlaying() {
    return apiClient.get(
      '/movie/now_playing?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US'
    )
  },
  getDetails(id) {
    return apiClient.get(
      '/movie/' +
        id +
        '?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US'
    )
  }
}
