import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <h2>Lifting up State</h2>
        <section style={{border:'2px solid red', width: '100%', padding:'16px'}}>
          <Signup setUser={setUser}/>
        </section>
        <section style={{border:'2px solid yellow', width: '100%', padding:'16px'}}>
          <Login setUser={setUser}/>
        </section>
        <section  style={{border:'2px solid blue', width: '100%', padding:'16px'}}>
          <Dashboard user={user} setUser={setUser}/>
        </section>
      </header>
    </div>
  );
}

export default App;
