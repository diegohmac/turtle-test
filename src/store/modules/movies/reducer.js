const INITIAL_STATE = {
  movies: [],
  moviesNotFound: false,
}

export default function movies(state = INITIAL_STATE, action) {
	switch(action.type){
		case '@movies/GET_MOVIES_SUCCESS':
      let retrievedMovies = action.movies;
      return {movies: retrievedMovies, moviesNotFound: false};
    case '@movies/GET_MOVIES_FAILURE':
      return {...state, moviesNotFound: true};
    case '@movies/INSERT_COMMENT_SUCCESS':
      const updatedMovies = action.movies;
      return {movies: updatedMovies}
		default:
			return state;
	}  
}