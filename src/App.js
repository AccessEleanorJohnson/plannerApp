import AddItemButton from './components/AddItem/AddItemButton';
import List from './components/List';

const tasks = [
  {
    key: 0,
    title: 'Title',
    priority: 'high',
    description: 'Some description text',
    deadline: 'deadline'
  },
  {
    key: 1,
    title: 'Title',
    priority: 'low',
    description: 'Some description text',
    deadline: ''
  },
];

function App() {
  return (
    <>
      <header className='mb-2 p-2 flex justify-around text-orange-900'>
        <h1 className='p-2 text-xl font-bold'>Planner</h1>
        <AddItemButton />
      </header>
      <div className="App">
        <List tasks={tasks} />
      </div>
    </>
  );
}

export default App;
