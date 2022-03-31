import React, { useState } from "react";
import { v4 } from "uuid";
import { HiFlag } from "react-icons/hi";

import { AiOutlinePlus } from "react-icons/ai";

import { TasksActions } from "../../routes/Tasks/reducers/types.ts";
import { useToggle } from "../../utils/index.ts";

import "./styles.scss";
import "../../styles/_global.scss";

interface Props {
  name: string;
  colorClass: string;
  icon: "q1" | "q2" | "q3" | "q4";
  actions: TasksActions;
  stackId: string;
}

const icons = {
  q1: <HiFlag size={20} />,
  q2: <HiFlag size={20} />,
  q3: <HiFlag size={20} />,
  q4: <HiFlag size={20} />,
};

const Stack: React.FC<Props> = (props) => {
  const [showTaskForm, setShowTaskForm] = useToggle();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [formError, setFormError] = useState(false);

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (taskTitle.length === 0) return setFormError(true);

    props.actions.addItem(props.stackId, {
      id: v4(),
      title: taskTitle,
      description: taskDescription,
    });
    setTaskTitle("");
    setTaskDescription("");
  }

  return (
    <div className="stack-container">
      <div className={`task-header ${props.colorClass}`}>
        {icons[props.icon]}
        <h2>{props.name}</h2>
      </div>
      {/* <div style={{ backgroundColor: "red" }}>{props.children}</div> */}
      {props.children}

      <div className="actions-container">
        <form
          className={`actions-container__form${
            !showTaskForm ? "--hidden" : ""
          }`}
          onSubmit={(e) => handleAddTask(e)}
        >
          <input
            type="text"
            placeholder="Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          {formError && (
            <p className="error-message">Please fill the details</p>
          )}
          <textarea
            placeholder="Description"
            rows={3}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <button
            type={!showTaskForm ? "submit" : "button"}
            className="action-button"
            onClick={setShowTaskForm}
          >
            <AiOutlinePlus size={15} color={"white"} /> Add {"  "}
            {taskTitle ? taskTitle : "Action"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Stack;
