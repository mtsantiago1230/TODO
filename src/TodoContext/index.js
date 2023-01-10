import React from 'react';
import { useLocalStorage } from './useLocalStorage';

/*
  En este archivo se crean funciones y variables que van a estar de manera global
*/

const TodoContext = React.createContext();
const TodoContextModal = React.createContext();

function TodoProvider(props)
{
  //-- que siginifica "todos"
  //-- creamos hook custom
  const {
    todos, //-- lista de todos
    saveTodo, //-- guardamos todos
    loading, //-- pantalla de carga
    error, //-- pantalla de error
  } = useLocalStorage('TODOS_V1', []);


  //-- estados de barra de busqueda y open/close modal
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  //-- obtenemos - todas las tareas y las que estan completadas
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  //-- verificamos si hay todos
  if (searchValue.length >= 1)
  {
    //-- verficamos que algun todo coincida con lo escrito en la barra de busqueda
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase().trim();
      return todoText.includes(searchText);
    });
  }
  else //-- devolvemos todos los todos
    searchedTodos = todos;

  //-- funcion para añadir un nuevo todo
  const addTodo = (text) => {
    //-- creamos nuevo array para que detecte en el setStatey y pueda renderizar
    const newTodos = [...todos];
    //-- creamos el array del nuevo todo
    newTodos.push({
      completed: false,
      text,
    });
    saveTodo(newTodos); //-- funcion en useLocalStorage
  };

  //-- funcion para completar un todo
  const completeTodo = (text) => {
    //-- buscamos coincidencia
    const todoIndex = todos.findIndex(todo => todo.text === text);
    //-- creamos nuevo array para que detecte en el setStatey y pueda renderizar
    const newTodos = [...todos];
    //-- dejamos como completado
    newTodos[todoIndex].completed = true;
    saveTodo(newTodos); //-- funcion en useLocalStorage
  };

  //-- funcion para eliminar todo
  const deleteTodo = (text) => {
    //-- buscamos coincidencia
    const todoIndex = todos.findIndex(todo => todo.text === text);
    //-- creamos nuevo array para que detecte en el setStatey y pueda renderizar
    const newTodos = [...todos];
    //-- eliminamos posicion
    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos); //-- funcion en useLocalStorage
  };
  
  //-- retornamos funciones y variables globales
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    }}>
      {props.children} {/* <AppUI/> */}
    </TodoContext.Provider>
  );
}

function TodoProviderModal(props)
{
  return (
    <TodoContextModal.Provider value={
        {valueModal: "Hey santiago"}
      }>
        {props.children}
    </TodoContextModal.Provider>
  );
}

export { TodoContext, TodoProvider, TodoProviderModal, TodoContextModal };