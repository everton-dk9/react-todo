import './styles.css'

type NewTaskButtonProps = {
  size?: number
};

function AddTaskIcon({ size = 20 }: NewTaskButtonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill="#fff"
        d="M13.18 9.82V8.18H9.82V4.82H8.18v3.36H4.82v1.64h3.36v3.36h1.64V9.82zM3.102 3.14Q5.562.68 9 .68t5.86 2.46Q17.32 5.563 17.32 9t-2.46 5.898Q12.437 17.32 9 17.32t-5.898-2.422Q.68 12.438.68 9t2.422-5.86"
      ></path>
    </svg>
  );
}

function NewTaskButton() {
  return (
    <button className="new-task-button">
      <AddTaskIcon />
      <span className="text">Nova Tarefa</span>
    </button>
  );
}

export default NewTaskButton;