import { useEffect, useState } from "react";
import axios from "axios";

function TodosFetchAxios() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // optional error state

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        setTodos(response.data);
      } catch (err) {
        console.error("Error fetching todos:", err);
        setError("Failed to fetch todos");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);
 if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Todos Fetch (Axios)</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <input type="checkbox" checked={todo.completed} readOnly />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosFetchAxios;
