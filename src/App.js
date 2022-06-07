import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const url = `https://randomuser.me/api/?results=10`;
      const { data } = await axios.get(url);
      console.log(data);
      setUsers(data?.results);
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {users?.length}
        </a>
      </header>
    </div>
  );
}

export default App;
