import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


function App() {
  return (
    // provider contiene todos los props - englobamos en toda la app
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
