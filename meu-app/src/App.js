import './App.css';
import Welcome from './compoments/Welcome/Welcome';
import Reverse from './compoments/Reverse/Reverse';

function App() {
  return (
    <div className="App">
      <Welcome nome="Leonardo" sobrenome="Ramos" />
      <div className="reverse">
        <p>Os textos abaixo são criados pelo componente Reverse:</p>
        <Reverse texto="meu texto" />
        <Reverse texto="o meu texto que deve ser investido" />
      </div>
    </div>
  );
}

export default App;
