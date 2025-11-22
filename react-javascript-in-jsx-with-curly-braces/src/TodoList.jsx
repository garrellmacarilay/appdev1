export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <>
        <h1>{name}'s To Do List</h1>
        <ul style={{
            backgroundColor: 'black',
            color: 'pink'
        }}>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>

    </>
    
  );
}
