import React from 'react';

const TaskItem = (props) => {
  return (
    <div>
      <h2>{props.uzduotis}</h2>
      <p>{props.data}</p>
      <p>{props.darbuotojas}</p>
    </div>
  );
};

export default TaskItem;
