import React from 'react';
import './App.css';
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

const App = () => {
  function handleClick(){
    alert("Button Click");
  }

  const handleClickTwo = () => {
    alert("Button Two Click");
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <div>
      <h2>React Core Concepts Two</h2>
      <button onClick={handleClick}>Click Me</button>
      <br /> <br />
      <button onClick={handleClickTwo}>Click Me</button>
      <br /> <br />
      <button onClick={ () => alert('Button Three Click')}>Click Me</button>
      <br /> <br />
      <button onClick={() => addToFive(10)}>Click Me</button>
      <br /> <br />
      <Counter />
      <Team />
      <Users />
      <Friends />
    </div>
  );
};

export default App;