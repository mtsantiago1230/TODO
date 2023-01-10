// import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props)
{
  //-- funcion btn
  const onClickButton = () => {
    //-- abrimos modal
    props.setOpenModal(true);
  };
  
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };