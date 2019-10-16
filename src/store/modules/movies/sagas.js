import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { getMoviesSuccess } from './actions';

function*  getMoviesRequest(action){
	const response = yield call(api.get, `/movies.json`);
	
	yield put (getMoviesSuccess(response.data));
}

export default all([
	takeLatest('@movies/GET_MOVIES_REQUEST', getMoviesRequest), 
]);
