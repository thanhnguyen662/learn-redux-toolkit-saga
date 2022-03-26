import './App.css';
import TodoPage from './features/Todo/pages/TodoPage';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
   return (
      <ChakraProvider>
         <TodoPage />
      </ChakraProvider>
   );
}

export default App;
