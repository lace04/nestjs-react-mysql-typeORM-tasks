import { useTask } from '../context/useTask';
import { Task } from '../interfaces/task.interface';
import { IoCheckmarkDone, IoTrash } from 'react-icons/io5';

interface TaskCardProps {
  task: Task;
}
function TaskCard({ task }: TaskCardProps) {
  const { deleteTask, updateTask } = useTask();
  return (
    <div className='bg-zinc-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer rounded-md'>
      <div className=''>
        <div className=''>{task.title}</div>
        <div className=''>{task.description}</div>
      </div>
      <div className='flex gap-x-2'>
        <button onClick={() => updateTask(task.id, { done: !task.done })}>
          {task.done ? (
            <IoCheckmarkDone className='hover:text-green-500' />
          ) : (
            <IoCheckmarkDone className='text-gray-500' />
          )}
        </button>

        <button
          onClick={() => {
            if (!window.confirm('Are you sure you want to delete it?')) return;
            deleteTask(task.id);
          }}
        >
          <IoTrash className='hover:text-red-500' />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
