import { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (newText.trim()) {
      editTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>שמירה</button>
          <button onClick={() => setIsEditing(false)}>ביטול</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <button onClick={() => toggleComplete(todo.id)}>
            {todo.completed ? "לא הושלם" : "בוצע"}
          </button>
          <button onClick={() => setIsEditing(true)}>עריכה</button>
          <button onClick={() => deleteTodo(todo.id)}>מחק</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
