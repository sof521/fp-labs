import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { addTask, deleteTask, changeStatus, filterTasks } from "./taskFunctions.js";
import { TaskCard } from "./TaskCard";
import './sidebar.css';
import './formcontrol.css';

import SvgAll from './assets/all.svg';
import SvgActive from './assets/active.svg';
import SvgCompleted from './assets/completed.svg';


function App() {
  const [filter, setFilter] = useState("all");
  const [newText, setNewText] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
  <div>
    <Row style={{ margin: 0 }}>
      <Col sm={2} className="bg-white"
        style={{
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
        }}
      >
        <div className="container" style={{ marginTop: "40px" }}>
          <p className="text">Task list</p>
        </div>

        <div className="nav flex-column nav-pills w-100" id="v-pills-tab"
          style={{ marginTop: '54px' }}>
          <button className={`nav-link ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilter("all")}
          >
            <img src={SvgAll} alt="Все" className="icon me-3" /> Все
          </button>
          <button className={`nav-link ${filter === "active" ? "active" : ""}`}
            onClick={() => handleFilter("active")}
          >
            <img src={SvgActive} alt="Активные" className="icon me-3" /> Активные
          </button>
          <button className={`nav-link ${filter === "completed" ? "active" : ""}`}
            onClick={() => handleFilter("completed")}
          >
            <img src={SvgCompleted} alt="Выполненные" className="icon me-3" /> Выполненные
          </button>
        </div>

        <img
          src="src/assets/cats.gif"
          alt="Cat"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            transform: "scaleX(-1)",
          }}
        />
      </Col>
      <Col sm={10} className="bg-light" style={{ minHeight: "100vh", marginLeft: '16.6667%' }}>
        <div className="container py-5 px-5">
          <div className="row">
            <div className="col">
              <input 
                type="text" 
                className="form-control shadow-sm" 
                placeholder="Новая задача"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            </div>
            <div className="col">
              <button className="btn btn-primary shadow-sm" onClick={handleAdd}>
                Добавить
              </button>
            </div>
          </div>

          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active">
              <TaskCard 
                visibleTasks={visibleTasks}
                handleChange={handleChange}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
  )
}

export default App
