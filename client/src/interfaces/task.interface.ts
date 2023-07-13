export interface Task {
  id: number;
  title: string;
  description: string;
  done?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateTask = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateTask = Partial<CreateTask>;
