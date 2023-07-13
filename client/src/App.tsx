import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ToasterProvider } from './providers/toast-provider';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <>
      <ToasterProvider />
      <div className='container m-auto p-4 w-2/5'>
        <h1 className='text-3xl font-bold text-center text-white mt-5 mb-5'>
          Task App <p className='text-sm self-end'>with Nestjs</p>
        </h1>
        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </div>
    </>
  );
}

export default App;
