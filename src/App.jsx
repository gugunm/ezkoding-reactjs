import './App.css';
import { useState } from 'react';
import data from './data.json';

function App() {
  const [newTask, setNewTask] = useState('');
  const [listTask, setListTask] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();

    // alert(newTask);
    setListTask([
      ...listTask,
      { id: listTask.length + 1, task: newTask, complete: false },
    ]);

    // update data.json

    setNewTask('');
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className='max-w-xl mx-auto'>
      <h1 className='text-3xl text-violet-600 mb-4 mt-6'>Todo List App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='border border-teal-500 px-2 py-2 rounded-md'
          value={newTask}
          onChange={handleChange}
        />

        <button
          type='submit'
          className='bg-teal-600 px-2 py-2 text-white rounded-md ml-2'>
          Add Task
        </button>

        <ul className='mt-4'>
          {listTask.map((item) => {
            return (
              <li
                key={item.id}
                className='border border-teal-600 py-2 px-2 mb-2 rounded-md'>
                {item.task}
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
