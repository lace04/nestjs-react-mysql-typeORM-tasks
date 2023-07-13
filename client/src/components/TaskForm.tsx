import { ChangeEvent, FormEvent, useState } from 'react';
import { useTask } from '../context/useTask';

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    done: false,
  });

  const { createTask } = useTask();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setTask({
      title: '',
      description: '',
      done: false,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='bg-zinc-800 rounded-md p-4'>
        <label className='text-white font-bold text-xl mb-2 block w-full'>
          Title
        </label>
        <input
          type='text'
          name='title'
          placeholder='Write a title'
          className='text-white bg-zinc-700 py-2 px-3 rounded-md w-full'
          onChange={handleChange}
          value={task.title}
        />
        <label className='text-white font-bold text-xl mb-2 mt-4 block'>
          Description
        </label>
        <textarea
          name='description'
          rows={3}
          placeholder='Write Description'
          className='text-white bg-zinc-700 py-2 px-3 rounded-md w-full'
          onChange={handleChange}
          value={task.description}
        />

        <label htmlFor='' className='inline-flex items-center gap-x-2'>
          <input
            type='checkbox'
            className='h-4 w-4 text-indigo-500'
            onChange={(e) => setTask({ ...task, done: !task.done })}
          />
          <span>Done</span>
        </label>

        <button
          type='submit'
          disabled={!task.title || !task.description}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-full mt-4 ${
            !task.title || !task.description ? 'cursor-not-allowed' : ''
          }`}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
