import './App.css';
import Welcome from './compoments/Welcome/Welcome';
import Reverse from './compoments/Reverse/Reverse';

function App() {
  return (
    <div className="App">
      <Welcome nome ="Leonardo" sobrenome="Ramos"/>
      <div className="reverse">
        <p>Os textos a baixo são criados pelo componente Reverse:</p>
        <Reverse>
          meu texto
        </Reverse>
        <Reverse>
          o meu texto que deve ser investido
        </Reverse>
      </div>
      
    </div>
  );
}

export default App;
