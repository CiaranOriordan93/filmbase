import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default {
  getPlaying() {
    return apiClient.get(
      '/movie/now_playing?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&page=1'
    )
  },
  getUpcoming() {
    return apiClient.get(
      '/movie/upcoming?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&page=1&region=US'
    )
  },
  getPopular() {
    return apiClient.get(
      '/movie/popular?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&page=1'
    )
  },
  getTopRated() {
    return apiClient.get(
      '/movie/top_rated?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&page=1'
    )
  },
  getDetails(id) {
    return apiClient.get(
      '/movie/' +
        id +
        '?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US'
    )
  },
  getGenres() {
    return apiClient.get(
      '/genre/movie/list?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US'
    )
  },
  getMostPopular() {
    return apiClient.get(
      `/discover/movie?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&sort_by=popularity.desc`
    )
  },
  getDiscoverMovies(release, genre, sort) {
    return apiClient.get(
      `/discover/movie?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&sort_by=${sort}&with_genres=${genre}&year=${release}&language=en-US`
    )
  },
  getRequestToken() {
    return apiClient.get(
      '/authentication/token/new?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3'
    )
  },
  getSessionId(body) {
    return apiClient.post(
      '/authentication/session/new?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3',
      {
        request_token: body
      }
    )
  },
  getUserDetails(id) {
    return apiClient.get(
      `/account?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&session_id=${id}`
    )
  }
}
