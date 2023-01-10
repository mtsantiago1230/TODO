import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


function App() {
  return (
    // provider contiene todos los props
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
