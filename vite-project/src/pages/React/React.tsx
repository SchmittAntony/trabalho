import React, { useState } from 'react';
import './React.css';

const ReactPage: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <section id="React" className="main-react">
      <h2 className="title_react">React</h2>
      <div className="todo-list">
        <h3>To-Do List</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Adicione uma Tarefa"
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
      </div>
    </section>
  );
};

export default ReactPage;
