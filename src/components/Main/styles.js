import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 720px;
  overflow: auto;
  background-color: #eee;
  box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.5);
  padding: 20px 0px;
  margin: 0px 20px;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &&::-webkit-scrollbar { 
    display: none; 
}
  
`;

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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody tr {
    transform-origin: top center;
    animation: ${slideIn} 0.2s ease-out;
    animation-fill-mode: backwards;
    height: 60px;
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

