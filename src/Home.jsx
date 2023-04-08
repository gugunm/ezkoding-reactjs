import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

function Home() {
  const [newTask, setNewTask] = useState('');
  const [listTask, setListTask] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // alert(newTask);
    setListTask([
      { id: listTask.length + 1, title: newTask, complete: false },
      ...listTask,
    ]);

    // update data.json
    setNewTask('');
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListTask(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='border border-teal-500 px-2 py-2 rounded-md'
          value={newTask}
          onChange={handleChange}
        />

        <button
          type='submit'
          className='bg-teal-600 px-4 py-2 text-white rounded-md ml-2'>
          Add Task
        </button>

        <TodoList items={listTask} />
      </form>
    </>
  );
}

export default Home;
