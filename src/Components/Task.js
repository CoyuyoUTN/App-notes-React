const Task = ({ title, description, id, active, handleClick }) => {
  return (
    <div className="cards">
      <div className="card card-4">
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
            <i className="fas fa-times">X</i>
          </button>
        </p>

        <h2 className="card__title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Task;
