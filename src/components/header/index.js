import React from 'react';
import './styles.css';

const Header = ({ list = [] }) => {
  console.log({ list });
  const more = list.filter(e => !e.done).length;
  const done = list.filter(e => e.done).length;

  const moreTodo = more === 0 ? '' : `${more} more to do`;
  const doneTodo = done === 0 ? '' : `${done} done`;
  const comma = doneTodo && moreTodo ? ', ' : '';

  return (
    <div className="app-header" >
      <h1>todo app</h1>
      <h2> {`${moreTodo}${comma}${doneTodo}`} </h2>
    </div>
  );
};

export default Header;
