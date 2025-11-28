
import TodoItem from "./TodoItem";


function TodoList({todos}) {
  return (
    <div className="space-y-3">
      {todos.map((todo, index) => (
        <div key={todo.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  )
}

export default TodoList