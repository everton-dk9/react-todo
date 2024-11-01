import './styles.css'

function DeleteTaskButton() {
  return (
    <a href="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="16"
        fill="none"
        viewBox="0 0 12 16"
      >
        <path
          fill="gray"
          d="M11.82 1.32V3H.18V1.32h2.89L3.93.5h4.14l.86.82zM1 13.82v-10h10v10q0 .665-.508 1.172-.507.508-1.172.508H2.68q-.665 0-1.172-.508Q1 14.485 1 13.82"
        ></path>
      </svg>
    </a>
  );
}

export default DeleteTaskButton;