import './TodoList.css'


const TodoList = () => {
    return (
        <section className="todolist">
            <h2 className="todo-title">Minha Lista de Tarefas</h2>
            <ol className="todos">
                <li className="todo-item">
                    <input type="checkbox"/>
                    Ir ao mercado</li>
                <li className ="todo-item">
                    <input type="checkbox"/>
                    Estudar 30 min de javascript</li>
                <li className ="todo-item">
                    <input type="checkbox"/>
                    Meditar 30min</li>
            </ol>
        </section>
    )
}

export default TodoList;