import React, { FC } from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void; 
}

const TodoTask: FC<Props> = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={() => deleteTask(task.taskName)}>X</button>
    </div>
  );
};

export default TodoTask;
