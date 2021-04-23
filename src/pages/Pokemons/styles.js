import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Grid = styled.div`
  font-family: "Lucida Console", "Courier New", monospace;
  display: inline-block;
  width: 20%;
  height: 175px;
`

export const Div = styled.div`
  justify-content: center;
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
`

export const InfoPage = styled.div`
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 25px;
  padding: 50px;
  margin: 300px;
  margin-top: 50px;
  color: purple;
  background-color: #A5FC7A;
  border: solid green;
`

export const FavButton = styled.button`
  background-color: beige;
  border: none;
`

export const PageButton = styled.button`
  font-family: "Lucida Console", "Courier New", monospace;
  background-color: MediumSeaGreen;
  color: purple;
  padding: 8px;
  margin-left: 50px;
  margin-right: 50px;
`

export const PageButtonsDiv= styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: purple;
  font-family: "Lucida Console", "Courier New", monospace;
  display: inline;
  padding: 8px;
  background-color: MediumSeaGreen;
  textDecoration: 'none';
  color: 'white'
`

export const Input = styled.input`
  width: 50px;
  text-align: center;
  font-size: 30px;
`