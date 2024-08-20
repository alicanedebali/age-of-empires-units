import './App.scss';
import { Main } from './container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
