import { useDispatch } from "react-redux"
import { updateTodo, deleteTodo } from "../features/todos/todosSlice"

function TodoItem ({todo}) {
     const dispatch = useDispatch()

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  }

  return(
    <div className="group flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in-out hover:border-gray-300">
      {/* Custom Checkbox */}
      <div className="relative flex items-center mr-4">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={toggleComplete}
          className="sr-only"
        />
        <div 
          onClick={toggleComplete}
          className={`cursor-pointer w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
            todo.completed 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-gray-300 hover:border-blue-400 bg-white'
          }`}
        >
          {todo.completed && (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>

      {/* Todo Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-3">
          {/* User Avatar */}
          <div className="flex-shrink-0">
            <div className="h-8 w-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold text-white">
                {todo.id}
              </span>
            </div>
          </div>
          
          {/* Todo Details */}
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium transition-all duration-200 ${
              todo.completed 
                ? 'text-gray-500 line-through' 
                : 'text-gray-900'
            }`}>
              {todo.title || 'Unknown Title'}
            </p>
            
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={toggleComplete}
          className={`p-2 rounded-lg transition-all duration-200 ${
            todo.completed
              ? 'text-green-600 hover:bg-green-50'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
          title={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
        
        <button
          onClick={handleDelete}
          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
          title="Delete task"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  )
}
export default TodoItem