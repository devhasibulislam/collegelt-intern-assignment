import { Route, Routes } from 'react-router-dom';
import Root from './routes/Root';
import User from './routes/User';
import './App.css'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={<Root />}
        />
        <Route
          path='/:id'
          element={<User />}
        />
      </Routes>
    </div>
  );
}

export default App;
