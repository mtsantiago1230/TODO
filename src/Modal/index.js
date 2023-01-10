import ReactDOM from 'react-dom';
import './Modal.css';
import { TodoProviderModal } from '../TodoContext';


function Modal(props)
{
  //-- formulario de add todo
  //-- teletranportamos y renderizamos componentes de react a otro nodo distinto #modal
  //-- se le pueden enviar propiedades, notificar cambios de estados ida y vuelta
  return ReactDOM.createPortal(
    <TodoProviderModal>
      <div className="ModalBackground">
        {props.children} {/* <TodoForm/> */}
      </div>
    </TodoProviderModal>
    ,
    document.getElementById('modal')
  );
}

export { Modal };