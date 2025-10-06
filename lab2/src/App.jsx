import { useState } from "react";
import { addTask, deleteTask, changeStatus, filterTasks } from "./taskFunctions.js";
import './Style.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [newText, setNewText] = useState("");

  const handleAdd = () => {
    if (newText.trim() !== "") {
      setTasks(addTask(newText, tasks))
      setNewText("")
    }
  }

  const handleDelete = (id) => {
    setTasks(deleteTask(id, tasks))
  }

  const handleChange = (id) => {
    setTasks(changeStatus(id, tasks))
  }

  const handleFilter = (newFilter) => {
    setFilter(newFilter)
  }
  
  const visibleTasks = filterTasks(filter, tasks)

  return (
  <div className="container mt-5 mb-5">
    <div className="row mb-3">
      <div className="col">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Новая задача"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      </div>
      <div className="col">
        <button className="btn btn-primary" onClick={handleAdd}>
          Добавить
        </button>
      </div>
    </div>

    <div className="form-check form-check-inline mt-2 ms-1">
      <input 
        class="form-check-input" 
        type="radio" 
        name="filterOptions" 
        id="filterAll" 
        value="all" 
        checked={filter === "all"} 
        onClick={() => handleFilter("all")}
      />
      <label className="form-check-label" htmlFor="filterAll">Все</label>
    </div>
    <div className="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="radio" 
        name="filterOptions" 
        id="filterActive" 
        value="active"
        checked={filter === "active"} 
        onClick={() => handleFilter("active")}
      />
      <label className="form-check-label" htmlFor="filterActive">Активные</label>
    </div>
    <div className="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="radio"
        name="filterOptions" 
        id="filterCompleted" 
        value="completed"
        checked={filter === "completed"} 
        onClick={() => handleFilter("completed")}
      />
      <label className="form-check-label" htmlFor="filterCompleted">Выполненные</label>
    </div>

    <ul className="list-group mt-3">
      {visibleTasks.map(task => (
        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={task.completed}
              onChange={() => handleChange(task.id)}
            />
            <label
              className="form-check-label ms-2"
              style={{ color: task.completed ? "gray" : "black", }}
            >
              {task.text}
            </label>
          </div>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default App
