import React from 'react';

function useLocalStorage(itemName, initialValue)
{
  //-- estado de error, carga y 
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [todos, setTodos] = React.useState(initialValue);

  React.useEffect(() => {
    // console.log("Obtenemos Datos del useEffect")
    //-- simular api
    setTimeout(() => {
      try {
        //-- buscamos key en el localStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        //-- si no existe la key creamos una en el localStorage
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }
        else
          parsedItem = JSON.parse(localStorageItem);
        
        //-- seteamos los todo
        setTodos(parsedItem);
        //-- quitamos pantalla de carga
        setLoading(false);
      } catch(error) {
        //-- seteamos el error
        setError(error);
      }
    }, 1000);
    // silenciar
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  //-- funcion para guardar todos
  const saveTodo = (todos) => {
    try {
      const data = JSON.stringify(todos);
      localStorage.setItem(itemName, data);
      setTodos(todos);
    } catch(error) {
      //-- seteamos el error
      setError(error);
    }
  };

  return {
    todos,
    saveTodo,
    loading,
    error,
  };
}

export { useLocalStorage };