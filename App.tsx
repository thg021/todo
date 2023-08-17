import { StatusBar, View } from 'react-native';
import { Home } from './src/screens/Home';
import { TasksContextProvider } from './src/contexts/TaskContext';

export default function App() {
  return (
    <TasksContextProvider>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <Home />
    </TasksContextProvider>
  );
}

