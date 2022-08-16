import React, { useState } from 'react';

const InputForm = (props) => {
  const [userTask, setUserTask] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userEmployee, setUserEmployee] = useState('');

  const formChanged = (event) => {
    // nepersikrauna puslapis ir leidzia pamatyti, kas buna console log
    event.preventDefault();
    const taskData = {
      taskName: userTask,
      dueDate: userDate,
      employee: userEmployee,
    };
    props.onDataSaved(taskData);
  };

  const userTaskHandler = (event) => {
    // console.log(event.target.value);
    setUserTask(event.target.value);
  };
  const userDateHandler = (event) => {
    setUserDate(event.target.value);
  };
  const userEmployeeHandler = (event) => {
    setUserEmployee(event.target.value);
  };

  return (
    <div>
      <form onSubmit={formChanged}>
        <div>
          <label htmlFor="">Iveskite uzduoti</label>
          <input type="text" onChange={userTaskHandler} />
        </div>
        <div>
          <label htmlFor="">Iveskite atlikimo data</label>
          <input type="text" onChange={userDateHandler} />
        </div>
        <div>
          <label htmlFor="">Iveskite savo varda</label>
          <input type="text" onChange={userEmployeeHandler} />
        </div>
        <button type="submit">Sukurti uzduoti</button>
      </form>
    </div>
  );
};

export default InputForm;
