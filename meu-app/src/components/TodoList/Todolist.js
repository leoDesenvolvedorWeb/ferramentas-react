import TodoItem from '../TodoItem/TodosItem';
import './TodoList.css'


const TodoList = () => {
    return (
        <section className="todolist">
            <h2 className="todo-title">Minha Lista de Tarefas</h2>
            <ol className="todos">
                <TodoItem tarefa="ir ao mercado"/>
                <TodoItem tarefa="Ler um livro"/>
                <TodoItem tarefa="Meditar por 30min"/>
            </ol>
        </section>
    )
}

export default TodoList;