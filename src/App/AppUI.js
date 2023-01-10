import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function AppUI()
{
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext); //-- datos obtenidos del provider

  return (
    <>
      {/* contador de todos */}
      <TodoCounter />

      {/* barra de busqueda de todos */}
      <TodoSearch />

      {/* lista de todos */}
      <TodoList>
        {/* en caso de error al traer datos */}
        {error && <p>Lo siento, hay un error...</p>}
        {/* cuando este trayendo datos */}
        {loading && <><Skeleton count={10} /><p>Estamos cargando...</p><Skeleton count={10} /></>}
        {/* cuando no existan todos */}
        {(!loading && !searchedTodos.length) && <p>¡Crea el primer TODO!</p>}
        {/* for con todos */}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {/* modal de crear todos */}
      {openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}

      {/* btn de crear todos */}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export { AppUI };
