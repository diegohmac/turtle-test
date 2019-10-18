import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaAngleDown } from 'react-icons/fa';

import { insertCommentRequest } from '../../store/modules/movies/actions';
import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Comment, 
  Picture,
  Message,
  Footer, 
  Input, 
  Button 
} from './styles';

export default function Chat({movie, handleClose}) {

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [isScalling, setIsScalling] = useState(false);
  
  useEffect(() => {
    setIsScalling(true);
  }, [])
  
  function addComment(){
    if (inputValue === '') return;
    dispatch(insertCommentRequest(inputValue, movie.id));
    setInputValue('');
    close();
  }

  function close(){
    setIsScalling(false);
    setTimeout(() => {
      handleClose();
    }, 300);
  }

  return (
    <Container handleSlide={isScalling}>
      <Header onClick={() => close()}>
        <FaAngleDown color='#fff' size={25}/>
        <Title>{movie.title}</Title>
      </Header>
      <Content>
        {movie.comments.map(comment => (
          <Comment key={comment}>
            <Picture />
            <Message><p>{comment}</p></Message>
          </Comment>
        ))}
      </Content>
      <Footer>
        <Input 
          autoFocus 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={"What did you think about the movie?"}
        />
        <Button onClick={() => addComment()}/>
      </Footer>
    </Container>
  );
}
