import { DropResult } from "react-beautiful-dnd";

enum TaskDispatchTypes {
  ADD_TASK,
  MOVE_TASK,
  REMOVE_TASK
}

export interface TaskState {
  id: string;
  title: string;
  description: string;
}

export interface StackState {
  [x: string]: {
    name: string;
    colorClass: string;
    icon: 'q1' | 'q2' | 'q3' | 'q4';
    tasks: TaskState[];
  };
}

export interface TasksActions {
  addItem: (stackId: string, task: TaskState) => void;
  moveItem: (result: DropResult) => void;
  removeItem: (stackId: string, task: TaskState) => void;
}

export default TaskDispatchTypes;