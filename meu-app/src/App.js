import './App.css';
import Welcome from './compoments/Welcome/Welcome';
import Reverse from './compoments/reverse';

function App() {
  return (
    <div className="App">
      <Welcome nome ="Leonardo" sobrenome="Ramos"/>
      {/* <Reverse texto="ola"/> */}
    </div>
  );
}

export default App;
