import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const slideIn = keyframes`
  0%{
    opacity: 0;
    transform: scaleY(0);
  }

  20%{
    opacity: 1;
  }

  100%{
    transform: translateY(1);
  }
`;

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 720px;
  overflow: auto;
  background-color: #eee;
  box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.5);
  padding: 20px 0px;
  margin: 0px 20px;
  
  div.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    animation: ${rotate} 1s linear;
    animation-iteration-count: infinite;
  }

  &&::-webkit-scrollbar { 
    display: none; 
}
  
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody tr {
    transform-origin: top center;
    animation: ${slideIn} 0.2s ease-out;
    animation-fill-mode: backwards;
    transition: all 0.2s ease-in-out;
    height: 60px;

    :hover{
      background-color: ${darken(0.1, '#ddd')} !important;
    }
  }

  tr.selected{
      background-color: ${darken(0.2, '#ddd')} !important;
  }

  tbody tr:nth-child(2n - 1) {
    background-color: #ddd;
  }

  thead th{
    text-align: left;
    font-size: 18px;

    input, select {
      width: 200px;
      height: 40px;
      margin: 20px 0px;
    }
  }

  th.selectable{
    cursor: pointer;
  }

  tbody td{
    text-align: left;
    font-size: 16px;
  }

  th, td{
    padding-left: 20px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 150px;
  background-color: blue;
`;

export const FilterTab = styled.div`
  width: 100%;
  height: 150px;
  background-color: red;
`;

export const Line = styled.div`

`;

