import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';

import PokebollBg from './img/pokeboll-bg.png';

function App() {
  return (
    <div className="App" style={{
      background: `url(${PokebollBg})`,
    }}>
      <NavBar/>
      <div className="container">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
