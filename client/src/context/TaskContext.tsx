import { createContext, useEffect, useState } from 'react';
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  updateTaskRequest,
} from '../api/task.api';
import { Task, CreateTask, UpdateTask } from '../interfaces/task.interface';
import { toast } from 'react-hot-toast';

interface TaskContextProps {
  tasks: Task[];
  createTask: (task: CreateTask) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  updateTask: (id: number, task: UpdateTask) => Promise<void>;
}

export const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  createTask: async () => {},
  deleteTask: async () => {},
  updateTask: async () => {},
});

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasksRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const createTask = async (task: CreateTask) => {
    try {
      const res = await createTaskRequest(task);
      const data = await res.json();
      setTasks([...tasks, data]);
      toast.success('Task created');
    } catch (error) {
      toast.error('Error creating task');
    }
  };

  const deleteTask = async (id: number) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 200) {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
        toast.success('Task deleted');
      }
    } catch (error) {
      toast.error('Error deleting task');
    }
  };

  const updateTask = async (id: number, task: UpdateTask) => {
    try {
      const response = await updateTaskRequest(id, task);
      const data = await response.json();
      setTasks(
        tasks.map((task) => (task.id === id ? { ...task, ...data } : task))
      );
      toast.success('Task updated');
    } catch (error) {
      toast.error('Error updating task');
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
