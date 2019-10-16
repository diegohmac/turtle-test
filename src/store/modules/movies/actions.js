export function getMoviesRequest() {
  return {
    type: '@movies/GET_MOVIES_REQUEST', 
  }
}

export function getMoviesSuccess(movies) {
  return {
    type: '@movies/GET_MOVIES_SUCCESS', 
    movies,
  }
}

export function getMoviesFailure() {
  return {
    type: '@movies/GET_MOVIES_SUCCESS',
  }
}