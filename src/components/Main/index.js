import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { Container, Table } from './styles';
import * as moviesActions from '../../store/modules/movies/actions';

export default function Main() {
  const dispatch = useDispatch();

  const [manipulatedData, setManipulatedData] = useState(null);
  const [nameInput, setNameInput] = useState('');
  const [genre, setGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    dispatch(moviesActions.getMoviesRequest());
  }, [dispatch])

  useEffect(() => {
    if (genre.length <= 0) {
      const tempGenreArray = [];
      setManipulatedData(movies);
      movies.map(movie => {
        movie.genre.map(type => {
          if (tempGenreArray.indexOf(type) === -1) tempGenreArray.push(type);
        })
      })
      setGenre(tempGenreArray);
    } 
  }, [movies, genre])

  function filterByName(name){
    let regex = new RegExp(`\\b${name}`, 'gi');
    const filteredMovies = movies.filter(movie => {
      return regex.test(movie.title);
    })
    setNameInput(name);
    setManipulatedData(filteredMovies);
  }

  function filterByGenre(genre){
    if (genre === '') return setManipulatedData(movies);
    const filteredMovies = movies.filter(movie => {
      return movie.genre.indexOf(genre) !== -1;
    })
    console.log(filteredMovies);
    setManipulatedData(filteredMovies);
  }
  
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Runtime</th>
            <th>Revenue</th>
            <th>Rating</th>
            <th>Genres</th>
          </tr>
          <tr>
            <th>
              <input 
                type="text"
                value={nameInput} 
                onChange={(e) => filterByName(e.target.value)}
              />
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <select onChange={(e) => filterByGenre(e.target.value)}>
                <option value={''}></option>
                {genre.length > 0 ?
                  genre.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))
                : null}
              </select>
            </th>
          </tr>
        </thead>
        {!isLoading && 
        <tbody>
          {manipulatedData && manipulatedData.map(movie => {
            return (
              <tr key={movie.title+movie.revenue}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.runtime}</td>
                <td>{movie.revenue}</td>
                <td>{movie.rating}</td>
                <td>{movie.genre.reduce((t, c) => {
                  return t + ',' + c
                })}</td>
              </tr>
            )
          })}
        </tbody>
        }
      </Table>
      {isLoading && <div>LOADING . . . </div>}
    </Container>
  );
}
