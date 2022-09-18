import { FaTrashAlt } from "react-icons/fa";
import { FcOk } from "react-icons/fc";

const Task = ({
  title,
  description,
  id,
  active,
  handleClick,
  completed,
  completedTask,
}) => {
  return (
    <div className="cards animate__animated animate__fadeInDownBig">
      <div
        className={
          completed
            ? "card card-4"
            : "card card-completed animate__animated animate__heartBeat"
        }
      >
        <div className="card__icon">
          <i className="fas fa-bolt">Task {id}</i>
        </div>

        <p className="card__exit">
          <button
            type="button"
            onClick={() => {
              handleClick(id);
            }}
          >
            <i className="fas fa-times">
              <FaTrashAlt />
            </i>
          </button>
        </p>

        <h2 className="card__title">{title}</h2>
        <p className="card-description">{description}</p>
        <div onClick={() => completedTask(id)} className="completed-button">
          <FcOk />
        </div>
      </div>
    </div>
  );
};

export default Task;
