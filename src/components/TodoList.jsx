import React from 'react';

function TodoList(props) {
  return (
    <ul className='mt-4'>
      {props.items.map((item) => {
        return (
          <li
            key={item.id}
            className='border border-teal-600 py-2 px-2 mb-2 rounded-md'>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
