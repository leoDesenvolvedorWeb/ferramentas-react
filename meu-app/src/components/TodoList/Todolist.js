import TodoItem from '../TodoItem/TodosItem';
import './TodoList.css'


const TodoList = () => {
    const tarefa =['Ir ao mercado', 'estudar javascript', 'estudar react', 'lavar a louça']
    return (
        <section className="todolist">
            <h2 className="todo-title">Minha Lista de Tarefas</h2>
            <ol className="todos">
                {tarefa.map((tarefa, index) => (
                    <TodoItem tarefa={tarefa} key={index}/>
                ))}
            </ol>
        </section>
    )
}

export default TodoList;