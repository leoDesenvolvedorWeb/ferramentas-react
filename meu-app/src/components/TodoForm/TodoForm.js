import { useState } from "react";


//componente filho
const TodoForm = ({onAdd}) => {
    const [tarefaText, setTarefaText] = useState('');

    //Função handleChange que escuta todas as mudanças do nosso formulário de acordo com as mudanças ela atualiza de acordo conforme a gente vai digitando .
    const handleChange = (event) => {
        setTarefaText(event.target.value);
    }

    //Função handleSubmit que pega o que o usuário digitou e manda lá para o arrei onde estão as nossas tarefas .
    const handleSubmit = (event) => {
        event.preventDefault();
        // setTarefas([...tarefas, tarefaText]);
        onAdd(tarefaText);
        setTarefaText('')
    }

    return (
        <form className="todo-register" onSubmit={handleSubmit}>
            <label htmlFor="tarefa">Tarefa:</label>
            <input type="text" 
            id="tarefa" 
            placeholder="Digite a sua tarefa"
            value={tarefaText}
            onChange={handleChange}
        />
        <button type="submit">Enviar</button>
        </form>
    )
}

export default TodoForm