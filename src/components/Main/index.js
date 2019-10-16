import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';


import { Container } from './styles';
import * as moviesActions from '../../store/modules/movies/actions';

export default function Main() {
  const dispatch = useDispatch();

  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    dispatch(moviesActions.getMoviesRequest());
  }, [dispatch])

  useEffect(() => {
    console.log(movies);
  }, [movies])
  
  return (
    <div />
  );
}
