import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo(todoText);
      setTodoText(""); // נקה את השדה אחרי ההוספה
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="הכנס משימה חדשה"
      />
      <button type="submit">הוסף משימה</button>
    </form>
  );
};

export default TodoForm;
