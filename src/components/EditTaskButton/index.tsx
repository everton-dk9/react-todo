import './styles.css'

function EditTaskButton() {
  return (
    <a href="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          fill="gray"
          d="m15.266 3.86-1.524 1.523-3.125-3.125L12.141.734A.8.8 0 0 1 12.727.5q.352 0 .585.234l1.954 1.954a.8.8 0 0 1 .234.585q0 .352-.234.586M.5 12.374l9.219-9.219 3.125 3.125L3.625 15.5H.5z"
        ></path>
      </svg>
    </a>
  );
}

export default EditTaskButton;