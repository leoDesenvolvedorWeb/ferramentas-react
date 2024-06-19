import './App.css';
import Welcome from './compoments/Welcome/Welcome';
import Reverse from './compoments/Reverse/Reverse';
import Todolist from './compoments/TodoList/Todolist';

function App() {
  return (
    <div className="App">
      <Welcome nome="Leonardo" sobrenome="Ramos" />
      <div className="reverse">
        <p className="app-text">Os textos abaixo são criados pelo componente Reverse:</p>
        <Reverse texto="meu texto" />
        <Reverse texto="o meu texto que deve ser investido" />
      </div>
      <Todolist/>
    </div>
  );
}

export default App;
