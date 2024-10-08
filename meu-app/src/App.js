import './App.css';
import Welcome from './components/Welcome/Welcome';
import Reverse from './components/Reverse/Reverse';
import Todolist from './components/TodoList/Todolist';
import Menssagen from './components/Menssagen/Menssagen';

function App() {
  return (
    <div className="App">
      <Welcome nome="Leonardo" sobrenome="Ramos" />
      <Menssagen/>
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
