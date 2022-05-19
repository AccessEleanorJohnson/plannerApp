import { useState } from 'react';

import AddItemButton from './components/AddItem/AddItemButton';
import List from './components/List';

const tasks = [
  {
    key: '0',
    title: 'Title',
    priority: 'high',
    description: 'Some description text',
    deadline: 'deadline'
  },
  {
    key: '1',
    title: 'Title',
    priority: 'low',
    description: 'Some description text',
    deadline: ''
  },
];


function App() {

  const [tasksArray, setTasksArray] = useState(tasks);

  const addItemHandler = item => {
    const readyItem = {...item, key: tasksArray.length};
    console.log(readyItem);
    setTasksArray(prevTasksArray => {
      return[readyItem, ...tasksArray];
    });
  };

  const removeItemHandler = key => {
    setTasksArray(tasksArray.filter(item => item.key !== key));
  }

  return (
    <>
      <header className='mb-2 p-2 flex justify-around text-orange-900'>
        <h1 className='p-2 text-xl font-bold'>Planner</h1>
        <AddItemButton onAddItem={addItemHandler} />
      </header>
      <div className="App">
        <List items={tasksArray} onRemoveItem={removeItemHandler} />
      </div>
    </>
  );
}

export default App;
