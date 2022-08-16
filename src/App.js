import Tasks from './components/Task/Tasks';
import React, { useState } from 'react';
import InputForm from './components/Form/InputForm';
import NewTask from './components/Form/NewTask';

const STARTING_TASKS = [
  {
    taskName: 'Atsakyti i el. laiskus',
    dueDate: '2022-08-20',
    employee: 'antanas',
    id: 1,
  },
  { taskName: 'Atsakyti i el. laiskus', dueDate: '2022-08-20', id: 2 },
  { taskName: 'Atsakyti i el. laiskus', dueDate: '2022-08-20', id: 3 },
  { taskName: 'Atsakyti i el. laiskus', dueDate: '2022-08-20', id: 4 },
  { taskName: 'Atsakyti i el. laiskus', dueDate: '2022-08-20', id: 5 },
];

function App() {
  const [tasks, setTasks] = useState(STARTING_TASKS);
  // const [kintamasis, setKintamasis] = useState();
  // const [x, setX] = useState();

  const addTaskHandler = (userEnteredData) => {
    setTasks((prevTasks) => {
      const updateTask = [userEnteredData, ...prevTasks];
      console.log(updateTask);
      return updateTask;
    });
  };

  return (
    <div>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={tasks}></Tasks>
    </div>
  );
}

export default App;
