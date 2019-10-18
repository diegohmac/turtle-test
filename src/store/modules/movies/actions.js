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

export function insertCommentRequest(value, id) {
  return {
    type: '@movies/INSERT_COMMENT_REQUEST', 
    payload: {value, id}
  }
}

export function insertCommentSuccess(movies) {
  return {
    type: '@movies/INSERT_COMMENT_SUCCESS',
    movies 
  }
}