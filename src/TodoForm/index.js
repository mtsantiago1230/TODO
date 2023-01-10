import React from 'react';
import { TodoContext,TodoContextModal } from '../TodoContext';
import './TodoForm.css';

function TodoForm()
{
  //-- creamos un estado para el nuevo todo
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal,
    totalTodos
  } = React.useContext(TodoContext); //-- datos obtenidos del provider

  const {
    valueModal,
  } = React.useContext(TodoContextModal); //-- datos obtenidos del provider
  
  //-- funcion para actualizar el estado de nuevo todo
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  
  //-- funcion para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };
  
  //-- funcion para agregar nuevo todo
  const onSubmit = (event) => {
    event.preventDefault();
    //-- agregamos nuevo TODO
    addTodo(newTodoValue);
    //-- cerramos modal
    onCancel();
    //-- seteamos en blanco el input
    setNewTodoValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label>#{totalTodos+1}. {valueModal} - Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };