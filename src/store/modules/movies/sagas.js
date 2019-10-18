import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { getMoviesSuccess, insertCommentSuccess } from './actions';

function*  getMoviesRequest(){
	const response = yield call(api.get, `/movies.json`);

	yield put (getMoviesSuccess(response.data));
}

function*  insertComment(action){
	const {value, id} = action.payload;
	const movies = yield select(state => {		
    return state.movies.movies;
	});

	if (movies[id].comments) {
		movies[id].comments.push(value);
	} else {
		movies[id].comments = [value];
	}

	const response = yield call(api.put, '/movies.json', movies);
	yield put (insertCommentSuccess(response.data));
}

export default all([
	takeLatest('@movies/GET_MOVIES_REQUEST', getMoviesRequest), 
	takeLatest('@movies/INSERT_COMMENT_REQUEST', insertComment), 
]);
