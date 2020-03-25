import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default {
  // API calls to get movies from TMDB
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
  getMovieDetails(id) {
    return apiClient.get(
      `/movie/${id}?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US`
    )
  },
  getMovieCredits(id) {
    return apiClient.get(
      `/movie/${id}/credits?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3`
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
  getDiscoverMovies(release, sort, genre) {
    return apiClient.get(
      `/discover/movie?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&primary_release_year=${release}&with_genres=${genre}&sort_by=${sort}`
    )
  },

  //API calls to get TV shows from TMDB
  getPopularTv() {
    return apiClient.get(
      `/tv/popular?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&page=1`
    )
  },
  getTopRatedTv() {
    return apiClient.get(
      `/tv/top_rated?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&page=1`
    )
  },
  getLatestTv() {
    return apiClient.get(
      `/tv/airing_today?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&page=1`
    )
  },
  getPlayingNowTv() {
    return apiClient.get(
      `/tv/on_the_air?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&page=1`
    )
  },
  getTvShowDetails(id) {
    return apiClient.get(
      `/tv/${id}?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US`
    )
  },
  getTvShowCredits(id) {
    return apiClient.get(
      `/tv/${id}/credits?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3`
    )
  },

  //API calls to setup and handle user authentication
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
  logOut(body) {
    return apiClient.delete(
      '/authentication/session?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3',
      {
        data: {
          session_id: body
        }
      }
    )
  },

  //API calls to get/post user data
  getUserDetails(id) {
    return apiClient.get(
      `/account?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&session_id=${id}`
    )
  },
  getUserFavMovies(accountId, sessionId) {
    return apiClient.get(
      `/account/${accountId}/favorite/movies?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&session_id=${sessionId}&language=en-US`
    )
  },
  getUserRatedMovies(accountId, sessionId) {
    return apiClient.get(
      `/account/${accountId}/rated/movies?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&session_id=${sessionId}`
    )
  },
  getUserFavTvShows(accountId, sessionId) {
    return apiClient.get(
      `/account/${accountId}/favorite/tv?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&session_id=${sessionId}`
    )
  },
  getUserRatedTvShows(accountId, sessionId) {
    return apiClient.get(
      `/account/${accountId}/rated/tv?api_key=6c1e80dae659cb7d1abdf16afd8bb0e3&language=en-US&session_id=${sessionId}`
    )
  }
}
