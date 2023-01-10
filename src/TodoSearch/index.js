import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch()
{
  const { searchValue, setSearchValue } = React.useContext(TodoContext); //-- datos obtenidos del provider
  
  //-- funcion input
  const onSearchValueChange = (event) => {
    //-- seteamos el nuevo valor
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Ingresa un valor"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };