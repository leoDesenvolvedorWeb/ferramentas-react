import './App.css';
import Welcome from './compoments/welcome'
import Reverse from './compoments/reverse'

function App() {
  return (
    <div className="App">
      <h1>Olá.</h1>
      <Welcome nome ="Leonardo" sobrenome="Ramos"/>
      <Welcome nome ="Leonardo" sobrenome="Santoz"/>
      <Welcome/>
      <Welcome/>
      <Reverse texto="ola"/>
    </div>
  );
}

export default App;
