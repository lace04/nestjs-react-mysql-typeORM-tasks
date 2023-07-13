import { CreateTask, UpdateTask } from '../interfaces/task.interface';

const API = 'http://localhost:3000/api';

export const createTaskRequest = async (task: CreateTask) =>
  fetch(`${API}/tasks`, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const getTasksRequest = async () => fetch(`${API}/tasks`);

export const deleteTaskRequest = async (id: number) => {
  return fetch(`${API}/tasks/${id}`, {
    method: 'DELETE',
  });
};

export const updateTaskRequest = async (id: number, task: UpdateTask) =>
  fetch(`${API}/tasks/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json',
    },
  });
