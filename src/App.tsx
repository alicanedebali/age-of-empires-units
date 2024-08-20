import './App.scss';
import { Container } from './container';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
