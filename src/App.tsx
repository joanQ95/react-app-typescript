import { useState } from 'react';
import './App.css';

function App() {
  const [subs, setSubs] = useState([
    {
      nick: 'dapelu',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=dapelu',
      description: 'Dapelu'
    },
    {
      nick: 'sergio',
      subMonths: 5,
    }
  ])
  return (
    <div className="App">
      <h1>midu subs</h1>
      <ul>
        {
          subs.map(e=>{
            return (
              <li key={e.nick}>
                <img src={e.avatar} alt={`Avatar for ${e.nick}`}/>
                <h4>{e.nick} (<small>{e.subMonths}</small>)</h4>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
