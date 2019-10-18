import styled from 'styled-components';
import avatar from '../../assets/avatar.png';
import {IoIosArrowDropright} from 'react-icons/io'


export const Container = styled.div`
  width: 550px;
  height: 500px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-out;
  transform-origin: bottom;
  transform: ${props => props.handleSlide ? "scaleY(1)" : "scaleY(0)"}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #3f51b5;
  padding: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
  color: #fff;
  
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 20px;
  overflow: auto;
  ::-webkit-scrollbar{
    display: none;
  }
`;

export const Comment = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0px;
`;

export const Picture = styled.div`
  background-image: url(${avatar});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #3f51b5;
  width: 60px;
  height: 60px;
  max-height: 60px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Message = styled.div`
  flex: 1;
  background-color: #3f51b5;
  display: flex;
  align-items: center;
  padding: 5px;

  p{
    flex: 1;
    color: #fff;
    font-size: 16px;
    margin-left: 5px;
    text-align: justify;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3f51b5;
  padding: 20px;
`;

export const Input = styled.input.attrs({
  type: "text"
})`
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  flex: 1;
  border-bottom: 0.5px solid rgba(0,0,0,0.2);
  margin-right: 10px;
  padding: 10px;

  ::placeholder{
    color: #000;
  }
`;

export const Button = styled(IoIosArrowDropright).attrs({
  color: '#fff',
  size: 30,
})`
  padding: 5px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.2);
  transition: all 0.2s ease-out;
  transform: scale(1);

  :hover{
    transform: scale(1.2);
  }
`;

