import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { Container, Table } from './styles';
import * as moviesActions from '../../store/modules/movies/actions';
import Chat from '../Chat';
import { FaCaretUp, FaSyncAlt} from 'react-icons/fa';
import { minutesToHours } from '../../helpers/masks';

export default function Main() {
  const dispatch = useDispatch();

  const [manipulatedData, setManipulatedData] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isSorted, setIsSorted] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [sortedType, setSortedType] = useState(false);
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

  useEffect(() => {
    if(manipulatedData.length <= 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [manipulatedData])

  function filterByName(name){
    let regex = new RegExp(`\\b${name}`, 'gi');
    const filteredMovies = movies.filter(movie => {
      return regex.test(movie.title);
    })
    setNameInput(name);
    setManipulatedData(filteredMovies);
  }

  function filterByGenre(genre){
    if (genre === 'All') return setManipulatedData(movies);
    const filteredMovies = movies.filter(movie => {
      return movie.genre.indexOf(genre) !== -1;
    })
    setManipulatedData(filteredMovies);
    setSelectedGenre(genre);
  }

  function handleChatScreen(target, movie){
    if (isChatOpen && target) return;
    const elements = document.querySelectorAll('.selected');
    elements.forEach(el => {
      el.classList.remove('selected');
    })
    if (!target) return setIsChatOpen(false);
    const el = target.parentElement;
    el.classList.add('selected');

    setIsChatOpen(!isChatOpen);
    setSelectedMovie({
      id: movies.findIndex(m => m.title === movie.title),
      title: movie.title,
      comments: movie.comments ? movie.comments : [],
    })
  }

  function sortBy(type){
    if (isSorted && isReversed) {
      setManipulatedData(movies);
      setIsSorted(false);
      setIsReversed(false);
      setNameInput('');
      setSelectedGenre('All');
      return;
    }

    let reversedData = null;

    if (isSorted && !isReversed) {
      reversedData = manipulatedData.slice().sort((a, b) => a[type] - b[type])
      setIsReversed(true);
      setManipulatedData(reversedData);
      setSortedType(type);
      return;
    }

    const sortedData = manipulatedData.slice().sort((a, b) => a[type] - b[type]).reverse();
    setManipulatedData(sortedData);
    setIsSorted(true);
    setSortedType(type);
  }
  
  return (
    <>
    <Container>
    {!isLoading ?
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th className="selectable" onClick={() => sortBy('year')}>Year{<FaCaretUp color="000" size={10}/>}</th>
            <th className="selectable" onClick={() => sortBy('runtime')}>Runtime{<FaCaretUp color="000" size={10}/>}</th>
            <th className="selectable" onClick={() => sortBy('revenue')}>Revenue{<FaCaretUp color="000" size={10}/>}</th>
            <th className="selectable" onClick={() => sortBy('rating')}>Rating{<FaCaretUp color="000" size={10}/>}</th>
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
            <th colSpan={4}>{isSorted ? 
              isReversed ? `Sorted by ${sortedType} in ascending order.` 
              : `Sorted by ${sortedType} in descending order.`  
            : ''}</th>
            <th>
              <select value={selectedGenre} onChange={(e) => filterByGenre(e.target.value)}>
                <option value={'All'}></option>
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
              <tr 
                key={movie.title+movie.revenue}
                onClick={(e) => handleChatScreen(e.target, movie)}>
                <td>{movie.title && movie.title}</td>
                <td>{movie.year && movie.year}</td>
                <td>{movie.runtime && minutesToHours(movie.runtime)}</td>
                <td>{movie.revenue && `$${movie.revenue} M`}</td>
                <td>{movie.rating && movie.rating}</td>
                <td>{movie.genre && movie.genre.reduce((t, c) => {
                  return t + ',' + c
                })}</td>
              </tr>
            )
          })}
        </tbody>
        }
      </Table>
      : null}
      {isLoading && <div className="loading"><FaSyncAlt size={40} color={'#3f51b5'}/></div>}
    </Container>
    {isChatOpen && <Chat movie={selectedMovie} handleClose={() => handleChatScreen()}/>}
    </>
  );
}
