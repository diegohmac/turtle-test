const INITIAL_STATE = {
  movies: [],
  isMoviesNotFound: false
}

export default function movies(state = INITIAL_STATE, action) {
	switch(action.type){
		case '@movies/GET_MOVIES_SUCCESS':
      let retrievedMovies = null;
      Object.keys(action.movies).map(id => {
        retrievedMovies = action.movies[id];
      })
      return {movies: retrievedMovies, isMoviesNotFound: false};
    case '@movies/GET_MOVIES_FAILURE':
      return {...state, isMoviesNotFound: true};
		default:
			return state;
	}  
}