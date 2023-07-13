import TaskCard from './TaskCard';
import { useTask } from '../context/useTask';

function TaskList() {
  const { tasks } = useTask();

  function renderMain() {
    if (tasks.length === 0) {
      return (
        <div className='m-auto flex flex-col justify-center items-center mt-20'>
          <h1 className='text-4xl font-bold'>
            Empty | <b className='text-xl font-semibold'>Not Tasks</b>
          </h1>
        </div>
      );
    }

    return (
      <div className=''>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    );
  }

  return (
    <div className='container m-auto'>
      <h1 className='text-3xl font-bold text-center text-white mt-5 mb-5'>
        Task List
      </h1>
      {renderMain()}
    </div>
  );
}

export default TaskList;
